import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.user.createMany({
        data: [
            { username: 'bob', firstName: 'Bob', lastName: 'Cruz', email: 'bob@prisma.io', password: 'password' },
            { username: 'Yewande', firstName: 'Yewande', lastName: 'Doe', email: 'yewande@prisma.io', password: 'password' },
            { username: 'Angelique', firstName: 'Angelique', lastName: 'Tan', email: 'angelique@prisma.io', password: 'password' },
        ],
    })

    const allUsers = prisma.user.findMany();
    console.log(allUsers);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })