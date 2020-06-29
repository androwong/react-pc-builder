/**
 * checkboxes component
*/
/* eslint-disable */
import React, { Component } from 'react';

import {
   Paper,
   FormGroup,
   FormLabel,
   FormControl,
   FormControlLabel,
   Checkbox
} from '@material-ui/core';


class Checkboxes extends Component {

   constructor(props){
      super(props);
      this.state = {
         // checkedValue : []
      };
   }

   getCheckboxWithLabel(label, value, index){
      // const checked = (this.state.checkedValue[index])?
      //    this.state.checkedValue[index]
      //    :
      //    false;
      return (
         <FormGroup row key={value+index}>
            <FormControlLabel
               control={
                  <Checkbox
                     // checked={checked}
                     onChange={(event) => {
                        // let checkeds = this.state.checkedValue;
                        // checkeds[index] = event.target.checked;
                        // this.setState({checkedValue : checkeds});
                        this.props.handleChange(this.props.title, event.target.value, event.target.checked);
                     }}
                     value={`${value}`}
                     inputProps={{
                        'aria-label': 'primary checkbox',
                     }}
                  />
               }
               label={label}
            />
         </FormGroup>
      );
   }

   componentWillReceiveProps(nextProps){
      this.setState({
         // checkedValue : nextProps.checked
      });
   }

   render() {
      const { title, contents } = this.props;
      return (
         <Paper style={{padding: '12px 15px' }}>
            <FormControl component="fieldset" className="my-3">
               <FormLabel component="h3" variant="h5" className="mb-10">{title}</FormLabel>
               {(contents)?contents.map((cont, index) => this.getCheckboxWithLabel(cont.label, cont.value, index)):null}
            </FormControl>
         </Paper>
      )
   }
}
export default Checkboxes;