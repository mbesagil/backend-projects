import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { UpdateUserDto } from './dto/update-user.dto';
import {passwordToHash} from "../helper/crypto"

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService,
      ) {}
  
      @Post()
      async create(@Body() createUserDto: CreateUserDto) {
        createUserDto.password = passwordToHash(createUserDto.password)
        return this.userService.create(createUserDto);
      }
    
      @Get()
      async findAll(): Promise<User[]> {
        return this.userService.findAll();
      }
    
      @Get(':id')
      async findOne(@Param('id') id: string): Promise<User> {
        return this.userService.findOne(id);
      }
    
      @Put(':id')
      async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.userService.update(id, updateUserDto);
      }
    
      @Delete(':id')
      async remove(@Param('id') id: string) {
        return this.userService.remove(id);
      }
}
