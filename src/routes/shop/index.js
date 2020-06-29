/**
 * shop Page
 */
import React, { Fragment } from 'react';

import ContentLoader from '../../components/global/loaders/ContentLoader';

import {
   Grid,
   Paper,
   InputBase,
   IconButton,
   Select,
   FormControl,
   InputLabel,
   MenuItem,
   Typography
} from '@material-ui/core';

import { connect } from 'react-redux';

// actions
import { showAlert, inputCustomPrice, inputLowPrice, inputHighPrice, clearPrice } from "../../actions/action";

// helpers
import { getPrices } from "../../helpers";

import SearchIcon from '@material-ui/icons/Search';

//page title
import RctCard from '../../components/global/rct-card';
import Hit from '../../components/ecommerce/shop/hit';

import Checkboxes from '../../components/customs/checkboxes';
import RadioButtons from '../../components/customs/radiobuttons';
import Pagination from '../../components/customs/pagination';

   
//app config
// import AppConfig from '../../constants/AppConfig';

//api connect
import ConnectAPI from "../../connectAPI";

class Shop extends React.Component {

   constructor(props){
      super(props);
      this.state = {
         pageNumbers : 12,
         type : null,
         comp : null,
         parts : null,
         categs : null,
         filtersField : null,
         currentPage : 1,
         searchWord : '',
         sorted : '',
         filters: []
      };
      this.changePage = this.changePage.bind(this);
      this.changeCategory = this.changeCategory.bind(this);
      this.changeFilter = this.changeFilter.bind(this);
   }

