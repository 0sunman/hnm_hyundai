import FavList from "../../../components/common/favorite";
import Head from "./../../../components/arket/common/Head";
import Header from "./../../../components/arket/common/Header";
import HomeButton from "../../../components/common/homebutton";
import favoriteStyle from "./favorite.arket.module.scss";
import SimpleBanner from "../../../components/common/simpleBanner";

const PageContent = () => {
  return (
    <>
      <Head />
      <Header />

      <div
        data-component="OPageContent"
        className="o-page-content"
        data-component-id="84f821cb-b419-4c7f-b066-9f1c61032e83"
        style={{ marginTop: "56px" }}
      >
        <div className="parbase sdp-component left-component">
          <nav
            aria-label="breadcrumbs"
            className="m-breadcrumb"
            data-component="MBreadCrumb"
            data-component-id="7ad8ea27-e968-42a8-8edd-90f15bda5b74"
          >
            <ol
              className="breadcrumb-container"
              itemscope=""
              itemtype="http://schema.org/BreadcrumbList"
            >
              <li
                itemprop="itemListElement"
                itemscope=""
                itemtype="https://schema.org/ListItem"
              >
                <a
                  className="a-link"
                  href="https://www.arket.com/ko-kr/index.html"
                  target="_self"
                  itemprop="item"
                >
                  <span itemprop="name">ARKET</span>
                </a>
              </li>
              <li
                itemprop="itemListElement"
                itemscope=""
                itemtype="https://schema.org/ListItem"
              >
                <a
                  className="a-link"
                  href="https://www.arket.com/ko-kr/women.html"
                  target="_self"
                  itemprop="item"
                >
                  <span itemprop="name">Women</span>
                </a>
              </li>
              <li
                itemprop="itemListElement"
                itemscope=""
                itemtype="https://schema.org/ListItem"
              >
                <a
                  className="a-link"
                  href="https://www.arket.com/ko-kr/women/all.html"
                  target="_self"
                  itemprop="item"
                  aria-current="page"
                  data-no-click="true"
                >
                  <span itemprop="name">의류 모두보기</span>
                </a>
              </li>
            </ol>
          </nav>
        </div>
        <div className="o-width wc-75 title--xx-small">
          <div className="o-text-field ">
            <div className="headings">
              <div className="m-headline">
                <h2 className="a-heading-2">
                  <span>My favourite</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="o-width wc-75 title--xx-small">
          <SimpleBanner
            clsName={favoriteStyle.customModal}
            text={
              "위시리스트가 가득 찼습니다. 상품은 최대 50개까지 저장할 수 있습니다. 상품을 장바구니로 옮기고/혹은 삭제하여 여유 공간을 만들 수 있습니다."
            }
          />
        </div>
        <FavList brand="arket" wholeStyle={favoriteStyle.favorite} />

        <div id="praArea"> </div>
        <div className="splash parbase"></div>
      </div>
      <HomeButton />
    </>
  );
};

export default PageContent;
