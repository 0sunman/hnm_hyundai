import FavList from "../../../components/common/favorite";
import {useSelector} from 'react-redux'
import Head from "./../../../components/stories/common/Head";
import HomeButton from "../../../components/common/homebutton";

const PageContent = () => {

    const favorites = useSelector(state => state.favorites)

    return (      
        <>
        
        <Head/>
        <div data-component="OPageContent" className="o-page-content" style={{"margin-top": "54px"}}>
            <div className="content-section favorite stories">
                <div class="u-cols-sm-8-8 u-cols-md-12-12 u-cols-lg-24-24">
                    <div class="title u-align-to-logo"><a href="https://www.stories.com/kr_krw/shoes/all.html" target="_self" class="a-link">Favorite</a></div>
                </div>
                <div style={{"clear":"both"}}>
                    <FavList favorites={favorites} brand="stories"/>
                </div>
            </div>
        </div>
        <HomeButton/>
        </>
 
 )
}

export default PageContent;