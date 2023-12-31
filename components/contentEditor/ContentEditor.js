import Markdown from 'react-markdown'
import style from "../../src/styles/markdownstyling.module.css"
import { useState } from "react"

const ContentEditor = () => {
    const [preview, setPreview] = useState(0)
    const [content, setContent] = useState("# Content")

    const buttonStyle = {backgroundColor: "#536878", color: "white", padding: "10px 20px", border: "none"}

    if(preview == 1) return <div style={{backgroundColor: "#393E46", width: "90%", margin: "0 auto", padding: "0"}}>
        <div style={{width: "100%", padding: "10px"}}>
            <div style={{display: "flex", width: "calc(100% - 40px)", margin: "10px", backgroundColor: "#222831"}}>
                <button style={buttonStyle} onClick={()=>setPreview(0)}>Editor</button>
                <button style={{...buttonStyle, backgroundColor: "#36454f", fontWeight: "600"}}>Preview</button>
                <button style={buttonStyle} onClick={()=>setPreview(2)}>Side-by-Side</button>
            </div>
            <div style={{padding:"0 10px", width: "calc(100% - 40px)", minHeight: "300px"}}><Markdown className={style.markdownStyle}>{content}</Markdown></div>
        </div>
    </div>

    if(preview == 0) return <div style={{backgroundColor: "#393E46", width: "90%", margin: "0 auto", padding: "0"}}>
        <div style={{width: "100%", padding: "10px"}}>
            <div style={{display: "flex", width: "calc(100% - 40px)", margin: "10px", backgroundColor: "#222831"}}>
                <button style={{...buttonStyle, backgroundColor: "#36454f", fontWeight: "600"}}>Editor</button>
                <button style={buttonStyle} onClick={()=>setPreview(1)}>Preview</button>
                <button style={buttonStyle} onClick={()=>setPreview(2)}>Side-by-Side</button>
            </div>
            <div style={{display: "flex", width: "calc(100% - 40px)", margin: "10px"}}>
            <textarea style={{width: "100%", height: "300px", fontFamily: "monospace", fontSize: "18px"}} onChange={(event)=>setContent(event.target.value)} value={content}/>    
            </div>
        </div>
    </div>

    else return <div style={{backgroundColor: "#393E46", width: "90%", margin: "0 auto", padding: "0"}}>
    <div style={{width: "100%", padding: "10px"}}>
        <div style={{display: "flex", width: "calc(100% - 40px)", margin: "10px", backgroundColor: "#222831"}}>
            <button style={buttonStyle} onClick={()=>setPreview(0)}>Editor</button>
            <button style={buttonStyle} onClick={()=>setPreview(1)}>Preview</button>
            <button style={{...buttonStyle, backgroundColor: "#36454f", fontWeight: "600"}}>Side-by-Side</button>
        </div>
        <div style={{display:"flex", margin:"10px", gap: "10px", width: "calc(100% - 40px)",}}>
        <div style={{display: "flex", width: "calc(50%)"}}>
        <textarea style={{width: "100%", height: "300px", fontFamily: "monospace", fontSize: "18px"}} onChange={(event)=>setContent(event.target.value)} value={content} />
        </div>
        <div style={{width: "calc(50%)"}}>
            <Markdown className={style.markdownStyle}>{content}</Markdown></div>
        </div>
    </div>
</div>
}

export default ContentEditor