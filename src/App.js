import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'; // 거의 고정인 부분들
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']); // 자주 변경되는 부분들
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <div className="list">
        <button onClick={ () => { 
          let copy = [...글제목]; 
          copy[0] = '여자 코트 추천'; 
          글제목변경(copy); } }>글 수정</button>
        <button onClick={ ()=>{
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        } }>정렬버튼</button>
        <h4>{ 글제목[0] } <span onClick={ () => {따봉변경(따봉++)} }>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={ () => { setModal(!modal) }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return(
            <div className="list">
              <h4 onClick={ () => { setModal(!modal); setTitle(i) }}>{ 글제목[i] }<span onClick={ (e) => { e.stopPropagation(); let copy = [...따봉]; copy[i]++; 따봉변경(copy);} }>👍</span> { 따봉[i] }</h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input type="text" onChange={ (e) => {
        입력값변경(e.target.value); } }></input>
      <button onClick={(e)=>{
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy)
        
      }}>글 발행</button>

      {
        modal == true ? <Modal title={title} 글제목={글제목} 글제목변경={글제목변경}/> : null
      }
      
    </div>
  );
}

// 컴포넌트
// 어떤걸 컴포넌트? 반복적인 html축약, 큰 페이지들, 자주변경되는 것들
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

export default App;
