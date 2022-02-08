import React from 'react'

function Fact({item}) {
  let d = new Date(item.on);
  return (
    <div className='card'>
      <div className='card-content'>
        <h1 className='card-title is-size-3'>You were taught: {item.taught}</h1>
        <p className='is-size-5'>
          But as it turns out: {item.fact}
        </p>
        <p className='smallcaps'>
          Added by {item.reported_by} on {d.toLocaleDateString()}
        </p>
      </div>
      <div className='card-footer'>
        <a href={item.link} className='card-footer-item' target='_blank' rel='noreferrer'>It's true</a>
        {item.other_link !== '' ? <a href={item.other_link} className='card-footer-item' rel='noreferrer'>Really</a>:''}
      </div>
    </div>
  )
}

export default Fact
