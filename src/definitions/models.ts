export interface PersonProps {
    name?: string,
    id?: number,
    profile_path?: string
}

export interface ShowProps {
    id?: number,
    name?: string,
    backdrop_path?: string,
    poster_path?: string,
    title?: string
    overview?: string,
    cast?: PersonProps[]
    tagline?: string,
    first_air_date?: string,
    release_date?: string
    last_air_date?: string,
    status?: string,
    number_of_seasons: number,
    number_of_episodes: number,
    runtime: number,
    similar?: ShowProps[]
}

export interface Props {
    cast?: PersonProps[]
    similar?: ShowProps[]
}


export interface SearchProps {
    id?: number,
    name?: string,
    backdrop_path?: string,
    poster_path?: string,
    title?: string,
    profile_path?: string
}
