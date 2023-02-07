import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([

  ]);

  const [title, setTitle] = useState('');
  const [memo, setMemo] = useState('');

  const titleAddHandler = (event) => {
    setTitle(event.target.value);
  }
  const memoAddHandler = (event) => {
    setMemo(event.target.value);
  }
  //삭제 버튼
  const clickRemoveButtonHandler = (id) => {
    const newUser = users.filter((user)=> user.id !== id);
    setUsers(newUser); 
  };

  //추가 버튼
  const clickAddButtonHandler = (id) => {
    const newUser = {
      id : users.length + 1,
      title : title,
      memo : memo,
      
    }

  //완료 버튼
  const clickClearButtonHandler = (id) => {
    setUsers((users)=> users.map((newUser)=>
        newUser.id === id ? {...newUser, checked : !newUser.checked } : newUser
    ));
  };
    setUsers([...users, newUser])
  }

  return (
    <div>
      <h1 className='todo_title'>My Todo List</h1>
      <div className='a_style'>
          <input type='text' placeholder='제목' value={title} onChange={titleAddHandler} />

          <input type='text' placeholder='내용' value={memo} onChange = {memoAddHandler} />

          <button onClick={clickAddButtonHandler}>추가하기</button>
      </div>

      <div className='center'>
        <div className='m_style'>
          {users.map(function(item){
          return <User key={item.id} item = {item} removerFuction = {clickRemoveButtonHandler} />;
          })}
        </div>
      </div>
    </div>
  )
}
  const User = ({item, removerFuction})=> {

    return(
      <div key = {item.id} className='m_style'>
        {item.title} - {item.memo}
        <button className='delete_btn' onClick={()=> removerFuction(item.id)}>삭제</button>
        <button className='clear_btn' onClick={()=> removerFuction(item.id)}>완료</button>
      </div>
    );
  };


export default App;
