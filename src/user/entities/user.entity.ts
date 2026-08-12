import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'id to user ' })
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  phoneNumber?: string;
}

// جراف كيل بقا بيروح يحول الكود ده ويحطه ف ملف الاسكيما اللي هينشائه

//  اللي يها بقول ل graph ql  ان ده نوعه int
//  @Field(() => Int,

// هنا بقول ل nest ان نوعه نمبر
// id: number;






//  عاوز ارجعه بتاعت  getalluser
@ObjectType()
export class GetUsers {
  @Field(() => Int)
  status: number;

  @Field(() => [User])
  data: User[];

  @Field(() => Int)
  count: number;
}

@ObjectType()
export class UserResponse {
  @Field(() => Int)
  status: number;

  @Field()
  message: string;

  @Field(() => User, { nullable: true })
  data?: User;
}

@ObjectType()
export class DeleteUserResponse {
  @Field(() => Int)
  status: number;

  @Field()
  message: string;
}