   setTypeCompFromProps(props, isLoaded){
      let pathArray = props.location.pathname.split('/');
      if(!isLoaded){
         // get data from API
         this.setPartsFromState(pathArray[3]);
         // init all filters
         this.setState({
            currentPage : 1,
            searchWord : '',
            sorted : '',
            filters : []
         });
      }
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
            categs : (data)?
               data.map(val => {
                  val.value =  val.id;
                  val.label = val.name;
                  return val;
               })
               :
               null,
            filtersField : (data && data.find(val => val.name === comp))?data.find(val => val.name === comp).filters.split(","):null
         });
      });

      conn.getFetch('component/'+comp, '')
      .then(data => {
         this.setState({ 
            parts : data
         });
      });
   }

   getPageTitleFromState(){
      let title;
      title = this.state.comp + " Parts";
      return title.replace("_", " ").toUpperCase();
   }

   getFilterValues(){
      let filtersValue = [];

      const {parts, filtersField} = this.state;

      if(parts && filtersField){
         filtersField.forEach(ff => {
            let temp = [];
            parts.forEach(val => {
               if(ff in val && !(temp.find(t => t.label === val[ff]))){
                  temp.push({label : val[ff], value : val[ff]});
               }
            });
            if(temp.length > 0) filtersValue.push({label : ff, data : temp});
         });
      }

      return filtersValue;
   }

   getShowParts(){
      // filter & search & sort & price range
      let showParts = [];
      const prices = getPrices();

      const {parts, filtersField, sorted, searchWord, filters} = this.state;
      
      if(parts){
         showParts = parts;

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
            if(sorted === "high") showParts.sort((a, b) => b.price - a.price);
            else showParts.sort((a, b) => a.price - b.price);
         }

         // price range
         if(prices){
            if(prices.low > 0) showParts = showParts.filter(p => p.price >= prices.low);
            if(prices.high > 0) showParts = showParts.filter(p => p.price <= prices.high);
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

   changeCategory(nextCateg){
      this.setState({comp : nextCateg});
      this.props.history.push({pathname : '/shop/custom/'+nextCateg});
   }

   changeFilter(fieldFilter, nextFilter, flagFilter){
      let tempFilters = this.state.filters;
      if(!(fieldFilter in tempFilters)) tempFilters[fieldFilter] = [];
      if(flagFilter && !(tempFilters[fieldFilter].indexOf(nextFilter) >= 0)){
         tempFilters[fieldFilter].push(nextFilter);
      }
      else if(!flagFilter && (tempFilters[fieldFilter].indexOf(nextFilter) >= 0)){
         tempFilters[fieldFilter] = tempFilters[fieldFilter].filter(f => f !== nextFilter);
      }
      this.setState({filters : tempFilters});
      
   }

   getHitComponents(part, index){
      return (
         <Grid item key={index} xs={12} sm={12} md={6} lg={4}>
            <Hit
               hit={{
                  image : 'pictures/'+this.state.comp+'/'+part.image, 
                  objectID : this.state.comp+'@'+part.id, 
                  name : part.name, 
                  price : part.price,
                  url : '/products/'+this.state.comp+'/'+part.id
               }}
            />
         </Grid>
      );
   }

   getFilterComponents(filters, index){
      return (
         <RctCard key={index}>
            <Checkboxes 
               title={filters.label} 
               contents={filters.data} 
               // checked={[]} 
               handleChange={this.changeFilter} 
            />
         </RctCard>
      );
   }

   componentDidMount(){
      this.setTypeCompFromProps(this.props, false);
   }

   componentWillReceiveProps(nextProps){
      this.setTypeCompFromProps(nextProps, (this.props.location.pathname === nextProps.location.pathname));
   }

   render() {

      const {pageNumbers, parts, comp, categs, searchWord, sorted, currentPage} = this.state;

      const filtersValue = this.getFilterValues();

      const showParts = this.getShowParts();

      const showResults = this.getShowResults(showParts);

//      const prices = getPrices();

      return (
         <Fragment>
            {parts !== null ?
               <div className="iron-Shop-page-wrap">
                  <div className="product-list section-pad iron-shop-wrapper">
                     <div className="container">
                           <div className="row py-10">
                              <h3 className="mb-10">{this.getPageTitleFromState()}</h3>
                           </div>
                           <Grid container spacing={32}>
                              <Grid item xs={12} sm={12} md={4} lg={3} className="mb-md-0 mb-30">
                                 <div className="iron-filters-wrapper">
                                    <RctCard>
                                       <Paper style={{padding: '2px 4px', display: 'flex', alignItems: 'center' }}>
                                          <InputBase
                                             className=""
                                             style={{marginLeft: 8, flex: 1}}
                                             placeholder="Search Part"
                                             inputProps={{ 'aria-label': 'Search Part' }}
                                             value={searchWord}
                                             onChange={(event) => {this.setState({searchWord : event.target.value})}}
                                          />
                                          <IconButton style={{padding: 10}} aria-label="Search">
                                             <SearchIcon />
                                          </IconButton>
                                       </Paper>
                                    </RctCard>
                                    <RctCard>
                                       {categs?
                                          <RadioButtons 
                                             title="Category" 
                                             contents={categs} 
                                             checked={(categs)?categs.find(c => c.label === comp).value:null}
                                             handleChange={this.changeCategory}
                                          />
                                          :
                                          null
                                       }
                                    </RctCard>
                                    {filtersValue.map((filters, index) => this.getFilterComponents(filters, index))}
                                 </div>
                              </Grid>
                              <Grid item xs={12} sm={12} md={8} lg={9}>
                                 <div className="stats-info d-md-flex mb-30 justify-content-between align-items-center">
                                    <div className="mb-30 mb-md-0">
                                       <FormControl className="my-1" style={{minWidth: 250}}>
                                          <InputLabel htmlFor="sorted-select">Featured</InputLabel>
                                          <Select
                                             value={sorted}
                                             onChange={(event) => {this.setState({sorted : event.target.value})}}
                                             inputProps={{
                                                name: 'sorted',
                                                id: 'sorted-select',
                                             }}
                                          >
                                             <MenuItem value="low">Lowest Price</MenuItem>
                                             <MenuItem value="high">Highest Price</MenuItem>
                                          </Select>
                                       </FormControl>
                                    </div>
                                    <Typography variant="h5" component="h5">
                                       Total : 
                                       {(showParts)?showParts.length:null} 
                                       {/* <small>
                                       {(prices && (prices.low > 0 || prices.high > 0))?
                                          " ["+((prices.low > 0)?"$"+prices.low:'')+"~"+((prices.high > 0)?"$"+prices.high:'')+"]"
                                          :
                                          null
                                       }
                                       </small> */}
                                    </Typography>
                                 </div>
                                 <div className="mb-30">
                                    <Grid container spacing={32}>
                                       {(showResults)?
                                          showResults.map((part, index) => this.getHitComponents(part, index))
                                          :
                                          null
                                       }
                                    </Grid>
                                 </div>
                                 <div className="iron-pagination-wrap text-center">
                                    <Pagination 
                                       totalPages={(showParts)?Math.ceil(showParts.length/pageNumbers):1} 
                                       showFirstPage={true} 
                                       showLastPage={true} 
                                       currentPage={currentPage}
                                       handleChange={this.changePage} 
                                    />
                                 </div>
                              </Grid>
                           </Grid>
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

const mapStateToProps = ({ ecommerce }) => {
   const { inputCustomPrice, inputLowPrice, inputHighPrice } = ecommerce;
   return { inputCustomPrice, inputLowPrice, inputHighPrice };
}

export default connect(mapStateToProps, {
   showAlert, 
   inputCustomPrice, 
   inputLowPrice, 
   inputHighPrice, 
   clearPrice
})(Shop);