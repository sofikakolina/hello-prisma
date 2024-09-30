import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(request: any) {
    const res = await request.json()
    const {authorId, title, content} = res
    console.log(authorId, title, content)
    const result = await prisma.post.create({
        data:{
            authorId,
            title,
            content,
        }
    })
    console.log(result)
    return NextResponse.json({result})
}