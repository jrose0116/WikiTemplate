import Main from "@/components/main/Main"
import Markdown from 'react-markdown'
import style from "@/src/styles/markdownstyling.module.css"
import { getAllPages } from "@/src/data/pages"
import rehypeRaw from "rehype-raw";
import Link from "next/link";

const Pages = ({content}) => {

    return <Main>
            
            <div style={{width: "90%", margin: "10px auto", display: "flex", justifyContent: "space-around", gap: "10px"}}>
            <div style={{backgroundColor: "#393E46", width: "100%", margin: "0", padding: "10px", position: "relative"}}><Link href="/create" style={{position: "absolute", top: "20px", right: "20px", backgroundColor: "#536878", color: "white", padding: "10px 20px", border: "none", cursor: "pointer", textDecoration: "none", fontFamily: "sans-serif"}}>Create</Link><Markdown rehypePlugins={[rehypeRaw]} className={style.markdownStyle}>{content}</Markdown></div>
            {/* <div style={{backgroundColor: "#393E46", width: "30%", margin: "0"}}>Popular Pages</div> */}
            </div>
        </Main>
}

export async function getServerSideProps() {
    const data = await getAllPages();
    let content = data.sort((a,b)=>a.title.localeCompare(b.title))

    let char = ''
    content = data.reduce((total, page)=> {
        if(char == page.title.charAt(0).toLowerCase() || (!isNaN(page.title.charAt(0)) && char == "#")) total+=`\n#### - <a style="color: white; text-decoration: none; border: none; text-transform: capitalize" href="/pages/${page.title}">${page.title}</a>`
        else { 
            if (!isNaN(page.title.charAt(0))) char = "\\#"
            else char = page.title.charAt(0).toLowerCase()
            total += `\n## ${char.toLocaleUpperCase()}:\n#### - <a style="color: white; text-decoration: none; border: none; text-transform: capitalize" href="/pages/${page.title}">${page.title}</a>`
        }
        return total
    }
        , "# Pages")

    return {
      props: {
        content,
      },
    };
  }

export default Pages