// Определяем тип User, соответствующий модели автора
export interface UserType {
    id: number;
    email: string;
    name: string | null;
}
  
  // Определяем тип Post, который включает данные автора
export interface PostType {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content: string | null;
    published: boolean;
    authorId: number;
    author: UserType; // Связь с автором
}
  