import React from 'react';
import './FeaturedMovie.css';

const FeaturedMovie = ({item}: any) => {
    console.log(item.vote_avarage)
    const firstDate = new Date(item.first_air_date);

    const genres = [];
    for (let i in item.genres){
        genres.push( item.genres[i].name )
    };

    return(
        <section 
            className="featured"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}    
        >
            <div className="featured--verticalTransition">
                <div className="featured--horizontalTransition">
                    <div className="featured--title">
                        {item.original_name}
                    </div>
                    <div className="featured--infos">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">
                            {firstDate.getFullYear()}
                        </div>
                        <div className="featured--seasons">
                            {item.number_of_seasons}{item.number_of_seasons !== 1 ? ' Temporadas' : ' Temporada'}
                        </div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured--buttonsArea">
                        <a href={`/watch/${item.id}`} className="featured--watchButton">► Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--addMyListButton">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres">
                        <strong>Gêneros: </strong>
                        {genres.join(', ')}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie;
