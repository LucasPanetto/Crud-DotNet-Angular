import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProductModel } from 'src/app/core/domain/product.model';
import { RequestService } from 'src/app/core/services/request.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  productList: ProductModel[] = []
  nameSearch: string = ""
  closeResult = ''
  productForm: FormGroup
  fileName: string = ''
  modalReference: any = ''
  loading: boolean = false
  @ViewChild('content', { static: false }) private content: any

  constructor(private requestService: RequestService, private modalService: NgbModal, private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', Validators.required],
      imageBase64: ['', Validators.required],
      id: ['']
    })
  }

  ngOnInit(): void {
    this.getListProduct();
  }

  editProduct(product: ProductModel) {
    this.productForm.controls['name'].setValue(product.name);
    this.productForm.controls['price'].setValue(product.price);
    this.productForm.controls['imageBase64'].setValue(product.imageBase64);
    this.productForm.controls['id'].setValue(product.id);

    this.open(this.content)
  }

  getListProduct() {
    this.loading = true;
    let route = '/product';
    this.nameSearch != "" ? route += `?name=${this.nameSearch}` : ''

    this.requestService.get(route).subscribe((data: ProductModel[]) => {
      this.productList = (data)
      this.loading = false;
    })
  }

  open(content: any) {
    this.modalReference = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.modalReference.result.then(() => {
    }, () => {
    });
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
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched()
      return
    }

    const product = this.productForm.value as ProductModel;

    if (product.id) {
      this.requestService.put('/product', product).subscribe((data: ProductModel) => {
        this.toastr.success('Produto Atualizado', 'Sucesso!');
      })
    } else {
      this.requestService.post('/product', product).subscribe((data: ProductModel) => {
        this.toastr.success('Produto Cadastrado', 'Sucesso!');

      })
    }
    this.modalReference.close();
    this.getListProduct();
    this.productForm.reset();

  }
}
