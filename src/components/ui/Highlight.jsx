import React from "react";

const Highlight = ({ icon, title, para }) => {
  return (
    <div className="highlight">
      <div className="highlight__img">
        {icon}
      </div>
      <h3 className="highlight__subtitle">Easy and Quick</h3>
      <p className="highlight__para">
        Get access to the book you purchased online instantly.
      </p>
    </div>
  );
};

export default Highlight;
