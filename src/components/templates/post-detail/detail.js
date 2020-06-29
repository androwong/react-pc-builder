/**
 * post detail component
*/
/* eslint-disable */
import React, { Fragment } from 'react';
// import { connect } from 'react-redux';

//components
// import SocialIcons from '../../widgets/SocialIcons';
// import CurrencyIcon from '../../global/currency/CurrencyIcon';
// import ProductReview from '../../global/review-popup/ProductReview';


class Detail extends React.Component {

   constructor(props) {
      super(props);
   }

   state = {
      data: this.props.data,
      comp: this.props.comp
   }


   render() {
      const { data } = this.state;
      let detailarray = [];
      for(let key in data){
         if(!(['id', 'flag', 'name', 'createdAt', 'image', 'price'].indexOf(key) >= 0)){
            detailarray.push({key : key, data: data[key]});
         }
      }
      return (
         <ul className="no-style mb-30">
            {  detailarray.map((val,index)=>
               <li key={index} className="mb-10"><span className="font-medium text-14">{val.key}</span> :
                  <span className="text-14 ml-5">{val.data}</span>
               </li>
             )
            }
         </ul>
      )
  }
}
export default Detail;
