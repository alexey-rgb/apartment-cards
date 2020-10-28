import React, { useState, useEffect } from "react";
import fakeServerData from "../services/entities.json";
import App from "./App";

//  REQUEST EMULATION FROM FAKE SERVER
const Data = () => {
  // Hook

  const [apartmentsDescriptions, setApartmentsDescriptions] = useState([]);

  const getDescriptions = () => {
    const serverResponse = fakeServerData.apartmentsDescriptions,
      promise = new Promise((resolve) =>
        setTimeout(() => resolve(serverResponse), 5000)
      );

    promise
      .then((result) => {
        setApartmentsDescriptions(result);
      })
      .catch((error) => alert(`${error}! Something went wrong, try later`));

    return;
  };

  // get Data from fake server:)

  useEffect(() => getDescriptions());
  return (
    <div>
      <App apartmentsDescriptions={apartmentsDescriptions} />
    </div>
  );
};

export { Data };
