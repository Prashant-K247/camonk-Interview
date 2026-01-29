export interface BlogPost{
    id:number;
    title:string;
    category:string[];
    description:string;
    date:string;
    coverImage:string;
    content:string;
}

export interface CreateBlogPost {
    title:string;
    category:string[];
    description:string;
    date:string;
    coverImage:string;
    content:string;
}