/**
 * Invoices List
 */
/* eslint-disable */
import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ReactTable from 'react-table';


//component
import ContentLoader from '../../../components/global/loaders/ContentLoader';
import ConfirmationBox from './components/ConfirmationBox';
import InvoicePopup from './components/InvoicePopup';

//api connect
import ConnectAPI from "../../../connectAPI";

export default class OrderList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         allComps : [],
         allUsers : [],
         orderlist: [],
         searchClientText: "",
         countComps : 100
      }
      this.confirmationDialog = React.createRef();
   }

   componentDidMount() {
      this.getTableData();
   }

   // search user name and email
   searchUser(searchClientText){
      let users = this.state.allUsers;
      return users.filter(u => {
         let str = (u.firstName + u.lastName + u.email).toLowerCase();
         return str.includes(searchClientText.toLowerCase());
      });
   }
   
   // Search 
   searchBuyer(buyerArray, searchText){
      if(searchText !== ""){
         let users = this.searchUser(searchText);
         buyerArray = buyerArray.filter(p => {
            let flag = users.find(u => parseInt(u.id) === parseInt(p.user_id));
            if(!flag) flag = p.date.includes(searchText);
            if(!flag) flag = (""+p.total_price).includes(searchText);
            return flag;
         });
      }
      return buyerArray;
   }
  
   // get all components from api
   getAllComponents(allComps){
      var conn = new ConnectAPI();
      allComps.forEach(comp => {
         conn.getFetch('component/'+comp, '')
            .then(data => {
               let temp = this.state.allComps;
               let countComps = this.state.countComps - 1;
               temp[comp] = data;
               this.setState({allComps : temp, countComps: countComps});
            });
      });
      
   }

   // get all users from api
   getAllUsers(){
      var conn = new ConnectAPI();
      conn.getFetch('user/', '')
         .then(data => {
            if(data) this.setState({allUsers : data});
         });
   }

   // make order history
   makeOrderHistory(tempComps, compIds, comp){
      return tempComps.concat(compIds.map(cid => {
         return {
            part : comp,
            productId : cid
         };
      }));
   }

   //get table data
   getTableData() {
      let { searchClientText } = this.state;
      var allComps = [];

      var conn = new ConnectAPI();

      conn.getFetch('Orders/', '')
         .then(data => {
            let orderHistory = [];
            let indexOrder = 0;
            let components, comp, compIds;
            data.forEach((order) => {
               indexOrder ++;
               components = JSON.parse(order.components);
               if(components){
                  let tempComps = [];
                  for(comp in components){
                     if(components[comp]){
                        compIds = components[comp].split(",");
                        if(compIds.length > 0){
                           if(!(allComps.indexOf(comp) >= 0)) allComps.push(comp);
                           tempComps = this.makeOrderHistory(tempComps, compIds, comp);
                        }
                     }
                  }
                  orderHistory.push({
                     count: indexOrder,
                     order_id: order.id,
                     user_id: order.userId,
                     date : order.createdAt.split("T")[0],
                     total_price : order.totalPrice,
                     components: tempComps
                  });
               }
            });
            
            this.getAllComponents(allComps);
            this.getAllUsers();
            
            this.setState({
               orderlist: orderHistory,
               countComps : allComps.length
            });
         });
   }
   

   onDelete(order) {
      this.id = order.order_id;
      this.confirmationDialog.current.openDialog();
    }
  
    deleteOrder(popupResponse) {
      let { orderlist } = this.state;
      if (popupResponse) {
         let {data} = this.state;
         var conn = new ConnectAPI();
         conn.deleteFetch('orders/' + this.id, "")
         .then(data => {
            console.log(data);
            if(data.status === 200) {
               this.setState({ 
                  orderlist: orderlist.filter((od,index) =>(od.order_id !== this.id))
                  });
            }
         });
      }  
    }
   
   render() {
      
      let { allComps, allUsers, orderlist, searchClientText, countComps } = this.state;
      
      let columns = [
         {
            maxWidth: 75,
            Header: 'No.',
            accessor: 'count'
         },
         {
            sortable: false,
            Header: 'Order Id',
            accessor: 'order_id',
         },
         {
            Header: 'Buyer',
            accessor: 'user_name',
            Cell: props => {
               return (
                  <div>
                     {allUsers.find(u => u.id === props.original.user_id)?allUsers.find(u => u.id === props.original.user_id).firstName + " " + allUsers.find(u => u.id === props.original.user_id).lastName:null}
                  </div>
               )
            },
         },
         {
            Header: 'Email',
            accessor: 'user_email',
            Cell: props => {
               return (
                  <div>
                     {allUsers.find(u => u.id === props.original.user_id)?allUsers.find(u => u.id === props.original.user_id).email:null}
                  </div>
               )
            },
         },
         {
            Header: 'Date',
            accessor: 'date',
         },
         {
            Header: 'Price',
            accessor: 'total_price',
            Cell: props => {
               return (
                  <div>
                     ${props.original.total_price}
                  </div>
               )
            },
         },
         {
            Header: 'action',
            accessor: 'action',
            Cell: props => {
               return (
                  <div>
                     <InvoicePopup {...props.original} allComps={allComps} />
                     <Button
                        className="action-btn"
                        onClick={() => this.onDelete(props.original)}
                     >
                        <i className="material-icons active-color">delete</i>
                     </Button>
                  </div>
               )
            },
         }
      ]
      
      let olists = this.searchBuyer(orderlist, searchClientText);
      return (
         <Fragment>
            {(countComps <= 0) ?
               <div className="inner-container">
                  <div className="iron-invoice-list-wrap">
                     <div className="page-title mb-20">
                        <h4 className="mb-0">Order list</h4>
                     </div>
                     <div className="iron-shadow rounded p-sm-20 p-15 mb-30 bg-base">
                        <Grid container spacing={24} className="my-0">
                           <Grid item xs={12} sm={12} md={6} lg={5} className="py-0 d-sm-flex d-block">
                              <TextField
                                 id="standard-name"
                                 label="Search Order"
                                 className="my-0 iron-form-input-wrap mr-5"
                                 fullWidth
                                 value={this.state.searchClientText}
                                 onChange={(event) => {this.setState({searchClientText : event.target.value})}}
                              />
                           </Grid>
                        </Grid>
                     </div>
                     <div className="iron-shadow rounded p-20 bg-base">
                        <ReactTable
                           data={olists}
                           columns={columns}
                           minRows={6}
                           defaultPageSize={10}
                        />
                     </div>
                  </div>
                  <ConfirmationBox
                     ref={this.confirmationDialog}
                     onConfirm={(res) => this.deleteOrder(res)}
                  />
               </div>
                 :
               <ContentLoader />
               }   
         </Fragment>
      )
   }
}