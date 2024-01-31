import Main from "@/components/main/Main"
import Markdown from 'react-markdown'
import style from "../src/styles/markdownstyling.module.css"
import rehypeRaw from "rehype-raw";

const Home = () => {
    const content = `
# Home!
This is the home page for my Wiki/Forum template website.

\`\`\`
#TODO
- Authentication
    - Admin Permissions
- Input Validation
\`\`\`


## Technologies
- Next.js
    - React.js
    - Node.js / NPM
    - NextAuth
- MongoDB
## Contributors
This application has been worked on by:
- Jacob Rosengarten | [@jrose0116](https://www.github.com/jrose0116) (Just me for now 🥺)
## Routing
- \`/\` Here we are at the root directory
- \`/docs\` The documents directories (Generally static)
    - \`/[page]\` The document page: See navigation
- \`/pages\` The pages directories.
    - \`/[page]\` The dynamic page - view, edit, or delete the page (depending on permissions)
- \`/create\` Create pages
## Deployment
Deployment is handled using Heroku. DNS is handled using Cloudflare.

---

#### Thank you and enjoy using my application! ❤️ - Jacob Rosengarten
`

    return <Main>
            <div style={{width: "90%", margin: "10px auto", display: "flex", justifyContent: "space-around", gap: "10px"}}>
            <div style={{backgroundColor: "#393E46", width: "100%", margin: "0", padding: "10px"}}><Markdown rehypePlugins={[rehypeRaw]} className={style.markdownStyle}>{content}</Markdown></div>
            {/* <div style={{backgroundColor: "#393E46", width: "30%", margin: "0"}}>Popular Pages</div> */}
            </div>
        </Main>
}

export default Home