import { addPost, addUser, deletePost } from "@/lib/action";
import { DELETE } from "../api/blog/[slug]/route";

const ServerActionTestPage = () => {


    return (
        <div style={{
            width: '100%',
            height: 'fit-content',
            display: "flex",
            gap: '30px',
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: 'center'
        }}>
            <form action={addPost} style={{
                gap: '3px',
                width: '50%',
                height: '100%',
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <h2>Create A Post</h2>
                <input type="text" placeholder="title" name="title" />
                <input type="text" placeholder="desc" name="desc" />
                <input type="text" placeholder="slug" name="slug" />
                <input type="text" placeholder="userId" name="userId" />
                <input type="text" placeholder="img" name="img" />

                <button>Create Post</button>
            </form>

            <form action={deletePost} style={{
                width: '50%',
                height: '100%',
                gap: '3px',
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}><h2>Delete Post</h2>
                <input type="text" placeholder="Enter in Post Id" id="userInput" name="id" />
                <button>Delete Post</button>
            </form>
            <form action={addUser} style={{
                width: '50%',
                height: '100%',
                gap: '3px',
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}><h2>Create A User</h2>
                <input type="text" placeholder="username" name="username" />
                <input type="text" placeholder="email" name="email" />
                <input type="text" placeholder="password" name="password" />
                <input type="text" placeholder="img" name="img" />

                <button>Create User</button>
            </form>
        </div>
    )
}

export default ServerActionTestPage;
