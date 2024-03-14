import { useFetchPrivate } from "../../hooks/useFetchPrivate"
import { CardTrendingComponent } from "./card-trending";
import { CardLoading } from "../../loading/loadingSpinner";
import { PersonProps } from "../../definitions/models";
import { RefreshButton } from "../../Refresh";

export const TrendingPeopleComponent = () => {
    const { data, loading, error, refetch } = useFetchPrivate(`${import.meta.env.VITE_TRENDING_PEOPLE_URL}?api_key=`);
    
    if (error) {
        return <RefreshButton refetch={refetch} />
    }


    return(
        <div className="mt-5">
            <h4 className="pb-2 text-lg-center">Trending People Today</h4>
            {loading && <CardLoading />}
            {!loading && 
                <div className="d-flex overflow-auto gy-3 pt-3 pb-5 gap-3 px-2">
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