import React from "react";
import './Login.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth"; // Importar a função do Firebase
import { auth } from '../../firebase.init'; // Importe a instância de auth configurada no Firebase

const Login = ()=>{
    
    const [username, setUsername] = useState('miler.virgulino@gmail.com');
    const [password, setPassword] = useState('Mortadela1');
    const navigate = useNavigate();
    const handleLogin = async(e) => {
        e.preventDefault();
        try{

        await signInWithEmailAndPassword(auth, username, password); // Corrigido
        navigate('/home'); // Redirecionar para a dashboard após login correto
        } catch(err){
            console.error(err);
            alert('Error ao logar')
        }
    }
    return (
        <div className="loginScreen">
            <h1>Login</h1>
            <form onSubmit={handleLogin}> 
                <input type="text" placeholder="Username" onChange={setUsername} value={username} required />
                <input type="password" placeholder="Password" onChange={setPassword} value={password} required />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;