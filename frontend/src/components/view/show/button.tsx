import { Button } from "react-bootstrap"
import { instance } from "../../../utils/utils"
import { ShowProps, FetchUserProps } from "../../../definitions/models";
import { useFetchBackend } from "../../../hooks/useFetch";
import { useEffect, useState } from "react";

export const ButtonComponent = ({ data }: { data: ShowProps}) => {
    const { data: response, loading, error } = useFetchBackend(import.meta.env.VITE_API_ISMOVIEEXIST + `/${data?.id}`)
    const { data: isLoggedIn}: FetchUserProps = useFetchBackend(import.meta.env.VITE_API_GETUSER) 
    const [watch, setWatch] = useState(response?.message);
    const addMovie = async () => {
        try {
            if (!isLoggedIn) {
                return alert("You must be logged in First!")
            }
            setWatch(true)
            await instance.post(import.meta.env.VITE_API_ADDMOVIE, {
                id: data?.id,
                name: data?.title || data?.name,
                poster_path: data?.poster_path,
                category: data?.title? "movie" : "tv"
            });
        } catch(error) {
            
        }
    }

    const removeMovie = async () => {
        try {
            setWatch(false)
            await instance.delete(import.meta.env.VITE_API_REMOVEMOVIE + `/${data?.id}`);
        } catch(error) {
            
        }
    }

    useEffect(() => {
        setWatch(response?.message)
    }, [response])
    
    if (loading) {
        return <Button className="mt-2" variant="warning">Loading....</Button>
    }

    if (error) {
        return <h1>Something Went Wrong</h1>
    }

    return(
        <>  
            { watch?
                <Button onClick={removeMovie} className="mt-2" variant="warning">Remove From Watch List</Button>:
                <Button onClick={addMovie} className="mt-2" variant="warning">Add To Watch List</Button>
            }
        </>
    )
}