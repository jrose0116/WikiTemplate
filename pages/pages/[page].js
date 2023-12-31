import Main from "@/components/main/Main"
import Markdown from 'react-markdown'
import style from "@/src/styles/markdownstyling.module.css"
import { getPage } from "@/src/styles/data/pages"
import rehypeRaw from "rehype-raw";

const DynamicPage = ({data}) => {
    return <Main>
            <div style={{width: "90%", margin: "10px auto", display: "flex", justifyContent: "space-around", gap: "10px"}}>
            <div style={{backgroundColor: "#393E46", width: "100%", margin: "0", padding: "10px"}}><Markdown rehypePlugins={[rehypeRaw]} className={style.markdownStyle}>{data}</Markdown></div>
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
                data: `
# ${res.title}
##### ${res.author} ${res.date ? "-" + res.date : ""}
${res.content}
                `,
            },
        };
    }

    return {
        notFound: true,
    };
}

export default DynamicPage