import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class ItemType {
  @Field(() => ID)
  readonly id?: string;

  @Field()
  readonly title: string;

  @Field()
  readonly price: number;

  @Field()
  readonly description: string;
}