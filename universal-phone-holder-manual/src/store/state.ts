import { Reducer } from "@reduxjs/toolkit";


export type AppState = {
    currentLocation: string,
    loadedMeshes: string[]
}

type StateAction = {
    type: string,
    value: string | object
}

type DispatchType = (action: StateAction) => StateAction

const initializeAppState = () => {
    return {
        currentLocation: document.location.pathname,
        loadedMeshes: []
    } as AppState
} 

export const SET_CURRENT_LOCATION = 'setCurrentLocation';
export const ADD_LOADED_MESH = 'addLodedMesh';

export const reducer: Reducer<AppState, StateAction, AppState> = (state: AppState | undefined, action: StateAction) : AppState => {
    let resultState: AppState;
    if (state === undefined){
        resultState = initializeAppState();
    }
    else{
        resultState = JSON.parse(JSON.stringify(state));
    }
    switch(action.type){
        case SET_CURRENT_LOCATION:
            if (typeof action.value === 'string') {
                resultState.currentLocation = action.value as string;
            }
            else {
                throw "invalid state assignment. value \"" + action.value + "\" is not of type string";
            }
            break;
        case ADD_LOADED_MESH:
            if (typeof action.value === 'string'){
                const val = action.value as string;
                if (!resultState.loadedMeshes.includes(val)){
                    resultState.loadedMeshes.push(val);
                }
            }
            else {
                throw "invalid state assignment. value \"" + action.value + "\" is not of type string"; 
            }
            break;
    }
    return resultState;
}

export const setCurrentLocation = (location: string) => {
    const action: StateAction = {
        type: SET_CURRENT_LOCATION,
        value: location
    };
    return (dispatch: DispatchType) => dispatch(action);
}

export const addLoadedMesh = (meshName: string) => {
    const action: StateAction = {
        type: ADD_LOADED_MESH,
        value: meshName
    }
    return (dispatch: DispatchType) => dispatch(action);
}
