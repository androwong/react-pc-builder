//Invoice popup
/* eslint-disable */
import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CurrencyIcon from '../../../../components/global/currency/CurrencyIcon';

class InvoicePopup extends React.Component {
   state = {
      open: false,
   };

   //Define function for open confirmation dialog box
   handleClickOpen = () => {
      this.setState({
         open: true,
      });
   };

   //Define function for close confirmation dialog box and callback for delete item 
   closeDialog() {
      this.setState({ open: false });
   };

   getImageFromPath(path){
      try{
         return require(`../../../../assets/images/pictures/${path}`);
      }
      catch(err){
         return require(`../../../../assets/images/pictures/question-mark1.png`);
      }
   }

   formatDate(date) {
      var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];

      var temp = date.split("-");
      if(temp.length < 3) return null;
    
      var day = temp[2];
      var monthIndex = parseInt(temp[1])-1;
      var year = temp[0];
    
      return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }

   // get one component
   getOneComponent(component, key, allComps){
      if(!allComps[component.part]) return null;
      const targetComponent = allComps[component.part].find(c => parseInt(c.id) === parseInt(component.productId));
      if(!targetComponent) return null;
      const imagePath = component.part + '/' + targetComponent.image;
      return (
         <div key={key}>
            <Grid container spacing={24} className="my-0">
               <Grid item xs={12} sm={12} md={3} lg={3} className="py-0  d-flex justify-content-center align-items-center mb-md-0 mb-20">
                  <img
                     src={this.getImageFromPath(imagePath)}
                     alt='cart-item'
                     width="100"
                  />
               </Grid>
               <Grid item xs={12} sm={12} md={6} lg={6} className="py-0 d-flex justify-content-center align-items-center" >
                  <div className="text-center">
                     <h6 className="mb-5">{component.part.toUpperCase().replace("_", " ")}</h6>
                     <p className="mb-sm-0 mb-15 font-bold text-capitalize">{targetComponent.name}</p>
                  </div>
               </Grid>
               <Grid item xs={12} sm={12} md={3} lg={3} className="py-0 d-flex justify-content-center align-items-center" >
                  <div className="text-center">
                     <h6 className="mb-5">price</h6>
                     <p className="mb-0"><CurrencyIcon /> {targetComponent.price}</p>
                  </div>
               </Grid>
            </Grid>
            <Divider className="my-20" />
         </div>
      );
   }

   render() {

      const { components, total_price, date, allComps } = this.props;

      // console.log(allComps);

      return (
         <Fragment>
            <Button
               className="action-btn"
               onClick={this.handleClickOpen}
            >
               <i className="material-icons primary-color">remove_red_eye</i>
            </Button>
            <Dialog
               className="admin-invoice-wrap"
               open={this.state.open}
               onClose={() => this.closeDialog()}
               aria-labelledby="responsive-dialog-title"
            >
               <DialogContent className="p-20 text-center">
                  <div className="iron-invoice-wrap bg-base">
                     <div id="payment-receipt">
                        <div className="p-sm-30 p-15">
                           <div className="py-25 px-15  text-center bg-secondary mb-sm-50 mb-30">
                              <h3 className="mb-sm-15 mb-0">{this.formatDate(date)}</h3>
                           </div>
                           <div>
                              <h4 className="pt-5">Selected Order Details</h4>
                              {(components && allComps)?components.map((comp, key) => this.getOneComponent(comp, key, allComps)):null}
                           </div>
                           <div>
                              <Grid container spacing={0}>
                                 <Grid item xs={12} sm={12} md={12} lg={12} className="" >
                                    <div className="d-flex justify-content-between align-items-center mb-sm-50 mb-0">
                                       <h4>Total</h4>
                                       <h4><CurrencyIcon /> {total_price}</h4>
                                    </div>
                                 </Grid>
                              </Grid>
                           </div>
                        </div>
                     </div>
                     <div className="p-15 d-sm-flex justify-content-between align-items-center">
                        <Button className="button btn-active btn-lg mb-20 mr-auto ml-auto" onClick={() => this.closeDialog()}>OK</Button>
                     </div>
                  </div>
               </DialogContent>
            </Dialog >
         </Fragment>
      );
   }
}

export default InvoicePopup;