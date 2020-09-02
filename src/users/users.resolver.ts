import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserType } from './dto/create-user.dto';
import { UserInput } from './inputs/user.input';

@Resolver()
export class UsersResolver {
  constructor(
    private usersService: UsersService,
  ) {}

  @Query(() => [UserType])
  async users() {
    return this.usersService.findAll();
  }

  @Mutation(() => UserType)
  async creatUser(@Args('input') input: UserInput) {
    return this.usersService.create(input);
  }
}