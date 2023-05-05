import React from "react";
import MyContactItem from "./myContactItem/MyContactItem";
import "./myContact.scss";

const MyContact = () => {
  return (
    <div className={"footer__myContact"}>
      <MyContactItem
        IClass={"ri-mail-fill"}
        title={"Email"}
        subtitle={"igorshwebua@gmail.com"}
      />
      <MyContactItem
        IClass={"ri-phone-fill"}
        title={"Phone"}
        subtitle={"+380960091075"}
      />
      <MyContactItem
        IClass={"ri-map-pin-2-fill"}
        title={"Location"}
        subtitle={"Kharkiv, Ukraine"}
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164153.63288311093!2d36.121016704734956!3d49.994474631259365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a09f63ab0f8b%3A0x2d4c18681aa4be0a!2sKharkiv%2C%20Kharkiv%20Oblast!5e0!3m2!1sen!2sua!4v1683193154405!5m2!1sen!2sua"
        width="100%"
        height="300"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MyContact;
