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
    similar?: ShowProps[],
    category?: string,
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


export interface InputFormProps {
    username: string,
    password: string,
    confirmPassword: string,
    first_name?: string,
    last_name?: string
    confirm_password?: string,
    avatar?:string
}


export interface UserProps {
    username?: string,
    first_name?: string,
    last_name?: string,
    bio?: string,
    nickname?: string,
    id?: string,
    created_at?: any,
    updated_at?: any,
    avatar?: string,
    watch_list: []
}

export interface FetchUserProps {
    data: UserProps,
    loading?: Boolean,
    error?: any,
    refetch: Function
}

export interface EditProps {
    username?: string,
    first_name?: string,
    last_name?: string,
    bio?: string,
    nickname?: string,
}

export interface ShowPropsWatchList {
    id?: number,
    name?: string,
    poster_path?: string,
    category?: string
}

export interface WatchListProps {
    data?: ShowPropsWatchList,
    isChecked?: boolean
} 

export interface NavSigninProps{
    data?: UserProps,
    loading?: Boolean,
    refetch: Function,
    setActive: Function 
}

export interface DataProps {
    likes?: number,
    comments?: [],
    isLiked?: UserProps,
    message?: string
}

export interface PersonCommentProps {
    username?: string,
    avatar?: string,
    comment?: string,
    id?: string
}