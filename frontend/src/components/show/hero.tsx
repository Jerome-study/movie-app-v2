import { useContext } from "react";
import { DetailsContext } from "./main";



export const HeroComponent = () => {
    const { data } = useContext(DetailsContext);
    return(
        <h1>{data?.title || data?.name}</h1>
    )
}