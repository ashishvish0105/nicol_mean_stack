import { IAllApiResponce } from "../api-responsce.model"

export interface userData {
    firstName: string,
    lastName: string,
    hobbies: string,
    gender: string,
    city: string,
    image: string,
    _id: string,
    age: number
}

export interface IgetAllUser extends IAllApiResponce {
    data: userData[];
}