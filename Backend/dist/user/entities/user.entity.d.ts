export declare class User {
    id: number;
    name: string;
    email: string;
    phoneNumber?: string;
}
export declare class GetUsers {
    status: number;
    data: User[];
    count: number;
}
export declare class UserResponse {
    status: number;
    message: string;
    data?: User;
}
export declare class DeleteUserResponse {
    status: number;
    message: string;
}
