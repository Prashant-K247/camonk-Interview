import {useQuery} from '@tanstack/react-query';
import { useState } from 'react';
import type {BlogPost} from '@/types/blog';
import { getBlogs } from '@/api/blogs';
import BlogCard from './BlogCard';
import { Button } from '@/components/ui/button';
import { Skeleton } from "@/components/ui/skeleton"




interface blogListProps{
    selectedId: number | null;
    onSelect: (id: number) => void;
}

type sortOrder = 'newest' | 'oldest';

export default function BlogList({ selectedId, onSelect }: blogListProps) {
  const [sortOrder, setSortOrder] = useState<sortOrder>('newest');
  const { data, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });
   if (isLoading) {
    return (
      <div className="space-y-3 p-4">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }
  if(error) return <p >errpr loading blogs</p>;

  const sortedBlogs = [...data!].sort((a, b) => {
    const diff = new Date(a.date).getTime() - new Date(b.date).getTime();
    return sortOrder === "newest" ? -diff : diff;
  });

  return (
    <div className="p-4 space-y-4 overflow-y-auto ">

      <div className="flex items-center justify-between mt-2">
        <h1 className="text-xl font-bold">Latest Blogs</h1>
        <div className="flex items-center space-x-2">
          <h2 className="text-md text-muted-foreground font-semibold">sort: </h2>
          <Button variant="outline" size="sm" onClick={() =>setSortOrder((prev) =>prev === "newest" ? "oldest" : "newest")}>
            {sortOrder === "newest" ? "Newest" : "Oldest"}
          </Button>
        </div>
      </div>

      {sortedBlogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          active={blog.id === selectedId}
          onClick={() => onSelect(blog.id)}
        />
      ))}
    </div>
  );
}