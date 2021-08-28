import React, { useState } from 'react'
import './MovieRow.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const MovieRow = ({title, listMovies}: any) => {
    const [scrollX, setScrollX] = useState(-600);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = listMovies.results.length * 150;

        if ((window.innerWidth - listWidth) > x) {
            x = window.innerWidth - listWidth - 60;
        }
        setScrollX(x);
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>
            <div className="movieRow--listArea">
                <div 
                    className="movieRow--list" 
                    style={{
                        marginLeft: scrollX,
                        width: listMovies.results.length * 150
                    }}
                >
                    {listMovies.results.length > 0 && 
                        listMovies.results.map((item: any, key: any)=>(
                            <div className="movieRow--item" key={key}>
                                <img 
                                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} 
                                    alt={item.original_title} 
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieRow;