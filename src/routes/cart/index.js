/**
 * Cart page
 */
/* eslint-disable */
import React, { Fragment } from 'react';

//Material ui
import { Button, Grid, Divider, Dialog, DialogActions, DialogContent } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';

//connect to store
import { connect } from 'react-redux';

//global component
import RctCard from '../../components/global/rct-card';
import CurrencyIcon from '../../components/global/currency/CurrencyIcon';
import ConfirmationPopup from '../../components/global/confirmation-popup';
import SuccessPopup from '../../components/global/success-popup';

//action
import { removeProductItem, updateProductQuantity, showAlert, clearParts } from '../../actions/action';

// helpers
import { getSubTotalPrice, getTotalPrice, getUser, getPrices } from "../../helpers";

import ContentLoader from '../../components/global/loaders/ContentLoader';

//api connect
import ConnectAPI from "../../connectAPI";

class Cart extends React.Component {

   constructor(props) {
      super(props);
      this.confirmationDialog = React.createRef();
      this.suretobuyDialog = React.createRef();
      this.mailSuccessDialog = React.createRef();
      this.handleCheckout = this.handleCheckout.bind(this);
   }
   

   /**
    * function to change quantity of product
    */
   changeProductQuantity(e, cartItem) {
      let newQuantity = e.target.value;
      this.props.updateProductQuantity({ newQuantity, cartItem })
   }

   /**
    * function to delete product from cart
    */
   onDeleteCartItem(cartItem) {
      this.cartItem = cartItem;
      this.confirmationDialog.current.openDialog();
   }
   

   MailSuccess() {
      this.props.clearParts();
      window.location = "/";
   }
   /**
    * function for delete cart product
    * @param {boolean} popupResponse 
    */
   deleteCartItem(popupResponse) {
      if (popupResponse) {
         this.props.removeProductItem(this.cartItem);
         this.cartItem = ""
      }
   }
   
   //Function for confirm to buy
   suretobuy(popupResponse) {
      if (popupResponse) {
          // checkout success
          const user = getUser();
          const totalPrice = getTotalPrice();

          var conn = new ConnectAPI();
          const { cart } = this.props;
          let orderData = {
             user_id : user,
             total_price: totalPrice
          };
          let temp = [];

          if(cart && cart.length > 0){
             cart.forEach(product => {
                temp = product.productID.split('@');
                if(temp.length > 1){
                   if(orderData[temp[0]]) orderData[temp[0]].push(temp[1]);
                   else  orderData[temp[0]] = [temp[1]];
                }
             });
          }

          
          conn.postFetch('orders/create', orderData)
             .then(data => {
                if(data && data.data){
                  //  setTimeout(() => {
                  //     this.props.showAlert('Your bill is sent to mail', 'success');
                  //  }, 500);
                  this.mailSuccessDialog.current.openDialog();
                }
                else{
                   setTimeout(() => {
                      this.props.showAlert('Your bill cannot be sent to your mail .', 'error');
                   }, 500);
                }
             });
      }
   }



   //get url
   getUrl(url) {
      return url.split('/')[0];
   }

   // handleCheckout
   handleCheckout(event){
      event.preventDefault();
      const user = getUser();
      const prices = getPrices();
      const totalPrice = getTotalPrice();
      if(user){
         const customPrice = (prices && prices.custom)?prices.custom:0;
         if(customPrice < totalPrice && customPrice > 0){
            // checkout overflow
            setTimeout(() => {
               this.props.showAlert('Total price is larger than your budget.', 'error');
            }, 500);
         }else{
            this.suretobuyDialog.current.openDialog();
         }
      } else {
         // checkout not sign
         setTimeout(() => {
            this.props.showAlert('You must sign in to add cart.', 'error');
         }, 500);
      }
   }

