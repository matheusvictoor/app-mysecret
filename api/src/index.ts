import LoadEnv from "@infra/helper/LoadEnv"
import UserEntity from "@domain/entity/UserEntity"
import UserDAO from "@infra/database/dao/UserDAO";
import KenxAdapter from "@infra/database/KnexAdapter";
import UUIDGenerator from "@domain/entity/UUIDGenerator";
import ExpressAdapter from "@infra/http/ExpressAdapter";
import Registry from "@infra/di/Registry";
import UserRepositoryImpl from "@infra/database/repository/UserRepositoryImpl";

LoadEnv.load();

const kenxAdapter = new KenxAdapter();
kenxAdapter.connect();

const userDAO = new UserDAO(kenxAdapter.instance);
const userRepository = new UserRepositoryImpl(userDAO);

const registry = Registry.getInstance();
registry.register('UserRepository', userRepository);

// const kenxAdapter = new KenxAdapter();
// kenxAdapter.connect();

// const userDAO = new UserDAO(kenxAdapter.instance);
// userDAO.create({
//     userId: UUIDGenerator.generate(),
//     name: "",
//     email: 'teste@teste.com',
//     password: '1290',
//     pictureUrl: null,
//     createdAt: new Date(),
//     updateAt: null,
// })

const expressAdapter = new ExpressAdapter();

expressAdapter.listen(3333);