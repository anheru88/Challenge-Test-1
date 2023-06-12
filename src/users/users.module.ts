import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserService } from './services/user.service';
import { UserRepositoryTypeORM } from './repositories/userRepository.TypeORM';
import { UserFactory } from './factory/user.factory';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserRepositoryTypeORM, UserFactory],
  exports: [TypeOrmModule, UserService, UserRepositoryTypeORM, UserFactory],
})
export class UsersModule {}
