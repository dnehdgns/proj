import './App.css';

function App() {
  return (
    <div className="App">
      <div className="paper">
        <div className="content">
        <h2 style={{ fontSize : "12px", marginTop:"0px" }}>소방청 소방분석제도과-8727(2024.9.20)</h2>
      <h3 style={{ textDecoration: "underline", textAlign:"center", fontSize:"18px", marginTop:"0px"}}>소방안전관리 대행 및 자체점검 표준계약서</h3>
      <p style={{ marginBottom : "0px", fontWeight : "600", marginLeft:"0px"}}>1.소방안전관리대상물의 개요</p>
      <div className="table">
        <table>
          <tr>
            <td className="title" style={{ width: "150px" }} >상      호</td>
            <td style={{backgroundColor:"antiquewhite", width:"350px"}}>000건물</td>
            <td style={{ backgroundColor: "#e6e6e6", width:"110px" }}>용도</td>
            <td style={{ backgroundColor:"antiquewhite", width:"300px"}}>근린생활시설</td>
          </tr>
          <tr>
            <td className="title" style={{borderBottom:"none"}}>소 재 지</td>
            <td colspan="6" style={{backgroundColor:"antiquewhite", textAlign:"center" ,borderBottom:"none"}}>원미로185</td>
          </tr>
        </table>
        <table>
        <tr style={{backgroundColor:"#e6e6e6"}}>
            <td rowspan='2' className="title" style={{width:"150px"}}>건 축 물 등</td>
            <td style={{ width: "130px" }}>지하층</td>
            <td style={{ width: "130px" }}>지상층</td>
            <td style={{ width: "130px" }}>연면적(m)</td>
            <td style={{ width: "130px" }}>바닥면적(m)</td>
            <td style={{ width: "130px" }}>동수</td>
            <td style={{ width: "80px" }}>기타</td>
          </tr>
          <tr style={{backgroundColor:"antiquewhite"}}>
            <td style={{backgroundColor:"antiquewhite"}}>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td style={{backgroundColor:"#E2EADA"}}></td>
          </tr>
          <tr>
            <td className="title">등급 등 구분</td>
            <td className="long" colspan="6" style={{backgroundColor:"antiquewhite", textAlign:"center"}}>1급대상</td>
          </tr>
          <tr>
            <td className="title" style={{width:"150px"}}>계약자구분</td>
            <td colspan="6" style={{whiteSpace : "pre-wrap", backgroundColor:"#E2EADA"}}>[  ]소유자       [  ]점유자       [  ]관리자 </td>
          </tr>
          <tr>
            <td className="title">업무감독자</td>
            <td style={{backgroundColor:"antiquewhite" }} colspan="2">성명</td>
            <td style={{backgroundColor:"antiquewhite"}} colspan="2">연락처</td>
            <td style={{ backgroundColor:"#E2EADA"}} colspan="2">직위</td>
          </tr>
        </table>
      </div>
      <p style={{ marginTop : "0px", fontWeight : "550"}}>※특급은 전체, 1급은 일부 소방안전관리 업무 대행 불가함(화재예방법 시행령 제28조제1항)</p>
      <h2 style={{ fontWeight : "600", fontSize:"12px"}}>2.소방안전관리업무 대행 및 자체점검의 기간 및 범위</h2>
      <ul style={{marginLeft:"-10px", marginTop:"10px"}}>
        <li style={{paddingBottom:"10px" }}>가. 계약기간: <span style={{backgroundColor:"antiquewhite", padding:"5px 10px", paddingRight:"30px", whiteSpace:"pre-wrap"}}>1900년 1월 0일     ~       1/0/1900</span></li>
        <li style={{paddingLeft:"30px"}}>※계약기간 만료 1개월 전까지 별도 통지가 없는 경우 자동연장 되는 것으로 한다.</li>
        <li style={{ backgroundColor:"#E2EADA" , width:"250px" }}>나.소방안전관리업무 대행 월1회</li>
        <li style={{whiteSpace : "pre-wrap", backgroundColor: "antiquewhite", marginLeft:"-30px", paddingLeft:"30px", width:"450px"}}>다.자체점검:   [v]작동점검          [v]종합점검           [v]최초점검</li>
        <li>라.업무의범위</li>
          <ul style={{marginTop:"0px", marginLeft:"0px"}}>
              <li>1)피난시설, 방화구획 및 방화시설의 관리</li>
              <li>2)소방시설이나 그 밖의 소방 관련 시설의 관리</li>
              <li>3)위1),2) 업무를 수행하는 방법은 「화재의 예방 및 안전관리에 관한 법률 시행규칙」별표1에 따른다.</li>
              <li>4)자체점검은 「소방시설 설치 및 관리에 관한 법률」제22조에 따른다</li>
          </ul>
        </ul>
        <h3 style={{ fontWeight:"500", whiteSpace : "pre-wrap", fontSize:"13px" }}>3.계약금액: <span style={{backgroundColor: "antiquewhite", marginLeft:"5px"}}>일금:  월410,000원정                   년4,920,000원정                               부가가치세포함   </span></h3>
        <ul style={{ marginLeft:"60px", backgroundColor: "antiquewhite", width:"400px", paddingLeft:"0px", marginTop:"-16px"}}>
          <li style={ {paddingTop:"5px" }}>가.소방안전관리업무 대행 일금:1,143,000원</li>
          <li>나.작동점검: 일금: 1,259,000</li>
          <li>다.종합점검: 일금: 1,259,000</li>
          <li>라.최초점검: 일금: 1,259,000</li>
        </ul>
        <h3 style={{ fontSize:"12px", fontWeight:"500" }}>4.기타 특약사항</h3>
        <p style={{ textAlign : "center", fontWeight:"500", whiteSpace : "pre-wrap", backgroundColor:"#E2EADA", padding:"5px" }}>년      월     일</p>
        <p>발주자와 관리업자는 서로 대등한 입장에서 신의와 성실을 원칙으로 합의에 따라 공정하게<br/> 소방안전관리업무 대행 및 자체점검계약을 체결하고 각각 1부씩 보관한다.</p>
        <div style={{ display:"flex", marginBottom:"-20px" }}>
          <div style={{ width:"275px"}}><h2 style={{fontSize:"12px"}}>발주자</h2></div>
          <div><h2 style={{fontSize:"12px", textAlign:"left"}}>소방시설관리업자</h2></div>
        </div>
        <div className='table1'>
          <div className='bal'>
                  <ul style={{ marginLeft:"-40px", marginTop:"5px",  fontSize:"12px"}}>
                    <li>상      호 :          000건물</li><br/>
                    <li style={{marginTop:"-10px"}}>사업자번호 : </li><br/>
                    <li style={{marginTop:"-10px"}}>주      소 :         원미로185</li><br/><br/><br/>
                    <li>연  락  처 : </li><br/>
                    <li style={{marginTop:"-10px"}}>대  표  자 :                -                    (서명 또는 인)</li>
                  </ul>
                </div>
                <div className='so'>
                  <ul style={{ marginLeft:"-40px", marginTop:"5px", fontSize:"12px" }}>
                    <li>상호 : (부)부천방재</li><br/>
                    <li>사업자번호 : 130-86-04674</li><br/>
                    <li>업등록번호 : 경기부천 제2005-12호 (발급일자 2005.04.0</li><br/>
                    <li>주소 : 경기도 부천시 원미로 185, 301호 (원미동 태강씨</li><br/>
                    <li>연락처 : 032-668-6100. b1234@hanmail.net</li><br/>
                    <li>대표자 : 설동현(서명 또는 인)</li>
                  </ul>
                </div>
          </div>
        </div>
      </div>
      <div className="paper">
        <div className="content">
          <div className="rule" style={{marginTop:"-10px"}}>
            <h2>제1조(총칙)</h2>
            <p>이 계약은 「화재의 예방 및 안전관리에 관한 법률」(이하 “화재예방법”이라 한다) 제25조 및 
            「소방시설 설치 및 관리에 관한 법률」(이하 “소방시설법”이라 한다) 제22조에 따라 발주자가 소방시설법 제29조에 따른 소방시설관리업을 등록한 자(이하 “관리업자”라 한다)에게 위탁한 소방안전관리업무 대행 및 자체점검 수행에 필요한 상호 간의 권리와 의무 등을 정함을 목적으로 한다.</p>
          </div>
          <div className="rule">
            <h2>제2조(정의)</h2>
            <ul style={{marginTop:"10px", marginLeft:"-10px"}}>
              <li>이 계약에서 사용하는 용어의 뜻은 다음과 같다.</li>
              <li>①“소방안전관리업무 대행"이란 화재예방법 시행령 제28조에 따는 대상물에 대해 피난시설, 방화구획 및 방화시설의 관리와 소방시설이나 그 밖의 소방 관련 시설의 관리를 대행하는 업무를 말한다.</li>
              <li>②"자체점검”이란 소방시설법 제22조에 따라 특성소방대상물의 관계인이 그 대상물에 설치되어 있는 소방시설등에 대하여 정기적으로 점검하거나 관리업자 또는 행정안전부령으로 정하는 기술자격자로 하여금 정기적으로 점검하는 것을 말하며 “작동점검”, “종합점검”과 "최초점검"을 의미한다.</li>
              <li style={{paddingBottom:"0px"}}>③"관계인"이란 소방기본법 제2조 제3항에 따른 소방안전관리대상물의 소유자, 점유자, 관리자를 말한다.</li>
            </ul> 
          </div>
          <div className="rule">
            <h2>제3조(법령의준수)</h2>
            <p>발주자와 관리업자는 소방안전관리업무 대행 및 자체점점의 이행에 있어서 관련 법령의 규정을 준수하여야 한다. </p>
          </div>
          <div className="rule" 
          style={{
            // border:"1px solid black"
          }}>
            <h2>제4조(업무의 범위)</h2>
            <p style={{marginBottom:"10px"}}>①소방안전관리업무 대행</p> 
            <p style={{ paddingTop:"5px", paddingBottom:"5px", backgroundColor: "antiquewhite", paddingLeft:"0px", marginLeft:"30px", marginTop:"-10px", marginBottom:"-10px"  }}>1. 시행 횟수는 월 1회 이상으로 하되 상호 협의하여 결정한다.</p>
            <p style={{ marginLeft:"-25px" }}>2. 화재예방법 시행령 제28조에 따라 관련 소방안전관리업무 대행을 수행한다.</p>
            <ul style={{ marginLeft:"15px" }}>
              <li>가. 해당대상물의 피난시설, 방화구획 및 방화시설의 관리</li>
              <li>나. 소방시설이나 그 밖의 소방관련 시설의 관리</li>
              <li>다. 업무대행의 세부 방법</li>
            </ul>
            <ul style={{ marginLeft:"40px", marginTop : "-15px" }}>
              <li>1) 소방시설 점검 시 공용부 점검을 원칙으로 한다.</li>
              <li>2) 계단, 통로 등 피난통로 상에 피난에 장애가 되는 물건 등이 쌓여 있는 경우에는 즉시 이동조치 하도록 관계인에게 설명한다.</li>
              <li>3) 방화문은 항시 닫힘 상태를 유지하거나 정상 작동될 수 있도록 관계인에게 설명한다.</li>
              <li>4) 점검 완료 시 해당 소방안전관리자(또는 관계인)에게 점검결과를 설명하고 점검표에 기재·제출한다.</li>
              <li>5) 소화기, 감지기, 유도등 등을 점검시에는 표본점검을 실시할 수 있으며, 기타시설에 기재한다.</li>
              <li style={{paddingBottom:"0px"}}>6) 업무대행을 완료한 경우 화재예방법 시행규칙 별표 1의 소방안전관리업무 대행 점검표를 작성하여 제출한다.</li>
            </ul>
            <p>②자체점검</p>
            <ul style={{ marginLeft:"40px" }}>
              <li>1. 관리업자는 계약에 의하여 자체점검을 실시하는 경우 소방시설법 제22조에 따라 소방대상물에 대해 자체점검을 시행하여 발주자의 점검업무를 대행한다.</li>
              <li>2. 관리업자는 소방시설법 시행규칙 제20조 및 제23조의 기준에 의하여 당해 소방시설을 점검하고 “소방시설등 자체점검 실시결과 보고서”(이하 “보고서”라 한다)를 발주자에게 제출한다.</li>
              <li style={{paddingBottom:"0px"}}>3. 발주자는 관리업자가 제출한 보고서의 내용을 확인하고, 소방시설법 제23조에 따라 소방본부장이나 소방서장에게 보고하며, 소방시설이 정상적인 작동상태가 유지될 수 있도록 조치하여야 한다.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="paper">
          <div className="content">
          <div className="rule">
            <p style={{marginTop:"0px"}}>③ 제1항 및 제2항의 업무 범위 외에 발주자와 관리업자 간의 특약이 있는 경우에는 이에 부수되는 개별 계약을 추가로 체결할 수 있으며, 이에 소요되는 대가는 발주자와 관리업자가 협의하여 별도로 산정한다.</p>
            <h2>제5조(대가의 산출 및 지불방법)</h2>
            <ul style={{marginTop:"10px", marginLeft:"-10px"}}>
              <li>① 관리업자의 소방안전관리업무 대행에 대한 대가는 화재예방법 제25조, 자체점검에 대한 대가는 소방시설법 제22조에 의해 엔지니어링사업대가의 기준 중 실비정액가산방식에 따른다.</li>
              <li>② 소방안전관리업무 대행 및 자체점검의 대가는 업무가 종료된 후 7일 이내에 지급하는 것을 원칙으로 하되 상호 협의하여 결정할 수 있으며, 업무수행 중 업무범위가 변경된 경우 계약 금액 및 변경된 기간의 투입인력을 고려하여 정산한다.</li>
              <li>③ 발주자가 소방안전관리업무 대행 및 자체점검 용역에 대한 대가를 지급기한 내에 지급하지 못하는 경우에는 그 미지급금액에 대하여 지급기한의 다음날부터 지급하는 날까지의 일수에「하도급거래 공정화에 관한 법률」제13조에 의한 지연이자율 15.5%를 적용하여 산출한 이자를 가산하여 지급하여야 한다.</li>
              <li>④ 소방안전관리업무 대행 및 자체점검 시 소요되는 장비 및 물품 등은 관리업자의 부담으로 한다. 단, 특정한 제품 및 일반적인 점검기구가 아닌 경우에는 발주자가 제공하거나 상호 협의하여 결정한다.</li> 
            </ul>
          </div>
          <div className="rule">
            <h2>제6조(대가의조정)</h2>
            <p>소방안전관리업무 대행 및 자체점검 업무의 수행기간이 1년을 초과하는 경우에 이 기간 중 한국엔지니어링협회가 통계법에 따라 조사·공포한 노임단가의 변경이 있을 때에는 「국가를 당사자로 하는 계약에 관한 법률 시행령」제64조 또는 「지방자치단체를 당사자로 하는 계약에 관한 법률 시행령」제73조에 따라 발주자와 관리업자가 협의하여 대가를 조정할 수 있다.</p>
          </div>
          <div className="rule">
            <h2>제7조(자료의 제공 및 성실의무)</h2>
            <p>① 발주자는 관리업자가 소방안전관리업무 대행 및 자체점검 업무를 수행하는데 필요한 다음 각 호의 자료를 제공하여야 한다.</p>
              <ul style={{ marginLeft:"10px" }}>
                <li>1. 직년 연도의 자체점검 보고서</li>
                <li>2. 소방시설 설계도서</li>
                <li>3. 소방시설 설치계획표</li>
                <li>4. 소방관련 시험성적서</li>
                <li>5. 건축허가서 및 준공서류</li>
                <li>6. 기타 소방안전관리대행 업무수행에 필요한 자료</li>
              </ul>
            <p style={{marginTop:"-10px"}}>② 발주자와 관리업자는 신의와 성실의 관계를 유지하며 법 등 관계법령을 준수하며, 관리업자는 발주자가 제공한 자료 등을 통해 알게 된 정보에 대해 비밀을 보장하여야 한다. </p>
          </div>
          <div className="rule">
            <h2>제8조(출입허용)</h2>
            <ul style={{marginTop:"10px", marginLeft:"-10px"}}>
              <li>① 발주자는 업무대행 및 자체점검을 위하여 관리업자가 지정한 사람의 출입을 허용하여야 하며, 이때 출입자는 신원을 확인할 수 있는 신분증을 휴대하여야 한다.</li>
              <li>② 발주자는 업무를 수행하는 데 불편함이 없도록 출입허용 및 자료제공에 최대한 협조하여야 한다.</li>
            </ul>
          </div>
          <div className="rule">
            <h2>제9조(발주자의 소방안전관리자 선임)</h2>
            <ul style={{marginTop:"10px", marginLeft:"-10px"}}>
              <li>① 발주자는 소방안전관리업무 대행 계약을 관리업자와 체결할 경우 화재예방법 제24조제3항에 따라 소방안전관리업무 대행을 감독할 소방안전관리자를 별도로 선임하여야 한다.</li>
              <li>② 발주자는 소방안전관리자를 선임한 경우 관리업자에게 통보한 후 화재예방법 제26조에 따른 기간 내에 소방안전관리자의 선임 또는 변경을 소방본부장이나 소방서장에게 신고하여야 한다.</li> 
            </ul>
          </div>
          <div className="rule">
            <h2>제10조(통지의무) </h2>
            <p>① 발주자는 다음 각 호에 해당하는 경우 그 구체적인 내용을 관리업자에게 지체없이 통지하여야 한다. </p>
          </div>
        </div>
      </div>
      <div className="paper">
        <div className="content">
        <div className="rule">
          <ul style={{ marginLeft:"30px", marginTop:"0px" }}>
            <li>1. 소방대상물의 증·개축 및 대수선공사 등의 건축행위 전</li>
            <li>2. 소방대상물의 전부 또는 일부 용도변경을 진행하기 전</li>
            <li>3. 상속, 증여, 매매 등에 의한 계약에 대한 권리·의무가 승계되었을 경우</li>
            <li>4. 소방안전관리자의 변경 또는 퇴직 시</li>  
          </ul>
          <p>②관리업자는 다음 각 호에 해당하는 경우 그 구체적인 내용을 발주자에게 지체없이 통지하여야 한다.</p>
          <ul style={{ marginLeft:"30px" }}>
            <li>1. 관리업자의 지위를 승계한 경우</li>
            <li>2. 관리업의 등록취소 또는 영업정지 처분을 받은 경우</li>
            <li>3. 휴업 또는 폐업을 한 경우</li>  
          </ul>
        </div>
        <div className="rule">
          <h2>제11조(발주자의 즉시조치 의무)</h2> 
            <ul style={{marginTop:"10px", marginLeft:"-10px"}}>
              <li>발주자는 다음 각 항에 해당하는 경우 지체없이 수리 등 필요한 조치를 하여야 한다.</li>
              <li>① 소화펌프(가압송수장치를 포함한다. 이하 같다), 동력·감시 제어반 또는 소방시설용 전원(비상전원을 포함한다)의 고장으로 소방시설이 작동되지 않는 경우</li>
              <li>② 화재 수신기의 고장으로 화재경보음이 자동으로 울리지 않거나 화재 수신기와 연동된 소방시설의 작동이 불가능한 경우</li>
              <li>③ 소화배관 등이 폐쇄·차단되어 소화수(消火水) 또는 소화약제가 자동 방출되지 않는 경우</li>
              <li>④ 방화문 또는 자동방화셔터가 훼손되거나 철거되어 본래의 기능을 못 하는 경우</li>  
            </ul> 
        </div>
        <div className="rule">
          <h2>제12조(점검결과 및 조치이행)</h2>
          <ul style={{marginTop:"10px", marginLeft:"-10px"}}>
            <li>① 발주자는 소망내상굴에 실시되어 있는 소망시실이 싱상 유시필괼 수 있도록 아내와 아내, 관리업자는 소방안전관리업무 대행 및 자체점검 중 이상발생 시 발주자 또는 관계인에게 이를 통보하여야 한다.</li>
            <li>② 관리업자는 자체점검 후 보고서를 관계인에게 10일 이내에 전달하여야 하며, 관계인은 점검 종료일로부터 15일 이내에 소방본부장이나 소방서장에게 보고서를 제출하여야 한다.</li>
            <li>③ 발주자는 소방시설의 정상유지를 위해 보수공사가 필요한 경우에는 별도의 공사계약 등을 통해 소방시설이 정상적으로 유지되도록 하여야 한다.</li>
            <li>④ 발주자는 관리업자가 작성한 점검결과에 대해 정당한 사유 없이 수정을 요청할 수 없으며, 소방안전관리업무 대행 및 자체점검의 점검결과를 이유로 계약을 해지하거나, 대가의 지급을 거부 또는 지연시키거나 그 밖의 불이익을 주어서는 아니 된다.</li>
          </ul> 
        </div>
        <div className="rule">
          <h2>제13조(업무감독)</h2>
          <p>발주자는 관리업자의 업무수행에 정상적으로 이루어질 수 있도록 협조하고 업무를 감독하여야 한다.</p>
        </div>
        <div className="rule">
          <h2>제14조(해지 등에 따르는 대가의 정산)</h2>
          <p>제16조에 따라 계약을 해제 또는 해지하는 경우 발주자와 관리업자는 소방안전관리업무 대행 및 자체점검 실시 여부 등을 고려하여 지체없이 업무 대가를 정산하여야 한다.</p>
        </div>
        <div className="rule">
          <h2>제15조(계약의 양도 및 변경 등)</h2>
          <ul style={{marginTop:"10px", marginLeft:"-10px"}}>
            <li>① 발주자와 관리업자는 상대방의 승낙 없이는 이 계약상의 권리·의무를 제3자에게 양도, 대여, 담보제공 등 그 밖의 처분행위를 할 수 없다.</li>
            <li>② 계약의 내용은 상호 합의하여 변경할 수 있다.</li>
          </ul>
        </div>
        <div className="rule"> 
          <h2>제16조(계약의 해제 또는 해지)</h2>
          <p>① 발주자는 다음 각 호의 어느 하나에 해당하는 경우에는 계약의 전부 또는 일부를 해제 또는 해지할 수 있다.</p>
          <ul style={{ marginLeft:"10px" }}>
            <li>1. 관리업자가 특별시장·광역시장·특별자치시장·도지사 또는 특별자치도지사에게 등록취소 처분 또는 영업정지 처분 등을 받아 계약이행이 불가능한 경우</li>
          </ul>
        </div>
        </div>
      </div>
      <div className="paper">
        <div className="content">
        <div className="rule">
          <ul style={{marginTop:"0px", marginLeft:"10px"}}>
            <li>2. 관리업자가 금융기관의 거래정지 처분, 어음 또는 수표의 부도, 제3자에 따른 가처분·강제집행·파산선고 또는 회사정리 신청 등으로 계약이행이 어려운 경우</li>
            <li>3. 관리업자가 발주자의 승낙 없이 계약상의 의무를 이행하지 않거나 계약을 양도한 경우</li>
            <li>4. 사망, 실종, 질병 및 그 밖의 사유로 계약이행이 불가능한 경우</li>
          </ul> 
          <p>② 관리업자는 다음 각 호의 어느 하나에 해당하는 경우에는 계약의 전부 또는 일부를 해제 또는 해지할 수 있다. </p>
          <ul style={{ marginLeft:"40px", marginLeft:"10px" }}>
            <li>1. 발주자가 대가의 지급을 거부하거나 30일 이상 지급을 지연하는 경우</li>
            <li>2. 발주자가 금융기관의 거래정지 처분, 어음 또는 수표의 부도, 제3자에 따른 가처분 강제집행 파산선고 또는 회사정리신청 등으로 계약이행이 어려운 경우 </li>
            <li>3. 발주자가 사망, 실종, 질병 등으로 계약이행이 어려운 경우 </li>
            <li>4. 발주자가 기타 정당한 이유 없이 계약내용을 이행하지 아니하여 소방안전관리업무 대행 또는 점검업무의 수행이 불가능하다고 인정되는 경우 </li>
            <li>③ 제1항 및 제2항에 의한 계약 해지는 상대방에게 계약의 이행기한 또는 해지사유 기한을 정하여 통보한 후 기한 내에 이행되지 않거나 해지사유가 해소되지 아니한 때 계약해지를 상대방에게 통지함으로써 효력이 발생한다.</li>
            <li>④ 계약기간 중에라도 발주자의 불가피한 사정으로 본 계약을 계속할 수 없을 때에는 발주자와 관리업자 상호 간의 합의에 의해 해약할 수 있다.</li> 
          </ul>
        </div>
        <div className="rule">
          <h2>제17조(관리업자의 면책사유)</h2>
          <ul style={{marginTop:"10px", marginLeft:"-10px"}}>
            <li>① 관리업자가 소방안전관리업무 대행 및 자체점검을 수행하는 데 있어 제8조의 정하는 사항 등의 협조가 정상적으로 이루어지지 않아 발생하는 문제 및 발주자의 귀책에 의하여 문제가 발생하는 경우 관리업자는 책임을 지지 않는다. </li>
            <li>② 관리업자가 업무를 수행하는 데 있어 천재지변 등 불가항력적인 사유에 의하여 문제가 발생하는 경우 관리업자는 책임을 지지 않는다.</li>
            <li>③ 제12조 제2항에 의거 관리업자가 전달한 보고서를 소방본부장이나 소방서장에게 제출하여야 할 의무는 발주자에게 있으며 발주자에게 전달된 보고서가 소방관서에 제출되지 않아 문제가 발생하는 경우 관리업자는 책임을 지지 않는다.</li>
          </ul>
        </div>
        <div className="rule">
          <h2>제18조(특약사항) </h2>
          <p>이 계약에서 정하는 사항 외에 발주자와 관리업자는 특약사항을 정할 수 있다.</p>
        </div>
        <div className="rule" style={{color:"#d8d8d8"}}>
          <h2>제19조(특약) 입력셀</h2>
          <p>화재예방법 제24조(특정소방대상물의 소방안전관리) 제③항 자격에 의한 소방안전관리자 선임을 하지 아니 한경우 본 계약은 컨설팅 계약으로 한다 </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;