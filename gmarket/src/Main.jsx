import { useState, useRef } from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./Main.css"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Main() {
    const [text, setText] = useState("")
    const [count, setCount] = useState(0);

    const onChange = (e) => {
      setText(e.target.value)
    }

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };


    return (
      <div className="main">
        <div className="fixedbar_top" style={{ width : "65%", height : "120px", margin : "auto", display:"flex" }}>
          <img src={"./images/cat1.jpg"} alt="" style={{ width:"120px", height:"120px"}} />
          <div className="search_bar" style={{ marginLeft:"50px", marginTop:"40px", position:"relative" }}>
            <input onChange={onChange} value={text} style={{width:"500px", height:"40px", borderRadius:"50px", border:"2px solid blue"}}></input>
            <button style={{ 
              border:"none", backgroundColor:"#fff", 
              width:"30px", height:"30px", marginLeft:"-50px",
              position:"absolute", top: "5px"
              }}><i style={{fontSize:"25px", textAlign:"center", color:"blue"}}>🔍︎</i></button>
          </div>
          <img src="./images/cat2.jpg" alt="" style={{ width:"100px", height:"100px", marginLeft:"50px", marginRight:"50px"}} />
          <img src="//pics.gmarket.co.kr/pc/single/kr/common/image__header-mypage.svg" alt="" style={{width:"50px", height:"50px"}} className="logo" />
          <img src="//pics.gmarket.co.kr/pc/single/kr/common/image__header-recent.svg" alt="" style={{width:"50px", height:"50px"}} className="logo" />
          <img src="//pics.gmarket.co.kr/pc/single/kr/common/image__header-cart.svg" alt="" style={{width:"50px", height:"50px"}} className="logo"/>
        </div>
        <div className="menubar" style={{display:"flex", margin:"auto", width:"100%", borderBottom:"1px solid gray"}}>
            <button style={{ 
              marginLeft:"335px", backgroundColor : "#fff", 
              border:"none", width:"200px", height:"80px", 
              borderRadius:"10px", color :"black", fontSize:"18px", textAlign:"left", paddingLeft:"30px"
              }} className="menubtn">전체 카테고리</button>
            <ul style={{display:"flex", marginTop:"50px", marginBottom:"-20px"}}>
              <li>베스트</li>
              <li>슈퍼딜</li>
              <li>10%쿠폰</li>
              <li>스마일프레시</li>
              <li>스마일배송</li>
              <li>유니버스배송</li>
              <li>사업자클럽</li>
            </ul>
            <ul style={{display:"flex", marginTop:"50px", marginBottom:"-20px", fontSize:"12px", color:"gray", marginLeft:"70px"}}>
              <li>로그인</li>
              <li>회원가입</li>
              <li>고객센터</li>
              <li>Global</li>
            </ul>
          </div>
        <div style={{ height:"377px", backgroundColor:"pink", position:"relative"}}>
          <div className="ad" style={{ width:"100%", height:"377px", zIndex:"0" }}>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper"
              loop={true}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </div>
          <div className="category" style={{ width:"65%",height:"377px", margin:"auto", borderTop:"none", display:"flex", zIndex:"10", position:"absolute", top:"0px", left:"350px"}}>
              <ul className="category_list">
                <li onMouseOver={()=>{setCount(1)}} onMouseOut={()=>{setCount(0)}} >브랜드패션</li>
                <li onMouseOver={()=>{setCount(2)}} onMouseOut={()=>{setCount(0)}}>패션의류 · 잡화 · 뷰티</li>
                <li onMouseOver={()=>{setCount(3)}} onMouseOut={()=>{setCount(0)}}>유아동</li>
                <li onMouseOver={()=>{setCount(4)}} onMouseOut={()=>{setCount(0)}}>식품 · 생필품</li>
                <li onMouseOver={()=>{setCount(5)}} onMouseOut={()=>{setCount(0)}}>홈데코 · 문구 · 취미 · 반려</li>
                <li onMouseOver={()=>{setCount(6)}} onMouseOut={()=>{setCount(0)}}>컴퓨터 · 디지털 · 가전</li>
                <li onMouseOver={()=>{setCount(7)}} onMouseOut={()=>{setCount(0)}}>스포츠 · 건강 · 렌탈</li>
                <li onMouseOver={()=>{setCount(8)}} onMouseOut={()=>{setCount(0)}}>자동차 · 공구</li>
                <li onMouseOver={()=>{setCount(9)}} onMouseOut={()=>{setCount(0)}}>여행 · 도서 · e쿠폰</li>
              </ul>
              <div className="goodslist" style={{ display: count===1 ? "flex" : "none"}} onMouseOver={()=>{setCount(1)}} onMouseOut={()=>{setCount(0)}}>
                <ul>
                  <li>브랜드의류</li>
                  <li>브랜드 여성의류</li>
                  <li>브랜드 남성의류</li>
                  <li>브랜드 캐주얼의류</li>
                </ul>
                <ul>
                  <li>브랜드잡화</li>
                  <li>브랜드 잡화</li>
                  <li>브랜드 쥬얼리/시계</li>
                  <li>수입명품</li>
                </ul>
                <ul>
                  <li>스포츠브랜드</li>
                  <li>브랜드 아웃도어</li>
                  <li>브랜드 스포츠패션</li>
                </ul>
                <ul className="footer" style={{display:"flex", color:"white"}}>
                  <li>바로가기</li>
                  <li>신세계백화점</li>
                  <li>롯데백화점</li>
                  <li>현대백화점</li>
                  <li>갤러리아백화점</li>
                  <li>AK플라자</li>
                  <li>대구백화점</li>
                </ul>
              </div>
              <div className="goodslist" style={{ display: count===2 ? "flex" : "none"}} onMouseOver={()=>{setCount(2)}} onMouseOut={()=>{setCount(0)}}>
                <ul>
                  <li>패션의류</li>
                  <li>여성의류</li>
                  <li>남성의류</li>
                  <li>언더웨어</li>
                  <li>유아동의류</li>
                </ul>
                <ul>
                  <li>잡화</li>
                  <li>신발</li>
                  <li>가방/잡화</li>
                  <li>유아동 신발/잡화</li>
                  <li>쥬얼리/시계</li>
                  <li>수입명품</li>
                </ul>
                <ul>
                  <li>뷰티</li>
                  <li>화장품/향수</li>
                  <li>바디/헤어</li>
                </ul>
                <ul className="footer" style={{display:"flex", color:"white"}}>
                  <li>바로가기</li>
                  <li>해외직구</li>
                </ul>
              </div>
              <div className="goodslist" style={{ display: count===3 ? "flex" : "none"}} onMouseOver={()=>{setCount(3)}} onMouseOut={()=>{setCount(0)}}>
                <ul>
                  <li>유아동</li>
                  <li>출산/육아</li>
                  <li>장난감/완구</li>
                  <li>유아동 의류</li>
                  <li>유아동 신발/잡화</li>
                </ul>
                <ul></ul>
                <ul></ul>
                <ul className="footer" style={{display:"flex", color:"white"}}>
                  <li>바로가기</li>
                  <li>스마일프레시</li>
                  <li>스마일배송</li>
                  <li>당일배송</li>
                </ul>
              </div>
              <div className="goodslist" style={{ display: count===4 ? "flex" : "none"}} onMouseOver={()=>{setCount(4)}} onMouseOut={()=>{setCount(0)}}>
                <ul>
                  <li>식품</li>
                  <li>신선식품</li>
                  <li>가공식품</li>
                  <li>건강식품</li>
                  <li>커피/음료</li>
                </ul>
                <ul>
                  <li>생필품</li>
                  <li>생필품</li>
                  <li>바디/헤어</li>
                </ul>
                <ul></ul>
                <ul className="footer" style={{display:"flex", color:"white"}}>
                  <li>바로가기</li>
                  <li>스마일프레시</li>
                  <li>스마일배송</li>
                  <li>당일배송</li>
                  <li>인기 가공식품</li>
                  <li>G마켓 쌀 상회</li>
                  <li>소상공인동행마켓</li>
                </ul>
              </div>
              <div className="goodslist" style={{ display: count===5 ? "flex" : "none"}} onMouseOver={()=>{setCount(5)}} onMouseOut={()=>{setCount(0)}}>
                <ul>
                  <li>홈데코</li>
                  <li>가구/DIY</li>
                  <li>침구/커튼</li>
                  <li>조명/인테리어</li>
                  <li>생활용품</li>
                  <li>주방용품</li>
                  <li>꽃/이벤트용품</li>
                </ul>
                <ul>
                  <li>문구</li>
                  <li>문구/사무용품</li>
                  <li>사무기기</li>
                </ul>
                <ul>
                  <li>취미/반려</li>
                  <li>악기/취미</li>
                  <li>반려동물용품</li>
                </ul>
                <ul className="footer" style={{display:"flex", color:"white"}}>
                  <li>바로가기</li>
                  <li>사업자 클럽</li>
                </ul>
              </div>
              <div className="goodslist" style={{ display: count===6 ? "flex" : "none"}} onMouseOver={()=>{setCount(6)}} onMouseOut={()=>{setCount(0)}}>
                <ul>
                  <li>컴퓨터</li>
                  <li>노트북/데스크탑</li>
                  <li>모니터/프린터</li>
                  <li>PC주변기기</li>
                  <li>저장장치</li>
                </ul>
                <ul>
                  <li>디지털</li>
                  <li>모바일/태블릿</li>
                  <li>카메라</li>
                  <li>게임</li>
                  <li>음향기기</li>
                </ul>
                <ul>
                  <li>가전</li>
                  <li>영상가전</li>
                  <li>주방가전</li>
                  <li>계절가전</li>
                  <li>생활/미용가전</li>
                  <li>음향가전</li>
                  <li>건강가전</li>
                </ul>
                <ul className="footer" style={{display:"flex", color:"white"}}>
                  <li>바로가기</li>
                  <li>AI노트북</li>
                  <li>사업자클럽</li>
                  <li>렌탈</li>
                  <li>중고시장</li>
                </ul>
              </div>
              <div className="goodslist" style={{ display: count===7 ? "flex" : "none"}} onMouseOver={()=>{setCount(7)}} onMouseOut={()=>{setCount(0)}}>
                <ul>
                  <li>스포츠</li>
                  <li>스포츠의류/운동화</li>
                  <li>휘트니스/수영</li>
                  <li>구기/라켓</li>
                  <li>골프</li>
                  <li>자전거/보드/기타레저</li>
                  <li>캠핑/낚시</li>
                  <li>등산/아웃도어</li>
                </ul>
                <ul>
                  <li>건강</li>
                  <li>건강/의료용품</li>
                  <li>건강식품</li>
                </ul>
                <ul>
                  <li>렌탈</li>
                  <li>렌탈 서비스</li>
                  <li>상조</li>
                  <li>인터넷 가입</li>
                </ul>
                <ul className="footer" style={{display:"flex", color:"white"}}>
                  <li>바로가기</li>
                  <li>렌탈</li>
                  <li>상조</li>
                  <li>인터넷 가입</li>
                </ul>
              </div>
              <div className="goodslist" style={{ display: count===8 ? "flex" : "none"}} onMouseOver={()=>{setCount(8)}} onMouseOut={()=>{setCount(0)}}>
                <ul>
                  <li>자동차</li>
                  <li>자동차용품</li>
                </ul>
                <ul>
                  <li>공구</li>
                  <li>공구/안전/산업용품</li>
                </ul>
                <ul></ul>
                <ul className="footer" style={{display:"flex", color:"white"}}>
                  <li>바로가기</li>
                  <li>사업자 클럽</li>
                </ul>
              </div>
              <div className="goodslist" style={{ display: count===9 ? "flex" : "none"}} onMouseOver={()=>{setCount(9)}} onMouseOut={()=>{setCount(0)}}>
                <ul>
                  <li>여행</li>
                  <li>항공권</li>
                  <li>호텔</li>
                  <li>투어/티켓</li>
                  <li>랜터카</li>
                  <li>해외패키지</li>
                  <li>국내패키지</li>
                  <li>테마여행</li>
                </ul>
                <ul>
                  <li>도서</li>
                  <li>국내도서</li>
                  <li>외국도서</li>
                  <li>유아동</li>
                  <li>학습/교육</li>
                  <li>음반(K-POP)</li>
                </ul>
                <ul>
                  <li>e쿠폰</li>
                  <li>e쿠폰</li>
                  <li>상품권</li>
                </ul>
                <ul className="footer" style={{display:"flex", color:"white"}}>
                  <li>바로가기</li>
                  <li>여행 홈</li>
                  <li>여행자 보험</li>
                  <li>여행 라이브</li>
                  <li>책 쇼핑</li>
                  <li>책 스마일배송</li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Main;