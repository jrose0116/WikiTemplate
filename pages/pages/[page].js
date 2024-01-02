import Main from "@/components/main/Main"
import Markdown from 'react-markdown'
import style from "@/src/styles/markdownstyling.module.css"
import { getPage } from "@/src/data/pages"
import rehypeRaw from "rehype-raw";
import { useState } from "react";
import ContentEditor from "@/components/contentEditor/ContentEditor"

const DynamicPage = ({header, content, title}) => {
    const [editing, setEditing] = useState(false)

    if(editing && true) // Replace true with auth later on
        return <Main>
        <div style={{width: "90%", margin: "10px auto", display: "flex", justifyContent: "space-around", gap: "10px"}}>
        <div style={{backgroundColor: "#393E46", width: "100%", margin: "0", padding: "10px"}}><ContentEditor header={header} data={content} title={title} cancel={()=>setEditing(false)}></ContentEditor></div>
        {/* <div style={{backgroundColor: "#393E46", width: "30%", margin: "0"}}>Popular Pages</div> */}
        </div>
    </Main>

    return <Main>
            <div style={{width: "90%", margin: "10px auto", display: "flex", justifyContent: "space-around", gap: "10px"}}>
                <div style={{backgroundColor: "#393E46", width: "calc(100%)", padding: "10px", position: "relative"}}>
                    <button style={{position: "absolute", top: "20px", right: "20px", backgroundColor: "#536878", color: "white", padding: "10px 20px", border: "none", cursor: "pointer"}} onClick={()=>setEditing(true)}>Edit</button>
                    <div style={{backgroundColor: "#393E46", width: "100%", margin: "0"}}><Markdown rehypePlugins={[rehypeRaw]} className={style.markdownStyle}>{header}</Markdown></div>
                    <div style={{backgroundColor: "#393E46", width: "100%", margin: "0"}}><Markdown rehypePlugins={[rehypeRaw]} className={style.markdownStyle}>{content}</Markdown></div>
                </div>
            {/* <div style={{backgroundColor: "#393E46", width: "30%", margin: "0"}}>Popular Pages</div> */}
            </div>
        </Main>
}

export const getServerSideProps = async (context) => {
    const { page } = context.query;
    const res = await getPage(page)

    if (res) {
        return {
            props: {
                header: `# ${res.title}\n##### Written by ${res.author} ${res.date ? "on " + res.date : ""}`,
                content: res.content,
                title: res.title
            },
        };
    }

    return {
        notFound: true,
    };
}

export default DynamicPage