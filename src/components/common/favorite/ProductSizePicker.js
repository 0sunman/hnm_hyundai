import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { toggleSelectBox } from "../../../store/favourite";
import favlist from "./favlist.module.scss";

const ProductSizePicker = ({ id, isSelectable, isClicked }) => {
  const dispatch = useDispatch();
  const onClickSelectBox = useCallback(() => {
    dispatch(toggleSelectBox(id));
  }, [id, dispatch]);

  return (
    <div className={favlist.ListGridSizePicker}>
      {isSelectable ? (
        <button
          className="selectSize selectable arket"
          onClick={onClickSelectBox}
        >
          <span>장바구니 담기</span>
          <div className={`selBtn ${isClicked ? "selected" : ""}`}>
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
        </button>
      ) : (
        <button className="selectSize one">장바구니 담기</button>
      )}

      {isSelectable && isClicked ? (
        <div className={"Dropdown"}>
          <ul>
            <li>
              <div>
                <span>S</span>
                <span class="rightText">품절 임박</span>
              </div>
              <div>
                <span>M</span>
              </div>
              <div>
                <span>L</span>
              </div>
              <div>
                <span>XL</span>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default ProductSizePicker;
