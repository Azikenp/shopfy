import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [user, setUser] = useState({
        Name: '', Email: '', Subject: '', Message: ''
    })

    let name, value
    const data = (e) => {
        name = e.target.name;
        value = e.target.value
        setUser({...user, [name]: value})
    }

    const senddata = async (e) => {
        const { name, Email, Subject, Message} = user
        e.preventDefault;
    }
  return (
    <div className="contact_container">
        <div className="contant">
            <h2># contact us</h2>
            <div className="form">
                <form method="POST">
                    <input type="text" name='Name' value={user.Name} placeholder='Enter your full name' required autoComplete='off' onChange={data} />
                    <input type="email" name='Email' value={user.Email} placeholder='Enter your E-mail' required autoComplete='off' onChange={data} />
                    <input type="text" name='Subject' value={user.Subject} placeholder='Enter your subject' required autoComplete='off' onChange={data} />
                    <textarea name="Message" value={user.Message} placeholder='Your message' required autoComplete='off' onChange={data} ></textarea>
                    <button type='submit' onClick={() => senddata}>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact