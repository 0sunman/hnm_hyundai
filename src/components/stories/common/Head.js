const Head = () => {

    return (    <div id="top_utile_warp" className="u-no-select">
    <link rel="stylesheet" type="text/css" href="https://image.thehyundai.com/stories_cdn/css/stories_ui.css?ver=12071718"/>
    <link rel="stylesheet" type="text/css" href="https://image.thehyundai.com/stories_cdn/css/stories.custom.css?ver=12071718"/>
       <header data-component="OHeader" className="o-header u-clearfix" style={{"marginTop": "0px"}}>
          <div className="header-container">
             <div className="header-link-container">
                <div className="left-side"><a href="https://www.stories.com/kr_krw/storelocator.html" target="_self" className="a-link">매장위치</a><a href="https://www.stories.com/kr_krw/customer-service.html" target="_self" className="a-link">고객 서비스</a><a href="#" target="_self" className="a-link open-lightbox" data-template="newsletter-signup" data-classes="is-medium no-centering" id="newsletter-btn">뉴스레터</a></div>
                <div className="middle"><label className="a-label js-a-label"> 무료 배송 및 무료 반품 (일부 상품 제외) </label></div>
                <div className="right-side">
                   <div className="my-account"><a href="#" target="_self" className="a-link open-lightbox" onclick="goRegistMember(); return false;">회원가입</a></div>
                   <div className="my-account" id="loginOutId"><a href="#" target="_self" className="a-link open-lightbox" onclick="setGnbLoginForHead()">로그인</a></div>
                   <div className="shipping-info"><a href="#" target="_self" className="a-link open-lightbox" data-template="select-country">배송국가: 대한민국</a></div>
                </div>
             </div>
             <div className="header-search-logo-cart-container">
                <span className="a-icon-menu"></span><span className="a-icon-search"></span><span className="a-icon-search-global"></span>
                <a href="https://www.stories.com/kr_krw/odb/basktList.html" target="_self" className="a-link">
                   <div className="cart-icon aos-global">
                      <span className="a-icon-bag"></span>
                      <div className="items-in-bag">0</div>
                   </div>
                </a>
                <div className="header-logo">
                   <a href="https://www.stories.com/kr_krw/index.html" target="_self" className="a-link">
                      <div className="a-stories-logo">
                         <svg width="184px" height="31px" viewBox="0 0 184 31" version="1.1">
                            <title>WKD Logo dark</title>
                            <desc>Created with Sketch.</desc>
                            <defs>
                               <polygon id="path-1" points="32.8035888 24.562947 32.8035888 0.629230704 0.857285311 0.629230704 0.857285311 24.562947"></polygon>
                               <polygon id="path-3" points="0.000555795231 29.3333333 23.3198167 29.3333333 23.3198167 0.672640924 0.000555795231 0.672640924"></polygon>
                            </defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                               <g id="Logo" transform="translate(-548.000000, -222.000000)">
                                  <g transform="translate(70.000000, 80.000000)" id="Group-2">
                                     <g transform="translate(467.000000, 134.000000)">
                                        <g id="WKD-Logo-dark" transform="translate(11.000000, 8.000000)">
                                           <g id="Page-1">
                                              <path d="M51.3007477,1.65129412 C54.1501682,3.58298039 49.335215,7.24015686 49.5286729,9.94313725 C49.5011589,10.7472157 49.9860935,10.8084706 50.9808972,10.3520784 C54.2946168,9.40219608 59.1173084,6.74839216 61.5050093,5.97882353 C62.0673271,5.76227451 62.4095327,5.72862745 62.785271,5.9494902 C63.6184299,6.48611765 63.4223925,7.27552941 63.4051963,7.81819608 C63.3243738,8.92682353 60.8481121,13.7996078 60.3648972,14.6243922 C59.5248598,16.2083922 58.7209346,17.6647059 58.0743551,19.3625882 C57.7459065,20.3340392 58.1259439,20.5436863 58.8585047,19.9423529 C60.0158131,19.2512941 61.5153271,16.9607059 63.4309907,15.1774118 C64.2357757,14.4345882 65.0336822,13.4890196 66.1368224,12.6935686 C67.4798505,11.7203922 69.5029907,10.0190588 70.7239252,11.6988235 C71.1469533,12.276 70.7239252,14.1481569 70.1014206,15.393098 C69.0266542,18.0934902 67.6836262,20.1200784 67.3018692,23.4028235 C67.3018692,23.9118431 67.5065047,24.3294118 67.6165607,24.3923922 C68.655215,24.9945882 70.8520374,23.6383529 71.9973084,22.7393725 C72.6705421,22.2044706 75.1356262,19.9173333 75.5251215,19.4324706 C74.6369346,18.5360784 74.2044486,17.2747451 74.1167477,16.5129412 C73.8983551,14.5700392 75.2843738,12.5581176 76.5586168,11.5426667 C77.5955514,10.7178824 80.0374206,10.0785882 81.001271,11.7247059 C82.179215,13.7849412 79.4338318,17.3377255 78.2928598,18.8647843 C78.9686729,19.2176471 79.9686355,18.6680784 81.6564486,16.5500392 C84.9314766,11.9378039 86.6863551,12.4390588 86.548785,15.7606275 C86.3639252,18.649098 86.677757,18.9355294 88.5985794,15.4638431 C90.5933458,11.8523922 94.5192523,6.01419608 97.0522617,5.87356863 C98.2276262,5.80282353 98.545757,6.72941176 99.0367103,7.81301961 C99.6850093,9.22447059 98.1278879,10.3089412 97.3944673,8.81380392 C95.8192897,5.9494902 90.4402991,16.804549 88.5555888,20.9025882 C86.4456075,25.482902 84.2419065,25.3603922 84.3425047,21.2312941 C84.4001121,17.9865098 85.4671402,15.450902 82.2909907,19.4626667 C80.4552897,21.688549 78.2558879,22.0483137 76.8681495,21.0898039 C76.5319626,21.5323922 75.7400748,22.2881569 75.545757,22.4926275 C73.9903551,24.240549 72.335215,25.7563922 69.8305794,26.9832157 C68.8280374,27.459451 67.6165607,28.3342745 66.5890841,27.6992941 C65.830729,27.2420392 65.1196636,25.8780392 64.9777944,25.036 C64.4911402,21.9499608 66.7988785,18.4989804 67.3018692,15.7847843 C67.3758131,15.3801569 67.0705794,15.1627451 66.5426542,15.525098 C65.1506168,16.3628235 63.0561121,18.6767059 61.681271,20.3340392 C60.9633271,21.2036863 59.8980187,22.7747451 59.6718879,23.0792941 C58.8008972,24.2276078 57.6616449,25.086902 56.4811215,24.4096471 C55.6625794,23.9299608 55.016,21.7713725 55.2980187,20.5195294 C56.1234393,16.902902 59.2308037,12.7945098 60.1078131,9.81113725 C60.168,9.50141176 59.919514,9.4065098 59.7269159,9.46345098 C58.341757,9.81113725 56.9531589,10.5021961 55.5834766,11.1130196 C53.4373832,12.0585882 48.9603364,13.8513725 48.6413458,14.124 C48.3197757,14.4673725 46.7196636,21.9275294 46.1186542,26.2541961 C46.0163364,27.0539608 46.2588037,27.2377255 46.4918131,27.229098 C47.5063925,27.198902 48.350729,26.3094118 48.8975701,25.689098 C50.1090467,24.3130196 51.1236262,22.402902 52.1261682,20.7981961 C52.4993271,20.1683922 52.7951028,20.4177255 53.0186542,20.5997647 C54.0160374,21.4297255 53.5818318,22.6988235 52.7796262,23.9963922 C52.3522991,24.6934902 49.1598131,29.6214902 47.3980561,30.3945098 C46.5958505,30.7542745 45.696486,31.0553725 45.0963364,30.7223529 C44.1170093,30.1857255 43.5555514,28.0012549 43.8091963,26.217098 C44.3362617,22.609098 46.4350654,14.9289412 46.3060935,14.658902 C46.2269907,14.482902 43.6501308,15.8132549 42.9751776,13.7625098 C42.913271,13.5632157 42.7043364,13.4614118 42.4472523,13.6115294 C41.423215,14.2042353 40.8351028,15.0178039 40.466243,15.7796078 C38.6571963,19.6783529 37.6391776,26.1584314 33.5043364,27.6190588 C29.4597757,29.0382745 26.9637383,25.2844706 28.3600748,20.896549 C29.6248598,16.9736471 32.1191776,13.2526275 32.5748785,12.6047059 C33.9093084,10.6773333 36.1198879,7.79231373 37.3605981,9.70847059 C37.6125234,10.1398431 37.8274766,10.5168627 38.3141308,10.3978039 C39.1008598,10.2381961 39.9202617,10.1924706 40.2925607,10.4780392 C40.5943551,10.698902 40.871215,10.9163137 41.3905421,10.7748235 C42.0603364,10.5927843 42.6020187,10.2381961 43.124785,9.83011765 C45.1874766,8.23576471 48.6774579,3.98243137 49.8811963,2.2345098 C50.7384299,0.987843137 50.9576822,1.39333333 51.3007477,1.65129412 M46.2269907,9.34094118 C45.7988037,9.86290196 45.1057944,10.5927843 44.5288598,11.3071373 C43.9175327,12.0551373 44.4067664,12.5831373 45.0103551,12.7142745 C45.9518505,12.8833725 47.1745047,11.609098 47.3825794,10.2381961 C47.6620187,8.24007843 46.8950654,8.54980392 46.2269907,9.34094118 M77.7090467,13.602902 C75.7873645,14.6942745 75.7976822,16.3032941 76.9549907,17.6129412 C77.9669907,16.3628235 78.5456449,15.6812549 79.1879252,14.6425098 C79.8130093,13.6822745 79.4002991,12.6625098 77.7090467,13.602902 M37.1671402,13.1974118 C36.9814206,12.0637647 36.2540187,11.8584314 35.6297944,12.5676078 C33.971215,14.425098 31.3556636,18.4334118 31.0659065,21.692 C30.8948037,24.8349804 33.616972,24.338902 35.0004112,22.4296471 C36.0545421,20.9672941 37.8541308,17.3377255 38.6228037,15.6329412 C39.136972,14.5795294 37.4783925,14.5182745 37.1671402,13.1974118" id="Fill-1" fill="#221F20"></path>
                                              <g id="Group-5" transform="translate(150.467290, 5.900400)">
                                                 <mask id="mask-2" fill="white">
                                                    <use href="#path-1"></use>
                                                 </mask>
                                                 <g id="Clip-4"></g>
                                                 <path d="M24.6255626,19.6011373 C25.1775626,17.9032549 27.006385,20.8098431 28.0888897,21.5716471 C29.2573757,22.3800392 32.2340486,21.3732157 28.9125907,15.9189412 C27.291843,13.2427059 25.9101234,11.0176863 25.2463477,11.0004314 C24.6436187,11.0004314 22.1733757,15.6368235 17.8760299,19.1870196 C16.4246654,20.3767451 14.2665346,21.3421569 12.9639178,20.3922745 C12.4076187,19.9876471 12.1599925,19.3897647 11.9063477,19.0981569 C11.4239925,19.3034902 6.44653458,21.7925098 4.87135701,22.3947059 C1.20855327,23.8009804 -0.557502804,19.4078824 2.21539439,16.2338431 C2.63928224,15.7558824 3.22223551,15.1278039 3.69255327,14.5480392 C5.35887103,12.4886667 7.03550654,10.4249804 7.90563738,7.4234902 C8.20141308,6.29588235 8.62444112,6.36662745 9.14376822,6.9472549 C9.32002991,7.1594902 9.80152523,7.63141176 9.86085234,7.70215686 C10.4936748,8.46568627 10.2563664,8.82976471 9.67513271,10.1092157 C8.96664673,11.6526667 7.75431028,13.3005098 7.23240374,14.0079608 C6.23588037,15.4047451 5.05879626,16.5383922 4.42597383,17.8325098 C3.80690841,19.1680392 4.12933832,19.7995686 4.97711402,19.818549 C5.82488972,19.8125098 10.8891888,17.2924314 11.182385,17.1604314 C11.1600299,16.3373725 11.3285533,15.1191765 11.4901981,14.6058431 C12.1634318,12.4791765 14.0472822,10.0445098 15.2140486,8.1352549 C16.1512449,6.578 17.6559178,3.73266667 19.7220486,4.29690196 C20.5302729,4.54623529 20.7821981,5.0285098 20.9103103,5.37447059 C21.0822729,5.88176471 21.2387589,6.41235294 21.0822729,7.25007843 C20.3161794,11.5491373 16.7995439,15.4323529 14.0318056,17.4330588 C14.6955813,18.6590196 16.8468336,16.9093725 17.516628,16.3692941 C18.5234692,15.5643529 19.4813009,14.4928235 20.286086,13.5903922 C25.6581981,7.55117647 24.347843,5.698 26.1792449,3.01745098 C29.1172262,-1.28678431 30.3974879,1.35321569 29.4121421,2.30223529 C27.1319178,4.48843137 26.1362542,8.11109804 28.1396187,10.8580784 C29.7870206,13.1331373 31.6373383,15.7817647 32.526385,18.4476471 C33.722385,22.0884314 30.856628,25.579098 27.7913944,24.2892941 C25.5257869,23.3342353 24.0426093,21.2653725 24.6255626,19.6011373 M17.7719925,8.27588235 C16.1882168,9.4647451 14.8735626,12.1936078 14.1960299,13.2573725 C14.0318056,13.5196471 13.4333757,14.6282745 13.5073196,15.9189412 C15.4178243,14.1399608 17.1159551,12.0150196 17.7840299,11.069451 C18.9181234,9.4474902 18.6576,7.52356863 17.7719925,8.27588235" id="Fill-3" fill="#221F20" mask="url(#mask-2)"></path>
                                              </g>
                                              <path d="M127.865297,13.4853961 C129.679503,13.2774745 132.344923,12.9763765 133.664736,12.7977882 C134.129895,12.7279059 135.083428,12.8832 135.714531,12.3983373 C136.201185,12.0549647 136.873559,11.8841412 137.580325,11.7814745 C138.962905,11.5977098 138.850269,13.0747294 141.51569,12.1628078 C142.913746,11.6779451 143.567204,11.7150431 145.10369,10.9592784 C146.432961,10.3001412 147.732138,9.09574902 148.87655,9.22429804 C149.455204,9.28555294 149.75012,9.64272941 150.027839,10.0326902 C150.468064,10.8945725 151.051877,11.0050039 151.440512,11.0671216 C153.238381,11.3104157 155.981185,10.0801412 157.191802,10.5451608 C158.235615,10.9592784 158.391241,13.6027294 156.902905,13.9124549 C156.093821,13.9219451 156.14025,12.9056314 154.862568,12.9151216 C152.367391,13.0152 150.868736,12.9634353 149.141372,14.1488471 C148.303054,14.8580235 147.826718,16.5403765 147.591129,17.2340235 C146.736475,19.6264157 145.951465,23.3802196 145.396026,26.0383373 C145.10369,27.4592784 143.926606,28.3185725 142.952437,27.6991216 C141.980849,27.0762196 141.92754,25.7562196 142.308437,24.2981804 C142.886232,22.1853176 145.980699,14.9839843 145.877521,13.8995137 C145.842269,13.5897882 145.251578,13.3723765 144.797596,13.4241412 C143.678979,13.5647686 142.587877,13.9495529 141.527727,14.3973176 C140.531204,14.8243765 140.001559,14.9468863 139.324026,16.3013961 C138.084176,18.8982588 137.662007,20.0034353 137.082493,21.2259451 C136.023204,23.4544157 135.478082,24.4612392 134.01812,26.0512784 C133.09726,27.0632784 131.451578,28.6852392 130.055241,27.274651 C126.447465,23.6312784 129.642531,20.9955922 132.078381,16.7284549 C132.782568,15.3523765 133.208176,15.2755922 131.628699,15.1556706 C129.524736,15.0176314 128.020923,15.0366118 126.136213,15.3463373 C123.840512,15.7846118 124.212811,15.4688471 123.374493,17.4790431 C122.682344,19.1148078 121.77868,21.1086118 121.660026,22.6650039 C121.378867,26.1660235 123.334942,25.4257882 124.866269,22.3457882 C125.787989,20.488298 125.867951,20.7505725 126.447465,21.250102 C127.447428,22.1335529 127.271166,22.8099451 125.64354,25.3196706 C124.941073,26.4041412 124.12769,27.4860235 122.907615,27.8863373 C121.895615,28.1908863 120.558606,28.4177882 119.673858,26.1401412 C118.872512,24.0393569 119.746082,20.3286902 120.648886,18.1088471 C120.934344,17.4307294 121.500961,16.0805333 121.445073,15.431749 C121.323839,13.9029647 116.332624,18.5212392 110.856475,24.6355137 C109.786867,25.8269647 108.43868,27.3885333 106.752587,28.3185725 C105.055316,29.2494745 103.867054,28.8137882 103.026157,27.7638275 C101.63412,25.8882196 104.57726,24.6450039 105.206643,24.1696314 C109.375877,21.3053176 109.755914,20.3692392 109.705185,19.1337882 C109.577073,15.530102 102.522307,13.624298 103.940998,7.5246902 C105.196325,2.18257255 113.558867,0.20774902 114.840849,0.0481411765 C118.058269,-0.347858824 122.539615,1.72186667 119.470082,6.05888627 C118.768475,7.05449412 114.533036,13.319749 113.609596,15.6051608 C112.919166,17.242651 114.025746,17.7318275 115.01883,16.9044549 C115.360176,16.6594353 120.884475,11.8211608 124.307391,8.18382745 C126.688213,5.64476863 129.380288,6.12014118 128.038979,8.53151373 C127.173148,10.0542588 126.70283,10.8755922 126.047652,11.9755922 C124.859391,13.9642196 124.573933,13.9443765 127.865297,13.4853961 M111.504774,15.2531608 C112.206381,15.7699451 112.185746,15.4878275 112.741185,14.650102 C114.273372,12.3508863 117.491652,5.78021961 117.913821,4.17206275 C118.88369,0.583043137 111.116138,3.15057255 109.86769,3.96327843 C105.906531,6.55151373 105.584101,10.4407686 111.504774,15.2531608 M131.408587,21.4114353 C130.746531,23.1645333 131.593447,23.6493961 132.169521,23.6623373 C133.266643,23.6994353 134.274344,22.6598275 135.041297,21.1232784 C135.759241,19.7394353 136.247615,18.6342588 136.883877,17.0554353 C137.287989,16.1935529 135.873596,16.2789647 135.327615,16.5274353 C133.813484,17.3418667 132.817821,18.0898667 131.408587,21.4114353" id="Fill-6" fill="#221F20"></path>
                                              <path d="M161.13095,6.89100392 C161.853193,6.13696471 163.915024,4.85923922 164.122239,7.13084706 C164.21166,8.26018039 163.956295,8.70967059 163.449006,9.43006275 C162.117155,11.1892 159.569529,8.67429804 161.13095,6.89100392" id="Fill-8" fill="#221F20"></path>
                                              <g id="Group-12" transform="translate(0.000000, 1.586675)">
                                                 <mask id="mask-4" fill="white">
                                                    <use href="#path-3"></use>
                                                 </mask>
                                                 <g id="Clip-11"></g>
                                                 <path d="M5.91456822,17.4341804 C6.9644,16.5628078 7.70899813,15.834651 7.70899813,15.706102 C7.69782056,15.4300235 7.19912897,13.8952 6.77610093,12.5752 C4.04103551,5.95276863 9.41486729,-2.26142745 14.4387551,1.71582745 C16.7869047,3.57159216 17.9992411,7.53331765 14.9082131,11.688298 C13.9761757,12.9272 10.9470542,15.9053961 10.9582318,16.0555137 C10.9995028,16.2806902 11.2342318,16.7413961 11.4930355,17.2167686 C11.7862318,17.6645333 12.1679888,18.3219451 12.4551664,18.2900235 C12.8051103,18.2382588 13.3295963,17.8060235 14.1575963,17.3263373 C15.4868673,16.5628078 15.7714654,16.3246902 16.031129,15.3032 C16.2091103,14.6199059 16.7585308,14.2446118 17.1781196,14.4232 C17.6974467,14.6958275 17.9545308,14.8373176 18.5366243,15.1806902 C19.4849981,15.7828863 18.9123626,17.0959843 18.4893346,17.4893961 C17.6974467,18.2512 16.5753907,18.7300235 15.1816336,19.3805333 C14.6889607,19.6315922 13.7638019,20.1017882 13.7638019,20.2217098 C13.7431664,20.3778667 15.0002131,21.9868863 16.2735963,23.6140235 C18.3251103,26.2324549 19.3414093,27.9122196 22.0584187,26.8217098 C22.434157,26.6767686 22.5958019,26.8363765 22.852886,27.135749 C22.9913159,27.2962196 23.1323252,27.4903373 23.2122879,27.6723765 C23.4521757,28.0623373 23.2501196,28.5963765 23.0024935,28.7551216 C18.965671,30.5375529 16.3802131,27.9173961 13.9177084,24.7476706 C12.2152785,22.5606118 11.7191664,21.7047686 11.536886,21.7047686 C11.3184935,21.7099451 7.53015701,24.4698667 5.68499813,25.6647686 C3.78911028,26.9019451 1.41774579,27.4333961 0.322343925,25.8424941 C-1.16255327,23.6623373 2.79946542,20.2406902 5.91456822,17.4341804 M6.66518505,22.0239843 C7.40720374,21.5572392 10.0571477,19.7817098 10.0571477,19.6410824 C10.0519888,19.5159843 8.89554019,17.8370824 8.82761495,17.8370824 C8.71325981,17.8465725 5.7752785,20.7272784 5.29980187,21.3182588 C3.91464299,22.7055529 3.88540935,23.7512 6.66518505,22.0239843 M9.72096075,4.31614118 C8.03916636,6.37033725 8.03916636,8.37104314 8.92477383,11.7003765 C9.38305421,13.3792784 9.57651215,13.9435137 9.80780187,13.9159059 C10.0846617,13.9435137 11.2634654,12.6511216 11.9530355,11.8228863 C13.7147925,9.60304314 14.8230916,7.93621961 14.2074654,5.07190588 C13.3889234,2.2619451 11.2402505,2.67951373 9.72096075,4.31614118" id="Fill-10" fill="#221F20" mask="url(#mask-4)"></path>
                                              </g>
                                           </g>
                                        </g>
                                     </g>
                                  </g>
                               </g>
                            </g>
                         </svg>
                      </div>
                   </a>
                </div>
             </div>
          </div>
       </header>
    </div>)
}

export default Head;