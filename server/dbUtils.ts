
import { PrismaClient } from './generated/prisma/client'
import { Prisma } from './generated/prisma/client'
import { JsonArray } from './generated/prisma/runtime/library'
const prisma = new PrismaClient()

async function createUser(userName: string, userLoc: string) {
    console.log(userName)
    console.log(userLoc)
    try {
        const userCheck = await prisma.user.findMany({
            where: {
                name: userName
            }
        })

        if (userCheck.length == 0) {
            return await prisma.user.create({
                data: {
                    name: userName,
                    location: userLoc
                }
            })
        } else {
            return 'user already exists'
        }
    } catch (error) {
        console.log('error adding user')
    }
}

async function getUsers() {
    try {
        console.log(await prisma.user.findMany())
        return await prisma.user.findMany()
    } catch (error) {
        console.log('unable to fetch users')
    }
}

async function getUser(id: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })

        console.log(user)
        return user

    } catch (error) {
        return 'issue finding user'
    }
}

interface WeightedLabel {
    label: string
    weight: number
}


export const editUser = async (
    userId: string,
    name: string,
    image: string,
    location: string,
    age: string,
    gender: string,
    race: string
) => {
    try {
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                name,
                location,
                image,
                age,
                gender,
                race
            }
        })

        return updatedUser
    } catch (error) {
        console.error('Error updating user:', error)
        return null
    }
}


module.exports = {
    createUser,
    getUsers,
    getUser,
    editUser
}
