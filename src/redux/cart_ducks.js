import firebase from '../firebase'

const ADD_TO_CART = "ADD_TO_CART";
const ADD_ERROR = "ADD_ERROR";
const DELETE_ITEM_BY_INDEX = "DELETE_ITEM_BY_INDEX";
const DELETE_ERROR = 'DELETE_ERROR';

export const addToCart = product => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firestore = firebase.firestore();
      const profile = getState().firebase.profile;
      const authId = getState().firebase.auth.uid;
      console.log(authId);
      firestore.collection('Cart').add({
          product:[...product][0],
          customerId: authId
          //customerName: 'Test'
      }).then(() => {
        dispatch({ type: ADD_TO_CART, payload: product })
      }).catch((err) => {
        dispatch({ type: ADD_ERROR, payload: err })
      })
  }};
export const deleteItemFromCartByIndex = (id, index) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = firebase.firestore();
    console.log(id)
    firestore.collection('Cart').doc(id).delete().then(() => {
      dispatch({ type: DELETE_ITEM_BY_INDEX, payload: index })
    }).catch((err) => {
      dispatch({ type: DELETE_ERROR, payload: err })
    })
  }};

const initialState = {
  cart: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  if (type === ADD_TO_CART) {
    return {
      ...state,
      cart: [...state.cart, ...payload]
    };
  } else if (type === DELETE_ITEM_BY_INDEX) {
    const cartClone = [...state.cart];
    const updatedCart = cartClone.filter((item, index) => index !== payload);
    return {
      ...state,
      cart: updatedCart
    };
  } else if (type === ADD_ERROR) {
    console.log('Add to cart failed', action.err);
    return state;
  } else if (type === DELETE_ERROR) {
    console.log('Delete item from cart failed', action.err);
    return state;
  } else {
    return state;
  }
};
