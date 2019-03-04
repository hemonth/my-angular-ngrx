import {Component, OnInit, OnDestroy} from '@angular/core';


import {Product} from '../product';
import {ProductService} from '../product.service';
import {select, Store} from '@ngrx/store';
import * as productState from '../../state/app.state';
import {currentProduct, showProductCode} from '../state/product.reducer';
import * as productActions from '../state/product.action';

@Component({
    selector: 'pm-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
    pageTitle = 'Products';
    errorMessage: string;

    displayCode: boolean;

    products: Product[];

    // Used to highlight the selected product in the list
    selectedProduct: Product | null;

    constructor(private productService: ProductService, private store: Store<productState.State>) {
    }

    ngOnInit(): void {
        this.store.pipe(select(currentProduct)).subscribe(
            currentProduct => this.selectedProduct = currentProduct
        );

        this.productService.getProducts().subscribe(
            (products: Product[]) => this.products = products,
            (err: any) => this.errorMessage = err.error
        );

        this.store.pipe(select(showProductCode)).subscribe(
            data => {
                this.displayCode = data;
            });
    }

    ngOnDestroy(): void {
    }

    checkChanged(value: boolean): void {
        this.store.dispatch(new productActions.ToggleProductCode(value));
    }

    newProduct(): void {
        this.store.dispatch(new productActions.InitializeCurrentProduct());
    }

    productSelected(product: Product): void {
        this.store.dispatch(new productActions.SetCurrentProduct(product));
    }

}
