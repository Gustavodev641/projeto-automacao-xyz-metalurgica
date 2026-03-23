from fastapi import FastAPI, HTTPException
import pymysql
from pydantic import BaseModel
import os
from typing import List, Optional
from dotenv import load_dotenv
import uvicorn


load_dotenv()

app = FastAPI()

# Dados do banco na Ec2
DB_CONFIG = {
    "host": "localhost",
    "user": os.getenv("DB_USER"),
    "password": os.getenv("DB_PASS"), 
    "database": os.getenv("DB_NAME")
}

class ResultadoIA(BaseModel):
    status_ia: str
    mensagem: str

# Rota Mobile
@app.get("/status-maquina")
def get_status_mobile():
    connection = pymysql.connect(**DB_CONFIG)
    try:
        with connection.cursor(pymysql.cursors.DictCursor) as cursor:
            sql = """
                SELECT t.valor, t.timestamp, a.classificacao, a.mensagem
                FROM telemetria_temperatura t
                LEFT JOIN alertas_ia a ON 1=1
                ORDER BY t.id DESC, a.id DESC LIMIT 1
            """
            cursor.execute(sql)
            data = cursor.fetchone()
            return data if data else {"ERRO": "Sem dados disponíveis"}
    finally:
        connection.close()

# Rota IA
@app.get("/dados-brutos")
def get_dados_ia(limite: int = 50):
    connection = pymysql.connect(**DB_CONFIG)
    try:
        # CORREÇÃO AQUI: Estava 'pymusql' com 'u', o correto é 'pymysql'
        with connection.cursor(pymysql.cursors.DictCursor) as cursor:
            cursor.execute("SELECT valor, timestamp FROM telemetria_temperatura ORDER BY id DESC LIMIT %s", (limite,))
            return cursor.fetchall()
    finally:
        connection.close()

# Rota para receber da IA
@app.post("/atualizar-ia")
def post_resultado_ia(resultado: ResultadoIA):
    connection = pymysql.connect(**DB_CONFIG)
    try:
        with connection.cursor() as cursor:
            sql = "INSERT INTO alertas_ia (classificacao, mensagem) VALUES (%s, %s)"
            cursor.execute(sql, (resultado.status_ia, resultado.mensagem))
            connection.commit()
            return {"status": "sucesso", "mensagem": "Veredito da IA guardado"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        connection.close()

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)