/**
 * Home Page Two
 */
/* eslint-disable */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

//component
import TopProductTwo from '../../components/widgets/TopProductTwo';
import ContentLoader from '../../components/global/loaders/ContentLoader';



class HomePageTwo extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         banner: null,
         cta: [],
         topProducts: null,
         clients: []
      }
   }

   componentDidMount() {
      // this.getBannerData();
      // this.getCta();
      // this.getTopProduct();
      // this.getClients();
   }

   //get banner data
   getBannerData() {
      const bannerRef = firebase.database().ref('banner_two');
      bannerRef.on('value', (snapshot) => {
         let banner = snapshot.val();
         this.setState({
            banner: banner
         });
      });
   }

   //get call to action data
   getCta() {
      const ctaRef = firebase.database().ref('cta');
      ctaRef.on('value', (snapshot) => {
         let cta = snapshot.val();
         this.setState({
            cta: cta
         });
      });
   }

   //get products data
   getTopProduct() {
      const topProductsRef = firebase.database().ref('products');
      topProductsRef.on('value', (snapshot) => {
         let topProducts = snapshot.val();
         let newState = ((topProducts.men.concat(topProducts.women)).concat(topProducts.gadgets)).concat(topProducts.accessories);
         this.setState({
            topProducts: newState
         });
      });
   }

   //get clients data
   getClients() {
      const clientsRef = firebase.database().ref('clients');
      clientsRef.on('value', (snapshot) => {
         let clients = snapshot.val();
         this.setState({
            clients: clients
         });
      });
   }

   render() {

      // const { banner, cta, topProducts, clients } = this.state;
      const topProducts  = [
         {url : '/shop/home', title : 'HOME PC', littleTitle : 'Home', content : 'Suitable for browsing the internet, writing e-mails, streaming videos and music.', image : 'pictures/home.png'},
         {url : '/shop/gaming', title : 'GAMING PC', littleTitle : 'Gaming', content : 'Designed to play games, from simple internet games to the latest AAA titles.', image : 'pictures/gaming.png'},
         {url : '/shop/workstation', title : 'WORKSTATION PC', littleTitle : 'Workstation', content : 'For heavy video/photo editing, audio production and 3D/CAD work.', image : 'pictures/workstation.png'},
         {url : '/shop/custom', title : 'CUSTOM PC', littleTitle : 'Custom', content : 'Buyer can select all pc parts to build a pc.', image : 'pictures/custom.png'}
      ];

      return (
         <Fragment>
            {
               topProducts !== null ?
                  <div className="iron-home-v2-wrap">
                     {/* top products section start */}
                     <div className="iron-top-products-wrapper section-pad pb-0">
                        <div className="container">
                           <div className="iron-sec-heading-wrap mb-30">
                              <div className="d-sm-flex justify-content-between align-items-center">
                                 <div className="heading-title  mb-sm-0 mb-10">
                                    <h3 className="mb-0 transform-none">What type of PC are you looking for?</h3>
                                 </div>
                              </div>
                           </div>
                           <TopProductTwo Data={topProducts} />
                        </div>
                     </div>
                  </div>
                  :
                  <ContentLoader />
            }
         </Fragment >
      )
   }
}

export default HomePageTwo;