import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';

const CATEGORIES = ['Hatch', 'Sedan', 'SUV', 'Minivan', 'Picape'];

const LOCATIONS = [
  {
    name: 'Aeroporto de Congonhas',
    address: 'Av. Washington Luís, s/n - Vila Congonhas',
    city: 'São Paulo',
    state: 'SP',
  },
  {
    name: 'Aeroporto Santos Dumont',
    address: 'Praça Senador Salgado Filho, s/n - Centro',
    city: 'Rio de Janeiro',
    state: 'RJ',
  },
  {
    name: 'Centro BH',
    address: 'Av. Afonso Pena, 1500 - Centro',
    city: 'Belo Horizonte',
    state: 'MG',
  },
  {
    name: 'Aeroporto de Confins',
    address: 'Rod. LMG-800, Km 7,9',
    city: 'Confins',
    state: 'MG',
  },
];

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

async function main() {
  for (const name of CATEGORIES) {
    await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  for (const location of LOCATIONS) {
    await prisma.location.upsert({
      where: { name: location.name },
      update: {},
      create: location,
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
