import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import DogSlice from './reducers/DogSlice'

export const store = configureStore({
  reducer: {
    dogsReducer : DogSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>