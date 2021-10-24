import React from "react";

import * as styles from "./Contact.module.scss";

import Section from "../Section";
import A from "../Navs/A";

function Contact(props) {
  return (
    <Section id="contact" className={styles.container}>
      <div className={styles.contactsWrapper}>
        <ContactItem
          src="/static/phone-icon.svg"
          alt="phone icon"
          title="Mobile"
          details="0439000690"
        />
        <ContactItem
          src="/static/linkedin-icon.svg"
          alt="linked in icon"
          title="LinkedIn"
          details="/in/sean-benkenstein"
          href="https://www.linkedin.com/in/sean-benkenstein/"
        />
        <ContactItem
          src="/static/gmail-icon.svg"
          alt="email icon"
          title="Email"
          details="seanbenkenstein@gmail.com"
          href="mailto:seanbenkenstein@gmail.com"
        />
        <span>
          <A to="home">to top</A>
        </span>
      </div>
    </Section>
  );
}

const ContactItem = ({ src, alt, title, details, href, reversed = false }) => {
  return (
    <div className={styles.contactItemContainer}>
      {reversed ? (
        <>
          <a href={href}>{details}</a>
          {/* <h2>{title}:</h2> */}
          <img src={src} alt={alt} />
        </>
      ) : (
        <>
          <img src={src} alt={alt} />
          {/* <h2>{title}:</h2> */}
          <a href={href}>{details}</a>
        </>
      )}
    </div>
  );
};

export default Contact;
