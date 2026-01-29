import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/api/blogs";
import type { CreateBlogPost } from "@/types/blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreateBlog() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const[imagePreview,setImagePreview]=useState("");

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      navigate("/");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data: CreateBlogPost = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        content: formData.get("content") as string,
        coverImage: formData.get("coverImage") as string,
        category: (formData.get("category") as string)
          .split(",")
          .map((c) => c.trim()),
        date: new Date().toISOString(),
    };

    mutation.mutate(data);
  };

  return (
    
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-4 mt-21">
        <div className="bg-white border rounded-xl shadow-md p-6 space-y-6">
          <div>
            <h1 className="text-2xl font-semibold">Create Blog</h1>
            <p className="text-sm text-muted-foreground">
              Write and publish a new article
            </p>
          </div>  
          <Input name="title" placeholder="Title" required />
          <Input name="category" placeholder="Categories (comma separated)" />
          <div className="space-y-3">
            <Input name="coverImage" placeholder="Cover Image URL" onChange={(e)=>setImagePreview(e.target.value)} />
            {imagePreview && (
              <div className="border rounded-lg overflow-hidden">
                <img
                  src={imagePreview}
                  alt="Cover Image preview"
                  className="w-full h-48 object-cover"
                  onError={() => setImagePreview("")}
                />
              </div>
            )}
          </div>
          <Input name="description" placeholder="Short description" />
          <Textarea name="content" placeholder="Full content" rows={6} />
          <Button type="submit" disabled={mutation.isPending}>
            Create Blog
          </Button>
        </div>
        
      </form>

    
    
  );
}
