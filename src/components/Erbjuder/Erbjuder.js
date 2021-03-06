import React, { useRef, useState } from "react";
import "./Erbjuder.css";
import { BsHouseDoor } from "react-icons/bs";
import { erbjuder } from "../../utils/data";
import emailjs from "@emailjs/browser";
const Erbjuder = () => {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const form = useRef();
  const handleSubmit = (e) => {
    setSending(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wzr1q3r",
        "template_4xmyon5",
        form.current,
        process.env.REACT_APP_EMAILJS_ID
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            console.log("email sent");
            setSending(false);
            setSent(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="erbjuder">
      <BsHouseDoor className="icon" />
      <div className="erbjuder-item">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2 className="title" style={{ color: "#0369a1" }}>
            Vi Erbjuder
          </h2>
          {erbjuder?.map((el) => (
            <div key={el.id} className="erbjudande">
              <i
                style={{
                  marginRight: "0.5rem",
                  color: "#0369a1",
                  fontSize: "1.2rem",
                }}
              >
                {el.icon}
              </i>
              <h4>{el.title}</h4>
            </div>
          ))}
        </div>
        <div>
          <h2 style={{ marginTop: "2rem", color: "#0369a1" }}>
            Vill du ha en offert?
          </h2>
          <form ref={form}>
            <div>
              <input type="email" placeholder="Din email" name="email" />
              <button type="submit" onClick={handleSubmit}>
                {sending
                  ? "skickar..."
                  : sent
                  ? "Tack f??r din f??rfr??gan"
                  : "Skicka"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Erbjuder;
