/**
 * Action Types
 */
import {
   COLLAPSED_SIDEBAR,
   RTL_LAYOUT,
   ADD_TO_CART,
   ADD_TO_WISHLIST,
   SHOW_ALERT,
   HIDE_ALERT,
   REMOVE_FROM_CART,
   UPDATE_PRODUCT_QUANTITY,
   CHANGE_CURRENCY,
   SET_LANGUAGE,
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

} from './types';

//add product item
export const addProductItem = (data, alertMessage) => (dispatch) => {
   dispatch({
      type: ADD_TO_CART,
      payload: data
   })
}

//show alert box
export const showAlert = (message, type) => ({
   type: SHOW_ALERT,
   payload: { message, type }
})

//hide alert box
export const hideAlert = () => ({
   type: HIDE_ALERT,
})

// add product to wishlist
export const addToWishlist = (data, alertMessage) => (dispatch) => {
   dispatch({
      type: ADD_TO_WISHLIST,
      payload: data
   })
}

//move all wishlist item to cart
export const moveWishlistItemToCart = () => ({
   type: MOVE_WISHLISTITEM_TO_CART
})

//delete wishlist item 
export const deleteItemFromWishlist = (data) => ({
   type: REMOVE_FROM_WISHLIST,
   payload: data
})

//Remove product item
export const removeProductItem = (data) => ({
   type: REMOVE_FROM_CART,
   payload: data
})

//update product quantity
export const updateProductQuantity = (data) => ({
   type: UPDATE_PRODUCT_QUANTITY,
   payload: data
})

// change currency
export const changeCurrency = (currency) => ({
   type: CHANGE_CURRENCY,
   payload: currency
})

// change language
export const setLanguage = (locale) => ({
   type: SET_LANGUAGE,
   payload: locale
})

//final payment 
export const finalPayment = (history) => (dispatch) => {
   history.push('/final-receipt');
   dispatch({ type: FINAL_PAYMENT });

}

// Rtl Layout
export const rtlLayoutAction = (isRtlLayout) => ({
   type: RTL_LAYOUT,
   payload: isRtlLayout
});

//Redux Action To Emit Collapse Sidebar
export const collapsedSidebarAction = (isCollapsed) => ({
   type: COLLAPSED_SIDEBAR,
   isCollapsed
});

//======== Admin-panel actions ========

//add user
export const addNewUser = (data) => ({
   type: ADD_NEW_USER,
   payload: data
})

//delete user 
export const deleteUser = (data) => ({
   type: DELETE_USER,
   payload: data
})

//clear users
export const clearUsers = (data) => ({
   type: CLEAR_USERS
})

//=============  Cart actions   ======
//clear carts
export const clearCarts = (data) => ({
   type: CLEAR_CARTS
})


//======== Prices actions ========

//input custom price
export const inputCustomPrice = (data) => ({
   type: INPUT_CUSTOM_PRICE,
   payload: data
})

//input low price
export const inputLowPrice = (data) => ({
   type: INPUT_LOW_PRICE,
   payload: data
})

//input high price
export const inputHighPrice = (data) => ({
   type: INPUT_HIGH_PRICE,
   payload: data
})

//clear price
export const clearPrice = (data) => ({
   type: CLEAR_PRICE
})

//======== Parts action ==============
//clear parts
export const clearParts = (data) => ({
   type: CLEAR_CARTS
})

