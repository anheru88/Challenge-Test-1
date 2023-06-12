import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

ConfigModule.forRoot();

const configService = new ConfigService();

export const DataSourceConfig: DataSourceOptions = {
  type: 'mariadb',
  host: configService.get('DATABASE_HOST'),
  port: configService.get('DATABASE_PORT'),
  username: configService.get('DATABASE_USER'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_DATABASE'),
  synchronize: configService.get('DATABASE_SYNCHRONIZE'),
  migrationsRun: configService.get('DATABASE_MIGRATION_RUN'),
  logging: configService.get('DATABASE_LOGGING'),
  namingStrategy: new SnakeNamingStrategy(),
};

export const AppDS = new DataSource(DataSourceConfig);
