import { Button } from "react-bootstrap"
import { instance } from "../../../utils/utils"
import { ShowProps, UserProps } from "../../../definitions/models";
import { useFetchBackend } from "../../../hooks/useFetch";
import { useEffect, useState } from "react";

export const ButtonComponent = ({ data, isLoggedIn }: { data: ShowProps, isLoggedIn: UserProps}) => {
    const { data: response, loading, error } = useFetchBackend("/api/ifMovieExist" + `/${data?.id}`) 
    const [watch, setWatch] = useState(response?.message);
    const [disable1, setDisable1] = useState<any>()
    const [disable2, setDisable2] = useState<any>()
    const addMovie = async () => {
        try {
            if (!isLoggedIn) {
                return alert("You must be logged in First!")
            }
            setDisable2(true)
            setWatch(true)
            await instance.post("/api/addWatch", {
                id: data?.id,
                name: data?.title || data?.name,
                poster_path: data?.poster_path,
                category: data?.title? "movie" : "tv"
            });
            setDisable2(false)
        } catch(error) {
            
        }
    }

    const removeMovie = async () => {
        try {
            setDisable1(true)
            setWatch(false)
            await instance.delete("/api/removeWatch" + `/${data?.id}`); 
            setDisable1(false)
        } catch(error) {
            
        }
    }

    useEffect(() => {
        setWatch(response?.message)
    }, [response])
    
    if (loading) {
        return <Button className="mt-2 w-100" variant="warning" disabled>Loading....</Button>
    }

    if (error) {
        return <h1>Something Went Wrong</h1>
    }

    return(
        <>  
            
            { watch?
                <Button disabled={disable2} onClick={removeMovie} className="mt2 w-100" variant="warning">Remove From Watch List</Button>:
                <Button disabled={disable1} onClick={addMovie} className="mt2 w-100" variant="warning">Add To Watch List</Button>
            }
        </>
    )
}