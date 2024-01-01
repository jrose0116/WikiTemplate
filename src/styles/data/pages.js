import {pages} from "@/config/mongoCollections.js"

const getAllPages = async () => {
    const pageCollection = await pages()
    return await (pageCollection.find({}).toArray())
}

const createPage = async (title, content, author) => {
    const pageCollection = await pages()
    return (await pageCollection.insertOne({title, content, author}))
}

const editContent = async (title, content) => {
    const pageCollection = await pages()
    return (await pageCollection.findOneAndUpdate({title}, {$set: {content}}))
}

const getPage = async (title) => {
    const pageCollection = await pages()
    return (await pageCollection.find({title}).toArray())[0]
}

export { getAllPages, createPage, getPage, editContent }