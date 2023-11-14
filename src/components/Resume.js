import React from "react";

import { DocumentTextIcon } from "@heroicons/react/solid";


const Resume = () => {
    return (
      <div className="center-content"> {/* Apply the center-content class */}
      <div className="text-center mb-4"> {/* Center the icon and text */}
        <DocumentTextIcon className="mx-auto inline-block w-10" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-black">My Resume</h1>
      </div>
      <div className="center-iframe">
        <iframe src="https://drive.google.com/file/d/1mKZscvkcaYH8RQYP4ZGTVAAzQT3AXUzV/preview" width="600" height="720px" allow="autoplay"></iframe>
      </div>
      <div style={styles.madeWithLove}>
        Made with <span role="img" aria-label="heart">❤️</span> by <span style={styles.boldText}>Anastasiya </span> | 2023
      </div>
    </div>
    );
  };

  const styles = {
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
export default Resume;