import VerticalCard from "../Cards/Vertical/index.component";
function Story() {
    return (
        <>
            <section className="recent-posts">
                <div className="section-title">
                    <h2><span>All Stories</span></h2>
                </div>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 listrecent">
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                </div>
            </section>
        </>
    );
}

export default Story;