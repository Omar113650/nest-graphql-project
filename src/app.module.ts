import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile:join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
  ],
})
export class AppModule {}


// src/schema.gql
// انا شغال كود الالول ف الاكود هو بيحطه ف السمار دخ لوحده 