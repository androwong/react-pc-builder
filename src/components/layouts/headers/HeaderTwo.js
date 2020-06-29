/**
 * site header two component
 */
/* eslint-disable */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from "@material-ui/core/Grid";
import { Link } from 'react-router-dom';

// components
import HeaderMenu from "./HeaderMenu";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Logout from "./Logout";
import FixedHeader from '../headers/FixedHeader';
import SidebarMenu from '../sidebar';
import AppConfig from '../../../constants/AppConfig';
import SearchBox from './SearchBox';
import SearchBoxV2 from './SearchBoxV2';

//connect to store
import { connect } from 'react-redux';

//helper
import { getUser, getPrices } from "../../../helpers";


class HeaderTwo extends React.Component {

   state = {
      fixedHeader: false
   }
   
   componentWillMount() {
      window.addEventListener('scroll', this.hideBar);
   }

   componentWillUnmount() {
      window.removeEventListener('scroll', this.hideBar);
   }

   //Function to show and hide fixed header
   hideBar = () => {
      const { fixedHeader } = this.state;
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.scrollTop >= 200 ?
         !fixedHeader && this.setState({ fixedHeader: true })
         :
         fixedHeader && this.setState({ fixedHeader: false });
   }
   
   //if ther user doesn't log in, show signup, signin
   showSign(){
      return (
         <div className="f-left mt-10">
            <div className="f-left ml-20">
               <Link to="/sign-up"><span className="mb-0" style={{color: '#FFF'}}>Sign up</span></Link>
            </div>
            <div className="f-left ml-20">
               <Link to="/sign-in"><span className="mb-0"  style={{color: '#FFF'}}>Sign in</span></Link>
            </div>
         </div>
      );
   }

   render() {
      const prices = getPrices();
      let showPriceCustom = false;
      if(prices){
         if(prices.custom) showPriceCustom = true;
         if(prices.high || prices.low) showPriceCustom = false;
      }
      return (
         <div>
            <AppBar position="static" className={`iron-header-wrapper bg-primary iron-header-v2 ${(this.state.fixedHeader) ? 'header-fixed' : ''}`}>
               <div className="iron-header-top py-15 bg-primary">
                  <div className="container">
                     <Grid container spacing={0} >
                        <Grid item xs={6} sm={6} md={3} lg={3} xl={3} className="d-flex justify-content-start align-items-center" >
                           <div className="iron-app-logo text-md-center">
                              <img src={AppConfig.AppLogo} alt="header-logo" />
                              {/*<Typography variant="title" color="inherit" className="text-uppercase ">  
                                       Embryo
                                 </Typography> */}
                           </div>
                        </Grid>
                        <Grid item md={6} lg={7} xl={7} className=" d-flex justify-content-start align-items-center" >
                           {/* <SearchBoxV2 /> */}
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={2} xl={2} className="d-flex justify-content-end align-items-center" >
                           <div className="iron-header-widgets  justify-content-end align-items-center ">
                              <div className="f-left"><Cart /></div>
                              {/* <Wishlist /> */}
                              {
                                 (getUser() !== null) ? <Logout /> : this.showSign()
                              }
                              {
                                 (showPriceCustom)? <div className="mt-50 ml-64">Total budget: {prices.custom}$</div>:null
                              }

                           </div>
                        </Grid>
                     </Grid>
                  </div>
               </div>
               <div className="iron-header-bottom bg-base">
                  <div className="container">
                     <Grid container spacing={0} >
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                           <div className="position-relative">
                              <HeaderMenu />
                              <SidebarMenu />
                              <SearchBox />
                           </div>
                        </Grid>
                     </Grid>
                  </div>
               </div>
               <FixedHeader />
            </AppBar>
         </div>
      );
   }
}

const mapStateToProps = ({ ecommerce }) => {
   const { prices, collaborationData } = ecommerce;
   return { prices, collaborationData };
}

export default connect(mapStateToProps, null)(HeaderTwo);