import DiaryItem from './DiaryItem';
import './DiaryList.css'

const DiaryList = ({ onEdit, onRemove, diaryList }) => {

    console.log(diaryList);

    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {diaryList.map((diary, idx) => (
                    <DiaryItem key={diary.id} {...diary} onEdit={onEdit} onRemove={onRemove} />
                ))}
            </div>
        </div>
    );
}

DiaryList.defaultProps = {
    diaryList: []
};

export default DiaryList;
