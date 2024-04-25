import { MovieSearchByTitleId } from '@/js/movieFind.js';
import WatchComponent from '@/components/watch/watch';
import { notFound } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getSubscriptionDetail } from '@/js/planSave';

export const generateMetadata = async({params}) => {
    const {titleid} = params;
    // fetching from api 
    const movie = await MovieSearchByTitleId(titleid);
    if(movie == null){
        return null;
    }

    if(movie !== null){
        return{
            title: `Watch ${movie.title} | Disflix India`,
            description: movie.desc
        }
    }
}

const WatchPage = async({ params }) =>{
    const { titleid } = params;
    const movieSearch = await MovieSearchByTitleId(titleid);
    const session = await getServerSession(authOptions);
    let videoUrl;
    let ads;
    
    if(movieSearch === null){
        notFound();
    }
    
    if(movieSearch !== null){   
        const subscribeDetail = await getSubscriptionDetail(session.user.email);
        if(subscribeDetail !== null){
            if(subscribeDetail.plan_details.name === 'Premium Subscription'){
                videoUrl = `${movieSearch['videoUrl']}720.m3u8`;
                ads = false;
            }
            if(subscribeDetail.plan_details.name === 'Elite Subscription'){
                videoUrl = `${movieSearch['videoUrl']}480.m3u8`;
                ads = false;
            }
            if(subscribeDetail.plan_details.name === 'Mega Fan Subscription'){
                videoUrl = `${movieSearch['videoUrl']}720.m3u8`;
                ads = false;
            }
            if(subscribeDetail.plan_details.name === 'Fan Subscription'){
                videoUrl = `${movieSearch['videoUrl']}480.m3u8`;
                ads = false;
            }
        }

        if(subscribeDetail === null){
            videoUrl = `${movieSearch['videoUrl']}360.m3u8`;
            ads = true;
        }
        
        return(
            <div><WatchComponent ads={ads} url={videoUrl} img={movieSearch['bannerImg']} /></div>
        )
    }

}

export default WatchPage;