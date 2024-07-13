import axios from "axios";
import { useEffect, useState } from "react";


export const useFetchMulti = (url: string, category: string, id: number | string | undefined) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        let running = true
        const getData = async () => {
            try {
                const firstResponse = await axios.get(url + import.meta.env.VITE_API_KEY);
                const finalResponse = category === "person"?
                await axios.get(`https://api.themoviedb.org/3/search/multi?query=${firstResponse.data.name}` + `&api_key=${import.meta.env.VITE_API_KEY}`):
                await axios.get("https://api.themoviedb.org/3" + `/${category}/${firstResponse?.data.id}/credits?api_key=${import.meta.env.VITE_API_KEY}`);
                const similarResponse: any = category !== "person" && await axios.get("https://api.themoviedb.org/3" + `/${category}/` + `${id}/similar?api_key=${import.meta.env.VITE_API_KEY}`);
                
                if (running) {
                    setData(category === "person"? {...finalResponse.data.results[0], ...firstResponse.data}:{...finalResponse.data, ...firstResponse.data, similar: similarResponse.data.results } );
                    setLoading(false);
                }
            } catch(error) {
                setError(error);
                setLoading(false)
            }
        }
        getData();
        return () => {
            running = false
        }

    }, [url]);
    return { data, loading, error }
}