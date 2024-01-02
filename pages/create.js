import Markdown from 'react-markdown'
import style from "@/src/styles/markdownstyling.module.css"
import { useState } from "react"
import rehypeRaw from "rehype-raw";
import Main from "@/components/main/Main"
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const CreatePage = () => {
    const [preview, setPreview] = useState(0)
    const [title, setTitle] = useState("")

    const [content, setContent] = useState("## Content")

    const {data} = useSession()

    if(!data) return <Main>
        <div style={{backgroundColor: "#393E46", width: "90%", margin: "0 auto", padding: "10px"}}>
        <div style={{width: "calc(100% - 20px)", padding: "10px", backgroundColor: "#222831", textAlign: "center"}}>
            <p style={{textDecoration: "none", fontFamily: "sans-serif", color: "white", margin: "0"}}>You Must Be Logged In To View This Page</p>
            <Link href="/login" style={{display: "block", backgroundColor: "#536878", color: "white", padding: "10px 20px", border: "none", cursor: "pointer", textDecoration: "none", fontFamily: "sans-serif", width: "fit-content", margin: "5px auto"}}>Log In</Link></div>
        </div>
    </Main>

    const savePage = async () => {
        if(data?.user?.sub){
            let res = await (await fetch('/api/createPage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content, author: data.user.sub })
            })).json()
            if(res.message == "Success") window.location.href = `/pages/${encodeURIComponent(title)}`
            else (toast.error(res.message))
        }
        else toast.error("Authentication Error")
    }

    const buttonStyle = {backgroundColor: "#536878", color: "white", padding: "10px 20px", border: "none"}

    if(preview == 1) return <Main><div style={{backgroundColor: "#393E46", width: "90%", margin: "0 auto", padding: "0"}}>
        <div style={{width: "100%", padding: "10px"}}>
            <h1 style={{margin: "10px", color: "white", fontFamily: "monospace"}}>Create Page</h1>
            <div style={{margin: "10px", color: "white", fontFamily: "monospace", fontSize: "18px", display: "flex", gap: "15px", marginBottom: "25px"}}>
                <label htmlFor="title">Title:<br />
                <input type='text' id='title' style={{padding: "5px 20px"}} onChange={(event)=>setTitle(event.target.value)}></input>
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
            {title && content ? <button onClick={()=>savePage()} style={{...buttonStyle, marginLeft: "10px"}}>Create Page</button> : <></>}
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
            </div>
            <div style={{display: "flex", width: "calc(100% - 40px)", margin: "10px", backgroundColor: "#222831"}}>
                <button style={{...buttonStyle, backgroundColor: "#36454f", fontWeight: "600"}}>Editor</button>
                <button style={buttonStyle} onClick={()=>setPreview(1)}>Preview</button>
                <button style={buttonStyle} onClick={()=>setPreview(2)}>Side-by-Side</button>
            </div>
            <div style={{display: "flex", width: "calc(100% - 40px)", margin: "10px"}}>
            <textarea style={{width: "100%", height: "300px", fontFamily: "monospace", fontSize: "18px"}} onChange={(event)=>setContent(event.target.value)} value={content}/>    
            </div>
            {title && content ? <button onClick={()=>savePage()} style={{...buttonStyle, marginLeft: "10px"}}>Create Page</button> : <></>}
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
        {title && content ? <button onClick={()=>savePage()} style={{...buttonStyle, marginLeft: "10px"}}>Create Page</button> : <></>}
    </div>
</div>
</Main>
}

export default CreatePage