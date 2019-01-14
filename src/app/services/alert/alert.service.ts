import {Injectable} from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  isLoading = false;

  constructor() {
  }

  showErrorMessage(message: string) {
    return swal({
      position: 'bottom-right',
      type: 'error',
      text: message,
      width: 300,
      showConfirmButton: false,
      // timer: 2000
      showCloseButton: true
    });
  }

  showSuccessMessage(message: string) {
    return swal({
      position: 'bottom-right',
      type: 'success',
      text: message,
      width: 300,
      showConfirmButton: false,
      timer: 1500
    });
  }

  startLoading() {
    if (this.isLoading) {
      return;
    }
    $('body').append(`<any id = "globalloading"
    style = "top:0;
    left: 0;
    height:100vh;
    width:100vw;
    position:fixed;
    opacity:0.9;
    background: rgb(255,255,255);
    z-index: 99999;
    background-image: url(../../../assets/images/Loading_icon.gif);
    background-position:center;
    background-repeat:no-repeat;"
    ></any>`);
    this.isLoading = true;
  }

  stopLoading() {
    $('#globalloading').remove();
    this.isLoading = false;
  }
}
