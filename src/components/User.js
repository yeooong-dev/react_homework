import React from 'react';

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

  export default User;