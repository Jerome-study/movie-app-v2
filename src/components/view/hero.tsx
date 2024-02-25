import { useContext } from "react";
import { DetailsContext } from "./main";
import { PersonDesign } from "./person";
import { ShowDesign } from "./show/show";



export const HeroComponent = ({ category }: { category: string}) => {
    let { data } = useContext(DetailsContext);
    

    return(
        <>
            {category === "person"? <PersonDesign data={data} /> : <ShowDesign  data={ data } category={ category }  />}
        </>
    )
}