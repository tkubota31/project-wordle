import React from "react";

function Banner({ status, children, action, actionText }) {
  return (
    <div className={`${status} banner`}>
      {children}
      {action && (
        <button
          style={{ border: "2px solid black", margin: "5px" }}
          onClick={action}
        >
          {actionText}
        </button>
      )}
    </div>
  );
}

export default Banner;
