import { Injectable } from '@nestjs/common';
import { Category } from '../entities/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

/**
 * In this class
 */
@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    public readonly categoryRepository: Repository<Category>,
  ) {}
}
