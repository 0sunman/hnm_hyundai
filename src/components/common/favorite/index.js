
import "./favlist.css"; 
import FavElement from "./element";
import { useParams } from 'react-router-dom';
import { useEffect,useState,useMemo } from "react";
import { useDispatch,useSelector } from "react-redux";
import { clearFavoriteList,addDefaultList } from "../../../store/favourite";
import favoriteArketPopupStyle from "../popup/popup.arket.module.scss";
import favoriteStoriesPopupStyle from '../popup/popup.stories.module.scss'
import Popup from "../popup"

const FavList = ({brand,wholeStyle}) => {
    const {count} = useParams();
    const FavClass = `listGrid ${brand}`;
    const dispatch = useDispatch();
    

    const favorites = useSelector(state => state.favorites);
    const [favoriteDatas,setFavoriteDatas] = useState([]);
    const [SwitchOnOff,setSwitchOnOff] = useState(false);

    useEffect(()=>{
        if(favoriteDatas.length > 3){
            setSwitchOnOff(true);
        }
    },[favoriteDatas])

    useEffect(()=>{
        setFavoriteDatas(favorites.datas)
    },[favorites])


    useEffect(()=>{
        if(count*1 === 0 || count === ":count"){
            dispatch(addDefaultList({count:0}));
        }else{
            dispatch(addDefaultList({count}));
        }
    },[])
    const popupStyle = {
        "stories":favoriteStoriesPopupStyle.popup,
        "arket":favoriteArketPopupStyle.popup
    }
    console.log(popupStyle["stories"]);
    return (
        <div className={wholeStyle + " " + `${brand === 'stories' && " u-align-to-logo"}`}>
            {brand === "stories" && favoriteDatas.length > 0 && (<div className="" style={{"display":"block","fontSize":"14px","textAlign":"right"}}>
                <span>{favoriteDatas.length}</span> Items
            </div>)}
            {
            favoriteDatas && <ul className={FavClass}>
                {
                    favoriteDatas && favoriteDatas.map((favorite,idx) => {
                        return <FavElement {...favorite} brand={brand} key={idx}/>
                    })
                }
            </ul>
            }
            
            {
                favoriteDatas.length === 0 && (<div className={FavClass}>
                    
                    <h2>???????????? ????????? ??????????????????.</h2>
                    <p>
                        ???????????? ????????? ???????????? ????????????????<br/>
                        ????????? ?????? ?????? ????????? ??????????????? ????????? ???????????????.
                    </p>
                    <button onClick={()=>{
                        dispatch(addDefaultList({count:4}));
                    }}>
                        ?????? ???????????????
                    </button>
                </div>)
            }
            
    <Popup cls={popupStyle[brand]} brand={brand} SwitchOnOff={SwitchOnOff} setSwitchOnOff={setSwitchOnOff}/>
        </div>)
}

export default FavList;