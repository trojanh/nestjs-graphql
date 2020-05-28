import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ItemType } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { ItemInput } from './input-items.input';

@Resolver('Items')
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) { }

  @Query(() => [ItemType])
  items(): Promise<ItemType[]> {
    return this.itemsService.findAll();
  }

  @Mutation(() => ItemType)
  createItem(@Args('input') input: ItemInput): Promise<ItemInput> {
    return this.itemsService.create(input);
  }

  @Mutation(() => ItemType)
  updateItem(
    @Args('id') id: string,
    @Args('input') input: ItemInput
  ): Promise<ItemInput> {
    return this.itemsService.update(id, input);
  }

  @Mutation(() => ItemType)
  deleteItem(@Args('id') id: string): Promise<ItemInput> {
    return this.itemsService.delete(id);
  }

  @Query(() => String)
  ping() {
    return "pong";
  }
}
