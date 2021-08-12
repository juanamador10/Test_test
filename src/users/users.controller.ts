import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';


@Controller('shopping')
export class UsersController {

    constructor (private service:UsersService){}

    @Get()
    getAllUsers(){
        return this.service.getAllUsers();
    }

    @Post()
    addUser(@Body() user: UserEntity){
        return this.service.createUser(user);
    }

    @Put()
    updateUser(@Body() user:UserEntity){
        this.service.updateUser(user);
    }

    @Delete(":id")
    deleteUser(@Param() params){
        this.service.deleteUser(params.id);
    }


}