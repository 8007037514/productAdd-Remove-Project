import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  pStatus : string = "No Product is Added to Cart !!!";
  pCount : number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onAddproduct(){
    this.pCount++;
    this.pStatus = `${this.pCount} Product is Added to Cart`;

     
Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Your Product is Added',
  showConfirmButton: false,
  timer: 1500
})

  }

  onRemoveproduct(){


    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Removed !',
          'Your Product has been Removed.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })

    if(this.pCount === 0){
      return
    }

    
   
    this.pStatus = `${this.pCount} Product is Added to Cart !!!`

    if(this.pCount === 1){
      this.pCount--;
      this.pStatus = `No Product is Added to Cart !!!`
     
    }

    if(this.pCount > 1){
      this.pCount--;
      this.pStatus = `${this.pCount}  Product is Added to Cart !!!`

 

  
    }
  }

  

}
