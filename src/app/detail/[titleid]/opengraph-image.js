import { ImageResponse } from 'next/og'
import { MovieSearchByTitleId } from '@/js/movieFind'

export const alt = 'film-image'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }) {
    const {titleid} = params;
    // fetching from api 
    const movie = await MovieSearchByTitleId(titleid);
    if(movie == null){
        return null;
    }

    if(movie !== null){
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
                <img src={movie.posterUrl} />
              </div>
            )
        )
    }
  }