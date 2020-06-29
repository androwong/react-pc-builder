/**
 * account detail page
 */
/* eslint-disable */
import React from 'react';
import ReactTable from 'react-table';
import EditableTable from "./EditableTable/EditableTable";



class AdminAccountDetails extends React.Component {

   constructor(props){
      super(props);
   }
   
   render() {
         return (
            <div className="inner-container">
               <div className="iron-invoice-list-wrap">
                  <div className="iron-shadow rounded p-20 bg-base">
                     <EditableTable />
                  </div>
               </div>
            </div>
         )
      }
}
export default AdminAccountDetails