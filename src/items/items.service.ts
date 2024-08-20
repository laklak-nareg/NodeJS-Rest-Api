import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './schemas/item.schema';

@Injectable()
export class ItemsService {
    constructor(@InjectModel(Item.name) private itemModel: Model <ItemDocument>) {}


    async findAll(): Promise<Item[]> {
        return this.itemModel.find().exec();
    }

    async create(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item);
        return newItem.save();
    }
}



// private readonly items = [
//     { "id": 1, "name": "Item One", "description": "This is the first item" },
//     { "id": 2, "name": "Item Two", "description": "This is the second item" }
//   ]