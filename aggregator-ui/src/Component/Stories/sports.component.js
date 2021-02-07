import React, {useEffect, useState} from 'react'
import VerticalCard from "../Cards/Vertical/index.component";
import {Link} from "react-router-dom";

function Story(props) {
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        // let CORS = `https://cors-anywhere.herokuapp.com/`;
        let server = `https://aggregatr-server.herokuapp.com${props.location.state.endpoint}`;
        try {
            fetch(`${server}`)
                .then(data => data.json())
                .then(setData)
                .catch(setError);
        } catch {
            return null
        }
    }, [props.location.state.endpoint]);
    if (error) return (<pre>{JSON.stringify(error)}</pre>)
    if (!data) return null;

    return (
        <>
            <section className="recent-posts">
                <div className="section-title">
                    <h2><span>{props.location.state.name}</span></h2>
                </div>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 listrecent">
                    {
                        data.map(story => <Link to={
                                {
                                    pathname: "post",
                                    state: {
                                        article: story
                                    }
                                }}>
                                <VerticalCard key={(story.header).replace(/ /g, '-')} article={story}/>
                            </Link>
                        )
                    }
                </div>
            </section>
        </>
    );
}

export default Story;