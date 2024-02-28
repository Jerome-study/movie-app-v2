import { useContext } from "react";
import { DetailsContext } from "./main";
import { PersonDesign } from "./person";
import { ShowDesign } from "./show";

export const HeroComponent = ({ category }: { category: string}) => {
    const { data } = useContext(DetailsContext);
   
    return(
        <>
            {category === "person"? <PersonDesign data={data} /> : <ShowDesign  data={data}/>}
        </>
    )
}