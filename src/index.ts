import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entity/User';

async function init() {
  const connection = await createConnection();

  const user = new User();
  user.firstName = 'John';
  user.lastName = 'Smith';
  user.age = 20;

  const userRepository = connection.getRepository(User);

  await userRepository.save(user);

  console.log(await userRepository.find());
}

init();
