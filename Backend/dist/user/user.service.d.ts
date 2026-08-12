import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UserService {
    create(createUserInput: CreateUserInput): {
        status: number;
        message: string;
        data: {
            id: number;
            name: string;
            email: string;
            phoneNumber: string;
        };
    };
    findAll(): {
        status: number;
        data: {
            id: number;
            name: string;
            email: string;
            phoneNumber: string;
        }[];
        count: number;
    };
    findOne(id: number): {
        id: number;
        name: string;
        email: string;
        phoneNumber: string;
    };
    update(id: number, updateUserInput: UpdateUserInput): {
        status: number;
        message: string;
        data: {
            id: number;
            name: string;
            email: string;
            phoneNumber: string;
        };
    };
    remove(id: number): {
        status: number;
        message: string;
    };
}
