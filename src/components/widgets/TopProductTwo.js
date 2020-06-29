/**
 * top products
 */
/* eslint-disable */
import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

//connect to store
import { connect } from 'react-redux';

// actions
import { addProductItem, showAlert } from "../../actions/action";

// helpers
// import { isProductExist } from "../../helpers";

//component
// import CurrencyIcon from '../global/currency/CurrencyIcon';


class TopProducts extends React.Component {

   state = {
      itemsToShow: 4,
      loadMore: false
   }

   // add to cart function
   onAddToCart(data) {
      this.props.addProductItem(data);

      setTimeout(() => {
         this.props.showAlert('Your product is successfully added!', 'success')
      }, 500)
   }

   // show more data function
   showMoreData() {
      let minData = this.state.itemsToShow;
      if (minData && this.props.Data.length !== 12) {
         this.setState({ itemsToShow: (minData + 4), loadMore: true });
      }
   }

   //show less data function
   showLessData() {
      let data = this.state.itemsToShow;
      if (data && data !== 4) {
         this.setState({ itemsToShow: data - 4, loadMore: true })
      }
      else {
         this.setState({ loadMore: false })
      }
   }

   render() {
      // const { itemsToShow, loadMore } = this.state;
      const { Data } = this.props;
      

      return (
         <Fragment>
            {Data !== null ?
               <Fragment>
                  <Grid container spacing={32} className="iron-product-wrap my-0 mb-50">
                     {/* {Data.slice(0, itemsToShow).map((data, index) => ( */}
                     {Data.map((data, index) => (
                        <Grid key={index} item xs={12} sm={6} md={6} lg={3} className="mb-30 py-0">
                           <Card className="iron-product-item p-25 iron-shadow position-relative hover-box-shadow">
                              <div>
                                 <Link to={data.url} className='d-block'>
                                    <CardMedia
                                       style={{padding : "40px", width : "auto"}}
                                       height="140"
                                       component="img"
                                       image={require(`../../assets/images/${data.image}`)}
                                    />
                                 </Link>
                              </div>
                              <CardContent className="iron-product-content pt-20 p-0 border">
                                 <h5 className="text-truncate mb-sm-15 mb-10"><Link to={data.url}>{data.title}</Link></h5>
                                 <div className="price-wrap d-block mb-15" style={{minHeight : "80px"}}>
                                    <span>{data.content}</span>
                                 </div>
                                 <div className="iron-btn-grp2 mb-sm-0 mb-5" style={{float: "right"}}>
                                    <Link to={data.url}>
                                       <Button
                                          className="btn-wrap text-capitalize button"
                                       >
                                          SELECT
                                       </Button>
                                    </Link>  
                                 </div>
                              </CardContent>
                              <div className="iron-offer-badge">
                                 <span className="font-medium text-14 base-color">{data.littleTitle}</span>
                              </div>
                           </Card>
                        </Grid>
                     ))}
                  </Grid>
               </Fragment>
               :
               null
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
   addProductItem,
   showAlert
})(TopProducts);
