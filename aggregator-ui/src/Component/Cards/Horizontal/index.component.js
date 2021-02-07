function HorizontalCards() {
    return (
        <>
            {/*begin post */}
            <div class="card">
                <div class="row">
                    <div class="col-md-5 wrapthumbnail">
                        <a href="post.html">
                            <div class="thumbnail"
                                 style={{backgroundImage: `url("https://images.unsplash.com/photo-1585314062604-1a357de8b000?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80")`}}>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-block">
                            <h2 class="card-title">
                                <a href="/post">We're living some strange times</a>
                            </h2>
                            <h4 class="card-text">This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</h4>
                        </div>
                    </div>
                </div>
            </div>
            {/*end post */}
        </>
    );
}

export default HorizontalCards;