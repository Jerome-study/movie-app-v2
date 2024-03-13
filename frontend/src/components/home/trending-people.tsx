import { useFetchPrivate } from "../../hooks/useFetchPrivate"
import { CardTrendingComponent } from "./card-trending";
import { TrendingCardSkeleton } from "../../loading/skeletontrending";
import { PersonProps } from "../../definitions/models";
import { RefreshButton } from "../../Refresh";

export const TrendingPeopleComponent = () => {
    const { data, loading, error, refetch } = useFetchPrivate(`${import.meta.env.VITE_TRENDING_PEOPLE_URL}?api_key=`);
    
    if (error) {
        return <RefreshButton refetch={refetch} />
    }


    return(
        <div className="pt-5 sticky-top" style={{ top: "0"}}>
            <h4 className="pb-2 text-lg-center">Trending People Today</h4>
            {loading && <TrendingCardSkeleton />}
            {!loading && 
                <div className="d-flex overflow-auto gap-1 py-4 trending-wrap trending-card-wrapper justify-content-lg-around">
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