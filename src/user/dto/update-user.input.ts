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
export class UpdateUserInput {
  @Field(() => Int)
  @IsInt()
  @Min(1)
  id: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail({}, { message: 'Email is not valid' })
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsPhoneNumber('EG', {
    message: 'Phone number is not valid',
  })
  phoneNumber?: string;
}