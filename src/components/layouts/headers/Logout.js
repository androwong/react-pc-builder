/**
 * logout header widget
*/
/* eslint-disable */
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import { Link, Redirect } from 'react-router-dom';


import { connect } from 'react-redux';

// actions
import { clearUsers, showAlert, clearParts } from "../../../actions/action";

// helpers
import { getUser } from "../../../helpers";

class Logout extends React.Component {
   state = {
      anchorEl: null,
      user: {
         url: require('../../../assets/avatars/default-avatar.png'),
         alt: 'user'
      },
      menus: [
         {
            id: 1,
            title: 'Profile',
            icon: 'account_circle',
            path: '/account/profile',
            isSigned: true
         },
         {
            id: 2,
            title: 'Sign Up',
            icon: 'person_add',
            path: '/sign-up',
            isSigned: false
         },
         {
            id: 3,
            title: 'Sign In',
            icon: 'exit_to_app',
            path: '/sign-in',
            isSigned: false
         },
         {
            id: 4,
            title: 'Logout',
            icon: 'power_settings_new',
            path: '/',
            isSigned: true,
            handle : 'logout'
         }
      ]
   };

   //define function for open dropdown
   handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
   };

   //define function for close dropdown
   handleClose = () => {
      this.setState({ anchorEl: null });
   };

   //define function for log out
   handleLogout = (e) => {
      e.preventDefault();
      const user = getUser();
      if(user){
         this.props.clearUsers();
         this.props.clearParts();
         setTimeout(() => {
            //this.props.showAlert('Log out success', 'success');
            //this.props.history.push({pathname : '/'});
            window.location = "/";
         }, 500);
      }
      this.setState({ anchorEl: null });
   };

   render() {
      const { anchorEl } = this.state;
      const open = Boolean(anchorEl);
      const user = this.state.user;

      return (
         <div className='iron-logout-wrap f-left'>
            <Avatar
               aria-owns={open ? 'menu-appbar' : null}
               aria-haspopup="true"
               onClick={this.handleMenu}
               className="icon-btn"
               alt={user.alt} src={user.url}
            >
            </Avatar>
            <Menu
               anchorEl={anchorEl}
               anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
               }}
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
               }}
               open={open}
               onClose={this.handleClose}
               className="iron-dropdown"
            >
               {
                  this.state.menus.filter(menu => menu.isSigned === (getUser() !== null))
                     .map((menu, index) => (
                     <MenuItem
                        key={index}
                        onClick={(menu.handle === "logout")?this.handleLogout:this.handleClose}
                        to={menu.path}
                        component={Link}
                     >
                        <i className="material-icons">{menu.icon}</i>
                        <span className="mb-0">{menu.title}</span>
                     </MenuItem>
                  ))
               }
            </Menu>
         </div>
      );
   }
}
// map state to props
const mapStateToProps = ({ ecommerce }) => {
   const { collaborationData } = ecommerce;
   return { collaborationData };
}
export default connect(mapStateToProps, { clearUsers, showAlert, clearParts })(Logout);