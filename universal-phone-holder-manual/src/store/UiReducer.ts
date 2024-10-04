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
        },
        setRadioGroup(state, action: PayloadAction<{groupId: string, activeItem?: string}>) {
            let entry = state.radioGroups.find(x => x.groupId === action.payload.groupId);
            if (!entry) {
                state.radioGroups.push({ groupId: action.payload.groupId, activeItem: action.payload.activeItem });
                return;
            }
            if (entry.activeItem === action.payload.activeItem) {
                return;
            }
            entry.activeItem = action.payload.activeItem;
        }
    }
});

export const {
    openPopup,
    closePopup,
    addLoadedMesh,
    clearLoadedMeshes,
    setNavbar,
    setRadioGroup
} = uiStateSlice.actions;

