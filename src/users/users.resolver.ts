import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserInput } from './inputs/user.input';

@Resolver()
export class UsersResolver {
  constructor(
    private usersService: UsersService,
  ) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [CreateUserDto])
  async users() {
    return this.usersService.findAll();
  }

  @Mutation(() => [CreateUserDto])
  async creatUser(@Args('input') input: UserInput) {
    return this.usersService.create(input);
  }
}