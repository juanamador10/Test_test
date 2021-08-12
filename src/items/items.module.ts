import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from './item.entity';
import { ItemController } from './items.controller';
import { ItemService } from './items.service';

@Module({
  providers: [ItemService],
  controllers: [
    ItemController
  ],
  imports: [
    TypeOrmModule.forFeature(
      [
        ItemEntity
      ]
    )
  ]
})
export class ItemsModule {}
