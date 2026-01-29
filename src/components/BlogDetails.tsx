import type { BlogPost } from "@/types/blog";
import { useQuery } from "@tanstack/react-query";
import { getBlogid } from "@/api/blogs";

interface BlogDetailsProps {
  blogId: number | null;
}

export default function BlogDetail({ blogId }: BlogDetailsProps) {
  const {data, isLoading} = useQuery<BlogPost>({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogid(blogId!),
    enabled: !!blogId,
  });

  if (!blogId) {
    return (<div className="flex items-center justify-center h-full text-muted-foreground">No blog selected</div>);
  }
  if (isLoading) {
    return (<div className="flex items-center justify-center h-full text-muted-foreground">loading...</div>);
  }

  if (!data) {
    return (<div className="p-6 text-red-500">failed to load blog</div>);
  }

  return (
    <div className="p-4 space-y-4 overflow-y-auto mt-2">
      <img src={data.coverImage} alt={data.title} className="w-full h-56 object-cover rounded-md"/>

      <h1 className="text-2xl font-bold">{data.title}</h1>

      <p className="text-sm text-muted-foreground">{data.category.join(", ")}{" "} {new Date(data.date).toLocaleDateString()}</p>

      <p className="font-medium">{data.description}</p>

      <p className="whitespace-pre-line">{data.content}</p>
    </div>
  );
}
