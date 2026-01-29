import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Header() {
  const location = useLocation();

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] z-30 ">
      <div
        className="flex items-center gap-6 px-6 py-3 rounded-full bg-slate-100 border border-white/20 shadow-md   ">
        <Link
          to="/"
          className="font-semibold text-sm md:text-base tracking-wide"
        >
          CA Monk Blogs
        </Link>

        <div className="flex gap-3  ml-auto">
          <Button asChild variant={location.pathname === "/" ? "default" : "ghost"}  size="sm">
            <Link to="/">Home</Link>
          </Button>

          <Button asChild variant={location.pathname === "/create" ? "default" : "ghost"} size="sm">
            <Link to="/create">Create Blog</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Header;