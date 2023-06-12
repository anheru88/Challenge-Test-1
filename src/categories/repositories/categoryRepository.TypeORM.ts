import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryRepositoryInterface } from './interfaces/categoryRepository.interface';
import { Category } from '../entities/category.entity';
import { CategoryInterface } from '../entities/interfaces/category.interface';

@Injectable()
export class CategoryRepositoryTypeORM implements CategoryRepositoryInterface {
  constructor(
    @InjectRepository(Category)
    private readonly repository: Repository<Category>,
  ) {}

  getAll(): Promise<CategoryInterface[]> {
    return this.repository.find();
  }
}
