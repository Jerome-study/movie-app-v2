import { useEffect, useState } from "react";
import { instance } from "../utils/utils";



export const useFetchBackend = (url: string) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState<any>()

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            try {
                const response = await instance.get(url);
                setData(response.data);
                setLoading(false)
                
            } catch(error) {
                setError(error);
                setLoading(false)
            }
        }
        getData();
        return () => {
            setLoading(true);
        }

    }, [url]);
    return { data, loading, error }
}