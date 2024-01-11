"use client";

import React from "react";
import { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Bydefault behavior can be cancelled

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data); // convert Json data into String | compulsory to send data through server
    const endpoint = "/api/send";

    // Form the request for sending data to the server.

    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const resData = await response.json();
    console.log(resData);

    if (response.status === 200) {
      console.log("Message is Send");
      setEmailSubmitted(true);

    }
  };

  return (
    <section className="text-white grid md:grid-cols-2 md:my-12 my-12 py-24 gap-4 relative " id="contact">
      {/* circule Effect */}
     <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>


      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Lets Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
        I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>

        <div className="socials  flex flex-row gap-2">
          <Link href="https://github.com/AwaisTahir786">
            <Image src={GithubIcon} alt="GitHub pic" />
          </Link>
          <Link href="https://www.linkedin.com/in/we-developer-expert/">
            <Image src={LinkedinIcon} alt="Linkedin pic" />
          </Link>
        </div>
      </div>

      <form className="flex flex-col " onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Enter your email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required
            placeholder="jacob@google.com"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="text" className="block mb-2 text-sm font-medium">
            Subject
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            required
            placeholder="Just saying hi"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Let's talk about..."
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
        </div>
        <button
          type="submit"
          className="bg-primary-500 hover:bg-primary-600 text-medium py-2.5 px-5 rounded-lg w-full"
        >
          Send Message
        </button>
        {emailSubmitted && (
          <p className="text-green-500 mt-2 text-sm">
            Email sent Successfully!
          </p>
        )}
      </form>
    </section>
  );
}

export default EmailSection;