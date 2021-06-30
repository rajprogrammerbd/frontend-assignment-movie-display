import React from 'react';

function Main({ data, error, setDetails }) {
    return (
        <>
            <div className="main_container">
                { ( error ) ? (
                    <div className="failed_container">
                        <h3>Failed occured</h3>
                    </div>
                ) : (
                    <>
                        <h3 className="title_recents">Most Recent Movies</h3>
                        <div className="total_wapper">
                            
                            { data.map(obj =>  (
                                <div key={obj.id} className="main_elements" onClick={() => setDetails(obj)}>
                                    <div className="img_rate">
                                        <span>{obj.vote_average}</span>
                                        <img src={`${process.env.REACT_APP_API_BASE_IMAGE_URL}${obj.backdrop_path}`} alt={`Movie thumbnail of ${obj.original_title}`} />
                                    </div>
                                    <h3 className="movie_title">{obj.original_title}</h3>
                                </div>
                            )) }
                        </div>
                    </>
                    ) }
            </div>
        </>
    );
}

export default Main;