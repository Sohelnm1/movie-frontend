import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonTemp() {
  return (
    <div className="wrapper" style={{}}>
      <Skeleton
        count={10}
        baseColor="#202020"
        highlightColor="#444"
        height={30}
      />
      ;
    </div>
  );
}

export default SkeletonTemp;
