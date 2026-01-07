import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/prisma/client.js';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter, log: ['query'] });

async function run() {
  console.log('++++++++++++++++++++++++++++++++++');
  // SELECT findUnique, findUniqueOrThrow, findFirst, findFirstOrThrow, findMany
  // const result = await prisma.artist.findMany();

  // const result = await prisma.artist.findMany({
  //   where: {
  //     artistId: 10
  //   }
  // });

  // const result = await prisma.artist.findMany({
  //   where: {
  //     artistId: 10000
  //   }
  // });

  // FIND UNIQUE: return only one object or null, filtered column must be unique
  // const result = await prisma.artist.findUnique({
  //   where: {
  //     // equal (=)
  //     artistId: 10000
  //   }
  // });

  // const result = await prisma.artist.findUnique({
  //   where: {
  //     name: 'Accept'
  //   }
  // });

  // FIND UNIQUE OR THROW: throw error if record was not found
  // const result = await prisma.artist.findUniqueOrThrow({
  //   where: {
  //     artistId: 10000
  //   }
  // });

  // FIND FIRST: return only first object that met where condition or null if record not found
  // const result = await prisma.customer.findFirst({
  //   where: {
  //     city: 'Prague'
  //   }
  // });

  // FIND FIRST OR THROW
  // const result = await prisma.customer.findFirstOrThrow({
  //   where: {
  //     firstName: 'zxcvbnm'
  //   }
  // });

  // SELECT SOME COLUMN: ex. SELECT firstName, lastName FROM customer
  // const result = await prisma.customer.findFirst({
  //   where: {
  //     city: 'Prague'
  //   },
  //   select: {
  //     firstName: true,
  //     lastName: true
  //   }
  // });

  // SELECT WITHOUT SOME COLUMN
  // const result = await prisma.customer.findFirst({
  //   where: {
  //     city: 'Prague'
  //   },
  //   omit: {
  //     customerId: true,
  //     supportRepId: true
  //   }
  // });

  // INCLUDE RELATION MODEL
  // const result = await prisma.artist.findUnique({
  //   where: {
  //     artistId: 3
  //   },
  //   include: {
  //     album: true
  //   }
  // });

  // SELECT AND INCLUDE CANNOT BE USED AT SAME TIME
  // const result = await prisma.artist.findUnique({
  //   where: {
  //     artistId: 3
  //   },
  //   select: {
  //     name: true
  //   },
  //   include: {
  //     album: true
  //   }
  // });

  // const result = await prisma.artist.findUnique({
  //   where: {
  //     artistId: 3
  //   },
  //   select: {
  //     name: true,
  //     album: true
  //   }
  // });

  // NESTED INCLUDE, SELECT
  // const result = await prisma.artist.findUnique({
  //   where: {
  //     artistId: 3
  //   },
  //   include: {
  //     album: {
  //       select: {
  //         title: true,
  //         track: {
  //           select: {
  //             name: true
  //           }
  //         }
  //       }
  //     }
  //   }
  // });
  // console.log(result.album[0].track);

  // WHERE
  // AND OPERATOR
  // SELECT * FROM customer WHERE city = 'Prague' AND postalCode = '14300'
  // const result = await prisma.customer.findMany({
  //   where: {
  //     city: 'Prague',
  //     postalCode: '14300'
  //   }
  // });

  // const result = await prisma.customer.findMany({
  //   where: {
  //     AND: [
  //       { city: 'Prague' },
  //       { postalCode: '14300' }
  //     ]
  //   }
  // });

  // OR OPERATOR
  // const result = await prisma.artist.findMany({
  //   where: {
  //     OR: [
  //       { artistId: 1 },
  //       { artistId: 2 }
  //     ]
  //   }
  // });

  // GREATER THAN(gt), GREATER THAN OR EQUAL(gte)
  // LESS THAN(lt), LESS THAN OR EQUAL(lte)
  // const result = await prisma.track.findMany({
  //   where: {
  //     bytes: {
  //       lt: 10_000_000
  //     }
  //   }
  // });

  // NOT EQUAL(not)
  // const result = await prisma.customer.findMany({
  //   where: {
  //     country: {
  //       not: 'Brazil'
  //     }
  //   }
  // });

  // const result = await prisma.customer.findMany({
  //   where: {
  //     AND: [
  //       {
  //         country: {
  //           not: 'Brazil'
  //         }
  //       },
  //       {
  //         country: {
  //           not: 'Germany'
  //         }
  //       }
  //     ]
  //   }
  // });

  // IN(in), NOT IN(notIn)
  // const result = await prisma.customer.findMany({
  //   where: {
  //     country: {
  //       in: ['Norway', 'Canada', 'Austria']
  //     }
  //   }
  // });

  // CONTAIN(containts), START WITH(startsWith), END WITH(endsWith)
  // const result = await prisma.customer.findMany({
  //   where: {
  //     firstName: {
  //       startsWith: 'ma',
  //       mode: 'insensitive'
  //     }
  //   }
  // });

  // NULL
  // const result = await prisma.customer.findMany({
  //   where: {
  //     company: {
  //       not: null
  //     }
  //   }
  // });

  // ORDER BY
  // const result = await prisma.track.findMany({
  //   orderBy: {
  //     bytes: 'desc'
  //   },
  //   where: {
  //     bytes: {
  //       gt: 1_000_000_000
  //     }
  //   },
  //   select: { bytes: true }
  // });

  // LIMIT OFFSET
  // const result = await prisma.track.findMany({
  //   where: {
  //     bytes: {
  //       gt: 500_000_000
  //     }
  //   },
  //   take: 3, // LIMIT
  //   skip: 15 // OFFSET
  // });

  // AGGREGATE (aggregate): COUNT, SUM, MAX, MIN, AVG
  // const result = await prisma.track.aggregate({
  //   _avg: {
  //     bytes: true,
  //     milliseconds: true
  //   },
  //   _count: { trackId: true },
  //   _sum: { milliseconds: true }
  // });

  // const result = await prisma.customer.aggregate({
  //   where: {
  //     country: 'Brazil'
  //   },
  //   _count: {
  //     country: true
  //   }
  // });

  // GROUP BY
  // SELECT country, COUNT(*) FROM customer GROUP BY country
  // const result = await prisma.customer.groupBy({
  //   by: ['country'],
  //   _count: true
  // });

  // RAW SQL
  // SHOW ARTIST NAME AND TOTAL ALBUM
  // SELECT name, COUNT(*) FROM artist ar LEFT JOIN album al ON ar.artistId = al.artistId GROUP BY artistId
  const result = await prisma.$queryRaw`
    SELECT "Name", COUNT(*) FROM "Artist" ar LEFT JOIN "Album" al ON ar."ArtistId" = al."ArtistId" GROUP BY ar."ArtistId"
  `;

  console.log(typeof result[0].count);
}

run();
