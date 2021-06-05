
function icreaseAge(u: UserType){
    u.age ++
}

type UserType = {
    name: string
    age: number
    address?: {title: string}
}

test('reference type test', () => {
    let user: UserType = {
        name: 'D',
        age: 32
    }

    icreaseAge(user)

    expect(user.age).toBe(33)

    const superman = user
    superman.age = 1000

    expect(user.age).toBe(10000)
})

test('array reference test', () => {
    let users = [
        {
            name: 'D',
            age: 32
        },
        {
            name: 'D',
            age: 32
        }
    ]

    let admins = users
    admins.push({name: 'B', age: 10})

    expect(users[2]).toEqual({name: 'B', age: 10})
}   )

test('value type test', () => {
    let usersCount = 100
    let adminsCount = usersCount
    adminsCount++

}   )

test('type test', () => {
    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'D',
        age: 32,
        address: address
    }

    let user2: UserType = {
        name: 'N',
        age: 30,
        address: address
    }
    const users = [user, user2, {name: 'M', age: 4, adress :adress}]
    const admins = [user, user2]
    admins[0].name = 'Dm'

    expect(users[0].name).toBe('Dm')
    expect(user.name).toBe('Dm')
})

test('sort array test', () => {
    const letters = ['c', 'd', 'u', 'a']
    pasportist(letters)
    expect(letters).toEqual(['c', 'd', 'u', 'a'])
})

function pasportist(letters: any) {
    const copy = [...letters].sort()
    console.log(copy)
}