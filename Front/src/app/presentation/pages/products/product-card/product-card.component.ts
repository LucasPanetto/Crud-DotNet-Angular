import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from 'src/app/core/domain/product.model';
import { RequestService } from 'src/app/core/services/request.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {
  @Input() product = {} as ProductModel;
  @Output() deletedProduct = new EventEmitter()
  @Output() editProduct = new EventEmitter()

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
  }

  deleteProduct(product: ProductModel): void {
    this.requestService.delete('/product', product).subscribe(data => {
      this.deletedProduct.emit('');
    })
  }

  callEditPorduct(product: ProductModel): void {
    this.requestService.delete('/product', product).subscribe(data => {
      this.editProduct.emit(product);
    })
  }
 
}
