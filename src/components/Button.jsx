import Button from "@material-ui/core/Button";
import React from "react";

const Key = (props) => {
  const { handleButton } = props;
  return (
    <Button onClick={handleButton} variant="contained" color="primary">
      Show apartments
    </Button>
  );
};

export { Key };
