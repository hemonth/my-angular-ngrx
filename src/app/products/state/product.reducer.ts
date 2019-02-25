import {Product} from '../product';
import * as fromRoot from '../../state/app.state';
import {createFeatureSelector, createSelector} from '@ngrx/store';

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

export function reducer(state: ProductState = initialState, action): ProductState {
    switch (action.type) {
        case 'TOGGLE_PRODUCT_CODE':
            return {
                ...state,
                showProductCode: action.payload
            };
        default:
            return state;
    }
}
