"use server"

import { revalidatePath } from "next/cache"
import { Post, User } from "./models"
import { connectToDb } from "./utils"
import { signIn, signOut } from "./auth"
import bcrypt from "bcryptjs"
import { Router, redirect } from "next/navigation"


export const addPost = async (prevState, formData) => {

    const { title, slug, desc, userId, img } = Object.fromEntries(formData)

    try {
        connectToDb()
        const newPost = new Post({
            title, desc, slug, userId, img
        })
        await newPost.save();
        console.log("Saved to DB")
        revalidatePath("/blog")
        revalidatePath("/admin")
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
        revalidatePath("/admin")
    } catch (error) {
        console.log(error)
        return { error: "Something went wrong " }
    }

}

export const addUser = async (prevState, formData) => {
    const { username, email, password, img } = Object.fromEntries(formData)

    try {
        connectToDb()
        const newUser = new User({
            username, email, password, img
        })
        revalidatePath("/admin")
        await newUser.save();
        console.log("Saved new user to DB")
    } catch (error) {
        console.log(error)
        return { error: "something went wrong" }
    }
}



export const deleteUser = async (formData) => {

    const { id } = Object.fromEntries(formData)
    try {
        await Post.deleteMany({ userId: id })
        await User.findByIdAndDelete(id)
        console.log("Deleted from DB")
        revalidatePath("/admin")
    } catch (error) {
        console.log(error)
        return { error: "Something went wrong " }
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

export const register = async (previouState, formData) => {
    const { username, email, password, passwordRepeat } = Object.fromEntries(formData)

    if (password !== passwordRepeat) {
        return { error: "Passwords do not match" }
    }

    try {
        connectToDb()
        const user = await User.findOne({ username })

        if (user) {
            return { error: "User already exists. " }
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        await newUser.save()
        console.log("Saved to Db")
        return { success: true }

    }
    catch (err) {
        console.log(err)
        return { error: "Something went wrong ! " }
    }

}

export const login = async (previouState, formData) => {


    const { username, password, } = Object.fromEntries(formData)

    try {
        await signIn("credentials", { username, password })

    }
    catch (err) {
        if (err.name == "CredentialsSignin") {
            return { error: "Invalid username or password. " }
        }
        throw err
    }
}