import { Injectable, Logger } from '@nestjs/common';
import { CategoriesSeederService } from '../services/categoriesSeeder.service';

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly categorySeederService: CategoriesSeederService,
  ) {}
  async seed() {
    // Seed Categories
    await this.categories()
      .then((completed) => {
        this.logger.debug('Successfuly completed seeding users...');
        Promise.resolve(completed);
      })
      .catch((error) => {
        this.logger.error('Failed seeding users...');
        Promise.reject(error);
      });
  }
  async categories() {
    return await Promise.all(this.categorySeederService.create())
      .then((createdCategories) => {
        // Can also use this.logger.verbose('...');
        this.logger.debug(
          'No. of categories created : ' +
            // Remove all null values and return only created languages.
            createdCategories.filter(
              (nullValueOrCreatedLanguage) => nullValueOrCreatedLanguage,
            ).length,
        );
        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }
}
