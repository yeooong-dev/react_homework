import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([
      // {
      //   id : 0,
      //   title : "title",
      //   memo : "memo",
      //   isDone : false, 
      // }
  ]);

  const [title, setTitle] = useState('');
  const [memo, setMemo] = useState('');

  const titleAddHandler = (event) => {
    setTitle(event.target.value);
  }
  const memoAddHandler = (event) => {
    setMemo(event.target.value);
  }
  //toggle button
  const clickToggleButtonHandler = (id) => {
    const newUser = users.map((user)=> user.id === id ? {...user,isDone : !user.isDone}:user)
    setUsers(newUser);
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
      isDone : false,
    }
    setUsers([...users, newUser])
    setMemo('')
    setTitle('')
  }
  //완료 버튼
  const clickClearButtonHandler = (id) => {
    setUsers((users)=> users.map((newUser)=>
        newUser.id === id ? {...newUser, checked : !newUser.checked } : newUser
    ));
  };
   

  return (
    <div>
      <h1 className='todo_title'>My Todo List</h1>
      <div className='a_style'>
          <input className='title_style' type='text' placeholder='제목' value={title} onChange={titleAddHandler} />

          <input className='subtitle_style' type='text' placeholder='내용' value={memo} onChange = {memoAddHandler} />

          <button onClick={clickAddButtonHandler}>추가하기</button>
      </div>

      <div className='center'>
        <div className='m'>
          <h1>Doing</h1>
          {users.filter(v=>v.isDone === false).map(function(item){
          return <User className="bg_style" key={item.id} item = {item} removerFuction = {clickRemoveButtonHandler} toggleFuction = {clickToggleButtonHandler} />;
          
          })}
          <h1>Done</h1>
          {users.filter(v=>v.isDone === true).map(function(item){
          return <User className="bg_style" key={item.id} item = {item} removerFuction = {clickRemoveButtonHandler} toggleFuction = {clickToggleButtonHandler} />;
          
          })}
        </div>
      </div>
    </div>
  )
}
  const User = ({item, removerFuction, toggleFuction})=> {

    return(
      <div key = {item.id} className='m_style'>
        {/* { item.isDone === false ? `${item.title} - ${item.memo}` : <del>{item.title} - {item.memo}</del>} */}
        <div className='todotitle'>
        {item.title}-{item.memo}
        </div>
        <div className='buttonbox'>
          <button className='delete_btn' onClick={()=> removerFuction(item.id)}>삭제</button>
          {item.isDone === false ? <button className='clear_btn' onClick={()=> toggleFuction(item.id)}>완료</button> : <button className='clear_btn' onClick={()=> toggleFuction(item.id)}>취소</button>}
        </div>
        
        
      </div>
    );
  };


export default App;
