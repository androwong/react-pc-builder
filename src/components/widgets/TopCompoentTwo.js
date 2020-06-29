/**
 * top products
 */
/* eslint-disable */
import React, { Fragment } from 'react';
import { Grid, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

//connect to store
import { connect } from 'react-redux';

// actions
import { showAlert, inputCustomPrice, inputLowPrice, inputHighPrice, clearPrice } from "../../actions/action";

// helpers
import { getPrices } from "../../helpers";

//component
// import CurrencyIcon from '../global/currency/CurrencyIcon';


class TopProducts extends React.Component {

   // state = {
   //    itemsToShow: 4,
   //    loadMore: false
   // }
   constructor(props){
      super(props);
      this.state = {
         type : null,
         comp : null,
         customPriceValue : ''
      };
      this.handleInputPrice = this.handleInputPrice.bind(this);
      this.showCustomPrice = this.showCustomPrice.bind(this);
   }

   setTypeCompFromProps(props){
      let comp = props.Comp;
      this.setState({
         comp : comp
      });
      this.setInputPrice(comp);
   }

   getPageTitleFromState(){
      let title;
      title = this.state.comp + " PC";
      return title.replace("_", " ").toUpperCase();
   }
   
   getCustomBudgetForm() {
      return (
         <div>
            <TextField
               id="standard-name"
               label="Please enter your budget"
               margin="normal"
               className="mt-0"
               value={this.state.customPriceValue}
               onChange={this.handleInputPrice}
            />
            <Button
               className="btn-wrap text-capitalize button btn-default ml-30 confirm-btn"
               onClick={this.showCustomPrice}
            >
               confirm
            </Button>
            
         </div>
      );
   }

   setInputPrice(type){
      this.props.clearPrice();
      switch(type){
         case 'home':
            this.props.inputHighPrice(100);
            break;
         case 'gaming':
            this.props.inputLowPrice(100);
            this.props.inputHighPrice(300);
            break;
         case 'workstation':
            this.props.inputLowPrice(300);
            break;
         case 'custom':
            break;
      }
   }
    
   showCustomPrice() {
      this.props.clearPrice();
      this.props.inputCustomPrice(parseInt(this.state.customPriceValue));
   }

   handleInputPrice(event){
      const customPrice = event.target.value;
      this.setState({customPriceValue : customPrice});
   }

   componentDidMount(){
      this.setTypeCompFromProps(this.props);
   }

   componentWillReceiveProps(nextProps){
      if(this.state.comp !== nextProps.Comp){
         this.setTypeCompFromProps(nextProps);
      }
   }

   render() {
      const { Data } = this.props;

      return (
         <Fragment>
            {Data !== null && this.state.comp !== null ?
               <Fragment>
                  <div className="row py-10">
                     <div className="f-left">
                        <CardMedia
                           style={{padding : "20px", width : "110px"}}
                           height="140"
                           component="img"
                           image={require(`../../assets/images/pictures/${this.state.comp}.png`)}
                        />
                     </div>
                     <div className="mb-10 symbol-description f-left">
                        <div>{this.getPageTitleFromState()}</div>
                        {(this.state.comp === 'custom')?
                           this.getCustomBudgetForm()
                           :
                           null
                        }
                     </div>
                  </div> 
                  <Grid container spacing={32} className="iron-product-wrap my-0 mb-50">
                     {Data.map((data, index) => (
                        <Grid key={index} item xs={12} sm={6} md={6} lg={3} className="mb-30 py-0">
                           <Card className="iron-product-item p-25 iron-shadow position-relative hover-box-shadow">
                              <div>
                                 <Link to={`/shop/custom/${data.name}`} className='d-block'>
                                    <CardMedia
                                       style={{padding : "20px", width : "auto"}}
                                       height="140"
                                       component="img"
                                       image={require(`../../assets/images/${data.image}`)}
                                    />
                                 </Link>
                              </div>
                              <CardContent className="iron-product-content pt-20 p-0 border">
                                 <h5 className="text-truncate mb-sm-15 mb-10"><Link to={`/shop/custom/${data.name}`}>{data.title}</Link></h5>
                                 <div className="iron-btn-grp2 mb-sm-0 mb-5">
                                 <Link to={`/shop/custom/${data.name}`}>
                                    <Button
                                       className="btn-wrap text-capitalize button"
                                    >
                                       ADD A {data.name} 
                                    </Button>
                                 </Link>   
                                 </div>
                              </CardContent>
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
   const { prices } = ecommerce;
   return { prices };
}

export default connect(mapStateToProps, {
   showAlert, 
   inputCustomPrice, 
   inputLowPrice, 
   inputHighPrice, 
   clearPrice
})(TopProducts);
