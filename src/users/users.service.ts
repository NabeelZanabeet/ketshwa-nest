import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { UserInput } from './inputs/user.input';
import { UserDeleteInput } from './inputs/user.delete';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(input: UserInput): Promise<User> {
    const createdUser = new this.userModel(input);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async delete(input: UserDeleteInput): Promise<User> {
    return this.userModel.findByIdAndDelete(input.id);
  }
}
