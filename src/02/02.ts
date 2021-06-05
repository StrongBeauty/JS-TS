export type CityType = {
    title: string
    countryTitle: string
}

export type AdressType = {
    streetTitle: string
    city: CityType
}

export type TechType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AdressType
    city: CityType
    technologies: Array<TechType>
}

export const student = {
    name: "Dimych",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova, 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}