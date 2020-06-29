/**
 * radiobuttons component
*/
/* eslint-disable */
import React, { Component } from 'react';

import {
   Paper,
   FormLabel,
   FormControlLabel,
   FormControl,
   RadioGroup,
   Radio
} from '@material-ui/core';


class RadioButtons extends Component {

   constructor(props){
      super(props);
      this.state = {
         checkedValue : null
      };
   }

   getRadioWithLabel(label, value, checked, index){
      return (
         <FormControlLabel 
            key={index}
            value={`${value}`} 
            control={<Radio />} 
            label={label} 
         />
      );
   }

   componentDidMount(){
      this.setState({
         checkedValue : this.props.checked
      });
   }

   componentWillReceiveProps(nextProps){
      this.setState({
         checkedValue : nextProps.checked
      });
   }

   render() {
      const { title, contents, checked } = this.props;

      return (
         <Paper style={{padding: '12px 15px' }}>
            <FormControl component="fieldset" className="my-3">
               <FormLabel component="h3" variant="h5" className="mb-10">{title}</FormLabel>
               <RadioGroup
                  aria-label="Gender"
                  name="gender1"
                  className="mt-3 mb-3"
                  value={`${this.state.checkedValue}`}
                  onChange={(event) => {
                     const selectedItem = contents.find(cont => parseInt(cont.value) === parseInt(event.target.value));
                     const selectedComp = selectedItem?selectedItem.label:'';
                     this.setState({checkedValue : event.target.value});
                     this.props.handleChange(selectedComp);
                  }}
               >
                  {(contents)?contents.map((cont, index) => this.getRadioWithLabel(cont.label, cont.value, checked, index)):null}
               </RadioGroup>
            </FormControl>
         </Paper>
      )
   }
}
export default RadioButtons;