import {pages} from "@/config/mongoCollections.js"

export const getAllPages = async () => {
    const pageCollection = await pages()
    return await (pageCollection.find({}).toArray())
}

export const createPage = async (title, content, author) => {
    const pageCollection = await pages()
    return (await pageCollection.insertOne({title, content, author}))
}

export const editContent = async (title, content) => {
    const pageCollection = await pages()
    return (await pageCollection.findOneAndUpdate({title}, {$set: {content}}))
}

export const getPage = async (title) => {
    const pageCollection = await pages()
    return (await pageCollection.find({title}).toArray())[0]
}

export const deletePage = async (title) => {
    const pageCollection = await pages()
    return (await pageCollection.findOneAndDelete({title}))
}