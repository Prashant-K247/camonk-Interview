
import { useState } from "react";
import BlogList from "@/components/BlogList";
import BlogDetails from "@/components/BlogDetails";



function Homepage(){
    const[selectedBLogId, setSelectedBLogId]= useState<number|null>(null);

    return(
        <>
        
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen px-2 ml-6 pt-21">
            
            <BlogList
              selectedId={selectedBLogId}
              onSelect={setSelectedBLogId}
            />
            <BlogDetails blogId={selectedBLogId} />
        </div>

        </>
        
    )
}
export default Homepage;