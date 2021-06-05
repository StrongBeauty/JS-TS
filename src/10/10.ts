import {Simulate} from "react-dom/test-utils";
import copy = Simulate.copy;

export type UserType = {
    name: string
    hair: number
    address : {city: string, house?: number}
}

export type LaptopType = {
     title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type skillLevelType = {
    skillLevel: Array<number>
}

export type WithCompanyType = {
    companies: Array {id: number, title: string}
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair:  u.hair / power
    }
    // copy.hair = u.hair / power
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
   return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
    // copy.hair = u.hair / power
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

/*export function addNewBooksToUser(u: UserWithBooksType,
                                  oldBook: string,
                                  newBook: string) {
        return {
            ...u,
            books: u.books.map(b => b === oldBook ? newBook : b)
            }
        /*books: u.books.map(b => b) //создать копию
         books: [...u.books, newbook] - если надо добавить новый элемент*/
   //     }

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType,
                                  newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]
    }
}

export const UpdateBook = (u: UserWithLaptopType & UserWithBooksType,
                                  oldBook: string,
                                  newBook: string) => ({
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)

    /*books: u.books.map(b => b) //создать копию
     books: [...u.books, newbook] - если надо добавить новый элемент*/

})

export const skillLevelRenew = (s: skillLevelType, oldLevel: number,  newLevel: number) => ({
    ...s,
    skillLevel: s.skillLevel === oldLevel ? newLevel : s.skillLevel

})

export const removeBook = (u: UserWithLaptopType & UserWithBooksType,
                           bookForDelete: string) => ({
    ...u,
    books: u.books.filter(b => b === bookForDelete)

    /*books: u.books.map(b => b) //создать копию
     books: [...u.books, newbook] - если надо добавить новый элемент*/

})

export const updateCompanyTitle = (u: WithCompanyType,
                          companyId: number,
                          newTitle: string) => {
    const copy: WithCompanyType ={
    ...u,
    companies: u.companies.map(c => c.id === companyId
        ? {...c, title: newTitle}
        :c)

    /*books: u.books.map(b => b) //создать копию
     books: [...u.books, newbook] - если надо добавить новый элемент*/

}}

