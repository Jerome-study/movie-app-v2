import { useContext } from "react";
import { DetailsContext } from "./main";
import { PersonDesign } from "./person";
import { ShowDesign } from "./show/show";



export const HeroComponent = () => {
    const { category } = useContext(DetailsContext);

    return(
        <>
            {category === "person"? <PersonDesign /> : <ShowDesign  />}
        </>
    )
}