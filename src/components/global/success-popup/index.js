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

class ConfirmationDialog extends React.Component {
   state = {
      open: false,
   };

   //Define function for open confirmation dialog box
   openDialog() {
      this.setState({ open: true });
   };

   //Define function for close confirmation dialog box and callback for delete item 
   closeDialog(isTrue) {
      this.setState({ open: false });
      this.props.onConfirm(isTrue)
   };

   render() {
      return (
         <Dialog
            open={this.state.open}
            onClose={this.closeDialog.bind(this)}
            aria-labelledby="responsive-dialog-title"
         >
            <DialogContent className="p-20 text-center">
               <h4 className="pt-20 transform-none">{this.props.alerttext}</h4>
            </DialogContent>
            <DialogActions className="px-20 pb-20 justify-content-center">
               <Button onClick={() => this.closeDialog(true)} className="button btn-active mr-15">
                  Ok
               </Button>
            </DialogActions>
         </Dialog >
      );
   }
}

export default ConfirmationDialog;