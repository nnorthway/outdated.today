import { React } from 'react';

function Message({display, type, title, message, handleClick, classes}) {

  return (
    <article className={`message ${classes} is-${type} ${display ? 'is-active':''}`}>
      <div className='message-header'>
        <p>{title}</p>
        <button onClick={handleClick} className='delete' aria-label='delete'></button>
      </div>
      <div className='message-body'>
        <p>{message}</p>
      </div>
    </article>
  )
}

export default Message;
