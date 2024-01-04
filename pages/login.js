import { useState } from "react";
import Main from "@/components/main/Main";
import { toast } from "react-toastify";
import {signIn} from "next-auth/react"
import Link from "next/link";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (event) => {
        event.preventDefault()
        try {
            const response = await signIn('credentials', {
              redirect: false,
              username,
              password
            })
      
            if (response?.error) {
                toast.error(response.error)
            }
            else {
              window.location.href = '/'
            }
          } catch (error) {
            toast.error(error);
          }
        };
      
        return <Main>
        <div style={{backgroundColor: "#393E46", width: "90%", margin: "10px auto", padding: "10px 0"}}>
            <div style={{backgroundColor: "#222831", padding: "10px", width: "calc(100% - 40px)", margin: "0 auto"}}>
                <form onSubmit={loginUser} style={{display: "flex", flexDirection: "column", gap: "10px", color: "white", fontFamily: "monospace", textAlign: "center"}}>
                    <h2 style={{margin: 0}}>Login</h2>
                    <label>Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required /></label>
                    <label>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></label>
                    <button type="submit" style={{backgroundColor: "#536878", color: "white", padding: "10px 20px", border: "none", width: "200px", margin: "auto"}}>Log In</button>
                    <Link style={{color: "white", fontSize: "14px", textDecoration: "none"}} href="/register">Need An Account? Register Here</Link>
                </form>
            </div>
        </div>
      </Main>
}

export default Login