export interface UserModel {
    userId: string;
    name: string | null;
    email: string;
    password: string;
    pictureUrl: string | null;
    createdAt: Date;
    updateAt: Date | null;
}