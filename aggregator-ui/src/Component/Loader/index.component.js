import React from "react";
import Skeleton from 'react-loading-skeleton';
import VerticalCard from "../Cards/Vertical/index.component";

export default () => {
    let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let docs = {
        images: ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEWpqamhHEfZAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC"]
    }
    return (
        <>
            <section className="recent-posts">
                <div className="section-title">
                    <Skeleton/>
                </div>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 listrecent">
                    {
                        cards.map(card =>
                            <VerticalCard key={card} article={docs} type='loader'/>
                        )}
                </div>
            </section>
        </>
    )
}