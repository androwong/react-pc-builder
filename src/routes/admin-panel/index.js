/**
 * Dasboard Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// async components
import {
   AsyncOrderListComponent,
   AsyncProductsGridComponent,
   AsyncProductAddComponent,
   AsyncProductEditComponent,
   AsyncProfileDetailComponent
} from '../../util/AsyncRoutes';

const AdminPanel = ({ match }) => {
   return (
      <div className="dashboard-wrapper">
         <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/parts`} />
            <Route path={`${match.url}/orders`} component={AsyncOrderListComponent} />
            <Route path={`${match.url}/parts`} component={AsyncProductsGridComponent} />
            <Route path={`${match.url}/product-add/:type`} component={AsyncProductAddComponent} />
            <Route path={`${match.url}/product-edit/:type/:id`} component={AsyncProductEditComponent} />
            <Route path={`${match.url}/account`} component={AsyncProfileDetailComponent} />
         </Switch>
      </div>
   )
}

export default AdminPanel;