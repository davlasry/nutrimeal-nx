import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SearchService {
  constructor(private configService: ConfigService) {}

  async searchFood(query: string) {
    const nutritionixAppKey = this.configService.get<string>(
      'NUTRITIONIX_APP_KEY'
    );
    const nutritionixAppId =
      this.configService.get<string>('NUTRITIONIX_APP_ID');

    const response = await axios.get(
      `https://trackapi.nutritionix.com/v2/search/instant?query=${query}&branded=false`,
      {
        headers: {
          'x-app-key': nutritionixAppKey,
          'x-app-id': nutritionixAppId,
        },
      }
    );
    return response.data;
  }
}
