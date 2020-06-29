/**
 * edit info component
 */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Button } from '@material-ui/core';


//api connect
import ConnectAPI from "../../../../connectAPI";

//helper
import { getUser } from "../../../../helpers";

import { connect } from 'react-redux';

// actions
import { showAlert } from "../../../../actions/action";

class EditInfo extends React.Component {

   state = {
      fields: { firstName: '', lastName: '', email: '', password: ''},
      errors: {},
   };

   // Get the users 
   componentDidMount() {
      const userId = getUser();
      var conn = new ConnectAPI();

      conn.getFetch('user/' + userId, '')
      .then(data => {
         this.setState({
            fields: data
         });
      });   
   }

   /**
    * define function for form validation
   */
   handleValidation() {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      //FirstName
      if (!fields["firstName"]) {
         formIsValid = false;
         errors["firstName"] = "Please insert the FirstName";
      }

      //LastName
      if (!fields["lastName"]) {
         formIsValid = false;
         errors["lastName"] = "Please insert the LastName";
      }

      //Password
      if (!fields["password"]) {
         formIsValid = false;
         errors["password"] = "Please insert the Password";
      }

      //Email
      if (!fields["email"]) {
         formIsValid = false;
         errors["email"] = "Please insert the email";
      }

      if (typeof fields["email"] !== "undefined") {
         let lastAtPos = fields["email"].lastIndexOf('@');
         let lastDotPos = fields["email"].lastIndexOf('.');

         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
         }
      }

      this.setState({ errors: errors });
      return formIsValid;
   }

   genderChange = event => {
      this.setState({ value: event.target.value });
   };

   //define Function for change input data
   handleChange(field, e) {
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({ fields });
   }

   //define function for submit form 
   addUserFormSubmit(e) {
      e.preventDefault();
      if (this.handleValidation()) {
         // process 
         const userId = getUser();
         var conn = new ConnectAPI();
   
         conn.postFetch('user/' + userId, this.state.fields)
         .then(data => {
            if(data.status === 200) {
               setTimeout(() => {
                  this.props.showAlert('Your profile is successfully updated ', 'success')
               }, 500)
            }
         });   
      } else {
         //alert("Form has errors.")
      }
   }

   render() {
      return (
         <div className="profile-wrapper">
            <h4>Edit Profile Information</h4>
            <Grid container spacing={32}>
               <Grid item xs={12} sm={12} md={6} lg={6}>
                  <form onSubmit={this.addUserFormSubmit.bind(this)}>
                     <div>
                        <TextField
                           id="standard-name"
                           label="first Name"
                           className="iron-form-input-wrap"
                           ref="firstName"
                           onChange={this.handleChange.bind(this, "firstName")}
                           value={this.state.fields["firstName"]}
                        />
                        <div style={{color: "red"}} className="mb-15">{this.state.errors["firstName"]}</div>
                        
                        <TextField
                           id="standard-name"
                           label="last Name"
                           className="iron-form-input-wrap"
                           ref="lastName"
                           onChange={this.handleChange.bind(this, "lastName")}
                           value={this.state.fields["lastName"]}
                        />
                        <div style={{color: "red"}} className="mb-15">{this.state.errors["lastname"]}</div>

                        <TextField
                           id="standard-email"
                           label="email"
                           className="iron-form-input-wrap"
                           refs="email"
                           onChange={this.handleChange.bind(this, "email")}
                           value={this.state.fields["email"]}
                        />
                        <div style={{color: "red"}} className="mb-15">{this.state.errors["email"]}</div>

                        <TextField
                           id="standard-password"
                           label="password"
                           className="iron-form-input-wrap"
                           refs="password"
                           onChange={this.handleChange.bind(this, "password")}
                           value={this.state.fields["password"]}
                        />
                        <div style={{color: "red"}} className="mb-15">{this.state.errors["password"]}</div>

                     </div>
                     <Button type="submit" className="button btn-active mb-15">save</Button>
                  </form>
               </Grid>
            </Grid>
         </div>
      )
   }
}

// map state to props
const mapStateToProps = ({ ecommerce }) => {
   const { collaborationData } = ecommerce;
   return { collaborationData };
}
export default connect(mapStateToProps, {  showAlert })(EditInfo);