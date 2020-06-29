/**
 * product detail page
 */
/* eslint-disable */
import React, { Fragment } from 'react';
import { Grid, Button } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';

//connect to store
import { connect } from 'react-redux';

//firebase
import firebase from '../../firebase';
import 'firebase/database';

//component
import RatingStar from '../../components/widgets/RatingStar';
import CurrencyIcon from '../../components/global/currency/CurrencyIcon';
import PostDetail from '../../components/templates/post-detail';

//page title
import PageTitle from '../../components/widgets/PageTitle';

//api connect
import ConnectAPI from "../../connectAPI";

// actions
import { addProductItem, showAlert, addToWishlist } from "../../actions/action";

// helpers
import { isProductExist, productExitsInWishlist } from "../../helpers";
import ContentLoader from '../../components/global/loaders/ContentLoader';


function ProductList(props) {

   const { data, onProductAddToCart, onProductAddToWhislist } = props;
   return (
      <Grid item xs={12} sm={6} md={6} lg={3} className="mb-30 py-0">
         <Card className="iron-product-item">
            <div className="iron-overlay-wrap overflow-hidden d-flex justify-content-center align-items-center">
               <Link to={`/products/${data.type}/${data.objectID}`} className='d-block'>
                  <CardMedia
                     height="140"
                     component="img"
                     image={require(`../../assets/images/${data.image}`)}
                  />
               </Link>
               <div className="iron-overlay-content d-flex justify-content-end align-items-start">
                  <div className="iron-overlay-holder">
                     {!productExitsInWishlist(data.objectID) ?
                        <Button
                           onClick={onProductAddToWhislist}
                        >
                           <i className="material-icons">favorite</i>
                        </Button>
                        :
                        <Button
                           className="active"
                        >
                           <i className="material-icons">favorite</i>
                        </Button>
                     }
                  </div>
               </div>
            </div>
            <CardContent className="iron-product-content p-20 border">
               <h5 className="text-truncate"><Link to={`/products/${data.type}/${data.objectID}`}>{data.name}</Link></h5>
               <div className="d-flex justify-content-between align-items-center">
                  <div className="price-wrap">
                     <span><CurrencyIcon /> {data.price}</span>
                  </div>
                  <RatingStar></RatingStar>
               </div>
               <div className="iron-btn-grp">
                  {!isProductExist(data.objectID) ?
                     (
                        <IconButton className="btn-wrap" onClick={onProductAddToCart}>
                           <i className="material-icons">shopping_cart</i>
                        </IconButton>
                     )
                     :
                     (
                        <Link to='/cart'>
                           <IconButton className="btn-wrap">
                              <i className="material-icons">visibility</i>
                           </IconButton>
                        </Link>
                     )
                  }
               </div>
            </CardContent>
         </Card>
      </Grid>
   );
}

class ProductDetail extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         allProducts: [],
         productId: parseInt(this.props.match.params.id),
         productType: this.props.match.params,
         currentDataItem: null,
         relatedproduct: null
      }
   }

   componentDidMount() {
      this.getProducts();
   }

   //getproducts
   getProducts() {
      let id = this.state.productId;
      let type = this.state.productType.type;
      var conn = new ConnectAPI();
         conn.getFetch('component/'+ type + '/' + id, '')
         .then(data => {
            this.setState({
               relatedproduct: data,
               comp: type
            });
      })
      
      
      // const allProductsRef = firebase.database().ref('products');
      // allProductsRef.on('value', (snapshot) => {
      //    let allProducts = snapshot.val();
      //    let newTypeData = allProducts[this.state.productType.type];
      //    this.setState({
      //       relatedproduct: newTypeData
      //    })
      //    let newState = ((allProducts.men.concat(allProducts.women)).concat(allProducts.gadgets)).concat(allProducts.accessories);
      //    this.setState({
      //       allProducts: newState
      //    });
      //    this.getProductItem(newState);
      // });
   }

   getProductItem(allProducts) {
      let { productId } = this.state;
      if (allProducts && allProducts.length > 0) {
         for (let Item of allProducts) {
            if (Item.objectID === productId) {
               this.setState({
                  currentDataItem: Item
               })
            }
         }
      }
   }

   // componentDidUpdate(prevProps) {
   //    let newId = this.props.match.params.id;
   //    if (prevProps.match.params.id !== this.props.match.params.id) {
   //       this.updateProductData(newId);
   //    }
   // }

   // updateProductData(newId) {
   //    let Id = parseInt(newId)
   //    let { allProducts } = this.state;
   //    if (allProducts && allProducts.length > 0) {
   //       for (let Item of allProducts) {
   //          if (Item.objectID === Id) {
   //             this.setState({
   //                currentDataItem: Item
   //             })
   //             break;
   //          }
   //       }
   //    }
   // }

   //add product to cart
   onAddToCart(dataItem) {
      this.props.addProductItem(dataItem);
      setTimeout(() => {
         this.props.showAlert('Your product is successfully added!', 'success')
      }, 500)
   }

   //add product to wishlist
   addProductToWishList(dataItem) {
      this.props.addToWishlist(dataItem);
      setTimeout(() => {
         this.props.showAlert('Your product is successfully added in whislist', 'success')
      }, 500)
   }

   render() {
      const { relatedproduct, comp } = this.state;
      return (
         <Fragment>
            {relatedproduct !== null ?
               <div className="product-detail-page" >
                  <div className="inner-container">
                     <div className="bg-base section-pad">
                        <div className="container">
                           <Grid container spacing={0}>
                              <Grid item lg={12} className="mx-auto">
                                 {relatedproduct !== null &&
                                    <PostDetail
                                       data={relatedproduct} comp={comp}
                                    />
                                 }
                              </Grid>
                           </Grid>
                        </div>
                     </div>
                  </div>
               </div>
               :
               <ContentLoader />
            }
         </Fragment>
      )
   }
}

const mapStateToProps = ({ ecommerce }) => {
   const { cart } = ecommerce;
   return { cart };
}

export default connect(mapStateToProps, {
   addToWishlist,
   addProductItem,
   showAlert
})(ProductDetail);