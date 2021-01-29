import HorizontalCards from "../Cards/Horizontal/index.component";
import './../../index.css';

function Featured() {
    return (
        <>
            {/*Begin Featured*/}
            <section className="featured-posts">
                <div className="section-title">
                    <h2><span>Featured</span></h2>
                </div>

                <div className="card-columns listfeaturedtag">
                    <HorizontalCards/>
                    <HorizontalCards/>
                    <HorizontalCards/>
                    <HorizontalCards/>
                </div>
            </section>
            {/*End Featured*/}
        </>
    );
}

export default Featured;