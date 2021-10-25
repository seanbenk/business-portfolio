import React from "react";

import * as styles from "./Contact.module.scss";

import Section from "../Section";
import A from "../Navs/A";

function Contact(props) {
  return (
    <Section id="contact" className={styles.container}>
      <div className={styles.contactsWrapper}>
        <ContactItem
          src="/static/images/contact/phone-icon.svg"
          alt="phone icon"
          title="0439000690"
        />
        <ContactItem
          src="/static/images/contact/linkedin-icon.svg"
          alt="linked in icon"
          title="/in/sean-benkenstein"
          href="https://www.linkedin.com/in/sean-benkenstein/"
        />
        <ContactItem
          src="/static/images/contact/gmail-icon.svg"
          alt="email icon"
          title="seanbenkenstein@gmail.com"
          href="mailto:seanbenkenstein@gmail.com"
        />
        <ContactItem
          src="static/images/contact/resume-icon.svg"
          alt="resume icon"
          title="My Resume"
          href="/static/Sean-Benkenstein-Professional-Resume.pdf"
        />
        <span className={styles.toTop}>
          <A to="home">
            <img src="/static/images/up-arrow.svg" />
          </A>
        </span>
      </div>
    </Section>
  );
}

const ContactItem = ({ src, alt, title, href }) => {
  return (
    <div className={styles.contactItemContainer}>
      <a className={styles.contactContainerAnchor} href={href} target="_blank">
        <img className={styles.contactContainerImage} src={src} alt={alt} />
        <span className={styles.contactContainerText}>{title}</span>
      </a>
    </div>
  );
};

export default Contact;
