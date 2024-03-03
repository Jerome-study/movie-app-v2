import { useFetchPrivate } from "../../hooks/useFetchPrivate"
import { CardTrendingComponent } from "./card-trending";
import { TrendingCardSkeleton } from "../../loading/skeletontrending";
import { PersonProps } from "../../definitions/models";


export const TrendingPeopleComponent = () => {
    const { data, loading, error } = useFetchPrivate(`${import.meta.env.VITE_TRENDING_PEOPLE_URL}?api_key=`);
    
    if (error) {
        return <h1>Something went wrong</h1>
    }


    return(
        <div className="sticky-top pt-5" style={{ top: "0"}}>
            <h4 className="text-lg-center mb-4">Trending People Today</h4>
            {loading && <TrendingCardSkeleton />}
            {!loading && 
                <div className="d-flex gap-4 trending-wrap overflow-auto py-3 justify-content-lg-center trending-card-wrapper">
                    {data?.results.map((person: PersonProps) => {
                        return(
                            <CardTrendingComponent key={person.id} person={person} />
                        )
                    })}
                </div>
            }
        </div>

    )

}