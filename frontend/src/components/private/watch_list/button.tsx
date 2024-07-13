import { Button, Spinner } from "react-bootstrap";
import { useFetchBackend } from "../../../hooks/useFetch";
import { instance } from "../../../utils/utils";
import { useEffect, useState } from "react";
import { RefreshButton } from "../../../Refresh";

export const ButtonComponent = ({ id, refetch, setGone } : { id: number | undefined, refetch: Function, setGone: Function}) => {
    const { data, loading, error } = useFetchBackend("/api/ifMovieChecked" + `/${id}`);
    const [checked, setChecked] = useState<boolean | undefined>(data)
    const [disable, setDisabled] = useState<any>()
    const checkedShow = async () => {
        try {
            setDisabled(true)
            setChecked(prev => !prev)
            await instance.post("/api/checkMovie" + `/${id}`, {
                checked
            })
            setDisabled(false);
        } catch(error: any) {
            console.log(error.message)
        }
    }

    const removeShow = async () => {
        try {
            setGone(true)
            const response = await instance.delete("/api/removeWatch" + `/${id}`);
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
        return  <Spinner />
    }

    if (error) {
        return <>
            <div style={{ minHeight: "90vh"}}>
                <RefreshButton refetch={refetch} />
            </div>
        </>
    }
    return(
        <>
            <div>
                <Button className="dropdown-item" disabled={disable} onClick={checkedShow} style={{ fontSize: "10px"}}>{disable && <Spinner variant="success" size="sm" />}{checked === true? "Undone" : "Done"}</Button>
            </div>
            <div>
                <Button className="dropdown-item" onClick={removeShow} style={{ fontSize: "10px"}} variant="outline-danger">Remove</Button>
            </div>
        </>
        
    )
}