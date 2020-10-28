import React from "react";

const Like = (props) => {
  const { handleHeart, name, condition } = props,
    setClassName = () => {
      let style = null;
      condition[name]
        ? (style = "fas fa-heart cursor")
        : (style = "far fa-heart cursor");
      return style;
    };
  return (
    <i
      id={name}
      onClick={() => handleHeart(name, condition)}
      className={setClassName() + " card__like"}
    ></i>
  );
};

export { Like };
