import React, {createContext, useState} from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
    const [usuarioLogado, setUsuarioLogado] = useState(false)
    
    function logar(login, senha){        
        console.log(login, senha)
        if(login=="teste" && senha == "123456")
            setUsuarioLogado(true);
        else 
            alert("Login ou senha errada");
    }

    return (
    <AuthContext.Provider value={{logado: usuarioLogado, logar}}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthContext;

