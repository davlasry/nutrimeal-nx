import { Injectable } from '@nestjs/common';

import { Product, ProductDocument } from './schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>
  ) {}

  async getProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async addProduct(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }
}
