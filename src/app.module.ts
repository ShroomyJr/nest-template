import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.DB_ROOT,
      UserModule
      
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
