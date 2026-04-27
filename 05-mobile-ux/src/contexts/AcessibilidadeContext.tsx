import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

// configurações de tipagem pq o typescript é boiola
type AcessibilidadeSettings = {
    fonteGrande: boolean;
    altoContraste: boolean;
};
type AcessibilidadeContextType = {
    settings: AcessibilidadeSettings;
    setSettings: React.Dispatch<React.SetStateAction<AcessibilidadeSettings>>;
};
export const AcessibilidadeContext = createContext<AcessibilidadeContextType>(
    {} as AcessibilidadeContextType
);
type Props = {
    children: React.ReactNode;
};

export const AcessibilidadeProvider = ({ children }: Props) => {
    const [ settings, setSettings ] = useState<AcessibilidadeSettings>({
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