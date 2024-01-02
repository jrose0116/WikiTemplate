import Head from "next/head"
import globalStyles from "../../src/styles/global.module.css"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { signOut, useSession } from "next-auth/react";

const Main = ({children}) => {
    const {data, status} = useSession()

    const doSignOut = async () => {
        await signOut()
        window.location.href = "/"
    }

    const navLinkStyle = {color: "#EEEEEE", textDecoration: "none", padding: "0px 10px"}
    
    return (
        <>
        <Head>
            <title>Wiki Template</title>
        </Head>
        <ToastContainer />
        <nav style={{display: "flex", gap: "35px", width: "90%", justifyContent: "center", margin: "10px auto", backgroundColor: "#222831", fontFamily: "sans-serif", fontSize: "20px", position: "relative"}}>
            <a href="/" style={navLinkStyle}><p>Home</p></a>
            <a href="/pages" style={navLinkStyle}><p>Pages</p></a>
            <div className={globalStyles.dropdown}>
                <p className={globalStyles.dropdownButton}>Docs <span className={globalStyles.dropdownArrow}></span></p>
                <div className={globalStyles.dropdownLinks}>
                    <a href="/docs/markdown">Markdown Styling</a>
                    <a href="/docs/content-editor">Content Editor</a>
                </div>
            </div>
            { (status !== "loading") ? (data) ?
            <a onClick={()=>doSignOut()} style={{...navLinkStyle, position: "absolute", right: "10px"}}><p>Sign Out</p></a> : 
            <a href="/login" style={{...navLinkStyle, position: "absolute", right: "10px"}}><p>Log In</p></a>
            : <></>}
        </nav>
        <main>{children}</main>
        <style jsx global>{`body {
                background: #78848c;
            }`}
        </style>
        </>
    )
}

export default Main