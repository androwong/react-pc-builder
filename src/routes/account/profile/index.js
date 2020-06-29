/**
 * user profile page
 */
import React, { Fragment } from 'react';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';

//component
import ContentLoader from '../../../components/global/loaders/ContentLoader';

//helper
import { getUser } from "../../../helpers";

//api connect
import ConnectAPI from "../../../connectAPI";

export default class Profile extends React.Component {

   state = {
      infoData: null
   }

   componentDidMount() {
      const userId = getUser();
      var conn = new ConnectAPI();

      conn.getFetch('user/' + userId, '')
      .then(data => {
         this.setState({
            infoData: data
         });
      });   
   }

   render() {

      const { infoData } = this.state;

      return (
         <Fragment>
            {infoData !== null ?
               <div className="profile-wrapper p-sm-15 py-5">
                  <h4 className="mb-30">Profile Infomation</h4>
                  <div>
                     <ul className="user-basic-info">
                        <li className="profile-field mb-15">
                           <span>First Name:</span>
                           <span>{infoData.firstName}</span>
                        </li>
                        <li className="profile-field mb-15">
                           <span>Last Name:</span>
                           <span>{infoData.lastName}</span>
                        </li>
                        <li className="profile-field mb-15">
                           <span>email:</span>
                           <span>{infoData.email}</span>
                        </li>
                        <li className="profile-field mb-15">
                           <span>password:</span>
                           <span>{infoData.password}</span>
                        </li>
                     </ul>
                     <Button
                        component={Link}
                        to={{ pathname: "edit", search: "?type=info" }}
                        className="button btn-active"
                     >
                        edit
                     </Button>
                  </div>
               </div>
               :
               <ContentLoader />
            }
         </Fragment >
      )
   }

}

