import React, { useEffect } from "react";
import { DocumentTextIcon } from "@heroicons/react/solid";
import particlesConfig from "../particles-config.json";

const Resume = () => {
  useEffect(() => {
    window.particlesJS("particles-js", {

      ...particlesConfig,
      particles: {

        ...particlesConfig.particles,
        size: {
          value: 5,
        },
      },
    });
  }, []);

  const styles = {
    madeWithLove: {
      marginTop: "20px",
      fontSize: "1rem",
      color: "gray",
      fontStyle: "italic",
      textAlign: "center",
    },
    boldText: {
      fontWeight: "bold",
    },
  };

  return (
    <div className="center-content">
      <div id="particles-js"></div>
      <div className="content-wrapper relative z-1">
        <div className="text-center mb-4">
          <DocumentTextIcon className="mx-auto inline-block w-10" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black">
            My Resume
          </h1>
        </div>
        <div className="center-iframe">
          <iframe
            src="https://drive.google.com/file/d/1mKZscvkcaYH8RQYP4ZGTVAAzQT3AXUzV/preview"
            width="600"
            height="720px"
            allow="autoplay"
          ></iframe>
        </div>
        <div style={styles.madeWithLove}>
          Made with <span role="img" aria-label="heart">❤️</span> by{" "}
          <span style={styles.boldText}>Anastasiya </span> | 2023
        </div>
      </div>
    </div>
  );
};

export default Resume;
