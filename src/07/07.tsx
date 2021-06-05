import React from 'react'

type lessonsType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<lessonsType>
    adress: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model:string}
}

//export const ManComponent: React.FC<PropsType> = (title, man) => {
export const ManComponent: React.FC<PropsType> = (props) => {
    let {title, man} } = props
return <div>
    <h1>{title}<h1>
    </hr>
        <div>
            {man.name}
        </div>
        }