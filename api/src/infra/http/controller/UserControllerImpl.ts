import UserController from "@application/controller/UserController";
import CreateUser from "@application/usecase/user/CreateUser";
import { Request, Response } from "express";

export default class UserControllerImpl implements UserController {
    async create(request: Request, response: Response): Promise<void> {
        const {email, password} = request.body;
        const userDate = { email, password};
        const newUser = await new CreateUser().execute(userDate);
        response.status(201).json(newUser);
    }
    async updateProfile(request: Request, response: Response): Promise<void> {
        throw new Error('Method not implemented');
    }
        
    findById(request: Request, response: Response): Promise<void> {
        throw new Error('Method not implemented');
    }

    authenticate(request: Request, response: Response): Promise<void> {
        throw new Error('Method not implemented');
    }
}