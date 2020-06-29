/**
 * post detail component
*/
/* eslint-disable */
import React, { Fragment } from 'react';
import { Grid, Button, Input } from '@material-ui/core';
import { Link } from 'react-router-dom';

//api connect
import ConnectAPI from "../../../../connectAPI";
//component
import Success from '../components/Success';
import ContentLoader from '../../../../components/global/loaders/ContentLoader';

import { connect } from 'react-redux';

class Detail extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         id: this.props.id,
         comp: this.props.comp,
         fields: this.props.fields,
      }
      this.confirmationDialog = React.createRef();
      this.handleChange = this.handleChange.bind(this);
   }
    
   componentDidMount() {
      let { comp, id, fields } = this.state;
      var conn = new ConnectAPI();
      conn.getFetch('component/' + comp + "/" + id, fields)
      .then(data => {
          this.setState({
            fields: data
         });
      });
      
   }

   getImageFromPath(path){
      try{
         return require(`../../../../assets/images/pictures/${path}`);
      }
      catch(err){
         return require(`../../../../assets/images/pictures/question-mark1.png`);
      }
   }

   //define Function for change input data
   handleChange(field, e) {
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({ fields });
   }
   

   //form submit
   updatePartFormSubmit(e) {
      e.preventDefault();
      
      let { id, comp, fields } = this.state;
      const fieldObject = Object.keys(fields).reduce((object, key) => {
         if (key !== 'id' && key !== 'flag' && key !== 'createdAt') {
           object[key] = fields[key]
         }
         return object
       }, {})
       
      var conn = new ConnectAPI();
      conn.postFetch('component/' + comp + "/" + id, fieldObject)
      .then(data => {
         if(data.status === 200) {
            setTimeout(() => {
               this.confirmationDialog.current.openDialog();
            }, 500)
         }
      });   
      
   }

   render() {
      let { comp, fields } = this.state;
      let detailarray = [];
      for(let key in fields){
         if(!(['id', 'flag', 'name', 'createdAt', 'price'].indexOf(key) >= 0)){
            detailarray.push({key : key, data: fields[key]});
         }
      }
      
      return (
         <Fragment>
            {fields && fields !== null?
               <Grid container spacing={32} className="my-0">
                      <Grid item xs={12} sm={12} md={6} lg={6} className="py-0 mb-md-0 mb-30">
                        <Grid container spacing={24} className="iron-product-gallery my-0">
                           <Grid item xs={9} sm={10} md={10} lg={10} className="py-0">
                              <div className="preview-full-image">
                                 <div className="iron-shadow product-gallery-item ">
                                    <div>
                                       <a href="javascript:void(0)">
                                          <img
                                             src={this.getImageFromPath(`${comp}/${fields.image}`)}
                                             alt="poster-image"
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
                           {/* <Link to="/admin-panel/admin/products" className="text-14 d-inline-block font-medium py-10 mb-10">Back to products</Link> */}
                           <form onSubmit={this.updatePartFormSubmit.bind(this)} className="product-values">
                              <div className="d-flex justify-content-start align-items-start mb-10">
                                 <i className="zmdi zmdi-edit mr-5 primary-color pt-10 text-h4 "></i>
                                 <Input
                                    className="text-capitalize add-product-input text-h3"
                                    inputProps={{
                                       'aria-label': 'Description',
                                    }}
                                    ref = "name"
                                    onChange={this.handleChange.bind(this, "name")}
                                    value={this.state.fields["name"]}
                                 />
                              </div>
                              <div className="d-flex justify-content-start align-items-start mb-10">
                                 <i className="zmdi zmdi-edit mr-5 primary-color pt-5 text-h5"></i>
                                 <Input
                                    className="text-capitalize add-product-input text-h4 active-input"
                                    inputProps={{
                                       'aria-label': 'Description',
                                    }}
                                    ref = "price"
                                    onChange={this.handleChange.bind(this, "price")}
                                    value={this.state.fields["price"]}
                                 />
                              </div>
                              {  detailarray.map((val,index)=>
                                 <div className="mb-10" key={index}>
                                    <h6 className="text-14 mb-0 edit-text">{val.key} :</h6>
                                    <Input
                                       className="text-capitalize add-product-input pl-30"
                                       inputProps={{
                                          'aria-label': 'Description',
                                       }}
                                       ref = {val.key}
                                       onChange={this.handleChange.bind(this, val.key)}
                                       value={this.state.fields[val.key]}
                                    />
                              </div>
                              )
                              }
                           <div className="mb-sm-50 mb-20 detail-btns pl-25">
                              <Button type="submit"
                                 className="button btn-active btn-lg mr-15 mb-20 mb-sm-0"
                              >
                                 save
                              </Button>
                              <Link to="/admin-panel/admin/parts">
                                 <Button
                                    className="button btn-base btn-lg mb-20 mb-sm-0"
                                 >
                                    back to list
                                 </Button>
                              </Link>
                           </div>
                           </form>
                        </div>
                        <Success
                           ref={this.confirmationDialog} alerttext="Updated successfully!"
                        />
                     </Grid>
               </Grid>  
               :
               <ContentLoader />
            }
         </Fragment>
      )
  }
}

export default Detail;