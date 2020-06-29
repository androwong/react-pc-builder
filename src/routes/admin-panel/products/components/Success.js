/**
 * Confirmation dialog component
*/
/* eslint-disable */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

class Success extends React.Component {
   state = {
      open: false,
   };

   //Define function for open confirmation dialog box
   openDialog() {
      this.setState({ open: true });
   };

   //Define function for close confirmation dialog box 
   closeDialog() {
      this.setState({ open: false });
   };

   //Define function for close confirmation dialog box and callback for delete item
   onCloseDialog(isTrue) {
      this.setState({ open: false });
      //this.props.history.push({pathname : '/admin-panel/admin/parts'});
      window.location = '/admin-panel/admin/parts';
   };

   render() {

      return (
         <Dialog
            open={this.state.open}
            onClose={this.closeDialog.bind(this)}
            aria-labelledby="responsive-dialog-title"
         >
            <DialogContent className="p-20 text-center">
               <h5 className="pt-sm-20 mb-0">{this.props.alerttext}</h5>
            </DialogContent>
            <DialogActions className="px-20 pb-20 pt-sm-15 justify-content-center">
               <Button onClick={() => this.onCloseDialog(false)} className="button btn-active mr-15" autoFocus>
                  Ok
               </Button>
            </DialogActions>
         </Dialog >
      );
   }
}

export default Success;