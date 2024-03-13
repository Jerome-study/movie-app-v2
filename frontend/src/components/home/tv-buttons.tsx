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
            <div className="border rounded-3">
                {buttons.map((button) => {
                    return(
                        <button value={button} key={button} className={active === button? `${button}-radius tv-button-edit button-size`: "button-size tv-button-edit text-light"} onClick={handleClick}>
                            {button === "popular" ? "Popular" : button === "airing_today"? "Airing Today" : "Top Rated" }
                        </button>
                    )
                })}
            </div>
        </>
    )
}