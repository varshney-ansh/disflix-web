import { mainWithAds, mainWithoutAds }from "./playerVideo";
import { useEffect } from "react";

const VideoPlayer = ({VideoUrl, posterImg, ads}) =>{
  
    // using UseEffect to load html first and then js is load when container is ready
    useEffect(()=>{
      if (document.readyState !== "loading") {
          console.log("document is already ready, just execute code here");
          if(ads == true){
            mainWithAds(VideoUrl);
          }
          else{
            mainWithoutAds(VideoUrl);
          }
        } else {
          document.addEventListener("DOMContentLoaded", function () {
            console.log("document was not ready, place code here");
            if(ads == true){
              mainWithAds(VideoUrl);
            }
            else{
              mainWithoutAds(VideoUrl);
            }
          });
        }
  }, []); 
    
    return(
        <div id="video-container">
            <video
                id="video"
                autoPlay
                poster={posterImg}
            />
        </div>        
    )
}

export default VideoPlayer;