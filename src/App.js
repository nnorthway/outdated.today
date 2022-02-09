import { React, useState } from 'react'
import Data from './data/data'
import Fact from './components/Fact'
import 'bulma/css/bulma.min.css'
import './components/styles/index.scss'

function App() {
  let [facts] = useState(Data)
  let [randomFact, setRandomFact] = useState(facts[parseInt(Math.random() * facts.length)])

  let getYears = () => {
    let allYears = facts.map(item => item.year);
    let theYears = allYears.filter((i, s) => {
      return allYears.indexOf(i) === s
    })
    theYears.sort()
    return theYears
  }

  let years = getYears();
  let [yearFacts, setYearFacts] = useState([])

  let getYearFacts = (year) => {
    let result = facts.filter(item => item.year === parseInt(year))
    return result ? result : null
  }

  let getRandomFact = () => {
    return facts[parseInt(Math.random() * facts.length)]
  }

  let handleChange = (event) => {
    if (event.target.value === 'random') {
      setRandomFact(getRandomFact())
      setYearFacts({})
    } else {
      setYearFacts(getYearFacts(parseInt(event.target.value)))
    }
  }

  return (
    <>
      <div className='hero is-primary is-bold'>
        <div className='hero-body'>
          <div className='columns is-centered'>
            <div className='column is-half'>
              <h1 className='is-size-2'>You were taught wrong.</h1>
              <p className='subtitle'>
                Since the dawn of time, our knowledge has expanded and we've proven countless 
                previous generations wrong. But what will the next generation say you were taught 
                wrong?<br /><br />
                Pick the year you graduated high school and find out what you were taught that was 
                later proven to be incorrect. 
              </p>
              <select className='restyled' onChange={handleChange} defaultValue='random'>
                  <option value='random'>Random</option>
                  {
                    years.map((item) => (
                      <option value={item} key={item}>{item}</option>
                    ))
                  }
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='cards'>
          {
            yearFacts.length ? 
            yearFacts.map((item) => (
              <Fact item={item} key={item.id} />
            )) : 
            <Fact item={randomFact} />
          }
        </div>
      </div>
    </>
  )
}

export default App
