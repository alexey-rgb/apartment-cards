import React from "react";

const Like = ({ style, handleHeart, name, condition }) => {
  const setClassName = () => {
    if (condition[name] === true) {
      return "fas fa-heart cursor";
    } else {
      return "far fa-heart cursor";
    }
  };
  return (
    <i
      style={style}
      id={name}
      onClick={() => handleHeart(name, condition)}
      className={setClassName()}
    ></i>
  );
};

export default Like;
