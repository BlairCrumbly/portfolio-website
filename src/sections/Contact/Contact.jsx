import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactStyles.module.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Error sending message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <input type="text" name="user_name" placeholder="Name" required />
        </div>
        <div className="formGroup">
          <input type="email" name="user_email" placeholder="Email" required />
        </div>
        <div className="formGroup">
          <textarea name="message" placeholder="Message" required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Send Message" />
      </form>
    </section>
  );
}

export default Contact;
