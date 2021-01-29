import Socials from './../../Component/Socials/index.component';
import MainHeading from './../../Component/MainHeading/index.component';
import BannerImage from './../../Component/Banner/image.component';
import Paragraph from './../../Component/Paragraphs/index.component';
import Tags from './../../Component/Tags/index.component';
import HideShare from './../../Component/HideShare/index.component';
import RelatedPosts from './../../Component/RelatedPosts/index.component';
import AlertBar from './../../Component/AlertBar/index.component';
import Footer from './../../Component/Footer/index.component';

export default () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-xs-12">
                        <Socials/>
                    </div>
                    <div className="col-md-8 col-md-offset-2 col-xs-12">
                        <MainHeading/>
                        <BannerImage/>
                        <Paragraph/>
                        <Tags/>
                    </div>
                </div>
            </div>
            <HideShare/>
            <div className="graybg">
                <div className="container">
                    <RelatedPosts/>
                </div>
            </div>
            <AlertBar/>
            <Footer/>
        </>
    );
}