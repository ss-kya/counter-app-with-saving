import { useState } from "react";

// export default function NumberPicker(): JSX.Element {
//   const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
//     useState(0);
//   const [favouriteValueFromCurrentRender, queueRerenderWithNewFavouriteValue] =
//     useState(0);

//   const handleAddOneToCounter = () => {
//     queueRerenderWithNewCounterValue(counterValueFromCurrentRender + 1);
//   };

//   const handleSubtractOneFromCounter = () => {
//     queueRerenderWithNewCounterValue(counterValueFromCurrentRender - 1);
//   };

//   const handleStoreCurrentCount = () => {
//     queueRerenderWithNewFavouriteValue(counterValueFromCurrentRender);
//   };

//   return (
//     <>
//       <h1>Number picker</h1>
//       <p>Your stored number: {favouriteValueFromCurrentRender}</p>
//       <p>Counter: {counterValueFromCurrentRender}</p>
//       <button onClick={handleSubtractOneFromCounter}>-1</button>
//       <button onClick={handleAddOneToCounter}>+1</button>
//       <hr />
//       <button onClick={handleStoreCurrentCount}>Store current count</button>
//     </>
//   );
// }


// // function
// // input - the value that has been selected - {counterValueFromCurrentRender}
// // store previous value in <p> stored num </p>
// // 


// // store what we just clicked in "store number"
// // then next store will be what we last clicked 