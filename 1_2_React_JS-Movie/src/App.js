import './App.css';
import Moviecard from './components/card/Moviecard';
import Movielist from './components/movielist/Movielist';


function App() {
  return (
    <div className='App'>{

      Movielist.map((item) => {
        return <Moviecard titleCard={item.title} yearCard={item.year} directorCard={item.director} durationCard={item.duration} rateCard={item.rate} genreCard={item.genre} />
      })
    }</div>);

}

export default App;
