import React from "react";
import { ContactForm } from "../../organisum/layout/contactForm/ContactForm";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h2>Contact</h2>
        <ContactForm />
      </div>
    </div>
  );
};
