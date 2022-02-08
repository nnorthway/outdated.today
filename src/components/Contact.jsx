import { React, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Message from './Message'

function Contact() {
  const [year, setYear] = useState('')
  const [taught, setTaught] = useState('')
  const [fact, setFact] = useState('')
  const [link, setLink] = useState('')
  const [otherLink, setOtherLink] = useState('')
  const [reportedBy, setReportedBy] = useState('')
  const [reportedByLink, setReportedByLink] = useState('')
  const [on, setOn] = useState(new Date().toLocaleDateString())
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const form = useRef()
  const [successTitle, setSuccessTitle] = useState('Success')
  const [successMessage, setSuccessMessage] = useState('Your fact has been sent!')
  const [successDisplay, setSuccessDisplay] = useState(false)
  const [successClass, setSuccessClass] = useState('')
  const [errorTitle, setErrorTitle] = useState('Oh no!')
  const [errorMessage, setErrorMessage] = useState('Something broke - give it another shot')
  const [errorDisplay, setErrorDisplay] = useState(false)
  const [errorClass, setErrorClass] = useState('')

  const validateEmail = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase())
  }

  const hideErrorMessage = () => {
    setErrorClass('invisible')
    let rmClass = setTimeout(() => {
      setErrorClass('')
      setErrorDisplay(false)
    }, 1000)

  }

  const hideSuccessMessage = () => {
    clearTimeout()
    setSuccessClass('invisible')
    let rmClass = setTimeout(() => {
      setSuccessClass('')
      setSuccessDisplay(false)
    }, 1000)
  }

  const showErrorMessage = (msg) => {
    setErrorDisplay(true)
    setErrorClass('invisible')
    if (msg) {
      setErrorMessage(msg)
    }
    let setClass = setTimeout(() => {
      setErrorClass('')
    })
    let hide = setTimeout(() => {
      hideErrorMessage()
    }, 10000)
  }

  const showSuccessMessage = (msg) => {
    setSuccessDisplay(true)
    setSuccessClass('invisible')
    if (msg) {
      setSuccessMessage(msg)
    }
    let setClass = setTimeout(() => {
      setSuccessClass('')
    })
    let hide = setTimeout(() => {
      hideErrorMessage()
    }, 10000)
  }

  const submit = (e) => {
    e.preventDefault();
    let valid = validateEmail(email)
    setIsLoading(true)
    if (
      year && taught && fact && link && reportedBy && on && name && email && valid
    ) {
      e.preventDefault()
      setIsLoading(true)
      let addLink = otherLink ? otherLink : ""
      let creditLink = reportedByLink ? reportedByLink : ""
      emailjs.sendForm("service_jo1bdvi", "template_p0418d6", form.current, "user_41d13mwOrj71BUEst9vwI", {
        taught: {taught},
        fact: {fact},
        year: {year},
        link: {link},
        otherLink: {addLink},
        creditAs: {reportedBy},
        creditLink: {creditLink},
        name: {name},
        email: {email},
        on: {on}
      }).then((response) => {
        showSuccessMessage("Nice! Your 'fact' was submitted. We'll let you know when it's up!")
        clear()
      }, (error) => {
        showErrorMessage("Dang, there was an issue. Try again.")
      })
      setIsLoading(false)
    } else {
      showErrorMessage("There were some empty fields there, try again")
    }
  }

  const clear = (e) => {
    if (e) {
      e.preventDefault()
    }
    setYear('')
    setTaught('')
    setFact('')
    setLink('')
    setOtherLink('')
    setReportedBy('')
    setReportedByLink('')
    setName('')
    setEmail('')
  }
  
  return (
    <>
      <Message classes={successClass} type='success' title={successTitle} message={successMessage} display={successDisplay} handleClick={hideSuccessMessage} />
      <Message classes={errorClass} type='error' title={errorTitle} message={errorMessage} display={errorDisplay} handleClick={hideErrorMessage} />
      <form ref={form} className='contact-form' onSubmit={submit}>
        <div className='field'>
          <label className='label' htmlFor='name'>Your Name (required)</label>
          <div className='control'>
            <input name='name' onChange={e => setName(e.target.value)} className='input' type='text' placeholder='Your Name' value={name} required />
          </div>
        </div>
        <div className='field'>
          <label className='label' htmlFor='email'>Your Email (required)</label>
          <div className='control'>
            <input name='email' onChange={e => setEmail(e.target.value)} className='input' type='email' placeholder='you@ontar.io' value={email} required />
          </div>
        </div>
        <div className='field'>
          <label className='label' htmlFor='year'>The Year this fact was proven wrong (required)</label>
          <div className='control'>
            <input name='year' onChange={e => setYear(e.target.value)} className='input' type='number' min='0' max={new Date().getFullYear()} value={year} required />
          </div>
        </div>
        <div className='field'>
          <label className='label' htmlFor='taught'>What was taught before then? (required)</label>
          <div className='control'>
            <textarea onChange={e => setTaught(e.target.value)} className='textarea' name='taught' placeholder="Pigs fly" value={taught} required />
          </div>
        </div>
        <div className='field'>
          <label className='label' htmlFor='fact'>What do we now know to be truth? (required)</label>
          <div className='control'>
            <textarea onChange={e => setFact(e.target.value)} className='textarea' name='fact' placeholder="Pigs don't fly" value={fact} required />
          </div>
        </div>
        <div className='field'>
          <label className='label' htmlFor='link'>Please link to a source (required)</label>
          <div className='control'>
            <input onChange={e => setLink(e.target.value)} className='input' type='url' name='link' placeholder='https://natenorthway.com/' value={link} required />
          </div>
        </div>
        <div className='field'>
          <label className='label' htmlFor='otherLink'>Link to another source, if you can (optional)</label>
          <div className='control'>
            <input onChange={e => setOtherLink(e.target.value)} className='input' type='url' name='otherLink' placeholder='https://scenar.io/' value={otherLink} />
          </div>
        </div>
        <div className='field'>
          <label className='label' htmlFor='credit'>How would you like to be credited? (required)</label>
          <div className='control'>
            <input onChange={e => setReportedBy(e.target.value)} className='input' type='text' name='reportedBy' placeholder='Captain Jean Luc Picard' value={reportedBy} required />
          </div>
        </div>
        <div className='field'>
          <label className='label' htmlFor='creditLink'>Would you like to have a link to your Twitter/site/blog/whatever? (optional)</label>
          <div className='control'>
            <input onChange={e => setReportedByLink(e.target.value)} className='input' type='url' name='reportedByLink' placeholder='https://pat.io/' value={reportedByLink} />
          </div>
        </div>
        <input name='on' onChange={e => setOn(Date.parse(e.target.value))} className='hidden' hidden type='string' value={new Date().toLocaleDateString()} />
        <div className='buttons'>
          <button type='submit' className={`button is-link ${isLoading ? "is-loading" : ""}`}>Submit</button>
          <button onClick={e => clear(e)} className='button is-warning'>Clear</button>
        </div>
      </form>
    </>
  );
}

export default Contact
