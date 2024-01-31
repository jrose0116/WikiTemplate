import { useState } from "react";
import Main from "@/components/main/Main";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const router = useRouter()

    const registerUser = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch('/api/registerUser', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password, displayName }),
            });
      
            if (response.ok) {
                toast.success("Successfully Registered")
                router.push('/login')
            } else {
              const data = await response.json();
              toast.error(data.message || 'Registration failed');
            }
          } catch (error) {
            toast.error(error);
          }
        };
      
        return <Main>
        <div style={{backgroundColor: "#393E46", width: "90%", margin: "10px auto", padding: "10px"}}>
            <div style={{backgroundColor: "#222831", padding: "10px"}}>
                <form onSubmit={registerUser} style={{display: "flex", flexDirection: "column", gap: "10px", color: "white", fontFamily: "monospace", textAlign: "center"}}>
                    <h2 style={{margin: 0}}>Register</h2>
                    <label>Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required /></label>
                    <label>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></label>
                    <label>Display Name: <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} required /></label>
                    <button type="submit" style={{backgroundColor: "#536878", color: "white", padding: "10px 20px", border: "none", width: "300px", margin: "auto"}}>Register</button>
                </form>
            </div>
        </div>
      </Main>
}

export default Register