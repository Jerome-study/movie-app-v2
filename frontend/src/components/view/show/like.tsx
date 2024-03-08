import { useEffect, useState } from "react";
import { useFetchBackend } from "../../../hooks/useFetch";
import { UserProps } from "../../../definitions/models";
import { instance } from "../../../utils/utils";

export const LikeComponent = ({ id, isLoggedIn } : { id: number, isLoggedIn : UserProps }) => {
    const [count, setCount] = useState(0)
    const { data, loading, error } = useFetchBackend(import.meta.env.VITE_API_GETLIKES + `/${id}`);
    const [like, setLike] = useState(false);
    const [disable, setDisable] = useState(false)

    const handleClick = async () => {
        try {
            if (!isLoggedIn) {
                return alert("You must be logged in First!")
            }

            if (like) {
                return
            }
            setDisable(true)
            setCount(prev => prev + 1);
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
            setCount(prev => prev - 1);
            setLike(prev => !prev)
            await instance.post(import.meta.env.VITE_API_REMOVELIKE + `/${id}`);
            setDisable(false)
            
        } catch(error: any) {
            console.log(error.response?.data)
        }
    }

    useEffect(() => {
        setCount(data?.message)
        setLike(data?.isLiked)
    }, [data?.message, data?.isLiked])
    

    if (error) {
        return <p>Somethign Went Wrong</p>
    }

    if (loading) {
        return <p>loading...</p>
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