import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-half'>
            <p>
              This project was created by <a href='https://natenorthway.com/' target='_blank' rel='noreferrer'>Nate Northway</a>. <br />
              View this project on <a href='https://github.com/' target='_blank' rel='noreferrer'>GitHub</a>.<br />
              Copyright &copy; {new Date().getFullYear()} Nate Northway <br />
              <Link to='/privacy'>Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer