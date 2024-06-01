import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// TEMPORARY DATA
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "No name" },
    
];

const posts = [
    { id: 1, title: "Post 1", body: "......", userId: 1 },
    { id: 2, title: "Post 2", body: "......", userId: 1 },
    { id: 3, title: "Post 3", body: "......", userId: 2 },
    { id: 4, title: "Post 4", body: "......", userId: 2 },
];

export const getPosts = async () => {

    // // ////
    // try {
    //     return posts
    // } catch (error) {
    //     console.log(error)
    //     throw new Error("Failed to fetch posts")
    // }

    noStore()
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (err) {
        throw new Error("Failed to fetch posts!");
    }
};

export const getPost = async (id) => {


    // try {


    //     const OnePost = await posts.find((post) => { return post.id === parseInt(id) })
    //     return OnePost
    // } catch (error) {
    //     console.log(error)
    //     throw new Error("Failed to fetch post")
    // }

    try {
        connectToDb();
        const post = await Post.findById(id);
        return post;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch post!");
    }
};

export const getUser = async ({userId}) => {


    // try {
    //     const GetUser = await users.find((user) => { return user.id === id })
    //     return GetUser
    // } catch (error) {
    //     console.log(error)
    //     throw new Error("Failed to fetch user")
        // }


    noStore();
    try {
        connectToDb();
        const user = await User.findOne({userId:userId})
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
};

export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
};
