// import React from "react";
// import { connect } from "react-redux";
// // import "./index.css";

// class MyCart extends React.Component {
//   render() {
//     const { cart } = this.props;
//     return (
//       <div>
//         {cart.size.map(product => (
//           <h1>{product.size}</h1>
//         ))}
//       </div>
//     );
//   }

// const mapStateToProps = state => {
//   return {
//     cart: state.cart.cart
//   };
// };

// export default connect(mapStateToProps)(MyCart);

import React from "react";
import { connect } from "react-redux";
import { deleteItemFromCartByIndex } from "../redux/cart_ducks";
import "./index.css";
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { withFirebase, isLoaded, isEmpty } from 'react-redux-firebase'

class MyCart extends React.Component {
  
  render() {
    const { cart, auth } = this.props;
    console.log(cart)
    if(!auth.uid) return <Redirect to='/login' />
    // if(cart.length<1){
    // return <h1> Loading... please wait </h1>
    // } else {
    return (
      <div>
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>My Cart</h1>
        </div> 
        {cart.map((product, index) => (
          <div className="container">
            <div className="contain row form-group">
              <div className="detail col-sm-10">
                <span>
                  {" "}
                  <h5>
                    Product : {product.product.title} {product.product.size}{" "}
                  </h5>
                </span>
                <br />
                <span className="price">Price : {product.product.price} Bath/kg</span>
              </div>

              <div className="col-sm-2 text-right">
                <h5>qty: {product.product.quantity}</h5>
              </div>
              <button
                className="btn-cart"
                onClick={() => this.props.deleteItemFromCartByIndex(product.id, index)}
                key={index}
              >
                Remove this product
              </button>
            </div>
            <br />
            <hr />
          </div>
        ))}
        <div className="container">
          <div className="total-bg">
            <h3 className="row" style={{ fontWeight: 400 }}>
              <span className="col-6">total price:</span>
              <span className="col-6 text-right">$</span>
            </h3>
            <h3 className="row" style={{ fontWeight: 400 }}>
              <span className="col-6">tax (15%):</span>
              <span className="col-6 text-right">$tax</span>
            </h3>
            <h3 className="row">
              <span className="col-6">tota inc tax:</span>
              <span className="col-6 text-right">$ TotalIncTax</span>
            </h3>
          </div>
        </div>
      </div>
      );
    }
  }
//}

const mapStateToProps = (state) => {
  console.log(state);
  console.log(state.cart.cart);
  console.log(state.firestore.ordered.Cart);
  // if(state.firestore.ordered.Users){
  if(state.firestore.ordered.Cart){ 
    return{ 
      // cart: state.firestore.ordered.Users,
      cart: state.firestore.ordered.Cart,
      auth: state.firebase.auth
    }   
  } else { 
    return{ 
      cart: state.cart.cart,
      auth: state.firebase.auth
     } 
  }
};



export default compose(
  connect(
    mapStateToProps,
    { deleteItemFromCartByIndex }
  ),
  firestoreConnect(() => [
    {
      collection: 'Cart'
      // collection: 'Users',
      // doc: '1ykEEwvml0WQPh1wgEaoPGgwbW93',
      // subcollections: [
      //   { collection: 'Cart'}
      // ]
    }
  ])
)(MyCart);
