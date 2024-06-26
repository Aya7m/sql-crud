import { Router } from "express";
import { addPost, deletePost, getPost, updatePost } from "./posts.controller.js";

const postRouter=Router()

postRouter.post('/',addPost)
postRouter.get('/',getPost)
postRouter.put('/',updatePost)
postRouter.delete('/',deletePost)


export default postRouter