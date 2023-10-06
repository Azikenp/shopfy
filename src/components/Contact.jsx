import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Contact.css";

const Contact = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [users, setUser] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...users, [name]: value });
  };

  const senddata = async (e) => {
    const { Name, Email, Subject, Message } = users;
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Subject,
        Message,
      }),
    };
    const res = await fetch(
      "https://shopfy-contact-default-rtdb.firebaseio.com/Message.json",
      options
    );
    console.log(res);
    if (res) {
      alert("Your message sent");
    } else {
      alert("An error occured");
    }
  };
  return (
    <div className="contact_container">
      <div className="contant">
        <h2># contact us</h2>
        <div className="form">
          <form method="POST">
            <input
              type="text"
              name="Name"
              value={users.Name}
              placeholder="Enter your full name"
              required
              autoComplete="off"
              onChange={data}
            />
            <input
              type="email"
              name="Email"
              value={users.Email}
              placeholder="Enter your E-mail"
              required
              autoComplete="off"
              onChange={data}
            />
            <input
              type="text"
              name="Subject"
              value={users.Subject}
              placeholder="Enter your subject"
              required
              autoComplete="off"
              onChange={data}
            />
            <textarea
              name="Message"
              value={users.Message}
              placeholder="Your message"
              required
              autoComplete="off"
              onChange={data}
            ></textarea>
            {isAuthenticated ? (
              <button type="submit" onClick={senddata}>
                Send
              </button>
            ) : (
              <button type="submit" onClick={() => loginWithRedirect()}>
                Login To Send
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
