import { createContext, useState } from "react";

export const DescricaoModalContext = createContext()
DescricaoModalContext.displayName = "Descrição"

export const DescricaoModalProvider = ({children}) =>{
    const [dadosModal, setDadosModal] = useState([])

    return(
        <DescricaoModalContext.Provider value={{dadosModal, setDadosModal}}>
            {children}
        </DescricaoModalContext.Provider>
    )
}