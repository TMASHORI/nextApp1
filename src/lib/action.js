"use server"

import { revalidatePath } from "next/cache"
import { Post, User } from "./models"
import { connectToDb } from "./utils"
import { signIn, signOut } from "./auth"

export const addPost = async (formData) => {

    const { title, slug, desc, userId, img } = Object.fromEntries(formData)

    try {
        connectToDb()
        const newPost = new Post({
            title, desc, slug, userId, img
        })
        await newPost.save();
        console.log("Saved to DB")
        revalidatePath("/blog")
    } catch (error) {
        console.log(error)
        return { error: "something went wrong" }
    }
}

export const deletePost = async (formData) => {

    const { id } = Object.fromEntries(formData)
    try {
        await Post.findByIdAndDelete(id)
        console.log("Deleted from DB")
        revalidatePath("/blog")
    } catch (error) {
        console.log(error)
        return { error: "Something went wrong " }
    }

}

export const addUser = async (formData) => {
    const { username, email, password, img } = Object.fromEntries(formData)

    try {
        connectToDb()
        const newUser = new User({
            username, email, password, img
        })
        await newUser.save();
        console.log("Saved new user to DB")
    } catch (error) {
        console.log(error)
        return { error: "something went wrong" }
    }
}

export const handleGithubLogin = async () => {
    "use server"
    await signIn("github")
}

export const handleLogout = async () => {
    "use server"
    await signOut()
}

export const register = async (formData) => {
    const { username, email, password, passwordRepeat } = Object.fromEntries(formData)

    if (password !== passwordRepeat) {
        return "Passwords do not match"
    }

    try {
        connectToDb()
        const user = await User.findOne({username})

        if(user){
            return "User already exists. "
        }

        const newUser = new User({
            username,
            email,
            password
        })
        await newUser.save()
        console.log("Saved to Db")
    }
    catch (err) {
        console.log(err)
        return { error: "Something went wrong ! " }
    }

}