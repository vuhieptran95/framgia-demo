import React from "react";
const DisplayMessage = (status, statusText, message_data) => {
  return (
    <div>
      <h5>{message_data}</h5>
      <p>
        HTTP Code {status}: {statusText}
      </p>
    </div>
  );
};

export const DisplayError = error => {
  return (
    <div>
      <h5>{error.code}</h5>
      <p>{error.message}</p>
    </div>
  );
};

export default DisplayMessage;
