import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  private message: string;
  private type: any;
  private Toast = Swal.mixin();

  constructor() {
    // Configuracion del Toast
    this.Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000
    });
  }

  public showToast(res: any) {
    if (!res.success) {
      // Si no hay éxito
      this.type = 'error';
      if (res.message) {
        // Verifica si hay mensaje y lo muestra
        this.message = res.message;
      } else {
        // Si no hay mensaje, verifica si hay errores
        if (res.errors) {
          // Asigna el primer error del array
          const i = 0;
          this.message = res.errors[i].msg;
          // Si el mensaje es invalid value, busca el siguiente
          while (this.message === 'Invalid value') {
            try {
              this.message = res.errors[i + 1].msg;
            } catch (e) {
              // Si todos son Invalid value
              this.message = 'Ocurrio un error grave';
            }
          }
        }
      }
    } else {
      this.type = 'success';
      if (res.message) {
        this.message = res.message;
      } else {
        // Si no hay mensaje de éxito, no llama al objeto (suele ser para consultas)
        return;
      }
    }

    // Llamado del Toast
    this.Toast.fire({
      type: this.type,
      title: this.message
    });
  }

  public showSuccessAlert(title: string, text?: string, txtBtn?: string) {
    return Swal.fire({
      title: title,
      text: text ? text : '',
      type: 'success',
      confirmButtonText: txtBtn ? txtBtn : 'Confirmar'
    });
  }

  public showErrorAlert(title: string, text?: string, txtBtn?: string) {
    return Swal.fire({
      title: title,
      text: text ? text : '',
      type: 'error',
      confirmButtonText: txtBtn ? txtBtn : 'Confirmar'
    });
  }

  public showWarningAlert(title: string, text?: string, txtBtn?: string) {
    return Swal.fire({
      title: title,
      text: text ? text : '',
      type: 'warning',
      confirmButtonText: txtBtn ? txtBtn : 'Confirmar'
    });
  }

  public showInfoAlert(title: string, text?: string, txtBtn?: string) {
    return Swal.fire({
      title: title,
      text: text ? text : '',
      type: 'info',
      confirmButtonText: txtBtn ? txtBtn : 'Confirmar'
    });
  }

  public showQuestionAlert(title: string, text?: string, txtBtn?: string) {
    return Swal.fire({
      title: title,
      text: text ? text : '',
      type: 'question',
      confirmButtonText: txtBtn ? txtBtn : 'Confirmar'
    });
  }
}
