import { useEffect, useState } from 'react';
import './App.css';
import api from './utils/api';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

const App = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  const takeMovies = async() => {
    const data: any = await api.getHomeList();
    setMoviesList(data);
    takeRandomMovie(data);
  };

  const takeRandomMovie = (data: any )=> {
    const originalsNetflix = data.filter((i: { slug: string; }): any => i.slug === 'originals');
    const randomChosen = Math.floor(Math.random() * (originalsNetflix[0].items.results.length -1));
    const chosenMovie = originalsNetflix[0].items.results[randomChosen]; 
    getInfosRandomMovie(chosenMovie);
  };

  const getInfosRandomMovie = async (chosenMovie: any) => {
    const infosRandomMovie: any = await api.getMovieInfo(chosenMovie.id, 'tv');
    setFeatureData(infosRandomMovie)
  };

  useEffect(() => {
    takeMovies();
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return(
    <div className="page">

      <Header black={blackHeader} />
      
      {featureData &&
        <FeaturedMovie item = {featureData}/>
      }
      
      <section className="lists">
        {moviesList.map((item: any, key) => (
          <MovieRow 
            key={key}   
            title={item.title}  
            listMovies={item.items}/>
        ))}
      </section>

      <footer>
        Direitos de imagem para Netflix <br/>
        Dados pegos do site Themoviedb.org
      </footer>
      
      {moviesList.length < 1 &&
        <div className="loading">
            <img src="https://tenor.com/view/netflix-loading-gif-6089689" alt="Carregando"/>
        </div>
      }     
    </div>
  )
}

export default App