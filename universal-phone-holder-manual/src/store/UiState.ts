export interface IUiState {
    loadedMeshes: string[]
    showNavbar: boolean
    radioGroups: { groupId: string, activeItem?: string }[]
    navTitle: string
}

export const InitialUiState: IUiState = {
    loadedMeshes: [],
    showNavbar: false,
    radioGroups: [],
    navTitle: ''
}