import Banner from "./../../Component/Banner/index.component";
import Featured from "./../../Component/Featured/index.component";
import Story from "../../Component/Stories/index.component";
import Footer from "./../../Component/Footer/index.component";

export default () => {
    return (
        <>
            <Banner/>
            <Featured/>
            <Story name="All Stories" endpoint="/getStories"/>
            <Footer/>
        </>
    );
}