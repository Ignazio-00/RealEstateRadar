"use client";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#3B82F6"
      loading={loading}
      css={override}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default Spinner;
