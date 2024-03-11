import { LikeComponent } from "./like"
import { CommentComponent } from "./comments/comment"
import { useFetchBackend } from "../../../hooks/useFetch";
import { createContext } from "react";
import { ShowProps, UserProps } from "../../../definitions/models";


export const ContextLikeAndComment = createContext<any>({})

export const LikeAndComment = ({ movie, isLoggedIn } : { movie: ShowProps, isLoggedIn: UserProps} ) => {
    const url = (!isLoggedIn? import.meta.env.VITE_API_GETMOVIEINFO : import.meta.env.VITE_API_MOVIEINFOPRIVATE ) + `/${movie.id}` 
    const { data, loading, error } = useFetchBackend(url);
    const id = movie?.id
    
    if (error) {
        return <p>something went wrong please refresh</p>
    }

    return(
        <>
            <ContextLikeAndComment.Provider value={{data , id, isLoggedIn, loading}}>
                <CommentComponent />
                <LikeComponent />
            </ContextLikeAndComment.Provider>
        </>
    )
}