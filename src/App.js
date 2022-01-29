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

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it) => it.id != targetId); // filter를 통해 targetId과 같지 않은 data만 이루어진 새로운 diaryList를 만드는 것
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
      setData(
        data.map((it) => it.id === targetId ? {...it, content: newContent} : it) // data에 map함수를 사용하여 모든 아이템을 순회하면서 해당 아이템의 id와 targetId가 같다면 해당 아이템의 나머지는 spread 연산자를 통해 그대로두고, content만 key:value로 바꿔주고 targetId와 같지 않으면 그대로 it을 넣어주면 된다.
      )
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />  {/* props로 event 내려보내기 */}
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
