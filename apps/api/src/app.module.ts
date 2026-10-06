import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { HealthResolver } from './health/health.resolver.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { CategoriesModule } from './categories/categories.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
    }),
    PrismaModule,
    CategoriesModule,
  ],
  providers: [HealthResolver],
})
export class AppModule {}
