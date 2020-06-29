/**
 * product add page
*/
/* eslint-disable */
import React, { Fragment } from 'react';
import { Grid, Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

//component
import ContentLoader from '../../../../components/global/loaders/ContentLoader';
import Success from '../components/Success';

//api connect
import ConnectAPI from "../../../../connectAPI";

class ProductAdd extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         comp : this.props.match.params.type,
         fields: {},
         fields_type: {}
      }
      this.confirmationDialog = React.createRef();
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
   }

   handleSubmit(event){
      event.preventDefault();
      let { comp,fields } = this.state;
      var conn = new ConnectAPI();
      conn.postFetch('component/create/' + comp, fields)
      .then(data => {
         if(data.status === 200) {
            setTimeout(() => {
               this.confirmationDialog.current.openDialog();
               //this.props.history.push({pathname : '/admin-panel/admin/parts'});
            }, 500)
         }
      });   
      
   }

   //define Function for change input data
   handleChange(field, e) {
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({ fields });
   }
   

   componentDidMount() {
      var conn = new ConnectAPI();
      conn.getFetch('component/fields/' + this.state.comp, '')
      .then(data => {
         var fieldObj = new Object();
         for(let key in data){
            if(key !== 'id' && key !== 'flag' && key !== 'created_at') {
               fieldObj[key] = '';
            }
         }
          this.setState({
            fields: fieldObj,
            fields_type: data
         });
      });
   }

   render() {
      let { fields, comp, fields_type } = this.state;
      let detailarray = [];
      let datatype;
      for(let key in fields_type){
         if(!(['id', 'flag', 'created_at'].indexOf(key) >= 0)){
            if(fields_type[key] === 'integer' || fields_type[key] === 'float') {
               datatype = 'number'
            } else {
               datatype = fields_type[key];
            }
            detailarray.push({key : key, data: datatype});
         }
      }
      
      return (
         <Fragment>
            {fields && fields !== null?
               <div className="iron-product-add-wrap pt-50 px-sm-50 px-md-0">
                  <h5> {comp} > </h5>
                  <Grid container spacing={32} className="my-0">
                     <Grid item xs={12} sm={12} md={10} lg={9} className="py-0 mx-auto">
                        <Grid container spacing={32} className="my-0">
                           <Grid item xs={12} sm={12} md={6} lg={6} className="py-0">
                              <div className="detail-content">
                                 <form className="product-values" onSubmit={this.handleSubmit}>
                                    {
                                       detailarray.map((val,index)=>
                                       <div className="mb-10" key={index}>
                                          <h6 className="text-14 mb-0 edit-text">{val.key} :</h6>
                                          <TextField
                                             required
                                             id="standard-required"
                                             className="add-product-input pl-30 transform-none"
                                             inputProps={{
                                                'aria-label': 'Description',
                                             }}
                                             style = {{width:"200px"}}
                                             label = {val.data}
                                             type = {val.data}
                                             ref = {val.key}
                                             onChange={this.handleChange.bind(this, val.key)}
                                             value={this.state.fields[val.key]}
                                          />
                                       </div>)
                                    }
                                    <div className="mb-sm-50 mb-20 detail-btns pl-25">
                                       <Button type="submit" 
                                          className="button btn-active btn-lg mr-15 mb-20 mb-sm-0"
                                       >
                                          Add
                                       </Button>
                                       <Link to="/admin-panel/admin/parts">
                                          <Button
                                             className="button btn-base btn-lg mb-20 mb-sm-0"
                                          >
                                          Back to products
                                          </Button>
                                       </Link>
                                    </div>
                                 </form>
                                 <Success
                                    ref={this.confirmationDialog} alerttext="Part added successfully"
                                 />
                              </div>
                           </Grid>
                        </Grid>
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

export default ProductAdd;