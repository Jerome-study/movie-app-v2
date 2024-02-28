export const ShowDesign = ({ data }: { data: any}) => {
    return(
        <h1>{data?.name || data?.title}</h1>
    )
}