export type SubBreedList =  Array<string>

export  interface BreedList {
    [index: string]: SubBreedList
} 

export interface ComboImages {
    [index: string]: Array<string>
}