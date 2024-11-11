import Youtube from 'react-youtube'

function Modal({closeModal, yt_code}) {

    return(
        <div style={{width:"100%", height:"100%", position:"absolute",top:"0px", left:"0px", backgroundColor:"rgba(0,0,0, .3)"}}>
            <div style={{position:"relative"}}>
                <div style={{position:"absolute", width:"1000px", height:"800px", top:"100px", left:"25%", backgroundColor:"#fff", zIndex:"10", display:"block"}}>
                    <div style={{position:"relative"}}>
                        {yt_code === "" ? <p style={{position:"absolute", top:"300px", left:"32%", fontSize:"30px", fontWeight:"700" }}>doesn't exist youtube link! </p>: <Youtube videoId={yt_code} opt={{
                            width:'900px', height:'700px',
                            playerVars : {
                                autoplay : 1,
                                rel: 0,
                                modestbranding: 1,
                            },
                        }} onEnd={(e) => {e.target.stopVideo(0)}} style={{
                            position:"absolute", top:"200px", left:"200px"
                        }} />}
                        <button onClick={()=>closeModal()} style={{ 
                                position:"absolute", 
                                top:"20px", right:"20px", 
                                backgroundColor:"#fff",
                                border:"0.5px solid gray", 
                                fontSize:"20px", padding:"5px 15px",
                                cursor:"pointer"
                             }}>X</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;