import './DiaryEditor.css';

import { useRef, useState } from "react";

const DiaryEditor = () => {

    const authorInput = useRef(); // 마우스를 위에 useRef(); 위에 올리면 설명이 나오면서 MutableRefObject()를 저장한다는걸 알 수 있다. 이는 HTML DOM 요소에 접근할 수 있도록 해준다.
    const contentInput = useRef();

    // const [author, setAuthor] = useState(""); // author : 상태(state) , setAuthor: 상태 변화를 주도하는 함수
    // const [content, setContent] = useState("");

    // 단일 문자열이면 문자열만 바꿔서 넣어주면 되듯 객체를 변경하려면 객체로 만들어서 넣어주어야 변경이 된다.
    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1
    });

    // onChagne의 중복을 없애기 위한 함수만들기
    const handleChangeState = (event) => {
        // console.log(event.target.name);
        // console.log(event.target.value);
        setState({
            ...state,
            [event.target.name] : event.target.value // name으로 접근하여 value 바꾸기
        });
    };

    const handleSubmit = () => {
        if(state.author.length < 1) {
            authorInput.current.focus();
            return;
        }

        if(state.content.length < 5) {
            contentInput.current.focus();
            return;
        }

        alert("저장 성공");
    };

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input ref={authorInput} name="author" value={state.author} onChange={handleChangeState}/>
            </div>
            <div>
                <textarea ref={contentInput} name="content" value={state.content} onChange={handleChangeState} />
            </div>
            <div>
                오늘의 감정점수 : <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>
    );
}

export default DiaryEditor;
