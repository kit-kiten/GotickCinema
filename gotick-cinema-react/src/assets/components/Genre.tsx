import '../styles/Genre.css'

interface GenreProps{
    genre: string
}

function Genre(props: GenreProps) {

    return (
        <li className="filter-genre__item">
            <label >
                <input type="checkbox" className="filter-genre__checkbox"/>
                {props.genre}
            </label>
        </li>
    )
}

export default Genre