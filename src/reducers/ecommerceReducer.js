/**
 * Ecommerce Reducer
 */

//action types
import {
   ADD_TO_CART,
   ADD_TO_WISHLIST,
   REMOVE_FROM_CART,
   UPDATE_PRODUCT_QUANTITY,
   FINAL_PAYMENT,
   MOVE_WISHLISTITEM_TO_CART,
   REMOVE_FROM_WISHLIST,
   DELETE_USER,
   ADD_NEW_USER,
   CLEAR_USERS,
   INPUT_CUSTOM_PRICE,
   INPUT_LOW_PRICE,
   INPUT_HIGH_PRICE,
   CLEAR_PRICE,
   CLEAR_CARTS
   
} from '../actions/types';

//initial data
let cartData = [
   // {
   //    productID: 51,
   //    image: "men/1-item-a.jpg",
   //    name: 'denim pullover',
   //    price: 37.03,
   //    quantity: 1,
   //    totalPrice: 37.03
   // }
]
let wishlistData = [
   // {
   //    productID: 51,
   //    image: "women/15-item-a.jpg",
   //    name: 'long dress',
   //    price: 60,
   //    quantity: 1,
   //    totalPrice: 60
   // }
]
let collaborationData = [
   // {
   //    id: 1,
   //    image: "user-2.jpg",
   //    name: "Lissa Roy",
   //    email: "lissa@example.com",
   //    access: "Read",
   //    userId: 0
   // }
]
const TAX = 0;
const SHIPPING = 0;

const INITIAL_STATE = {
   cart: cartData,
   wishlist: wishlistData,
   tax: TAX,
   shipping: SHIPPING,
   receiptProducts: null,
   collaborationData: collaborationData,
   prices: null
}

export default (state = INITIAL_STATE, action) => {
   // temporary prices
   let tempPrices = (state.prices)?state.prices:{};
   switch (action.type) {
      // add product to cart 
      case ADD_TO_CART:
         let product = action.payload;
         let newProductData = {
            productID: product.objectID,
            image: product.image,
            name: product.name,
            quantity: 1,
            price: product.price,
            totalPrice: product.price,
         }
         return {
            ...state,
            cart: [...state.cart, newProductData],
            totalPrice: state.totalPrice + newProductData.price
         }
         
      // clear carts 
         case CLEAR_CARTS:
            return {
               ...state,
               cart: [],
               totalPrice: ''
            }
     

      // add product to wishlist
      case ADD_TO_WISHLIST:
         let wishlistItem = action.payload;
         let newWishlistItem = {
            productID: wishlistItem.objectID,
            image: wishlistItem.image,
            name: wishlistItem.name,
            quantity: 1,
            price: wishlistItem.price,
            totalPrice: wishlistItem.price,
         }
         return {
            ...state,
            wishlist: [...state.wishlist, newWishlistItem],
         }
      // move wishlist product to cart	
      case MOVE_WISHLISTITEM_TO_CART:
         let data = state.wishlist;
         for (const wishlistItem of data) {
            let newItem = {
               productID: wishlistItem.objectID,
               image: wishlistItem.image,
               name: wishlistItem.name,
               quantity: 1,
               price: wishlistItem.price,
               totalPrice: wishlistItem.totalPrice,
            }
            state.cart.push(newItem)
         }
         return {
            ...state,
            cart: [...state.cart],
            wishlist: []
         }
      // delete product from wishlist
      case REMOVE_FROM_WISHLIST:
         let deleteItem = action.payload;
         let wishlist = state.wishlist.filter((wishlistItem) => wishlistItem.productID !== deleteItem.productID)
         return {
            ...state,
            wishlist
         }
      // update product item quantity
      case UPDATE_PRODUCT_QUANTITY:
         let newData = action.payload.cartItem;
         let newCartData = [];
         for (const cartItem of state.cart) {
            if (cartItem.productID === newData.productID) {
               cartItem.quantity = action.payload.newQuantity;
               cartItem.totalPrice = cartItem.price * cartItem.quantity
            }
            newCartData.push(cartItem)
         }
         return {
            ...state,
            cart: newCartData,
            totalPrice: state.totalPrice
         }
      // remove product to cart	
      case REMOVE_FROM_CART:
         let removeItem = action.payload;
         let cart = state.cart.filter((cartItem) => cartItem.productID !== removeItem.productID)
         return {
            ...state,
            cart,
            totalPrice: state.totalPrice - removeItem.price
         }
      // final statement (invoice)	
      case FINAL_PAYMENT:
         let checkOutProducts = state.cart;
         return {
            ...state,
            receiptProducts: checkOutProducts,
            cart: []
         }
      // delete user (admin-panel)	
      case DELETE_USER:
         let removeUser = action.payload;
         let NewUserList = state.collaborationData.filter((listItem) => listItem.id !== removeUser.id)
         return {
            ...state,
            collaborationData: NewUserList
         }
      // add product to cart 
      case ADD_NEW_USER:
         let newUser = action.payload;
         let newUserInfo = {
            name: newUser.name,
            email: newUser.email,
            access: newUser.access,
            userId: newUser.userId,
            image: "default-avatar.png",
            roles: newUser.roles
         }
         localStorage.setItem("userStatus", newUser.userId);
         localStorage.setItem("roles", newUser.roles);
         return {
            ...state,
            collaborationData: [...state.collaborationData, newUserInfo]
         }
      // clear all uses
      case CLEAR_USERS:
         localStorage.setItem("userStatus", "");
         localStorage.setItem("roles", "");
         return {
            ...state,
            collaborationData: []
         }
      // input custom price
      case INPUT_CUSTOM_PRICE:
         tempPrices.custom = action.payload;
         return {
            ...state,
            prices: tempPrices
         }
      // input low price
      case INPUT_LOW_PRICE:
         tempPrices.low = action.payload;
         return {
            ...state,
            prices: tempPrices
         }
      // input high price
      case INPUT_HIGH_PRICE:
         tempPrices.high = action.payload;
         return {
            ...state,
            prices: tempPrices
         }
      // clear price
      case CLEAR_PRICE:
         if(tempPrices.custom) tempPrices = {custom : tempPrices.custom};
         else tempPrices = {};
         return {
            ...state,
            prices: tempPrices
         }
      
      // default case	
      default:
         return { ...state }
   }
}