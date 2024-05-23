import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CitiesModule } from './cities/cities.module';
import { BeachesModule } from './beaches/beaches.module';
import { RestaurantTypesModule } from './restaurant-types/restaurant-types.module';

@Module({
  imports: [UserModule, AuthModule, CitiesModule, BeachesModule, RestaurantTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
