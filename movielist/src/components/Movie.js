import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./Movie.css"

function Movie({id, coverImg, title, year, summary, genres}) {

    return(
        <Link to={`/movie/${id}`} style={{textDecoration:"none"}}>
            <div className="transform" style={{
                    border:"1px solid gray" , 
                    width:"500px", height:"650px", 
                    display:"block", marginBottom:"50px",
                    marginLeft:"50px", padding:"0px 20px", 
                    color:"black", borderRadius:"10px"
                 }}>
                <img src={coverImg} alt={title} style={{margin:"auto", display:"block", marginTop:"30px"}} />
                <div>
                    <h2 style={{textAlign:"center"}}>{title}</h2>
                    <h3>{year}</h3>
                    <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                    <ul style={{ display:"flex", marginLeft:"-50px" }}>
                        {genres.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
       </Link>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

export default Movie