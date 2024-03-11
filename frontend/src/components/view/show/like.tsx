import { useState } from "react";
import { useContext } from "react";
import { instance } from "../../../utils/utils";
import { ContextLikeAndComment } from "./interact";

export const LikeComponent = () => {
    const { data, isLoggedIn, id} = useContext(ContextLikeAndComment)
    const [count, setCount] = useState(data?.likes ? data?.likes : 0);
    const [like, setLike] = useState(data?.isLiked? true : false);
    const [disable, setDisable] = useState(false);

    const handleClick = async () => {
        try {
            if (!isLoggedIn) {
                return alert("You must be logged in First!")
            }

            if (like) {
                return
            }
            setDisable(true)
            setCount((prev : number) => prev + 1);
            setLike(prev => !prev)
            await instance.post(import.meta.env.VITE_API_LIKEMOVIE + `/${id}`);
            setDisable(false)
        } catch(error: any) {
            console.log(error.response?.data)
        }
    }

    const removeLike = async () => {
        try {
            if (!isLoggedIn) {
                return alert("You must be logged in First!")
            };

            if (!like) {
                return
            }
            setCount((prev : number) => prev - 1);
            setLike(prev => !prev)
            await instance.post(import.meta.env.VITE_API_REMOVELIKE + `/${id}`);
            setDisable(false)
            
        } catch(error: any) {
            console.log(error.response?.data)
        }
    }

   
    

   

    return(
        <>
            <div className="text-center d-flex gap-3 align-items-center justify-content-between">
                <button disabled={disable} className="btn p-0" onClick={like ? removeLike : handleClick}>
                    <h3 className={`w-100 user-select-none`} >{like?"❤️" :"🖤"}</h3>
                </button>
                <h4>{count}</h4>
            </div>
        </>
    )
}