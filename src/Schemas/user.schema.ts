import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  Email: string;

  @Prop()
  password: string;

  @Prop()
  username: string;

  @Prop()
  designation: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
