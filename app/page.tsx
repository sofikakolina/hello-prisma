// 'use client'
import Post from "@/components/Post";
import prisma from "@/lib/prisma";
import Link from "next/link";
async function getPosts() {
  const posts = await prisma.post.findMany(
    {
      // where:{
      //   published: true
      // },
      include:{
        author: true
      }
    }
  )
  return posts
}

export default async function Home() {
  
  const posts = await getPosts();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href="/add-post" className="bg-slate-200 p-5 rounded-md">Add Post</Link>
      <div className="flex flex-col gap-5">
        {
          posts.map(post => (<Post key={post.id} post={post}/>))
        }
      </div>
    </div>
  );
}
