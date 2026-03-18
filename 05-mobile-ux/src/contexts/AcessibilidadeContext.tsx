import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AcessibilidadeContext = createContext();

export const AcessibilidadeProvider = ({ children }) => {
    const [ settings, setSettings ] = useState({
        narracao: false,
        fonteGrande: false,
        altoContraste: false
    });

    useEffect(() => {
        const carregarConfigs = async () => {
            const salvo = await AsyncStorage.getItem("acessibilidade");
            if (salvo) setSettings(JSON.parse(salvo));
        }
        carregarConfigs();
    }, [])

    // rodar o código sempre q o user mudar alguma config
    useEffect(() => {
        AsyncStorage.setItem("acessibilidade", JSON.stringify(settings));
    }, [settings])

    return (
        <AcessibilidadeContext.Provider value={{ settings, setSettings }}>
            {children}
        </AcessibilidadeContext.Provider>
    )
}