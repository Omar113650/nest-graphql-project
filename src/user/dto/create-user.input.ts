import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  Min,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => Int, { description: 'id to user' })
  @IsInt()
  @Min(1)
  id: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  name: string;

  @Field()
  @IsEmail({}, { message: 'Email is not valid' })
  @IsNotEmpty()
  email: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsPhoneNumber('EG', {
    message: 'Phone number is not valid',
  })
  phoneNumber?: string;
}
