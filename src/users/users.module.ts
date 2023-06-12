import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserService } from './services/user.service';
import { UserRepositoryTypeORM } from './repositories/userRepository.TypeORM';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserRepositoryTypeORM],
  exports: [TypeOrmModule, UserService, UserRepositoryTypeORM],
})
export class UsersModule {}
