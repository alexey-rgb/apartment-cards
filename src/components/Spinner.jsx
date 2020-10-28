import React from "react";
import ReactLoading from "react-loading";

const Spinner = () => {
  return (
    <div className="card__button">
      <ReactLoading type={"bars"} color="#fff" />
    </div>
  );
};

export { Spinner };
