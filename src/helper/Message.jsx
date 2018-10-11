import React from "react";
const DisplayMessage = (status, statusText, message_data) => {
  return (
    <div>
      <h5>{message_data}</h5>
      <h5>
        HTTP Code {status}: {statusText}
      </h5>
    </div>
  );
};

export default DisplayMessage;
