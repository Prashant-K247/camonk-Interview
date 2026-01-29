import type { BlogPost } from "../types/blog";

const baseUrl = "http://localhost:3001/blogs";

export const getBlogs = async (): Promise<BlogPost[]>=>{
    try {
        const response  = await fetch(`${baseUrl}`);
        if(!response.ok) {
            throw new Error('failed to fetch blogs');
        }
        return await response.json();
    } catch (error) {
        console.error("getBlogs error", error);
        throw error;
    }
}

export const getBlogid = async(id:number): Promise<BlogPost>=>{
    try {
        const response =await fetch(`${baseUrl}/${id}`);

        if(!response.ok){
            throw new Error("failed to fetch blog by id");
        }
        return await response.json();
    } catch (error) {
        console.error("get Blog by id error");
        throw error;
        
    }

} 
export const createBlog = async (create_Blog:Omit<BlogPost,'id'>):Promise<BlogPost>=>{
    try {
        const response = await fetch(`${baseUrl}`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(create_Blog)
        })
        if(!response.ok){
            throw new Error("failed to create blog");
        }
        return await response.json();
    } catch (error) {
        console.error("error in createblog");
        throw error;
        
    }

}
