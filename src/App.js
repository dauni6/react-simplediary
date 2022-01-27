import { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

function App() {

  // 리액트의 컴포넌트&데이터 구조에서 EVENT는 위로, DATA느 아래로 흐르는 단방향 구조를 가지고 있다.
  // 또한 계층이 같은 컴포넌트들 끼리는 데이터를 주고 받을 수 없어 부모에 state를 만들어서 주고 받는 방식을 사용한다.
  // 이렇게 공통된 부모에 state를 만들어 가지고 있는 것을 state hoisting이라고 하며, 이는 React뿐만 아니라 Vue.js, SwiftUI, Android Compose에도 있는 선언형 프로그래밍의 특징이다.
  const [data, setData] = useState([]); // 배열을 저장할거라서 배열로 초기화함 

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author, // key, value가 같으면 그냥 써도 되는듯?
      content,
      emotion,
      created_date,
      id: dataId.current
    };
    dataId.current += 1;
    setData([newItem, ...data]) //...data 를 통하여 원래 가지고 있던 데이터들을 나열하여 넣어줌.
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />  {/* props로 event 내려보내기 */}
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
