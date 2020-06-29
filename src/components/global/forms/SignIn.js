/**
 * Sign in form
 */
import React from 'react';

// Material ui
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

// actions
import { addNewUser, clearUsers, showAlert } from "../../../actions/action";

//api connect
import ConnectAPI from "../../../connectAPI";

class SignIn extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
            remember : 'checkedRemember',
            status : true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        const { email, password } = this.state;
        var conn = new ConnectAPI();


        conn.getFetch('user/'+email+'/'+password, '')
        .then(data => {
            if(data){
                const user = {
                    name: data.firstName + ' ' + data.lastName,
                    email : data.email,
                    access : 'Read',
                    userId : data.id,
                    roles : data.roles
                };
                
                this.props.clearUsers();
                this.props.addNewUser(user);
                this.setState({
                    status : true
                });
                
                setTimeout(() => {
                //this.props.history.push({pathname : '/'});
                this.props.showAlert('Login Success!', 'success')
                this.props.history.goBack();
                }, 500);
            }
            else{
                this.setState({
                    status : false
                });
            }
        });

    }
    showerroralert(){
        return (
            <div className="mb-30 active-color">You must input correct email and password</div>
        );
     }

    render() {

        const { email, password, remember } = this.state;

        return (
            <div>
                <h4>user sign in</h4>
                <form onSubmit={this.handleSubmit}>
                    <div>
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
                    </div>
                    <div className="mb-15">
                        <TextField
                            required
                            id="standard-password-input"
                            label="Password"
                            className="iron-form-input-wrap"
                            type="password"
                            // autoComplete="current-password"
                            value={password}
                            onChange={(e) => {this.setState({password : e.target.value})}}
                        />
                    </div>
                    <div className="d-sm-flex justify-content-between align-items-center mb-sm-10 mb-20">
                        <FormGroup >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value={remember}
                                        color="primary"
                                    />
                                }
                                label="Remember Me"
                            />
                        </FormGroup>
                        <span className="d-inline-block"><Link to="#">Forgot Password?</Link></span>
                    </div>
                    {(!this.state.status)?this.showerroralert():null }
                    
                    <Button 
                        type="submit" 
                        className="button btn-active btn-lg mb-25"
                    >
                        sign in
                    </Button>
                    <p className="mb-0">Don't have an account? <Link to="/sign-up">Click here to create one</Link></p>
                </form>
            </div>
        )
    }
}
// map state to props
const mapStateToProps = ({ ecommerce }) => {
   const { collaborationData } = ecommerce;
   return { collaborationData };
}
export default connect(mapStateToProps, { addNewUser, clearUsers, showAlert })(SignIn);