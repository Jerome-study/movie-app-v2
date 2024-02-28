import axios from "axios";
import { useEffect, useState } from "react";


export const useFetchMulti = (url: string, category: string, id: number | string | undefined) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        setLoading(true);
        let timer: any;
        const getData = async () => {
            try {
                const firstResponse = await axios.get(url + import.meta.env.VITE_API_KEY);
                const finalResponse = category === "person"?
                await axios.get(`${import.meta.env.VITE_SEARCH_MULTI}?query=${firstResponse.data.name}` + `&api_key=${import.meta.env.VITE_API_KEY}`):
                await axios.get(import.meta.env.VITE_API_BASE_URL + `/${category}/${firstResponse?.data.id}/credits?api_key=${import.meta.env.VITE_API_KEY}`);
                const similarResponse: any = category !== "person" && await axios.get(import.meta.env.VITE_API_BASE_URL + `/${category}/` + `${id}/similar?api_key=${import.meta.env.VITE_API_KEY}`);
                setData(category === "person"? {...finalResponse.data.results[0], ...firstResponse.data}:{...finalResponse.data, ...firstResponse.data, similar: similarResponse.data.results } );
                timer = setTimeout(() => {
                    setLoading(false);
                }, 1000)
                
                
            } catch(error) {
                setError(error);
                setLoading(false)
            }
        }
        getData();
        return () => {
            setLoading(true);
            clearTimeout(timer)
        }

    }, [url]);
    return { data, loading, error }
}