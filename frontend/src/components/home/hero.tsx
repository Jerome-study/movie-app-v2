import Carousel from 'react-bootstrap/Carousel';
import { useFetchPrivate } from "../../hooks/useFetchPrivate";
import { CarouselSkeleton } from "../../loading/skeletoncarousel";
import { viewShow } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';
import { RefreshButton } from '../../Refresh';

export const HeroComponent = () => {
    const navigate = useNavigate();
    const { data, loading, error, refetch } = useFetchPrivate(`${import.meta.env.VITE_NOW_PLAYING_URL}?api_key=`, );
   
    function setStyles(movie : any) {
        return {
            backgroundImage :`linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(13,9,7)), 
            linear-gradient(to top, rgba(0,0,0,0) 50%, rgba(0,0,0,1)),
            url(${import.meta.env.VITE_IMG_URL_POSTER + movie?.backdrop_path})`,
            backgroundRepeat: "no-repeat"
        }
    } 

    if (error) {
        return <RefreshButton refetch={refetch} />
    }

    return(
        <>
            {loading && <CarouselSkeleton />}
            {!loading && 
            
            <Carousel indicators={false}>
            {!loading && data?.results.map((movie: any) => {
                return(
                    <Carousel.Item className='poster-bg' style={movie?.backdrop_path? setStyles(movie) : {}} key={movie.title} onClick={() => viewShow(movie, navigate)}>
                        
                        <Carousel.Caption>
                            <h1>{movie.title}</h1>
                            <p>{movie?.tagline}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>     
            
            }       
        </>
    )
}