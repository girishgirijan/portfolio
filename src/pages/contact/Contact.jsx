import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import "./contact.css";

function Contact() {
  const onSubmit = async (e) => {}
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Feel free to contact</h3>

          <p className="contact__description">
            Feel free to get in touch with me.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">girish.v.girijan@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+1 437-993-5427</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="" className="contact__social-link">
              <FaFacebookF />
            </a>
            <a href="" className="contact__social-link">
              <FaTwitter />
            </a>
            <a href="" className="contact__social-link">
              <FaYoutube />
            </a>
            <a href="" className="contact__social-link">
              <FaDribbble />
            </a>
          </div>
        </div>

        <form
          className="contact__form"
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/fd6c6c4f3c10e768d10d5c45b3385910 "
          method="POST"
        >
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" placeholder="Name" className="form__control" required />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Email"
                className="form__control"
                required
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Message"
              className="form__control textarea"
              style={{ width: "100%" }}
              required
            ></textarea>
          </div>

          <button className="button" type="submit">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
