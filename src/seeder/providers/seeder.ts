import { Injectable, Logger } from '@nestjs/common';
import { CategoriesSeederService } from '../services/categoriesSeeder.service';
import { NotificationsSeederService } from '../services/notificationsSeeder.service';

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly categorySeederService: CategoriesSeederService,
    private readonly notificationsSeederService: NotificationsSeederService,
  ) {}

  async seed() {
    // Seed Categories
    await this.categories()
      .then((completed) => {
        this.logger.debug('Successfuly completed seeding categories...');
        Promise.resolve(completed);
      })
      .catch((error) => {
        this.logger.error('Failed seeding categories...');
        Promise.reject(error);
      });

    await this.notifications()
      .then((completed) => {
        this.logger.debug('Successfuly completed seeding notifications...');
        Promise.resolve(completed);
      })
      .catch((error) => {
        this.logger.error('Failed seeding notifications...');
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

  async notifications() {
    return await Promise.all(this.notificationsSeederService.create())
      .then((createdNotifications) => {
        // Can also use this.logger.verbose('...');
        this.logger.debug(
          'No. of notifications created : ' +
            // Remove all null values and return only created languages.
            createdNotifications.filter(
              (nullValueOrCreatedLanguage) => nullValueOrCreatedLanguage,
            ).length,
        );
        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }
}
