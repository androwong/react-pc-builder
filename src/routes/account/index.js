/**
 * account detail page
 */
/* eslint-disable */
import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';

//component
import OrderHistory from './order-history';
import Profile from './profile';
import EditUser from './edit';


class Account extends React.Component {

   constructor(props){
      super(props);
      this.state = {
         UserInfo : {}
      };
   }
  
   render(){
      const {match} = this.props;
      const {UserInfo} = this.state;

      return(
         <div className="iron-user-info-wrap section-pad">
            <div className="container">
               <Grid container spacing={16} className="my-0">
                  <Grid item xs={12} sm={12} md={3} lg={3} className="py-0 mb-md-0 mb-30">
                     <div className="iron-shadow px-sm-30 px-15 h-100">
                        <ul className="user-info-links pt-10 mb-0">
                           <li className="links d-block">
                              <Link
                                 className="d-flex justify-content-start align-items-center"
                                 to={`${match.url}/order-history`}
                              >
                                 <i className="material-icons">history</i>
                                 order history
                              </Link>
                           </li>
                           <li className="links d-block">
                              <Link
                                 className="d-flex justify-content-start align-items-center"
                                 to={`${match.url}/profile`}
                              >
                                 <i className="material-icons">account_circle</i>
                                 profile
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={9} lg={9} className="py-0">
                     <div className="iron-shadow p-15 pt-20">
                        <Switch>
                           <Redirect exact from={`${match.url}`} to={`${match.url}/order-history`} />
                           <Route
                              path={`${match.url}/order-history`}
                              component={OrderHistory}
                           />
                           <Route
                              path={`${match.url}/profile`}
                              component={Profile}
                           />
                           <Route
                              path={`${match.url}/edit`}
                              component={EditUser}
                            />
                        </Switch>
                     </div>
                  </Grid>
               </Grid>
            </div>
         </div>
      )   
   }   
}
export default Account;
