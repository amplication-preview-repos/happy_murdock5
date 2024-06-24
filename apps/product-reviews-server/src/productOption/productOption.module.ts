import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductOptionModuleBase } from "./base/productOption.module.base";
import { ProductOptionService } from "./productOption.service";
import { ProductOptionController } from "./productOption.controller";
import { ProductOptionResolver } from "./productOption.resolver";

@Module({
  imports: [ProductOptionModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductOptionController],
  providers: [ProductOptionService, ProductOptionResolver],
  exports: [ProductOptionService],
})
export class ProductOptionModule {}
