// src/components/Contact.js
import React from "react";
import emailjs from "emailjs-com";
export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function sendEmail(e) {
    e.preventDefault();

    const serviceId = "anastasiya2024_masalava";
    const templateId = "template_n2rbbn9"; 
    const userId = "NSuiyfSMcuGL7rBOz"; 

    emailjs.send(serviceId, templateId, { name, email, message }, userId).then(
      (result) => {
        console.log(result.text);
        alert("Message sent!");
      },
      (error) => {
        console.log(error.text);
        alert("Error sending message. Please try again later.");
      }
    );
    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=801+Atlantic+Dr+NW,+Atlanta,+GA+30332,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white text-l">
                Contact information:
              </h2>
              <a href="mailto:masnas2004@gmail.com" class="text-purple-400 leading-relaxed" target="_blank">
                Gmail
              </a>
              <br/>
              <a href="https://www.linkedin.com/in/anastasiyamasalava/" class="text-purple-400 leading-relaxed" target="_blank">
                LinkedIn
              </a>
              <br/>
              <a href="https://github.com/anastasiya-masalava" class="text-purple-400 leading-relaxed" target="_blank">
                GitHub
              </a>
              <br/>
              <a href="https://www.youtube.com/@anastasiya_masalava5460" class="text-purple-400 leading-relaxed" target="_blank">
                YouTube
              </a>
            </div>
          </div>
        </div>
        <form
          onSubmit={sendEmail}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-black sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <br />
          <p className="leading-relaxed mb-5">
          Thank you for your interest in contacting me. I am always happy to meet new people and discuss professional opportunities. Send me your message, and I will follow up soon!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
      <div style={styles.bottomContainer}>
          <div style={styles.madeWithLove}>
            Made with <span role="img" aria-label="heart">❤️</span> by{" "}
            <span style={styles.boldText}>Anastasiya </span> | 2023
          </div>
        </div>
    </section> 
  );
}
const styles = {
  container: {
    position: "relative",
  },
  bottomContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "10px",
    marginTop: "0px", // Adjust the margin-top for spacing
  },
  madeWithLove: {
    marginTop: "20px",
    fontSize: "1rem",
    color: "gray",
    fontStyle: "italic",
    textAlign: "center"
  },
  boldText: {
    fontWeight: "bold", // Make the text bold
  }
};
