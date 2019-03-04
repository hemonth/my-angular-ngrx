import {Product} from '../product';
import * as fromRoot from '../../state/app.state';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductActions, ProductActionTypes} from './product.action';

export interface State extends fromRoot.State {
    products: ProductState;
}


export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    products: Product[];
}

const initialState: ProductState = {
    showProductCode: true,
    currentProduct: null,
    products: []
};


export const getProductState = createFeatureSelector<ProductState>('products');

export const showProductCode = createSelector(getProductState, state => state.showProductCode);
export const currentProduct = createSelector(getProductState, state => state.currentProduct);
export const getProducts = createSelector(getProductState, state => state.products);

export function reducer(state: ProductState = initialState, action: ProductActions): ProductState {
    switch (action.type) {
        case ProductActionTypes.ToggleProductCode:
            return {
                ...state,
                showProductCode: action.payload
            };
        case ProductActionTypes.SetCurrentProduct:
            return {
                ...state,
                currentProduct: action.payload
            };
        case ProductActionTypes.InitializeCurrentProduct:
            return {
                ...state,
                currentProduct: new class implements Product {
                    description: string;
                    id: 0;
                    productCode: string;
                    productName: string;
                    starRating: number;
                }
            };
        default:
            return state;
    }
}
