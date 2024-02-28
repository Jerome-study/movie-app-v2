import { MouseEvent, useState } from "react"
export const TvButtonsComponent = ({ setMovie }: { setMovie: Function}) => {

    const [active, setActive] = useState<string>("popular");
    const buttons = ["popular", "airing_today", "top_rated"];

    const handleClick = (e: MouseEvent<HTMLElement>) => {
        const button = e.target as HTMLInputElement;
        setActive(button.value);
        setMovie(button);
    };
    return(
        <>
            <div className="border border-3 rounded-pill">
                {buttons.map((button) => {
                    return(
                        <button style={{paddingInline: "10px"}} value={button} key={button} className={active === button? `${button}-radius tv-button-edit button-size`: "button-size tv-button-edit rounded-3"} onClick={handleClick}>{button}</button>
                    )
                })}
            </div>
            
        </>
    )
}