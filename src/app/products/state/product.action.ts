import {Action} from '@ngrx/store';
import {Product} from '../product';

export enum ProductActionTypes {
    ToggleProductCode = '[Product] Toggle Product Code',
    SetCurrentProduct = '[Product] Set Current Product',
    ClearCurrentProduct = '[Product] Clear Current Product',
    InitializeCurrentProduct = '[Product] Initialize Current Product',
    Load = '[Product] Load Products',
    LoadSuccess = '[Product] Load Products Success',
    LoadFail = '[Product] Load Products Failure'
}

export class ToggleProductCode implements Action {
    readonly type = ProductActionTypes.ToggleProductCode;

    constructor(public payload: boolean) {
    }

}

export class SetCurrentProduct implements Action {
    readonly type = ProductActionTypes.SetCurrentProduct;

    constructor(public payload: Product) {
    }
}

export class InitializeCurrentProduct implements Action {
    readonly type = ProductActionTypes.InitializeCurrentProduct;

    constructor() {
    }
}

export class ClearCurrentProduct implements Action {
    readonly type = ProductActionTypes.ClearCurrentProduct;

    constructor() {
    }

}

export class Load implements Action {
    readonly type = ProductActionTypes.Load;
}

export class LoadSuccess implements Action {
    readonly type = ProductActionTypes.LoadSuccess;

    constructor(public payload: Product[]) {

    }
}

export class LoadFail implements Action {
    readonly type = ProductActionTypes.LoadFail;

    constructor(public payload: String) {

    }
}

export type ProductActions = ToggleProductCode
    | SetCurrentProduct
    | ClearCurrentProduct
    | InitializeCurrentProduct
    | Load
    | LoadSuccess
    | LoadFail;
