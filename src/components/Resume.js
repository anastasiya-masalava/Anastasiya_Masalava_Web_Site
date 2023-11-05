import React from "react";
const Resume = () => {
    const googleDocUrl = "https://drive.google.com/file/d/1mKZscvkcaYH8RQYP4ZGTVAAzQT3AXUzV/view?usp=sharing";
    return (
      <div>
        <iframe
          src={`https://docs.google.com/document/d/e/${googleDocUrl}/pub?embedded=true`}
          width="100%"
          height="600"
        >
          Loading...
        </iframe>
      </div>
    );
  };
  
  export default Resume;