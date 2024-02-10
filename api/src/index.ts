import UserEntity from "@domain/entity/UserEntity"

import LoadEnv from "@infra/helper/LoadEnv"

LoadEnv.load();
console.log(process.env);