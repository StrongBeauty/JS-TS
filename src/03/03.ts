import {student, StudentType} from "../02/02";


export const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}


// const res = sum(sum(1, 2), sum(1, 3))