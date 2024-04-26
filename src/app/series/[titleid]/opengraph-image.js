import { ImageResponse } from 'next/og'
import { GetAnimeByTitleId } from '@/js/animeFind'

export const alt = 'film-image'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }) {
    const {titleid} = params;
    // fetching from api 
    const anime = await GetAnimeByTitleId(titleid);
    if(anime == null){
        return null;
    }

    if(anime !== null){
        return new ImageResponse(
            (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  width : '100%'
                }}
              >
                <img src={`${anime.bgImg}`} />
              </div>
            )
        )
    }
  }