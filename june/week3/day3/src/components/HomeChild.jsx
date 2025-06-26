import React from "react";

function HomeChild({ value, arr, obj }) {
  return (
    <div>
      <div>homeChild</div>
      <div>Object: {obj.name}</div>
      <div>Array: {arr}</div>
    </div>
  );
}

export default HomeChild;
