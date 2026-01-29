import type { BlogPost } from '../types/blog';
import {Card, CardContent} from './ui/Card';

interface blogCardProps{
    blog:BlogPost;
    onClick:()=>void;
    active:boolean;
}


export default function BlogCard({blog,onClick,active}:blogCardProps){
    return (
  <Card onClick={onClick} className={`cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden group ${active ? " bg-white shadow-md" : "border-transparent bg-slate-50/50 hover:bg-white hover:shadow-lg hover:-translate-y-1"}`}>
    {active && <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-900" />}

    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-black transition-colors">
          {blog.category.join(" , ")}
        </span>
        <span className="text-xs font-medium text-slate-400">
          {new Date(blog.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
      </div>

      <h3 className={`text-lg font-bold leading-tight mb-2 transition-colors ${active ? "text-black" : "text-slate-800 group-hover:text-black"}`}>{blog.title}</h3>

      <p className="text-sm leading-relaxed text-slate-500 line-clamp-2">{blog.description}</p>
      
      <div className="mt-4 flex items-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        READ ARTICLE 
        <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </CardContent>
  </Card>
);
}