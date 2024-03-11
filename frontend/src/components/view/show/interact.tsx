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
    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>S</h1>
    }

    return(
        <>
            <ContextLikeAndComment.Provider value={{data , id, isLoggedIn}}>
                <CommentComponent />
                <LikeComponent />
            </ContextLikeAndComment.Provider>
        </>
    )
}