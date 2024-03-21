import { HeroComponent } from "./hero"

export const MainComponent = () => {
    return(
        <>
            <div className="pt-5" style={{ backgroundColor: "#f2f2f2", minHeight: "90vh"}}>
                <HeroComponent />
            </div>
        </>
    )
}