import Main from "@/components/main/Main"
import Markdown from 'react-markdown'
import style from "../src/styles/markdownstyling.module.css"

const Home = () => {
    const content = `
# Home!
    `

    return <Main>
            <div style={{width: "90%", margin: "10px auto", display: "flex", justifyContent: "space-around", gap: "10px"}}>
            <div style={{backgroundColor: "#393E46", width: "100%", margin: "0", padding: "10px"}}><Markdown className={style.markdownStyle}>{content}</Markdown></div>
            <div style={{backgroundColor: "#393E46", width: "30%", margin: "0"}}>Popular Pages</div>
            </div>
        </Main>
}

export default Home