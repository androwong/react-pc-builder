/**
 * post detail component
*/
/* eslint-disable */
import React, { Fragment } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//connect to store
import { connect } from 'react-redux';

//components
// import SocialIcons from '../../widgets/SocialIcons';
import Detail from './detail';
import CurrencyIcon from '../../global/currency/CurrencyIcon';
// import ProductReview from '../../global/review-popup/ProductReview';

// actions
import { addProductItem, showAlert, addToWishlist } from "../../../actions/action";

// helpers
import { isProductExist, productExitsInWishlist, getUser } from "../../../helpers";

class PostDetail extends React.Component {

   constructor(props) {
      super(props);
      this.reviewDialog = React.createRef();
   }


   state = {
      newImage: this.props.data.image,
      variations: {
         color: '',
         size: '',
         quantity: ''
      },
      data: this.props.data,
      comp: this.props.comp
   }

   componentDidMount() {
      this.setState({
         newImage: this.props.data.image,
         data: this.props.data
      })
   }

   // componentDidUpdate() {
   //    this.updateData();
   // }

   //update state data
   //update state.data data
   // updateData() {
   //    let { data } = this.state;
   //    let { data } = this.state.data;
   //    let newData = this.props.data;
   //    if (data.objectID !== newData.objectID) {
   //       this.setState({
   //          newImage: newData.image,
   //          data: newData
   //       })
   //    }
   // }

   //function for preview images
   changePreviewImage(image) {
      this.setState({
         newImage: image
      });
   }

   //function for product variation
   changeProductVariation(type, e) {
      this.setState({
         variations: {
            ...this.state.variations,
            ...this.state.data.variations,
            [type]: e.target.value
         }
      })
   }

   //function for review popup ref.
   postReviewOpen() {
      this.reviewDialog.current.open();
   }

   //add product to wishlist
   addProductToWishList(productdata) {
      this.props.addToWishlist(productdata);
      setTimeout(() => {
         this.props.showAlert('Your product is successfully added in whislist', 'success')
      }, 500)
   }

   // define function for add product in cart
   onAddToCart(product) {
      this.props.addProductItem(product);
      setTimeout(() => {
         this.props.showAlert('Your product is successfully added in cart', 'success')
      }, 500)
   }

   render() {
      const { newImage, comp, data } = this.state;
      const { id, name, price } = this.state.data;
      const hit = {
         image : 'pictures/'+ comp+'/'+ newImage, 
         objectID : comp+'@'+id, 
         name : name, 
         price : price,
         comp : comp
      }
      
      return (
         <div>
            <Grid container spacing={32} className="my-0">
               <Grid item xs={12} sm={12} md={6} lg={6} className="py-0 mb-md-0 mb-sm-30">
                  <Grid container spacing={24} className="iron-product-gallery">
                     <Grid item xs={9} sm={10} md={10} lg={10}>
                        <div className="preview-full-image">
                           <div className="iron-shadow product-gallery-item">
                              <div>
                                 <a href="javascript:void(0)">
                                    <img
                                       src={require(`../../../assets/images/pictures/${comp}/${newImage}`)}
                                       alt="poster-image"
                                       style={{width: "100%"}}
                                    />
                                 </a>
                              </div>
                           </div>
                        </div>
                     </Grid>
                  </Grid>
               </Grid>
               <Grid item xs={12} sm={12} md={6} lg={6} className="py-0">
                  <div className="detail-content">
                     <h3>{comp.toUpperCase().replace("_", " ")}: {data.name}</h3>
                     <h4 className="active-color"><CurrencyIcon /> {data.price}</h4>
                     <Detail comp={comp} data={data} />
                     {/* <div className="mb-20">
                        {!productExitsInWishlist(hit.objectID) ?
                           <Button
                              onClick={() => this.addProductToWishList(hit)}
                              className="wishlist-btn text-14 d-inline-block dark-color"
                           >
                              Add To Wishlist
                                    </Button>
                           :
                           <Button
                              className="wishlist-btn text-14 d-inline-block dark-color"
                           >
                              Add To Wishlist
                           </Button>
                        }

                     </div> */}
                     <div className="mb-sm-50 mb-20 detail-btns">
                        <Button component={Link} to={`/shop/custom/${comp}`} className="button btn-base btn-lg mb-20 mb-sm-0 mr-15">Back to list</Button>
                        {!isProductExist(hit.objectID) ?
                           (
                              <Button
                                 className="button btn-active btn-lg mr-15 mb-20 mb-sm-0"
                                 onClick={() => this.onAddToCart(hit)}
                              >
                                 add to cart
                              </Button>
                           )
                           :
                           (
                              <Link to='/cart/current'>
                                 <Button
                                    className="button btn-active btn-lg mr-15 mb-20 mb-sm-0"
                                 >
                                    view cart
                                            </Button>
                              </Link>
                           )
                        }
                     </div>
                  </div>
               </Grid>
            </Grid>
         </div >
      )
   }
}
const mapStateToProps = ({ ecommerce }) => {
   const { cart, wishlist } = ecommerce;
   return { cart, wishlist };
}

export default connect(mapStateToProps, {
   addProductItem,
   addToWishlist,
   showAlert
})(PostDetail);