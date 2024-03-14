import { Container } from "react-bootstrap";
import { HeroComponent } from "./hero";
import { PopularComponent } from "./popular";
import { TopRatedComponent } from "./top-rated";
import { TrendingPeopleComponent } from "./trending-people";
import { TvShowComponents } from "./tv-shows";

export const MainComponent = () => {
   
    return(
        <>
            <HeroComponent />
            <div style={{ backgroundColor: "#0D0907", color: "#f4f3f2" }}>
                <Container>
                    <PopularComponent />
                    <TopRatedComponent />
                    <TvShowComponents /> 
                    <TrendingPeopleComponent  />
                </Container>
            </div>
        </>
    )
}