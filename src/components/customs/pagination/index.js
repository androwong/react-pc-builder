/**
 * pagination component
*/
/* eslint-disable */
import React, { Component } from 'react';

import {
   Grid,
   Button,
   ButtonBase 
} from '@material-ui/core';

import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';


class Pagination extends Component {

   constructor(props){
      super(props);
      this.state = {
      };
   }

   getButtonComponent(label, value, icon, isCurrent, index){
      return (
         <Button 
            key={index} 
            variant={(isCurrent)?"contained":"text"}
            color="primary"
            onClick={() => this.props.handleChange(value)}
         >
            {label}
            {icon}
         </Button>
      );
   }

   getPages(){
      const { totalPages, showFirstPage, showLastPage } = this.props;
      let pages = [];
      let currentPage = this.props.currentPage;
      if(currentPage < 1) currentPage = 1;
      else if(currentPage > totalPages) currentPage = totalPages;
      if(showFirstPage){
         pages.push({label : null, value : 1, isCurrent : false, icon : (<FirstPage />)});
      }
      for(let i = 1; i <= totalPages; i++){
         pages.push({label : i, value : i, isCurrent : (i === currentPage), icon : null});
      }
      if(showLastPage){
         pages.push({label : null, value : totalPages, isCurrent : false, icon : (<LastPage />)});
      }
      return pages;
   }

   render() {
      const pages = this.getPages();
      return (
         <Grid item>
            {(pages)?pages.map((page, index) => this.getButtonComponent(page.label, page.value, page.icon, page.isCurrent, index)):null}
          </Grid>
      )
   }
}

export default Pagination;