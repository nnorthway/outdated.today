import React from 'react'

function Privacy() {
  return (
    <>
      <div className='container'>
        <div className='columns is-centered'>
          <div className='column is-three-fifths'>
            <h3 className='is-size-3'>Who We Are</h3>
            <p>
              I'm Nate Northway. I'm the owner and operator of https://outdated.today. This is the privacy policy
              for this website. I encourage you to read this whole page (it's not that long) so you know what data
              I collect on you, what I do with it, and how you can take action regarding your data.
            </p>
            <hr />
            <h3 className='is-size-3'>What data is collected and why?</h3>
            <p>
              When you interact with outdated.today, I collect information you explicitly provide in the contact form
              and inferred information, provided by your browser and/or environment. Using Google Analytics, I collect
              your IP address, the time you visited the page, the browser and platform you're using, and sometimes, the
              specific device being used to access the page. <br />
              When you use the contact form, only the information you provide is gathered, and I may respond using the
              information you provide. <br />
              I use Google Analytics to help track my site's growth, page views, visitors, demographic data, and overall
              traffic. When you visit my site, Google Analytics uses your behavior to prepare a report for me which
              tells me how long you were on my site, what pages you visited, where you came from, what links you followed,
              and other specifics. I don't collect any personally identifiable information.
            </p>
            <hr />
            <h3 className='is-size-3'>Integrations</h3>
            <p>
              This website is hosted on Netlify, and I strongly encourage you to read their <a href='https://www.netlify.com/privacy/' target='_blank' rel='noreferrer'>privacy policy</a>.
              This website also integrates with Elastic Email to send emails from the contact form; their <a href='https://elasticemail.com/resources/usage-policies/privacy-policy' target='_blank' rel='noreferrer'>privacy policy</a> is another read I strongly suggest.
            </p>
            <hr />
            <h3 className='is-size-3'>Your Rights</h3>
            <p>
              You can request a file containing your data, but it would be limited to the data you provided to us. You can request
              that I erase any personal data I hold about you, except for data I am obliged to keep for legal purposes.
            </p>
            <hr />
            <h3 className='is-size-3'>Where We Send Your Data</h3>
            <p>
              As previously noted in the integrations section, this website is hosted on Netlify and integrates with Elastic Email and
              Google Analytics.
            </p>
            <hr />
            <h3 className='is-size-3'>How we protect your data</h3>
            <p>
              Your data is stored on a secure server. I am the only person who has access to Google Analytics or my email, where
              your data may end up if you use the contact form.
            </p>
            <hr />
            <h3 className='is-size-3'>Data Breach Procedures</h3>
            <p>
              In the event of a breach, I'll let you know that it happened via email and by posting a notice on the website. I'll
              immediately change all credentials that secure storage facilities and report the breach to the service provider. I'll
              also keep you informed about what I'm doing to have better security in the future.
            </p>
            <hr />
            <h3 className='is-size-3'>Third Party Data</h3>
            <p>
              I receive data from any website, service, software, or hardware that shares analytical or personal data, settings, or
              preferences. I use this data for analytical purposes, but sometimes, it makes your site experience better. Most of this
              data is anonymized, but some of it is not. I do not store data I automatically recieve from third parties that is not anonymized.
            </p>
            <hr />
            <h3 className='is-size-3'>How To Contact Me</h3>
            <p>
              You can send me an <a href='mailto:nate@natenorthway.com'>email</a>, or use the <a href='https://natenorthway.com/contact' target='_blank' rel='noreferrer'>contact form on my website</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Privacy