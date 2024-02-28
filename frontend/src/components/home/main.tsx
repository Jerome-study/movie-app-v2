import { HeroComponent } from "./hero";
import { PopularComponent } from "./popular";
import { TopRatedComponent } from "./top-rated";
import { TrendingPeopleComponent } from "./trending-people";
import { TvShowComponents } from "./tv-shows";

export const MainComponent = () => {
   
    return(
        <>
            <HeroComponent />
            <div className="row ">
                <div className="col col-lg-7">
                    <PopularComponent />
                    <TopRatedComponent />
                    <TvShowComponents />
                </div>
                <div className="col col-lg-5 position-relative">
                    <TrendingPeopleComponent  />
                </div>
            </div>
        </>
    )
}