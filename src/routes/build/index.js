/**
 * shop Page
 */
import React, { Fragment } from 'react';

import ContentLoader from '../../components/global/loaders/ContentLoader';

//component
import TopCompoentTwo from '../../components/widgets/TopCompoentTwo';

//api connect
import ConnectAPI from "../../connectAPI";

class Shop extends React.Component {

   constructor(props){
      super(props);
      this.state = {
         type : null,
         comp : null,
         parts : null,
         categs : null,
      };
   }

   setTypeCompFromProps(props){
      let pathArray = props.location.pathname.split('/');
      if(this.state.comp !== pathArray[3]) this.setPartsFromState(pathArray[3]);
      this.setState({
         type : pathArray[2],
         comp : pathArray[3]
      });
   }

   setPartsFromState(comp){
      var conn = new ConnectAPI();
      conn.getFetch('component', '')
      .then(data => {
         this.setState({
            categs : data.map(val => {
               val.value =  val.id;
               val.label = val.name;
               return val;
            }),
         });
      });
   }

   getPageTitleFromState(){
      let title;
      if(this.state.comp === 'all'){
         title = this.state.type + " PC";
      }
      else{
         title = this.state.comp + " Parts";
      }
      return title.replace("_", " ").toUpperCase();
   }

   componentDidMount(){
      this.setTypeCompFromProps(this.props);
   }

   componentWillReceiveProps(nextProps){
      this.setTypeCompFromProps(nextProps);
   }

   render() {
      const {type, categs} = this.state;

      return (
         <Fragment>
            {
               (categs !== null) ?
               <div className="iron-home-v2-wrap">
                  {/* top products section start */}
                  <div className="iron-top-products-wrapper section-pad pb-0">
                     <div className="container">
                        <div className="iron-sec-heading-wrap mb-30">
                           <div className="d-sm-flex justify-content-between align-items-center">
                              <div className="heading-title  mb-sm-0 mb-10">
                              </div>
                           </div>
                        </div>
                        <TopCompoentTwo Data={categs} Comp={type} />
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

export default Shop;