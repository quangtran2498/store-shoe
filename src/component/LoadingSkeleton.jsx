import React from "react";
import classNames from "classnames";
const LoadingSkeleton = ({ className }) => {
  return (
    <div className={classNames("skeleton", { [className]: className })}></div>
  );
};

export default LoadingSkeleton;
