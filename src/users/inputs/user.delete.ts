import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserDeleteInput {
  @Field()
  id?: string;
}