import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Item } from './interfaces/item.interface';
import { ItemInput } from './input-items.input';
import { ItemType } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private itemModel: Model<Item>) {}

  create(createItemDto: ItemInput): Promise<ItemInput> {
    const createdItem = new this.itemModel(createItemDto);
    return createdItem.save();
  }

  findAll(): Promise<ItemType[]> {
    return this.itemModel.find().exec();
  }

  findOne(id: string): Promise<ItemType> {
    return this.itemModel.findOne({ _id: id });
  }

  delete(id: string): Promise<ItemType> {
    return this.itemModel.findByIdAndRemove(id);
  }

  update(id: string, item: Item): Promise<ItemType> {
    return this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }

}
