import { useState } from "react";

const DiaryEditor = () => {

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
        console.log(state);
        alert("저장 성공");
    };

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input name="author" value={state.author} onChange={handleChangeState}/>
            </div>
            <div>
                <textarea name="content" value={state.content} onChange={handleChangeState} />
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