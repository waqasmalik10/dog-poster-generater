import { createSlice, createSelector } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { BreedList, ComboImages, SubBreedList } from 'interfaces'
import { Dispatch } from "@reduxjs/toolkit";
import { AppThunk } from "app/store";
import { getBreedImagesService, getBreedsListService } from "services/breedService";

interface InitialState {
    isLoading: boolean;
    breeds: BreedList;
    subBreeds: SubBreedList;
    comboImages: ComboImages;
    modalImages: string[]
}

const initialState: InitialState = {
    isLoading: false,
    breeds: null!,
    subBreeds: null!,
    comboImages: {},
    modalImages: []
}

const DogSlice = createSlice({
    name: 'DogsReducer',
    initialState: initialState,
    reducers: {
        SetLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload
        },
        setBreeds: (state, { payload }: PayloadAction<BreedList>) => {
            state.breeds = payload
        },
        setComboImages: (state, { payload }: PayloadAction<{images: string[], subBreed: string}>) => {
            const {images, subBreed} = payload
            state.comboImages[subBreed] = images
        },
        setModalImages: (state, { payload }: PayloadAction<string>) => {
            state.modalImages = state.comboImages[payload]
        },
        unsetModalImages: (state) => {
            state.modalImages = []
        },
    }
})

export const Selectbreeds = (state: RootState) => state.dogsReducer.breeds;
export const comboImagesSelector = (state: RootState) => state.dogsReducer.comboImages;
export const selectModalImages = (state: RootState) => state.dogsReducer.modalImages;
export const selectLoading = (state: RootState) => state.dogsReducer.isLoading;


export const {
    SetLoading, setBreeds, setComboImages, setModalImages, unsetModalImages
} = DogSlice.actions;

export default DogSlice.reducer

export const breedSelector = createSelector([Selectbreeds], (breeds: BreedList): string[] => {
    return Object.keys(breeds || {})
})


export const subBreedSelector = (breed: string) => createSelector([Selectbreeds], (breeds) => {
    return breed ? breeds[breed] : []
})

export const imageSelector = (subBreed: string) => createSelector([comboImagesSelector], (comboImages: ComboImages): string[] => {
    return comboImages.hasOwnProperty(subBreed) ? comboImages[subBreed] : []
})


export const imageCountSelector = (subBreed: string) => createSelector([imageSelector(subBreed)], (images): number => {
    return images.length
})


export const getBreedsListAction = (): AppThunk => async (dispatch: Dispatch) => {
    dispatch(SetLoading(true))
    const result = await getBreedsListService()
    result && dispatch(setBreeds(result))
    dispatch(SetLoading(false))
}

export const getBreedImagesAction = (breed: string, subBreed: string): AppThunk => async (dispatch: Dispatch) => {
    if (breed && subBreed) {
        const images = await getBreedImagesService(breed, subBreed)
        images && dispatch(setComboImages({ subBreed, images }))
    }
}