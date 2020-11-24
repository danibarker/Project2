import React, {useState, useEffect} from 'react';
import '../css/App.css';

function MovieDetail ({match}) {
    useEffect(() => {
        fetchItem();
        console.log('this is the match');
        console.log(match)
    }, []);

    const [item,setItem]= useState({})

    //const [item, setItem] = useState({
    //    images:{}
    //}); // curly brackets because we will fetch data from an API

    const fetchItem = async () => {
        const fetchItem = await fetch(`
        https://api.themoviedb.org/3/movie/${match.params.id}?api_key=fb1465a6d4ccc4cd5448d6f97c18f3c1&language=en-US`
        );
        const item = await fetchItem.json();
        setItem(item);
        console.log('This is the item');
        console.log(item);
    };
// item.name we can get this from the console.log above to see all the properties we can use
//poster_path image={movie.poster_path} 

// https://image.tmdb.org/t/p/w600_and_h900_bestv2/
  return (
    <div >
        <div className="MovItem">
         <h1>{item.title}</h1> 
        </div>
          <div className="image">
            <img src= {" https://image.tmdb.org/t/p/w600_and_h900_bestv2"+item.poster_path} alt=" " style={{width: '300px' }} />
            <h3 style={{width: '300px' }}>{item.overview} </h3>
          </div>
      
    </div>
  );
}

export default MovieDetail;
