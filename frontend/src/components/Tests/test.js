import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Test extends Component {
  render() {
    return (
      <div className="body">
        <div className="containers">
          <div className="card">
            <div className="imgBx">
              <img
                className="img"
                src="https://cdn.stocksnap.io/img-thumbs/960w/wedding-rings_KH7YRRTVTS.jpg"
                alt=""
              />
            </div>
            <div className="contentBx">
              <h2>Diamond Ring</h2>
              <div className="price">
                <h3>
                  Price: <span>10$</span>
                </h3>
              </div>
              <Link to="#">
                <div className="add">Add to Cart</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// JQUERY USED
// import React, { Component } from "react";
// import "./cart.css";
// import { findDOMNode } from "react-dom";
// import $ from "jquery";

// export default class Test extends Component {
//   handle = () => {
//     const el = findDOMNode(this.refs.toggle);
//     $(el).click(function() {
//       alert("you clicked me");
//     });
//   };
//   render() {
//     return (
//       <div>
//         <a
//           id="view-code"
//           href="https://codepen.io/virgilpana/pen/RNYQwB"
//           target="_blank"
//         >
//           VIEW CODE
//         </a>

//         <div id="make-3D-space">
//           <div id="product-card">
//             <div id="product-front">
//               <div className="shadow"></div>
//               <img
//                 src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png"
//                 alt=""
//               />
//               <div className="image_overlay"></div>
//               <div id="view_details">View details</div>
//               <div className="stats">
//                 <div className="stats-container">
//                   <span
//                     className="product_price"
//                     ref="toggle"
//                     onClick={this.handle}
//                   >
//                     $39
//                   </span>
//                   <span className="product_name">Adidas Originals</span>
//                   <p>Men's running shirt</p>

//                   <div className="product-options">
//                     <strong>SIZES</strong>
//                     <span>XS, S, M, L, XL, XXL</span>
//                     <strong>COLORS</strong>
//                     <div className="colors">
//                       <div className="c-blue">
//                         <span></span>
//                       </div>
//                       <div className="c-red">
//                         <span></span>
//                       </div>
//                       <div className="c-white">
//                         <span></span>
//                       </div>
//                       <div className="c-green">
//                         <span></span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div id="product-back">
//               <div className="shadow"></div>
//               <div id="carousel">
//                 <ul>
//                   <li>
//                     <img
//                       src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large.png"
//                       alt=""
//                     />
//                   </li>
//                   <li>
//                     <img
//                       src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large2.png"
//                       alt=""
//                     />
//                   </li>
//                   <li>
//                     <img
//                       src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large3.png"
//                       alt=""
//                     />
//                   </li>
//                 </ul>
//                 <div className="arrows-perspective">
//                   <div className="carouselPrev">
//                     <div className="y"></div>
//                     <div className="x"></div>
//                   </div>
//                   <div className="carouselNext">
//                     <div className="y"></div>
//                     <div className="x"></div>
//                   </div>
//                 </div>
//               </div>
//               <div id="flip-back">
//                 <div id="cy"></div>
//                 <div id="cx"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
