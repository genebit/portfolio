import { HTMLAttributes, useEffect, useState } from "react"

import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"
import { blogPosts } from "@/lib/content"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { Blog } from "./types/Project"

const BlogPostsSection = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  const compCn = cn("p-0 ps-2 relative border-slate-950 dark:border-stone-700 border-s-2 ms-1", className)

  const [blogs, setBlogs] = useState<Blog[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setBlogs(blogPosts)
      } catch (error) {
        setError("Error fetching the blogs")
        console.error("Error fetching the blogs:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  if (isLoading) return <div className="py-8 text-center">Loading blogs...</div>
  if (error) return <div className="py-8 text-center text-red-500">{error}</div>

  if (blogs.length === 0) {
    return <p>No blogs were loaded...</p>
  } else {
    return (
      <>
        <div data-lenis-prevent className="overflow-y-scroll max-h-[40rem]">
          <TooltipProvider>
            <ol className={compCn} {...props}>
              {blogs.map((blog, index) => (
                <li key={index} className="mb-4 list-none">
                  <Link to={blog.link} target="_blank">
                    <Tooltip key={`${blog.title}-${index}`} delayDuration={100}>
                      <TooltipTrigger className="text-left">
                        <Card className="bg-transparent border-none hover:bg-stone-100 dark:hover:bg-stone-900 hover:cursor-pointer">
                          <CardContent className="p-2 px-3">
                            <time className="text-xs font-normal leading-none text-slate-600 dark:text-slate-400">
                              {blog.date_added}
                            </time>
                            <div className="absolute p-1 border-2 rounded-full bg-slate-950 dark:bg-stone-600 -start-[0.45rem] mt-1 text-white border-white dark:border-stone-950"></div>
                            <h6 className="text-xs tracking-widest uppercase font-artegra">{blog.title}</h6>
                            <details>
                              <summary className="cursor-pointer dark:text-blue-500">View description</summary>
                              <p className="mt-2 text-sm">{blog.short_description}</p>
                            </details>
                          </CardContent>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent side="left">Click to be redirected</TooltipContent>
                    </Tooltip>
                  </Link>
                </li>
              ))}
            </ol>
          </TooltipProvider>
        </div>
      </>
    )
  }
}

export default BlogPostsSection
