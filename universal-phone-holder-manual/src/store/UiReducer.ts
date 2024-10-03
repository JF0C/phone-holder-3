import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialUiState } from "./UiState";


export const uiStateSlice = createSlice({
    name: 'uistate',
    initialState: InitialUiState,
    reducers: {
        openPopup(state, action: PayloadAction<string>) {
            state.currentOpenPopup = action.payload;
        },
        closePopup(state) {
            state.currentOpenPopup = null;
        },
        addLoadedMesh(state, action: PayloadAction<string>) {
            if (!state.loadedMeshes.includes(action.payload)) {
                state.loadedMeshes.push(action.payload);
            }
        },
        clearLoadedMeshes(state) {
            state.loadedMeshes = [];
        },
        setNavbar(state, action: PayloadAction<boolean>) {
            state.showNavbar = action.payload;
        }
    }
});

export const {
    openPopup,
    closePopup,
    addLoadedMesh,
    clearLoadedMeshes,
    setNavbar
} = uiStateSlice.actions;

