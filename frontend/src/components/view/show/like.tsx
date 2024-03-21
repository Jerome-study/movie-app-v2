import { useEffect, useMemo, useState } from "react";
import { useContext } from "react";
import { instance } from "../../../utils/utils";
import { ContextLikeAndComment } from "./interact";
import { FaHeart } from "react-icons/fa";
import { Spinner } from "react-bootstrap";
import { formatCompactNumber } from "../../../utils/utils";

export const LikeComponent = () => {
    const { data, isLoggedIn, id, loading} = useContext(ContextLikeAndComment)
    const [isCompact, setIsCompact] = useState(true);
    const [count, setCount] = useState(0);
    const [like, setLike] = useState(false);
    const [disable, setDisable] = useState(false);
    const compactNumber = useMemo(() => formatCompactNumber(count), [count])
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

    useEffect(() => {
        setCount(data?.likes)
        setLike(data?.isLiked)
    }, [data])
   
    return(
        <>
            <div className="text-center d-flex gap-1 align-items-center justify-content-between">
                <button disabled={disable} className="btn px-2 py-1 bg-dark rounded-3 " onClick={like ? removeLike : handleClick}>
                    <FaHeart color={like? "red" : "white"} size={"2rem"} />
                </button>
                {loading && 
                    <Spinner  className="ms-2" animation="border" variant="danger"  />
               
                }
                {!loading && 
                    <div className="like-hover" >
                        <h4 onClick={() => setIsCompact(prev => !prev)}>{isCompact? compactNumber : count}</h4>
                    </div>
                }
            </div>
        </>
    )
}