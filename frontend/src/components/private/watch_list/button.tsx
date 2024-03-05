import { Button } from "react-bootstrap";
import { useFetchBackend } from "../../../hooks/useFetch";
import { instance } from "../../../utils/utils";
import { useEffect, useState } from "react";

export const ButtonComponent = ({ id } : { id: number | undefined}) => {
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
            await instance.post(import.meta.env.VITE_API_CHECKED + `/${id}`)
        } catch(error) {

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
        <Button onClick={checkedShow} style={{ fontSize: "12px"}} variant={checked === true? "success": "outline-success"}>{checked === true? "Undone" : "Done"}</Button>
    )
}