import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ItemEntity } from './item.entity';
import { ItemService } from './items.service';


@Controller('shopping')
export class ItemController {

    constructor (private service:ItemService){}

    @Get()
    getAllUsers(){
        return this.service.getAllItems();
    }

    @Get(":id")
    getUser(@Param() params){
    return this.service.getItem(params.id);
    }

    @Post()
    addUser(@Body() user: ItemEntity){
        return this.service.createItem(user);
    }

    @Put()
    updateUser(@Body() user:ItemEntity){
        this.service.updateItem(user);
    }

    @Delete(":id")
    deleteUser(@Param() params){
        this.service.deleteItem(params.id);
    }


}