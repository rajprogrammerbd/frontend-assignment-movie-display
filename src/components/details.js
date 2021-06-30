import closerBar from "./../images/close-icon.svg";

function Details({ obj, setFromOutside }) {

    return (
        <>
            <div className="details_component">
                <div className="clickAble_component">
                    <div className="left_bar">
                        <h3>{ obj.original_title }</h3>
                        <img src={`${process.env.REACT_APP_API_BASE_IMAGE_URL}${obj.backdrop_path}`} alt={`Movie thumbnail of ${obj.original_title}`} />
                    </div>

                    <div className="right_bar">
                        <img src={closerBar} onClick={setFromOutside} alt={`movies thumbnails`} />
                        <div className="single">
                            <p className="release"><strong>Release Date:</strong> {obj.release_date}</p>
                            <p>{obj.overview}</p>
                            <p className="votes"><strong>{obj.vote_average}</strong> / 10 ({obj.vote_count} total votes)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Details;