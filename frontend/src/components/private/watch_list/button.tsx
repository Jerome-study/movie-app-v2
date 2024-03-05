import { Button } from "react-bootstrap";
import { useFetchBackend } from "../../../hooks/useFetch";
import { instance } from "../../../utils/utils";

export const ButtonComponent = ({ id } : { id: number | undefined}) => {
    const { data, loading, error, refetch } = useFetchBackend(import.meta.env.VITE_API_WATCH_CHECKED + `/${id}`);

    const checkedShow = async () => {
        try {
            const response = await instance.post(import.meta.env.VITE_API_CHECKED + `/${id}`)
            if (response.status === 200) {
                refetch();
            }
        } catch(error) {

        }
    }

    

    if (loading) {
        return  <Button className="" style={{ fontSize: "12px"}} variant={"outline-success"}>Loading...</Button>
    }

    if (error) {
        return <h1>Something Went Wrong</h1>
    }
    return(
        <Button onClick={checkedShow} style={{ fontSize: "12px"}} variant={data? "success": "outline-success"}>{data? "Undone" : "Done"}</Button>
    )
}