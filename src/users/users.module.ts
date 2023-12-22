import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { UsersController } from './users.controller';
console.log('user module');
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  exports: [UsersService, TypeOrmModule],
  controllers: [UsersController],
})
export class UsersModule {}