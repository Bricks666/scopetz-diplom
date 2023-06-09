import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { DatabaseModule } from './database';
import { AuthGuard, AuthModule } from './auth';
import { UsersModule } from './users';
import { FilmsModule } from './films';
import { FiltersModule } from './filters';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: ['./.env', '.env.local'],
		}),
		DatabaseModule.forRoot({
			isGlobal: true,
		}),
		AuthModule,
		UsersModule,
		FilmsModule,
		FiltersModule
	],
	controllers: [],
	providers: [
		{
			provide: APP_GUARD,
			useClass: AuthGuard,
		}
	],
})
export class AppModule {}
