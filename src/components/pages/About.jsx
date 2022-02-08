import React from 'react'
import Contact from '../Contact'

function About() {
  return (
    <>
      <div className='hero is-link is-medium'>
        <div className='hero-body'>
          <h3 className='is-size-3'>This was made by Nate to learn how to use React.</h3>
          <p className='subtitle'>
            The facts &amp; corrections were mainly sourced from Wikipedia. <br />
            The idea came from a <a href='https://www.reddit.com/r/SomebodyMakeThis/comments/pyd1m9/id_like_to_see_it/' target='_blank' rel='noreferrer'>Reddit thread</a>.<br />
          </p>
        </div>
      </div>
      <section className='section'>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-three-fifths'>
              <h3 className='is-size-3'>If you want to contribute...</h3>
              <p>
                I'd really appreciate that. Credit will be given where it's due. Fill out the form below, and I'll let you know when it's added to the site. Additionally, you can add an issue on the GitHub repo, which will be closed when I add it. 
              </p>
              <hr />
              <Contact />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;
