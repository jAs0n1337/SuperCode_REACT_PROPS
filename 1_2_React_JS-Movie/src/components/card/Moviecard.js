import './Moviecard.css'

function Moviescard(object) {
    console.log(object)
    return (
        <div className='movieCard'>
            <p>{object.titleCard}</p>
            <p>{object.yearCard}</p>
            <p>{object.directorCard}</p>
            <p>{object.durationCard}</p>
            <p>{object.rateCard}</p>
            <div className="genre">{object.genreCard.map((gen) => {
                return <p>{gen}</p>;
            })}</div>
        </div>
    )
}

export default Moviescard;