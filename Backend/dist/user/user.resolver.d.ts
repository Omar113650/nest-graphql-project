import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): {
        status: number;
        data: {
            id: number;
            name: string;
            email: string;
            phoneNumber: string;
        }[];
        count: number;
    };
    getUser(id: number): {
        id: number;
        name: string;
        email: string;
        phoneNumber: string;
    };
    createUser(createUserInput: CreateUserInput): {
        status: number;
        message: string;
        data: {
            id: number;
            name: string;
            email: string;
            phoneNumber: string;
        };
    };
    updateUser(updateUserInput: UpdateUserInput): {
        status: number;
        message: string;
        data: {
            id: number;
            name: string;
            email: string;
            phoneNumber: string;
        };
    };
    deleteUser(id: number): {
        status: number;
        message: string;
    };
}
