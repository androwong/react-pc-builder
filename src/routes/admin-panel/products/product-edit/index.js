/**
 * post detail component
*/
/* eslint-disable */
import React, { Fragment } from 'react';
import { Grid, Button } from '@material-ui/core';

//components
import ContentLoader from '../../../../components/global/loaders/ContentLoader';
import Detail from './detail';


//api connect
import ConnectAPI from "../../../../connectAPI";

class ProductEdit extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         productId: parseInt(this.props.match.params.id),
         productType: this.props.match.params.type,
         fields: {}
      };
   }

   componentDidMount() {
      let { productId, productType } = this.state;
      
      var conn = new ConnectAPI();
      conn.getFetch('component/fields/' + productType, '')
      .then(data => {
         var fieldObj = new Object();
         for(let key in data){
            fieldObj[data[key]] = '';
         }
         this.setState({
            fields: fieldObj
         });
      });
   }

  
   render() {
      const { productId, productType, fields } = this.state;
      return (
         <Fragment>
            {fields && fields !== null?
            <div className="iron-product-add-wrap iron-product-edit-wrap pt-50 px-sm-50 px-md-0">
               <Grid container spacing={32} className="my-0">
                  <Grid item xs={12} sm={12} md={10} lg={9} className="py-0 mx-auto">
                     <Detail
                        comp={productType} id={productId} fields={fields.name} 
                     />
                  </Grid>
               </Grid>
            </div >
            :
            <ContentLoader />
            }
         </Fragment>
       )
   }
}

export default ProductEdit;