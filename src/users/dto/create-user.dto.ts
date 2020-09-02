import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field(() => ID)
  id: string;

  @Field()
  firstName?: string;

  @Field()
  lastName?: string;

  @Field()
  email?: string;
}