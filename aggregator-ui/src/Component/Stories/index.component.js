import React, {useEffect, useState} from 'react'
import VerticalCard from "../Cards/Vertical/index.component";
import Loader from "./../Loader/index.component";

import {Link} from "react-router-dom";

function Story(props) {
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        let CORS = `https://cors-anywhere.herokuapp.com/`;
        let server = `https://aggregatr-server.herokuapp.com${props.endpoint}`;
        try {
            fetch(`${server}`)
                .then(data => data.json())
                .then(setData)
                .catch(setError);
        } catch {
            return null
        }
    }, [props.endpoint]);
    if (error) return (<Loader/>)
    if (!data) return null;

    const linkStyle = {
        textDecoration: 'none',
        color: 'black'
    };

    let pageContent;

    if(data){
        pageContent = data.map(story => <Link style={linkStyle} to={
                {
                    pathname: "post",
                    state: {
                        article: story
                    }
                }}>
                <VerticalCard key={(story.header).replace(/ /g, '-')} article={story}/>
            </Link>
        )
    }else{
        pageContent = <Loader/>
    }

    return (
        <>
            <section className="recent-posts">
                <div className="section-title">
                    <h2><span>{props.name}</span></h2>
                </div>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 listrecent">
                    {pageContent}
                </div>
            </section>
        </>
    );
}

export default Story;