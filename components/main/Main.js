import globalStyles from "../../src/styles/global.module.css"

const Main = ({children}) => {
    
    const navLinkStyle = {color: "#EEEEEE", textDecoration: "none", padding: "0px 10px"}

    return (
        <>
        <nav style={{display: "flex", gap: "35px", width: "90%", justifyContent: "center", margin: "10px auto", backgroundColor: "#222831", fontFamily: "sans-serif", fontSize: "20px"}}>
            <a href="/" style={navLinkStyle}><p>Home</p></a>
            <a href="/pages" style={navLinkStyle}><p>Pages</p></a>
            <div className={globalStyles.dropdown}>
                <p className={globalStyles.dropdownButton}>Docs <span className={globalStyles.dropdownArrow}></span></p>
                <div className={globalStyles.dropdownLinks}>
                    <a href="/docs/markdown">Markdown Styling</a>
                    <a href="/docs/content-editor">Content Editor</a>
                </div>
            </div>
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