import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import AuthContext from "../contexts/auth";

export default function Login() {
    const { logar } = useContext(AuthContext)
    const [login, setLogin] = useState('teste')
    const [senha, setSenha] = useState('')

    function handleLogin() {
        logar(login, senha);
    }

    return (
        <View style={{ marginTop: 40, marginLeft: 10, marginRight: 10 }} >
            <View>
                <TextInput placeholder="Login" value={login} onChangeText={setLogin} />
            </View>
            <View>
                <TextInput placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry={true} />
            </View>
            <View >
                <Button onPress={handleLogin} title="Entrar" />
            </View>
            <View style={{ marginTop: 40 }} >
                <Text style={{fontSize:18, color:'red'}}>Para realizar o Login utilizar:</Text>
                <Text style={{fontSize:18, color:'red'}}>Login: teste e Senha: 123456</Text>
            </View>
        </View>
    )
}
