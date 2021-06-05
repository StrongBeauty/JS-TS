test ("should take old men older then 90", () => {
    const ages = [17, 15, 95, 46 ,27, 38]

    const oldAges = ages.filter(age => age > 90)

    /*const predicate = (age: number) => {
        return age>90
    }

    const oldAges = ages.filter(predicate)*/

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(95)
})

test ("should take courses chipper 160", () => {

const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "React", price: 150}
]
    /*const ChipPredicat = (course: CoursesType) => {
    return course.price < 160
    }*/

    const ChipCourses = courses.filter(course => course.price < 160)

    expect(ChipCourses.length).toBe(2)
    expect(ChipCourses[0].title).toBe("CSS")
    expect(ChipCourses[1].title).toBe("React")
})

test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]

    const completedTasks = tasks.filter( task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks.id).toBe(2)
    expect(completedTasks.id).toBe(4)
})

