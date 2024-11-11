import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import './Detail.css'
import Modal from "./Modal";

function Detail() {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true)

    const closeModal = () => { setIsOpen(false); }
    const openModal = () => { setIsOpen(true); }
    const movie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setData(json.data.movie);
        setLoading(false)
    }
    useEffect(() => {
        movie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id]);

    return(
        <div>
            {loading ? <span>Loading...</span> :             
                <div>
                    {isOpen ? <Modal closeModal={closeModal} yt_code={data.yt_trailer_code}/> : null}
                    <div style={{border:"1px dotted gray", display:"flex", width:"1100px", margin:"auto", marginTop:"50px", position:"relative"}}>
                        <div><img src={data.large_cover_image} alt=""/></div>
                            <div style={{marginLeft:"25px"}}>
                                <h2 style={{marginBottom:"100px", marginTop:"50px"}}>Title : {data.title_long}</h2>
                                <ul style={{ display:"flex", paddingLeft:"0px"}}>
                                    <span>Genres:</span>
                                    {Array(data.genres).map((item) => {
                                        return (
                                            <li style={{fontSize:"16px", paddingTop:"2px"}}>{item}</li>
                                        )
                                    })}
                                </ul>
                                <p><span>Summary : </span>{data.description_full === "" ? "owo;;;" : data.description_full}</p>
                                <p><span>Rating: </span>{data.rating}</p>
                                <p><span>Like :</span> {data.like_count}</p>
                                <p><span>RunTime :</span> {data.runtime} min</p>
                                <button style={{
                                    border:"none", 
                                    backgroundColor: isOpen ? "rgba(0,0,0, .01)" : "#fff", 
                                    fontSize:"20px", fontWeight:"600", position:"absolute",
                                    right:"20px", bottom:"20px", cursor:"pointer"
                                    }} onClick={() => openModal()}>Trailer</button>
                            </div>
                        </div>
                </div>
            }
        </div>
    )
}

export default Detail