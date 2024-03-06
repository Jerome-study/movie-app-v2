import { Button } from "react-bootstrap";
import { useFetchBackend } from "../../../hooks/useFetch";
import { instance } from "../../../utils/utils";
import { useEffect, useState } from "react";

export const ButtonComponent = ({ id, refetch, setGone } : { id: number | undefined, refetch: Function, setGone: Function}) => {
    const { data, loading, error } = useFetchBackend(import.meta.env.VITE_API_WATCH_CHECKED + `/${id}`);
    const [checked, setChecked] = useState<boolean | undefined>(data)
    const checkedShow = async () => {
        try {
            setChecked(() => {
                if (checked) {
                    return false
                } else {
                    return true
                }
            })
            await instance.post(import.meta.env.VITE_API_CHECKED + `/${id}`, {
                checked
            })
        } catch(error: any) {
            console.log(error.message)
        }
    }

    const removeShow = async () => {
        try {
            setGone(true)
            const response = await instance.delete(import.meta.env.VITE_API_REMOVEMOVIE + `/${id}`);
            if (response.data.message === 0) {
                refetch()
            }
        } catch(error : any) {
            console.log(error?.message)
        }
    }


    useEffect(() => {
        setChecked(data);
    }, [data])
    

    if (loading) {
        return  <Button className="" style={{ fontSize: "12px"}} variant={"outline-success"}>Loading...</Button>
    }

    if (error) {
        return <h1>Something Went Wrong</h1>
    }
    return(
        <>
            <div className="row gap-4 mt-1 align-items-center">
                <div className="col-4">
                    <Button onClick={checkedShow} style={{ fontSize: "12px"}} variant={checked === true? "success": "outline-success"}>{checked === true? "Undone" : "Done"}</Button>
                </div>
                <div className="col-4">
                    <Button onClick={removeShow} style={{ fontSize: "12px"}} variant="outline-danger">Remove</Button>
                </div>
            </div>
        </>
        
    )
}