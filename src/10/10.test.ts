import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser, removeBook, skillLevelRenew, skillLevelType, UpdateBook, updateCompanyTitle,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompanyType
} from "./10";

test('reference type test', () => {
    let user: UserType = {
        name: 'D',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        }
    }

    //hairdresser(user, 2)

    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'D',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12 //?
        },
        laptop: {
            title: 'ZN'
        }
    }

    //hairdresser(user, 2)

    const movedUser = moveUser(user, 'Kiev')


    expect(user).not.toBe(movedUser)
    expect(user.address).toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'D',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZN'
        }
    }

    //hairdresser(user, 2)

    const userCopy = upgradeUserLaptop(user, 'Mac')


    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('ZN')
})

test('addNewBooks', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'D',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZN'
        },
        books: ['css', 'react', 'html']
    }

    const userCopy = addNewBooksToUser(user, 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(user.books.length).toBe(4)
})


test('updateBook', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'D',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZN'
        },
        books: ['css', 'react', 'html']
    }

    const userCopy = UpdateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})

test('skillLevel renew', () => {
    let skillLevel = [23, 46, 6, 70, 85, 34]

    const skillLevelCopy = skillLevelRenew(skillLevel, 70,75)


})

test('removeBook', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'D',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZN'
        },
        books: ['css', 'react', 'html']
    }

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})

test('remove company', () => {
    let user: UserWithLaptopType & WithCompanyType= {
        name: 'D',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZN'
        },
        companies: [{id: 1, title: 'epam'}, {id: 2, title: "IT-Ink"}]
    }

    const userCopy = updateCompanyTitle(user, 1, 'Epam') as UserWithLaptopType

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.books)
    expect(userCopy.companies[0]).toBe('Epam')
})