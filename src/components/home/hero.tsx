import Carousel from 'react-bootstrap/Carousel';
import { useFetchPrivate } from "../../hooks/useFetchPrivate";
import { CarouselSkeleton } from "../../loading/skeletoncarousel";
import { viewShow } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';

export const HeroComponent = () => {
    const navigate = useNavigate();
    const { data, loading, error } = useFetchPrivate(`${import.meta.env.VITE_NOW_PLAYING_URL}?api_key=`, )

    if (error) {
        return <h1>SOmethiong went wrong</h1>
    }

    return(
        <>
            {loading && <CarouselSkeleton />}
            {!loading && 
            
            <Carousel className="carouselHero bg-white p-1 shadow rounded border border-2" >
            {!loading && data?.results.map((movie: any) => {
                return(
                    <Carousel.Item key={movie.title} className="carousel-item rounded" onClick={() => viewShow(movie, navigate)}>
                        <img
                            className="d-block w-100 rounded"
                            src={import.meta.env.VITE_IMG_URL_POSTER + movie.backdrop_path}
                            alt="First slide"
                        ></img>
                        <Carousel.Caption>
                        <h3>{movie.title}</h3>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>     
            
            }       
        </>
    )
}