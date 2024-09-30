import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function DELETE(request: any, {params}: any){
    const id = parseInt(params.id)

    const post = await prisma.post.delete({
        where: {id}
    })
    return NextResponse.json(post)
}