import Details from "../Details";
import { useEffect } from "react";

const Apply = () => {
  useEffect(() => {
    document.title = "Apply | LendingTree";
  }, []);
  return (
    <>
      <div>
        <Details />
      </div>
    </>
  );
};

export default Apply;
