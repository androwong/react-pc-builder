/**
 * Sign up Page Page
 */
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

// actions
import { addNewUser, clearUsers, showAlert } from "../../../actions/action";

//api connect
import ConnectAPI from "../../../connectAPI";


class SignUp extends Component {

   constructor(props){
      super(props);
      this.state = {
         firstName : '',
         lastName : '',
         email : '',
         password : '',
         rePassword : '',
         passstatus : true,
         emailstatus: true
      };
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(event){
      event.preventDefault();

      const { firstName, lastName, email, password, rePassword } = this.state;
      
      if(password !== rePassword){
         this.setState({
            passstatus : false
        });
      }else{
         var conn = new ConnectAPI();

         conn.postFetch('user/create', this.state)
         .then(data => {
             if(data.data){
                 const user = {
                     name: firstName + ' ' + lastName,
                     email : email,
                     access : 'Read',
                     userId : data.data.id
                 };
                 this.props.clearUsers();
                 this.props.addNewUser(user);
                 this.setState({
                     status : true
                 });
               
                 setTimeout(() => {
                  //   this.props.history.push({pathname : '/'});
                     this.props.showAlert('Sign up success.', 'success');
                     this.props.history.goBack();
                 }, 500);
             }
             else{
                 setTimeout(() => {
                    this.props.showAlert('Sign up failed.', 'error');
                 }, 500);
             }
         });
      }

  }
  showerrorpass(){
      return (
         <div className="mb-30 active-color">The password doesn't match with re-password</div>
      );
   }

   render() {

      const { firstName, lastName, email, password, rePassword } = this.state;

      return (
         <div className="iron-sign-up-page-wrap">
            <div className="inner-container section-pad bg-base">
               <div className="container">
                  <Grid container spacing={0}>
                     <Grid item xs={12} sm={12} md={10} lg={9} className="mx-auto">
                        <Grid container spacing={0} className="d-flex justify-content-center align-items-center">
                           <Grid item xs={12} sm={12} md={6} lg={6}>
                              <div className="iron-sign-up-form form-margin iron-shadow bg-base p-sm-25 py-20 px-15 rounded">
                                 <h4>Enter your details</h4>
                                 <form onSubmit={this.handleSubmit}>
                                    <TextField
                                       required
                                       id="standard-first-name"
                                       label="first Name"
                                       className="iron-form-input-wrap"
                                       type="name"
                                       autoComplete="current-first-name"
                                       value={firstName}
                                       onChange={(e) => {this.setState({firstName : e.target.value})}}
                                    />
                                    <TextField
                                       required
                                       id="standard-last-name"
                                       label="last Name"
                                       className="iron-form-input-wrap"
                                       type="name"
                                       autoComplete="current-last-name"
                                       value={lastName}
                                       onChange={(e) => {this.setState({lastName : e.target.value})}}
                                    />
                                    <TextField
                                       required
                                       id="standard-email"
                                       label="email"
                                       className="iron-form-input-wrap"
                                       type="email"
                                       autoComplete="current-email"
                                       value={email}
                                       onChange={(e) => {this.setState({email : e.target.value})}}
                                    />
                                    <TextField
                                       required
                                       id="standard-password-input"
                                       label="Password"
                                       className="iron-form-input-wrap"
                                       type="password"
                                       autoComplete="current-password"
                                       value={password}
                                       onChange={(e) => {this.setState({password : e.target.value})}}
                                    />
                                    <div className="mb-25">
                                       <TextField
                                          required
                                          id="standard-re-password-input"
                                          label="retype Password"
                                          className="iron-form-input-wrap"
                                          type="password"
                                          autoComplete="current-password"
                                          value={rePassword}
                                          onChange={(e) => {this.setState({rePassword : e.target.value})}}
                                       />
                                    </div>
                                    <div className="mb-25">
                                    {(!this.state.passstatus)?this.showerrorpass():null }                                        
                                    </div>
                                    <Button type="submit" variant="contained" className="button btn-active btn-lg mb-10">
                                       sign up
                                    </Button>
                                 </form>
                                 <span className="text-14 text-capitalize pt-10 d-inline-block">already have an account ? then <Link to="/sign-in">sign in</Link></span>
                              </div>
                           </Grid>
                        </Grid>
                     </Grid>
                  </Grid>
               </div>
            </div>
         </div>
      );
   }
}
// map state to props
const mapStateToProps = ({ ecommerce }) => {
   const { collaborationData } = ecommerce;
   return { collaborationData };
}
export default connect(mapStateToProps, { addNewUser, clearUsers, showAlert })(SignUp);
