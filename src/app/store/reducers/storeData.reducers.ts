import { StoreData, INITIAL_STOREDATA } from "../store-data";
import * as applicationActions from '../actions';
import { Action } from "@ngrx/store";

export function storeData(state: StoreData = INITIAL_STOREDATA, action:Action) {
    switch(action.type) {
        case applicationActions.LOAD_USER_THREADS:
            return 
    };
    return state;
}

