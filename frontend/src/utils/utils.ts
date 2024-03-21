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

export const viewShowFromWatchList = (show: SearchProps | undefined, category: string | undefined) => {
    window.location.href=`/view/${category}/${show?.id}`
}

export const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true
})

export const formatCompactNumber = (number: number): any => {
  console.log("run")
    if (number < 1000) {
        return number;
      } else if (number >= 1000 && number < 1_000_000) {
        return (number / 1000).toFixed(1) + "K";
      } else if (number >= 1_000_000 && number < 1_000_000_000) {
        return (number / 1_000_000).toFixed(1) + "M";
      } else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
        return (number / 1_000_000_000).toFixed(1) + "B";
      } else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
        return (number / 1_000_000_000_000).toFixed(1) + "T";
      }
}
  