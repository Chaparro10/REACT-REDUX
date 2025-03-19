import { createContext, useState } from "react";



export const ContadorContext = createContext();

export const ContadorProvider = ({ children }) => {
    const [contador, setContador] = useState(0);

    return (
        <ContadorContext.Provider value={{ contador, setContador }}>
            {children}
        </ContadorContext.Provider>
    );
};