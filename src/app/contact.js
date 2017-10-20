// Require React
// ES6 imports would be:
// import React from 'react';
// import ReactDom from 'react-dom';
var React = require('react');
var ReactDom = require('react-dom');

// Create Contact component
// Reference the component's name property with {} to indicate dynamic data
// var Contact = React.createClass({
//   const LostPet = (props) => {
//     return(
//       <div>
//         <h1>Where's my pet?</h1>
//         <p>{props.mssg}</p>
//       </div>
//     );
  // }
  // render: function(){
  //   return(
  //     <div>
  //       <h1>Where's my pet?</h1>
  //       <p>{this.props.mssg}</p>
  //     </div>
  //   );
  // }
// });

//
// var Lost = {name: 'Jesse', type: 'dog', gender: 'female'};
// Insert the component by looking for the element and placing the component inside of it
// Note the html tags around LostPet
ReactDom.render(
  <App />,
 document.getElementById('contact.html')
);
