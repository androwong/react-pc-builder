/**
 * Invoices List
 */
/* eslint-disable */
import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import Button from '@material-ui/core/Button';


//component
import ContentLoader from '../../../components/global/loaders/ContentLoader';
import ProductsGrid from '../../../components/widgets/productGrid';
import ConfirmProduct from './components/ConfirmProduct';
import Pagination from '../../../components/customs/pagination';


//api connect
import ConnectAPI from "../../../connectAPI";

export default class Products extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         allProducts: null,
         gridlayout: true,
         products: null,
         currentcomp: 'cpu',
         complist: null,
         filtersField : null,
         currentPage : 1,
         pageNumbers : 12,
         searchWord : '',
         sorted : '',
         filters: [],
         variations: {
            category: 'cpu',
            featured: ''
         },
         columns: []
       };
      this.confirmationDialog = React.createRef();
      this.changePage = this.changePage.bind(this);
   }

   
   componentDidMount() {
      var conn = new ConnectAPI();

      //galary view data
      conn.getFetch('component/cpu', '')
      .then(data => {
          this.setState({
            products: data.map((d,index) => {d.count = index + 1; return d;})
         });
      });
      
      //list view header data
      this.getListViewHeader("cpu");

     //category combo data
     conn.getFetch('component', '')
      .then(data => {
          this.setState({
            complist: data
         });
      });

   }
  
   getListViewHeader(type) {
      
      var conn = new ConnectAPI();
      conn.getFetch('component/fields/'+ type, '')
      .then(data => {
         let headerlength= Object.keys(data).length;
         let tableheader = [];
         if(headerlength && headerlength > 0){
            tableheader.push({"Header":"NO", "accessor":"count", "maxWidth":55})
            Object.keys(data).forEach(function (item) {
               const accessor = data[item].replace("_", " ").replace(/\s(.)/g, function($1) { return $1.toUpperCase(); }).replace(" ", "");
               const header = data[item].replace("_", " ").toUpperCase().replace(" ","");
               tableheader.push({"Header":header, "accessor":accessor})
            });
            tableheader.push({Header: 'action', Cell: props => {
               return (
                  <div>
                     <Button component={Link} to={`/admin-panel/admin/product-edit/${type}/${props.original.id}`} className="action-btn"><i className="material-icons primary-color">edit</i>
                     </Button>
                     <Button className="action-btn"
                        onClick={() => this.onDeleteProductItem(props.original)}
                     >
                        <i className="material-icons active-color">delete</i></Button>
                  </div>
               )
             },});
         }  
         this.setState({
           columns: tableheader
        });
      });
   }

   handleChange = name => event => {
      this.setState({ [name]: event.target.value });
   };

   // show list layout
   gridLayout = () => {
      this.setState({ gridlayout: true });
   };

   // show grid layout
   listLayout = () => {
      this.setState({ gridlayout: false });
   };

   //function for categ variation
   changeCategVariation(category, e) {
      let value =e.target.value
      this.setState({
         variations: {
            ...this.state.variations,
            [category]: value
         },
         currentcomp: value
      })
      
      var conn = new ConnectAPI();
      conn.getFetch('component/' + value, '')
      .then(data => {
          this.setState({
            products: data.map((d,index) => {d.count = index + 1; return d;})
         });
      });

      this.getListViewHeader(value);
      
   }

    //function for feature variation
    changeFeatureVariation(feature, e) {
      let value =e.target.value
      this.setState({
         variations: {
            ...this.state.variations,
            [feature]: value
         },
         sorted: value
      })
      
   }

   onDeleteProductItem(dataitem) {
      this.dataitem = dataitem;
      this.confirmationDialog.current.openDialog();
   }

   getUppercaseCategory(categ) {
      return categ.replace("_"," ").toUpperCase();
   }

   /**
    * function for delete cart product
    * @param {boolean} popupResponse 
    */
   deleteDataItem(popupResponse) {
      if (popupResponse) {
         let deleteItem = this.dataitem;
         let newData = this.state.products.filter((productsItem) => productsItem.id !== deleteItem.id)
         this.setState({
            products: newData
         })
         var conn = new ConnectAPI();
         conn.deleteFetch('component/' + this.state.currentcomp + "/" + deleteItem.id, '')
         .then(data => {
         });
      }
   }

   getShowParts(){
      // filter & search & sort & price range
      let showParts = [];
      
      const {products, filtersField, sorted, searchWord, filters} = this.state;
      
      if(products){
         showParts = products;

         // search word
         if(searchWord !== ""){
            showParts = showParts.filter(p => p.name.toLowerCase().includes(searchWord.toLowerCase()));
         }

         // filters
         if(filtersField && filters){
            for(let key in filters){
               let filter = filters[key];
               if(filter.length > 0){
                  showParts = showParts.filter(p => (filter.indexOf(p[key]) >= 0));
               }
            }
         }

         // sort
         if(sorted !== "" && showParts.length > 0 && "price" in showParts[0]){
            if(sorted === "highest") showParts.sort((a, b) => b.price - a.price);
            else showParts.sort((a, b) => a.price - b.price);
         }

         return showParts;
      }

      return null;
   }

   getShowResults(showParts){
      // page
      let showResults = [];

      const pageNumbers = this.state.pageNumbers;
      let currentPage = this.state.currentPage;

      if(showParts){
         showResults = showParts;

         // current page
         if(currentPage < 1) currentPage = 1;
         else if(currentPage > Math.ceil(showParts.length / pageNumbers)) currentPage = Math.ceil(showParts.length / pageNumbers);

         // get parts for current page
         showResults = showResults.slice((currentPage - 1) * pageNumbers, (currentPage) * pageNumbers);
         
         return showResults;
      }

      return null;
   }

   changePage(nextPage){
      this.setState({currentPage : nextPage});
   }

   render() {
      const { pageNumbers, currentPage, complist, currentcomp, searchWord, columns } = this.state;
      
      const showParts = this.getShowParts();
      const showResults = this.getShowResults(showParts);
      return (
         <Fragment>
            {showResults !== null && complist !== null && columns !== null?
               <div className="inner-container">
                  <div className="iron-products-wrap">
                     <div className="iron-shadow rounded p-sm-20 p-15 mb-20 bg-base">
                        <Grid container spacing={24} className="search-box-wrap my-0">
                           <Grid item sm={12} md={3} lg={3} className="py-0 d-flex justify-content-start align-items-center">
                              <h4 className="mb-lg-0 mb-5">Search</h4>
                           </Grid>
                           <Grid item sm={12} md={9} lg={9} className="py-0 d-sm-flex d-block">
                              <div className="search-box d-block d-sm-flex align-items-center">
                                 <TextField
                                    id="standard-name"
                                    label="Search Parts"
                                    className="my-0 iron-form-input-wrap mr-5"
                                    fullWidth
                                    value={searchWord}
                                    onChange={(event) => {this.setState({searchWord : event.target.value})}}
                                 />
                                 {/* <Button className="button btn-primary mx-sm-10 my-10 my-sm-0">search</Button> */}
                              </div>
                              <div className="btn-wrap d-sm-flex d-block justify-content-between align-items-center">
                                 <Button component={Link} to={`/admin-panel/admin/product-add/${currentcomp}`} className="button btn-primary">add parts<i className="material-icons ml-5">add</i></Button>
                              </div>
                           </Grid>
                        </Grid>
                     </div>
                     <div>
                        <div className="d-flex justify-content-between align-items-center my-15">
                           <h5 className="text-capitalize mb-0">
                              {this.state.gridlayout === true ?
                                 'project grid'
                                 :
                                 'project list'
                              }
                           </h5>
                           <div className="projects-icon">
                              <Button className={`btn-icon ${this.state.gridlayout === true ? 'active' : ''}`} onClick={() => this.gridLayout()}>
                                 <i className="material-icons">apps</i>
                              </Button>
                              <Button className={`btn-icon ${this.state.gridlayout === false ? 'active' : ''}`} onClick={() => this.listLayout()}>
                                 <i className="material-icons">list</i>
                              </Button>
                           </div>
                        </div>
                        <div className="mb-10">
                              <div className="stats-info d-md-flex mb-30 justify-content-between align-items-center">
                                 <div className="mb-30 mb-md-0">
                                    <form className="product-values">
                                          <FormControl className="iron-select-width2">
                                             <InputLabel htmlFor="age-simple">Category</InputLabel>
                                             <Select
                                                value={this.state.variations.category}
                                                onChange={(e) => this.changeCategVariation('category', e)}
                                                inputProps={{
                                                   name: 'age',
                                                   id: 'age-simple',
                                                }}
                                             >
                                                {
                                                      complist.map((comp, index) => <MenuItem value={comp.name} key={index}>{this.getUppercaseCategory(comp.name)}</MenuItem>)
                                                }
                                             </Select>
                                          </FormControl>
                                          <FormControl className="iron-select-width2">
                                             <InputLabel htmlFor="age-simple">Featured</InputLabel>
                                             <Select
                                                value={this.state.variations.featured}
                                                onChange={(e) => this.changeFeatureVariation('featured', e)}
                                                inputProps={{
                                                   name: 'age',
                                                   id: 'age-simple',
                                                }}
                                             >
                                                <MenuItem value={'lowest'}>Lowest Price</MenuItem>
                                                <MenuItem value={'highest'}>Highest Price</MenuItem>
                                             </Select>
                                          </FormControl>
                                       </form>        
                                    </div>   
                                    <Typography variant="h5" component="h5" className="f-right total-label">
                                       Total : 
                                       {(showParts)?showParts.length:null} 
                                    </Typography>
                              </div>
                           
                        </div>
                        <div>
                           {this.state.gridlayout === true ?
                              <Fragment>
                                 <div className="product-grid-wrap">
                                    <Grid container spacing={32}>
                                       {showResults.map((dataitem, index) => {
                                          return (
                                             <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                                                <ProductsGrid data={dataitem} deleteProduct={() => this.onDeleteProductItem(dataitem)} comp = {currentcomp} />
                                             </Grid>
                                          )
                                       })}
                                    </Grid>
                                 </div >
                                 <div className="iron-pagination-wrap text-center mt-30">
                                       <Pagination 
                                          totalPages={(showParts)?Math.ceil(showParts.length/pageNumbers):1} 
                                          showFirstPage={true} 
                                          showLastPage={true} 
                                          currentPage={currentPage}
                                          handleChange={this.changePage} 
                                       />
                                 </div>
                              </Fragment>
                              :
                              <Fragment>
                                 <div className="product-list-wrap iron-shadow p-20 bg-base rounded" >
                                    <ReactTable
                                       data={showResults}
                                       columns={columns}
                                       defaultPageSize={10}
                                    />
                                 </div >
                              </Fragment>
                           }
                        </div>
                     </div>
                  </div>
                  <ConfirmProduct
                     ref={this.confirmationDialog}
                     onConfirm={(res) => this.deleteDataItem(res)}
                  />
               </div>
               :
               <ContentLoader />
            }
         </Fragment>
      );
   }
}