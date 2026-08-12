"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
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
let UserService = class UserService {
    create(createUserInput) {
        const existingUser = db.find((user) => user.id === createUserInput.id);
        if (existingUser) {
            throw new Error('User already exists');
        }
        const newUser = {
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
    findAll() {
        return {
            status: 200,
            data: db,
            count: db.length,
        };
    }
    findOne(id) {
        const user = db.find((user) => user.id === id);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    update(id, updateUserInput) {
        const userIndex = db.findIndex((user) => user.id === id);
        if (userIndex === -1) {
            throw new common_1.NotFoundException('User not found');
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
    remove(id) {
        const userIndex = db.findIndex((user) => user.id === id);
        if (userIndex === -1) {
            throw new common_1.NotFoundException('User not found');
        }
        db.splice(userIndex, 1);
        return {
            status: 200,
            message: 'User deleted successfully',
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map