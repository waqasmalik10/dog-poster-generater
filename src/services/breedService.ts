import { BreedList, HttpResponse } from "interfaces"
import http from "./core/HttpService"
import AppConfig from "AppConfig.json"

export const getBreedsListService = async (): Promise<BreedList> => {
    try {
        const { data } = await http.get<HttpResponse<BreedList>>(`${AppConfig.API_URL}/breeds/list/all`)
        console.log(data.message)
        return Promise.resolve(data.message)

    } catch (error) {
        console.log(error)
        return Promise.resolve(null!)
    }
}

export const getBreedImagesService = async (breed: string, subBreed: string) => {
    try {
        const { data } = await http.get<HttpResponse<string[]>>(`${AppConfig.API_URL}/breed/${breed}/${subBreed}/images`)
        console.log(data.message)
        return Promise.resolve(data.message)

    } catch (error) {
        console.log(error)
        return Promise.resolve([])
    }
}