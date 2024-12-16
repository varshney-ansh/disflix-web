import { notFound } from 'next/navigation';
import { GetAnimeByTitleId } from '@/js/animeFind';
import WatchComponent from '@/components/watch/watch';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getSubscriptionDetail } from '@/js/planSave';

export const generateMetadata = async({params}) => {
    const titleid = params.slug[0];
    console.log({titleid})
    // fetching from api 
    const anime = await GetAnimeByTitleId(titleid);
    const episodeNo = params.slug[1] - 1;
    
    if(anime == null){
        return null;
    }

    if(anime !== null){
        return{
            title: `Watch ${anime.title} S${anime.season} EP${episodeNo} | Disflix India`,
            description: anime.desc
        }
    }
}

const AnimeWatchPage = async({params}) =>{
    let videoUrl;
    let ads;
    const session = await getServerSession(authOptions);

    if(params.slug.length > 2){
        notFound();
    }

    if(params.slug.length < 2){
        notFound();
    }

    const titleId = params.slug[0];
    const episodeNo = params.slug[1] - 1;
    
    const getAnime = await GetAnimeByTitleId(titleId);

    if(getAnime === null){
        notFound();
    }

    const maxNo = getAnime.episodes.length - 1;

    if(episodeNo > maxNo){
        notFound();
    }

    const subscribeDetail = await getSubscriptionDetail(session.user.email);
    if(subscribeDetail !== null){
        if(subscribeDetail.plan_details.name === 'Premium Subscription'){
            videoUrl = `${getAnime.episodes[episodeNo].videoUrl}720.m3u8`;
            ads = false;
        }
        if(subscribeDetail.plan_details.name === 'Elite Subscription'){
            videoUrl = `${getAnime.episodes[episodeNo].videoUrl}480.m3u8`;
            ads = true;
        }
        if(subscribeDetail.plan_details.name === 'Mega Fan Subscription'){
            videoUrl = `${getAnime.episodes[episodeNo].videoUrl}720.m3u8`;
            ads = true;
        }
        if(subscribeDetail.plan_details.name === 'Fan Subscription'){
            videoUrl = `${getAnime.episodes[episodeNo].videoUrl}480.m3u8`;
            ads = false;
        }
    }

    if(subscribeDetail === null){
        videoUrl = `${getAnime.episodes[episodeNo].videoUrl}360.m3u8`;
        ads = true;
    }

    return(
        <div><WatchComponent ads={ads} url={`http://ftp.itec.aau.at/datasets/DASHDataset2014/ElephantsDream/15sec/ElephantsDream_15s_onDemand_2014_05_09.mpd`} img={getAnime.episodes[episodeNo].posterImg} /></div>
    )
}

export default AnimeWatchPage;