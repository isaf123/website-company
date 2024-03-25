import { createClient } from "contentful";


export const createContentClient=()=>{
  return createClient({
    space:"p4bsdx1e3y82",
    accessToken:"FHn_Z_jvKR8BtnreqXrFaA3ekd2N8vHFRAWjc-IIt1k"
  })
}
const client =createContentClient()

export const getEntriesByType =async (type:any)=>{
  const response = await client.getEntries({
    content_type:type,
  })

  return response.items
}

export const getBlogPosts = async()=>{
  const results = await getEntriesByType("blogPost");
  const blogPost = results.map((blog)=>blog.fields)
  return blogPost
}