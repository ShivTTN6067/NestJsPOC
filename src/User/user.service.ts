import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../Schemas/user.schema';
import { CreateUserDto } from '../dto/create-user.dto';
import { LoginUserDto } from '../dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private userModel: Model<UserDocument>) {}

  async login(loginUserDto: LoginUserDto): Promise<boolean> {
    const LoggedInUser = await this.userModel.find(loginUserDto).exec();
    return LoggedInUser.length ? true : false;
  }

  async signUpUser(createUserDto: CreateUserDto): Promise<string> {
    try {
      const createdUser = new this.userModel(createUserDto);
      await createdUser.save();
      return 'created';
    } catch (err) {
      return err;
    }
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
