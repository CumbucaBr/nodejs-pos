import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Products } from './model';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('products')
  getProducts(): Products[] {
    return this.appService.getProducts();
  }
}
