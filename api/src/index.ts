import LoadEnv from "@infra/helper/LoadEnv"
import UserEntity from "@domain/entity/UserEntity"
import UserDAO from "@infra/database/dao/UserDAO";
import KenxAdapter from "@infra/database/KnexAdapter";
import UUIDGenerator from "@domain/entity/UUIDGenerator";

LoadEnv.load();

const kenxAdapter = new KenxAdapter();
kenxAdapter.connect();

const userDAO = new UserDAO(kenxAdapter.instance);
userDAO.create({
    userId: UUIDGenerator.generate(),
    name: "Matheus",
    email: 'teste@teste.com',
    password: '1290',
    pictureUrl: null,
    createdAt: new Date(),
    updateAt: null,
})
