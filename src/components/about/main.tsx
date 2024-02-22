export const MainComponent = () => {
    return(
        <>
            
            
                <div className="w-100 py-3 px-4" style={{ maxWidth: "50rem", marginInline: "auto", backgroundColor: "#0d253f"}}>
                    <div className="text-center">
                        <img className="w-75"  src="/tmdb-long.svg" alt="" />
                    </div>
                    <div className="mt-5">
                        <h4 className="text-white fs-6 display-6">
                            "This product uses the TMDB API but is not endorsed or certified by TMDB."
                        </h4>
                        <h4 className="text-white fs-6 display-6">
                            The purpose of this project is to practice my front-end knowledge and build a
                            movie website. Thanks to "The Movie Datbase" for providing an API that can be 
                            used by the developer. All the posters, images, names, API is from the <a className="text-white" href="https://www.themoviedb.org/">"The Movie Database"</a>
                        </h4>
                        <h4 className="text-white fs-6 display-6">
                            This Project is non-commercial and no money involved!.The only
                            thing I do in this API is to practice my skills and nothing more.
                        </h4>
                        
                    </div>
                </div>
            
            
        </>
    )
}