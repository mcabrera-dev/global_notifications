import React, { useEffect } from "react";
import useAPIError from "../../common/hooks/useAPIError";
import { getData } from "../../common/api";
import Button from '@mui/material/Button';


function LoadDataButton() {
  const { addError } = useAPIError();

  const getExampleCall = () => {
    const fetchData = async () => {
      try {
        const data = await getData();

        // do something useful with the data
      } catch (err) {
        addError(`LOAD_DATA_ERROR: ${err}`, err.response);
      }
    };

    fetchData();
  };

  return (
    <Button variant="contained" onClick={getExampleCall} >Get Started!</Button>
  );
}

export default LoadDataButton;
