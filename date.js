//jshint esversion:6

// module.exports.getDate = getDate; //javascript object module.export shaving methods
// function getDate() {
//   options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   };

//   let today = new Date();
//   // var currentDay = today.getDay();

//   let day = today.toLocaleDateString("en-US", options);
//   return day;
// }
exports.getDate = //javascript object module.export shaving methods
 function() {
  options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const  today = new Date();
  // var currentDay = today.getDay();

  const day = today.toLocaleDateString("en-US", options);
  return day;
};

module.exports.getDay = getDay;
function getDay() {
  options = {
    weekday: "long",
  };

  let today = new Date();
  // var currentDay = today.getDay();

  let day = today.toLocaleDateString("en-US", options);
  return day;
}
