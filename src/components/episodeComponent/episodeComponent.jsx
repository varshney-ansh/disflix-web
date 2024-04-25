import EpisodeContainer from "../episodeContainer/episodeContainer";

const EpisodeComponent = ({episodes, titleId}) => {
    return(
        <>
            {episodes.map((episode)=>{
                return(
                    <EpisodeContainer episode={episode} key={episode.episodeNo} titleId={titleId}/>
                )
            })}
        </>
    )
}

export default EpisodeComponent;