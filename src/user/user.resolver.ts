import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
} from '@nestjs/graphql';

import { UserService } from './user.service';

import {
  User,
  GetUsers,
  UserResponse,
  DeleteUserResponse,
} from './entities/user.entity';

import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // GET ALL
  @Query(() => GetUsers)
  getAllUsers() {
    return this.userService.findAll();
  }

  // GET ONE
  @Query(() => User)
  getUser(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.userService.findOne(id);
  }

  // CREATE
  @Mutation(() => UserResponse)
  createUser(
    @Args('createUserInput')
    createUserInput: CreateUserInput,
  ) {
    return this.userService.create(createUserInput);
  }

  // UPDATE
  @Mutation(() => UserResponse)
  updateUser(
    @Args('updateUserInput')
    updateUserInput: UpdateUserInput,
  ) {
    return this.userService.update(
      updateUserInput.id,
      updateUserInput,
    );
  }

  // DELETE
  @Mutation(() => DeleteUserResponse)
  deleteUser(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.userService.remove(id);
  }
}