import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async addProduct(@Body() createProductDto: CreateProductDto) {
    const createdProduct = await this.productsService.addProduct(
      createProductDto
    );
    console.log(createdProduct);
    return createdProduct;
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    // return this.productsService.getSingleProduct(prodId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number
  ) {
    // this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
    return null;
  }

  @Delete(':id')
  removeProduct(@Param('id') prodId: string) {
    // this.productsService.deleteProduct(prodId);
    return null;
  }
}
