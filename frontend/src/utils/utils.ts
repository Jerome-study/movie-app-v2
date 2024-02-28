import { PersonProps, ShowProps } from "../definitions/models";

export const viewPerson = ( person: PersonProps, navigate: Function ) => {
    navigate(`/view/person/${person.id}`, { state: person});
}


export const viewShow = ( show: ShowProps, navigate: Function ) => {
    const category = show?.title? "movie" : "tv";
    navigate(`/view/${category}/${show.id}`);
}