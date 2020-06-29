/**
 * order history page
 */
import React, { Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//api connect
import ConnectAPI from "../../../connectAPI";

// helpers
import { getUser } from "../../../helpers";

//firebase
// import firebase from '../../../firebase';

//component
import ContentLoader from '../../../components/global/loaders/ContentLoader';

class OrderHistory extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         orderHistory: null,
         allComps : []
      }
   }

   componentDidMount() {
      this.getTableData();
   }

   // get all components from api
   getAllComponents(allComps){
      var conn = new ConnectAPI();
      allComps.forEach(comp => {
         conn.getFetch('component/'+comp, '')
            .then(data => {
               let temp = this.state.allComps;
               temp[comp] = data;
               this.setState({allComps : temp});
            });
      });
      
   }

   // make order history
   makeOrderHistory(orderHistory, compIds, comp, indexOrder, indexComp, order){
      compIds.forEach(cid => {
         indexComp ++;
         orderHistory.push({
            count : indexComp,
            id : indexOrder,
            part : comp,
            productId : cid,
            dateTime : order.createdAt.split("T")[0],
            action : 'done_outline'
         });
      });

      return {orderHistory, indexComp};
   }

   //get table data
   getTableData() {
      const user = getUser();
      var allComps = [];

      var conn = new ConnectAPI();

      conn.getFetch('orders/'+user, '')
         .then(data => {
            let orderHistory = [];
            let indexOrder = 0, indexComp = 0;
            let components, comp, compIds;
            data.forEach((order) => {
               indexOrder ++;
               components = JSON.parse(order.components);
               if(components){
                  for(comp in components){
                     if(components[comp]){
                        compIds = components[comp].split(",");
                        if(compIds.length > 0){
                           if(!(allComps.indexOf(comp) >= 0)) allComps.push(comp);
                           const result = this.makeOrderHistory(orderHistory, compIds, comp, indexOrder, indexComp, order);
                           orderHistory = result.orderHistory;
                           indexComp = result.indexComp;
                        }
                     }
                  }
               }
            });
            
            this.getAllComponents(allComps);

            this.setState({
               orderHistory: orderHistory
            });
         });
   }

   render() {
      const { orderHistory, allComps } = this.state;

      return (
         <Fragment>
            {orderHistory !== null ?
               <div className="iron-table-wrapper">
                  <Table className="iron-table-wrap">
                     <TableHead>
                        <TableRow>
                           <TableCell className="iron-th">no.</TableCell>
                           <TableCell className="iron-th">order Id</TableCell>
                           <TableCell className="iron-th">part</TableCell>
                           <TableCell className="iron-th">product name</TableCell>
                           <TableCell className="iron-th">price</TableCell>
                           <TableCell className="iron-th">date</TableCell>
                           <TableCell className="iron-th">status</TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {orderHistory.map((orderItem, index) => {
                           const product = (allComps && allComps[orderItem.part])?allComps[orderItem.part].find(c => parseInt(c.id, 10) === parseInt(orderItem.productId, 10)):null;
                           return (
                              <TableRow key={index}>
                                 <TableCell className="iron-td">{orderItem.count}</TableCell>
                                 <TableCell className="iron-td">{orderItem.id}</TableCell>
                                 <TableCell className="iron-td">{orderItem.part.replace("_", " ")}</TableCell>
                                 <TableCell className="iron-td">{(product)?product.name:null}</TableCell>
                                 <TableCell className="iron-td">${(product)?product.price:null}</TableCell>
                                 <TableCell className="iron-td">{orderItem.dateTime}</TableCell>
                                 <TableCell className="iron-td"><i className="material-icons">{orderItem.action}</i></TableCell>
                              </TableRow>
                           );
                        })}
                     </TableBody>
                  </Table>
               </div>
               :
               <ContentLoader />
            }
         </Fragment>
      )
   }
}
export default OrderHistory;