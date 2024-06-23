import { Reducer } from '@reduxjs/toolkit';

export type AppState = {
    currentLocation: string,
    loadedMeshes: string[],
    currentOpenPopup: string | null
}

type StateAction = {
    type: string,
    value: string | object
}

type DispatchState = (action: StateAction) => StateAction

type PopupAction = {
    type: string,
    key: string
}

type DispatchPopup = (action: PopupAction) => PopupAction

const initializeAppState = () => {
    return {
        currentLocation: document.location.pathname,
        loadedMeshes: [],
        currentOpenPopup: null
    } as AppState
} 

export const SET_CURRENT_LOCATION = 'setCurrentLocation';
export const ADD_LOADED_MESH = 'addLodedMesh';
export const OPEN_POPUP = 'openPopup';
export const CLOSE_POPUP = 'closePopup';

export const reducer: Reducer<AppState, StateAction | PopupAction, AppState> = 
    (state: AppState | undefined, action: StateAction | PopupAction) : AppState => {

    let resultState: AppState;
    if (state === undefined){
        resultState = initializeAppState();
    }
    else{
        resultState = { ...state };
    }
    const stateAction = action as StateAction;
    if (stateAction){
        switch(stateAction.type){
            case SET_CURRENT_LOCATION:
                if (typeof stateAction.value === 'string') {
                    resultState.currentLocation = stateAction.value as string;
                }
                else {
                    throw new Error('invalid state assignment. value \'' + stateAction.value + '\' is not of type string');
                }
                break;
            case ADD_LOADED_MESH:
                if (typeof stateAction.value === 'string'){
                    const val = stateAction.value as string;
                    if (!resultState.loadedMeshes.includes(val)){
                        resultState.loadedMeshes.push(val);
                    }
                }
                else {
                    throw new Error('invalid state assignment. value \'' + stateAction.value + '\' is not of type string'); 
                }
                break;
        }
    }
    const popupAction = action as PopupAction;
    if (popupAction) {
        switch (popupAction.type){
            case OPEN_POPUP:
                resultState.currentOpenPopup = popupAction.key;
                break;
            case CLOSE_POPUP:
                resultState.currentOpenPopup = null;
                break;
        }
    }
    console.log(resultState)
    return resultState;
}

export const setCurrentLocation = (location: string) => {
    const action: StateAction = {
        type: SET_CURRENT_LOCATION,
        value: location
    };
    return (dispatch: DispatchState) => dispatch(action);
}

export const addLoadedMesh = (meshName: string) => {
    const action: StateAction = {
        type: ADD_LOADED_MESH,
        value: meshName
    }
    return (dispatch: DispatchState) => dispatch(action);
}

export const openPopup = (key: string) => {
    const action: PopupAction = {
        type: OPEN_POPUP,
        key: key
    }
    return (dispatch: DispatchPopup) => dispatch(action);
}

export const closePopups = () => {
    const action: PopupAction = {
        type: CLOSE_POPUP,
        key: ''
    }
    return (dispatch: DispatchPopup) => dispatch(action);
}
