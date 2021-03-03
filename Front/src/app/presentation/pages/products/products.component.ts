import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductModel } from 'src/app/core/domain/product.model';
import { RequestService } from 'src/app/core/services/request.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  productList: ProductModel[] = []
  closeResult = '';
  productForm: FormGroup;
  fileName: string = ''

  constructor(private requestService: RequestService, private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', Validators.required],
      imageBase64: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getListProduct();
  }

  editProduct(product: ProductModel) {
  }

  getListProduct() {
    this.requestService.get('/product').subscribe((data: ProductModel[]) => {
      this.productList = (data)
    })
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  handleUpload(event: any) {
    const file = event.target.files[0];
    this.fileName = file.name
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.productForm.controls['imageBase64'].setValue(reader.result);
    };
  }

  trySave() {
    debugger

    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched()
      return
    }

    const product = this.productForm.value as ProductModel;

    this.requestService.post('/product', product).subscribe((data: ProductModel) => {
      this.getListProduct();
      this.getDismissReason(ModalDismissReasons.BACKDROP_CLICK);
    })
  }
}
