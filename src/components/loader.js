/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

const Loader: React.FunctionComponent<{}> = ({ loading, children }) => {
  return (
    <>
      {loading && (
        <div
          css={css`
            color: green;
            text-align: center;
            padding: 20px 0;
          `}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Loader;
