import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class ItemInput {
  @Field()
  readonly title: string;

  @Field()
  readonly price: number;

  @Field()
  readonly description: string;
}