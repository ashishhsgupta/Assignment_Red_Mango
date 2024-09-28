import React from "react";
import { FaArrowDown } from "react-icons/fa6";

const Assignment5Step1 = () => {
  return (
    <>
      <div className="assignment5step1-container">
        <div className="download-btn">
          <button className="btn-download">
            <FaArrowDown />
          </button>
          <div className="clk-download">Click on icon to download</div>
        </div>
      </div>
    </>
  );
};

export default Assignment5Step1;
