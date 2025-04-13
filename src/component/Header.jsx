import React, { useState } from "react";

const Header = () => {
  const [color, setColor] = useState("red");

  const handleClick = () => {
    setColor(color === "red" ? "blue" : "red");
  };

  //   const handleClick = () => {
  //     if (color === "red") {
  //       setColor("blue");
  //     } else {
  //       setColor("red");
  //     }
  //   };
  return (
    <div>
      <h1 className="text-8xl" style={{ color: color }}>
        Header
      </h1>
      <button
        className="bg-gray-800 text-white px-4 py-2 m-3 rounded mt-4"
        onClick={handleClick}
      >
        Change Color
      </button>
    </div>
  );
};
// import React, { useState } from "react";

// const Header = () => {
//   const [color, setColor] = useState("red");

//   const handleClick = () => {
//     setColor(color === "red" ? "blue" : "red");
//   };

//   return (
//     <div>
//       <h1 className="text-8xl" style={{ color: color }}>
//         Header
//       </h1>
//       <button
//         className="bg-gray-800 text-white px-4 py-2 rounded mt-4"
//         onClick={handleClick}
//       >
//         Change Color
//       </button>
//     </div>
//   );
// };

export default Header;
