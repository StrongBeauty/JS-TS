import {ManType} from "./07";

let props: ManType
beforeEach( () => {
test("", () => {
    let props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}]
    }

    const age = props.age
    const lessons = props.lessons

    const {age, lessons} = props
})
)