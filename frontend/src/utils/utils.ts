import { PersonProps, SearchProps, ShowProps } from "../definitions/models";
import axios from "axios";

export const viewPerson = ( person: PersonProps, navigate: Function ) => {
    navigate(`/view/person/${person.id}`);
}


export const viewShow = ( show: ShowProps, navigate: Function ) => {
    const category = show?.title? "movie" : "tv";
    navigate(`/view/${category}/${show.id}`);
}

export const viewPersonReload = (person: SearchProps ) => {
    window.location.href=`/view/person/${person.id}`
}

export const viewShowReload = (show: SearchProps ) => {
    const category = show?.title? "movie" : "tv";
    window.location.href=`/view/${category}/${show.id}`
}

export const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true
})