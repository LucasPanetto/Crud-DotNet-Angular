import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TheButtonModule } from '../../components/the-button/the-button.module';
import { ValidateMessageModule } from '../../components/validate-message/validate-message.module'
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxCurrencyModule } from "ngx-currency";

@NgModule({
  declarations: [ProductsComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    TheButtonModule,
    ReactiveFormsModule,
    ValidateMessageModule,
    NgbModule,
    NgxCurrencyModule
  ]
})

export class ProductsModule { }
