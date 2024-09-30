'use client'
import { PostType } from '@/prisma/interfaces'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Post: React.FC<{ post: PostType }> = ({ post }) => {
    const router = useRouter()
    const { id, title, content, author } = post;
    const handleDeletePost = async() => {
        await axios.delete(`api/post/${id}`)
        router.refresh()
    }    
    return (
        <div className='bg-slate-400 rounded-md p-3 px-10 gap-3'>
            <h3 className='font-bold text-xl pb-5'>Post {title}</h3>
            <h3>{content}</h3>
            <h3>{author.name}</h3>
            <button onClick={() => handleDeletePost()} className='bg-white p-2 rounded-lg'>Delete</button>
        </div>
    )
}

export default Post