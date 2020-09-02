import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateUserDto {
  @Field()
  firstName?: string;

  @Field()
  lastName?: string;

  @Field()
  email?: string;
}