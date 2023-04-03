/**
 * Seeders
 *
 * ✅ 1. Levels
 * ✅ 2. Roles
 * ✅ 3. Permissions
 * ✅ 4. Admin & Regular Users
 * 🕒 5. Tourneys
 * 🕒 6. Matches
 * 🕒 7. Accounts
 *
 * @author MarioMonir
 */

// =================================================================

import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

// =================================================================

const prisma: PrismaClient = new PrismaClient({ log: ['query'] })

// =================================================================

async function seedDatabase() {
  try {
    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

    // Create Level
    await prisma.level.upsert({
      where: { id: 1 },
      update: {},
      create: {
        pointsToPassLevel: 100,
        locale: { en: { name: 'Level 1' } },
        category: 'Bronze',
        prize: {
          connectOrCreate: {
            create: { locale: { en: { name: 'Level 1' } }, value: '123' },
            where: { id: 1 },
          },
        },
      },
    })

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

    // Create Admin, Roles, Permissions, Admin User
    await prisma.role.upsert({
      where: { id: 1 },
      update: {},
      create: {
        name: 'Admin',
        description: 'Admin Role',
        permissions: {
          createMany: {
            data: [
              { name: 'READ:ALL', description: 'Read all resources ' },
              { name: 'CREATE:ALL', description: 'Create all resources' },
              { name: 'UPDATE:ALL', description: 'Update all resources' },
              { name: 'DELETE:ALL', description: 'Delete all resources' },
            ],
          },
        },
        users: {
          createMany: {
            data: [
              {
                username: faker.name.firstName(),
                name: 'Admin ' + faker.name.fullName(),
                email: faker.internet.email(),
                mobile: faker.phone.number(),
                password: faker.lorem.slug(),
                levelId: 1,
              },
            ],
          },
        },
      },
    })

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

    // Create a Regular User
    await prisma.role.upsert({
      where: { id: 2 },
      update: {},
      create: {
        name: 'Regular',
        description: 'Regular Role',
        permissions: { connect: { name: 'READ:ALL' } },
        users: {
          createMany: {
            data: [
              {
                username: faker.name.firstName(),
                name: faker.name.fullName(),
                email: faker.internet.email(),
                mobile: faker.phone.number(),
                password: faker.lorem.slug(),
                levelId: 1,
              },
            ],
          },
        },
      },
    })

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

    // prisma.user.findMany({
    //   where: {
    //     id: { in: [1, 2] },
    //   },
    // })

    // Create 10 Fake Users
    Array(10)
      .fill(null)
      .forEach(async () => {
        await prisma.user.create({
          data: {
            username: faker.name.firstName(),
            name: faker.name.fullName(),
            email: faker.internet.email(),
            mobile: faker.phone.number(),
            password: faker.lorem.slug(),
            levelId: 1,
            roleId: 2,
            accounts: {
              create: {
                locale: { en: { name: 'Cash' } },
              },
            },
          },
        })
      })
  } catch (error) {
    console.error({ error })
  }
}

// =================================================================

seedDatabase()
