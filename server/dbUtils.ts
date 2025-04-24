
import { PrismaClient } from './generated/prisma/client'
import { Prisma } from './generated/prisma/client'
const prisma = new PrismaClient()

async function createUser(userName: string, userLoc: string) {
    try {
        const userCheck = await prisma.user.findMany({
            where: {
                name: userName,
                location: userLoc
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
            return await prisma.user.findFirst({
                where: {
                    name: userName,
                    location: userLoc
                }
            })
        }
    } catch (error) {
        console.log('error adding user')
    }
}

async function getUsers() {
    try {
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

        return user

    } catch (error) {
        return 'issue finding user'
    }
}

interface WeightedLabel {
    label: string
    weight: number
}


const editUser = async (
    userId: string,
    name: string,
    image: string,
    location: string,
    age: string,
    race: string,
    gender: string,
    demos: Prisma.InputJsonValue
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
                race,
                demos
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
