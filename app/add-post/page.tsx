'use client'
import { useState } from "react";
import axios from "axios";
import Comeback from "@/components/Comeback";
import { useRouter } from "next/navigation";

interface FormData {
    title: string;
    content: string;
}

const page = () => {
    const router = useRouter()
    const [formData, setFormData] = useState<FormData>({
        title: '',
        content: '',
      });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            axios.post("api/add-post", { authorId: 18, title: formData.title, content: formData.content })
            router.refresh()
            router.push("/")
        } catch(error) {
            alert(error)
        }
    // You can handle form submission here, e.g., sending it to an API
    };
    return (
        <div className="flex flex-col items-center justify-center gap-72">
            <Comeback href="/"/>
            <h1 className="font-bold text-3xl pt-5">Add post</h1>
            <form onSubmit={handleSubmit} className="flex flex-col h-full gap-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Content
                    </label>
                    <textarea
                        name="content"
                        id="content"
                        value={formData.content}
                        onChange={handleChange}
                        rows={4}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default page