import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

const db = [
  {
    id: 1,
    name: 'Omar Elhelaly',
    email: 'omar@example.com',
    phoneNumber: '+201012345678',
  },
  {
    id: 2,
    name: 'Ahmed Mohamed',
    email: 'ahmed@example.com',
    phoneNumber: '+201112345678',
  },
  {
    id: 3,
    name: 'Mohamed Ali',
    email: 'mohamed@example.com',
    phoneNumber: '+201223456789',
  },
];

@Injectable()
export class UserService {
 
  create(createUserInput: CreateUserInput) {
    const existingUser = db.find((user) => user.id === createUserInput.id);

    if (existingUser) {
      throw new Error('User already exists');
    }

    const newUser: (typeof db)[number] = {
      ...createUserInput,
      phoneNumber: createUserInput.phoneNumber ?? '',
    };

    db.push(newUser);

    return {
      status: 201,
      message: 'User created successfully',
      data: newUser,
    };
  }

  // GET ALL
  findAll() {
    return {
      status: 200,
      data: db,
      count: db.length,
    };
  }

  // GET ONE
  findOne(id: number) {
    const user = db.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  // UPDATE
  update(id: number, updateUserInput: UpdateUserInput) {
    const userIndex = db.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }

    const updatedUser = {
      ...db[userIndex],
      ...updateUserInput,
      id,
    };

    db[userIndex] = updatedUser;

    return {
      status: 200,
      message: 'User updated successfully',
      data: updatedUser,
    };
  }

  // DELETE
  remove(id: number) {
    const userIndex = db.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }

    db.splice(userIndex, 1);

    return {
      status: 200,
      message: 'User deleted successfully',
    };
  }
}
