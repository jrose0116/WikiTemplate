import Markdown from 'react-markdown'
import style from "@/src/styles/markdownstyling.module.css"
import { useState } from "react"
import rehypeRaw from "rehype-raw";
import Main from "@/components/main/Main"

const CreatePage = () => {
    const [preview, setPreview] = useState(0)
    const [title, setTitle] = useState("")

    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("## Content")

    const savePage = async () => {
        let res = await fetch('/api/createPage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, author })
        })
        window.location.reload()
    }

    const buttonStyle = {backgroundColor: "#536878", color: "white", padding: "10px 20px", border: "none"}

    if(preview == 1) return <Main><div style={{backgroundColor: "#393E46", width: "90%", margin: "0 auto", padding: "0"}}>
        <div style={{width: "100%", padding: "10px"}}>
            <h1 style={{margin: "10px", color: "white", fontFamily: "monospace"}}>Create Page</h1>
            <div style={{margin: "10px", color: "white", fontFamily: "monospace", fontSize: "18px", display: "flex", gap: "15px", marginBottom: "25px"}}>
                <label htmlFor="title">Title:<br />
                <input type='text' id='title' style={{padding: "5px 20px"}} onChange={(event)=>setTitle(event.target.value)}></input>
                </label>
                <br />
                <label htmlFor="author">Author:<br />
                <input type='text' id='author' style={{padding: "5px 20px"}} onChange={(event)=>setAuthor(event.target.value)}></input>
                </label>
            </div>
            <div style={{display: "flex", width: "calc(100% - 40px)", margin: "10px", backgroundColor: "#222831"}}>
                <button style={buttonStyle} onClick={()=>setPreview(0)}>Editor</button>
                <button style={{...buttonStyle, backgroundColor: "#36454f", fontWeight: "600"}}>Preview</button>
                <button style={buttonStyle} onClick={()=>setPreview(2)}>Side-by-Side</button>
            </div>
            <div style={{padding:"0 10px", width: "calc(100% - 40px)", minHeight: "300px"}}>
                <Markdown rehypePlugins={[rehypeRaw]} className={style.markdownStyle}>{content}</Markdown>
            </div>
            {title && content && author ? <button onClick={()=>savePage()} style={{...buttonStyle, marginLeft: "10px"}}>Create Page</button> : <></>}
        </div>
    </div>
    </Main>

    if(preview == 0) return <Main><div style={{backgroundColor: "#393E46", width: "90%", margin: "0 auto", padding: "0"}}>
        <div style={{width: "100%", padding: "10px"}}>
            <h1 style={{margin: "10px", color: "white", fontFamily: "monospace"}}>Create Page</h1>
            <div style={{margin: "10px", color: "white", fontFamily: "monospace", fontSize: "18px", display: "flex", gap: "15px", marginBottom: "25px"}}>
                <label htmlFor="title">Title:<br />
                <input type='text' id='title' style={{padding: "5px 20px"}} onChange={(event)=>setTitle(event.target.value)}></input>
                </label>
                <br />
                <label htmlFor="author">Author:<br />
                <input type='text' id='author' style={{padding: "5px 20px"}} onChange={(event)=>setAuthor(event.target.value)}></input>
                </label>
            </div>
            <div style={{display: "flex", width: "calc(100% - 40px)", margin: "10px", backgroundColor: "#222831"}}>
                <button style={{...buttonStyle, backgroundColor: "#36454f", fontWeight: "600"}}>Editor</button>
                <button style={buttonStyle} onClick={()=>setPreview(1)}>Preview</button>
                <button style={buttonStyle} onClick={()=>setPreview(2)}>Side-by-Side</button>
            </div>
            <div style={{display: "flex", width: "calc(100% - 40px)", margin: "10px"}}>
            <textarea style={{width: "100%", height: "300px", fontFamily: "monospace", fontSize: "18px"}} onChange={(event)=>setContent(event.target.value)} value={content}/>    
            </div>
            {title && content && author ? <button onClick={()=>savePage()} style={{...buttonStyle, marginLeft: "10px"}}>Create Page</button> : <></>}
        </div>
    </div>
    </Main>

    else return <Main><div style={{backgroundColor: "#393E46", width: "90%", margin: "0 auto", padding: "0"}}>
    <div style={{width: "100%", padding: "10px"}}>
        <h1 style={{margin: "10px", color: "white", fontFamily: "monospace"}}>Create Page</h1>
        <div style={{margin: "10px", color: "white", fontFamily: "monospace", fontSize: "18px", display: "flex", gap: "15px", marginBottom: "25px"}}>
            <label htmlFor="title">Title:<br />
            <input type='text' id='title' style={{padding: "5px 20px"}} onChange={(event)=>setTitle(event.target.value)}></input>
            </label>
            <br />
            <label htmlFor="author">Author:<br />
            <input type='text' id='author' style={{padding: "5px 20px"}} onChange={(event)=>setAuthor(event.target.value)}></input>
            </label>
        </div>
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
            <Markdown rehypePlugins={[rehypeRaw]} className={style.markdownStyle}>{content}</Markdown></div>
        </div>
        {title && content && author ? <button onClick={()=>savePage()} style={{...buttonStyle, marginLeft: "10px"}}>Create Page</button> : <></>}
    </div>
</div>
</Main>
}

export default CreatePage