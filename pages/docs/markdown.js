import Main from "@/components/main/Main"
import Markdown from 'react-markdown'
import style from "../../src/styles/markdownstyling.module.css"
import rehypeRaw from "rehype-raw";

const MarkdownTest = () => {
    const content = `
# H1
## H2
### H3
#### H4
##### H5
###### H6
---
Horizontal line ^^^

p tag

styled with *italics* and **bold**

\`Code Block\`
\`\`\`
LONG
CODE
BLOCK
\`\`\`

> Indented Block
>> WOOO HOOO

[a tag](url)

![IMAGE](https://picsum.photos/200/200)

- ul li
1. ol li

1. ol 1
1. ol 2
    1. Nested 1
    1. Nested 2
        * Nested Again!
1. ol 3
    `

    return <Main>
            <div style={{width: "90%", margin: "10px auto", display: "flex", justifyContent: "space-around", gap: "10px"}}>
            <div style={{backgroundColor: "#393E46", width: "100%", margin: "0", padding: "10px"}}><Markdown rehypePlugins={[rehypeRaw]} className={style.markdownStyle}>{content}</Markdown></div>
            {/* <div style={{backgroundColor: "#393E46", width: "30%", margin: "0"}}>Popular Pages</div> */}
            </div>
        </Main>
}

export default MarkdownTest