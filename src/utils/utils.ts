import { PersonProps, SearchProps, ShowProps } from "../definitions/models";

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