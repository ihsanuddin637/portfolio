import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-5xl">Get in Touch</h1>
      <div className="grid grid-cols-12 items-center gap-5">
        <div className="col-span-12 lg:col-span-4">
          <h2>Let’s Connect!</h2>
          <p>
            I’d love to hear from you — whether it’s about a new project, a
            creative collaboration, or an opportunity to bring your ideas to
            life. Don’t hesitate to reach out!
          </p>
          <div className="flex flex-col space-y-3">
            <button className="btn btn-primary flex justify-start">
              <MdLocationOn />
              Dhaka, Bangladesh
            </button>
            <button className="btn btn-primary flex justify-start">
              <IoCall />
              <a href="tel:+880 1743-020003">+880 1743-020003</a>
            </button>
            <button className="btn btn-primary flex justify-start">
              <MdEmail />
              <a href="mailto:ihsanuddin.dev@gmail.com">
                ihsanuddin.dev@gmail.com
              </a>
            </button>
            <button className="btn btn-primary flex justify-start"><IoLogoFacebook /><a href="https://www.facebook.com/theihsanuddin">Ihsan Uddin Khan</a></button>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <form className="space-y-3">
            <label className="input validator w-full">
              <input
                type="text"
                required
                placeholder="Your Name"
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                title="Only letters, numbers or dash"
              />
            </label>
            <label className="input validator w-full">
              <input type="email" placeholder="Your Email" required />
            </label>
            <textarea className="textarea w-full lg:h-40" placeholder="Message"></textarea>
            <input type="text" className="btn btn-primary" value='Submit' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