   render() {
      const { cart, tax, shipping } = this.props;
      return (
         <Fragment>
            {cart !== null ?
               <div className="iron-cart-wrapper bg-base">
                  <div className="inner-container section-pad">
                     <div className="container">
                        {(cart && cart.length > 0) ?
                           (
                              <Fragment>
                                 <RctCard className="cart-shop-list">
                                    <div>
                                       {cart && cart.map((cartItem, index) => {
                                          return (
                                             <Fragment key={index}>
                                                <Grid container spacing={24} className="my-0">
                                                   <Grid
                                                      item xs={12} sm={12} md={2} lg={2}
                                                      className="py-0 d-flex justify-content-md-start justify-content-center align-items-center mb-md-0 mb-20"
                                                   >
                                                      <Link to={"/products/"+cartItem.productID.replace('@', '/')} className="cart-thumb d-inline-block px-10">
                                                         {this.getUrl(cartItem.image) === 'https:' ?
                                                            <img
                                                               src={cartItem.image}
                                                               alt='cart-item'
                                                               width="100"
                                                            />
                                                            :
                                                            <img
                                                               src={require(`../../assets/images/${cartItem.image}`)}
                                                               alt='cart-item'
                                                               width="100"
                                                            />
                                                         }
                                                      </Link>
                                                   </Grid>
                                                   <Grid item xs={12} sm={6} md={3} lg={2} className="py-0 d-flex justify-content-center align-items-center mb-md-0 mb-20" >
                                                      <div className="text-center">
                                                         <h5 className="mb-10">{cartItem.name}</h5>
                                                         <p className="mb-0">{cartItem.productID.split('@')[0].toUpperCase()}</p>
                                                      </div>
                                                   </Grid>
                                                   <Grid item xs={6} sm={6} md={2} lg={2} className="py-0 d-flex justify-content-center align-items-center mb-md-0 mb-20" >
                                                      <CurrencyIcon /> {cartItem.price}
                                                   </Grid>
                                                   <Grid item xs={6} sm={4} md={2} lg={2} className="py-0 d-flex justify-content-center align-items-center" >
                                                      <FormControl className="mb-20">
                                                         <InputLabel className="text-capitalize dark-color">quantity</InputLabel>
                                                         <Select
                                                            value={cartItem.quantity}
                                                            onChange={(e) => this.changeProductQuantity(e, cartItem)}
                                                            className="iron-select-width1"
                                                         >
                                                            <MenuItem value={1}>1</MenuItem>
                                                            <MenuItem value={2}>2</MenuItem>
                                                            <MenuItem value={3}>3</MenuItem>
                                                            <MenuItem value={4}>4</MenuItem>
                                                            <MenuItem value={5}>5</MenuItem>
                                                            <MenuItem value={6}>6</MenuItem>
                                                         </Select>
                                                      </FormControl>
                                                   </Grid>
                                                   <Grid item xs={6} sm={4} md={2} lg={2} className="py-0 d-flex justify-content-center align-items-center" >
                                                      <CurrencyIcon /> {cartItem.totalPrice.toFixed(2)}
                                                   </Grid>
                                                   <Grid item xs={6} sm={4} md={1} lg={2} className="py-0 d-flex justify-content-center align-items-center" >
                                                      <Button
                                                         className="cart-btn"
                                                         onClick={() => this.onDeleteCartItem(cartItem)}
                                                      >
                                                         <i className="zmdi zmdi-delete"></i>
                                                      </Button>
                                                   </Grid>
                                                </Grid>
                                                <Divider className="my-20" />
                                             </Fragment>
                                          )
                                       })}
                                    </div>
                                 </RctCard>
                                 <Grid container spacing={0} className="cart-total">
                                    <Grid item xs={12} sm={8} md={6} lg={5} className="ml-sm-auto">
                                       <div className="d-flex justify-content-between align-items-center mb-15">
                                          <span className="d-inline-block text-capitalize">subtotal</span>
                                          <span><CurrencyIcon /> {getSubTotalPrice()}</span>
                                       </div>
                                       <div className="d-flex justify-content-between align-items-center mb-15">
                                          <span className="d-inline-block text-capitalize">Shipping</span>
                                          <span><CurrencyIcon /> {shipping}</span>
                                       </div>
                                       <div className="d-flex justify-content-between align-items-center">
                                          <span className="d-inline-block text-capitalize">Tax(GST)</span>
                                          <span><CurrencyIcon /> {tax}</span>
                                       </div>
                                       <Divider className="my-20"></Divider>
                                       <div className="d-flex justify-content-between align-items-center mb-20">
                                          <h4>Total</h4>
                                          <h4><CurrencyIcon />{getTotalPrice()}</h4>
                                       </div>
                                       <div className="d-flex justify-content-end align-items-center">
                                          <Button 
                                             component={Link} 
                                             to="#" 
                                             onClick={this.handleCheckout}
                                             className="button btn-active btn-lg"
                                          >
                                             proceed to checkout
                                          </Button>
                                       </div>
                                    </Grid>
                                 </Grid>
                              </Fragment>
                           )
                           :
                           (
                              <div className="section-pad text-center">
                                 <div className="mb-30">
                                    <img src={require("../../assets/images/empty-cart.png")} alt="shop-cart" />
                                 </div>
                                 <h4>Your Shopping Bag is empty.</h4>
                                 <Link to='/shop/custom' className="text-capitalize">go for shopping</Link>
                              </div>
                           )
                        }
                     </div>
                  </div>
                  <ConfirmationPopup
                     ref={this.confirmationDialog}
                     onConfirm={(res) => this.deleteCartItem(res)}
                     alerttext="Are you sure you want to delete this product?"
                  />
                   <ConfirmationPopup
                     ref={this.suretobuyDialog}
                     onConfirm={(res) => this.suretobuy(res)}
                     alerttext="Are you sure to buy?"
                  />
                  <SuccessPopup
                     ref={this.mailSuccessDialog}
                     onConfirm={(res) => this.MailSuccess(res)}
                     alerttext="Your bill is sent to mail"
                  />
               </div>
               :
               <ContentLoader />
            }
         </Fragment>
      )
   }
}

const mapStateToProps = ({ ecommerce }) => {
   const { cart, tax, shipping } = ecommerce;
   return { cart, tax, shipping };
}

export default connect(mapStateToProps, {
   removeProductItem,
   updateProductQuantity,
   showAlert,
   clearParts
})(Cart);