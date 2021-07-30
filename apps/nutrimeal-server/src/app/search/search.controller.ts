import { Controller, Get, Query } from '@nestjs/common';

import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  async searchFood(@Query('query') query: string) {
    return await this.searchService.searchFood(query);
  }
}
