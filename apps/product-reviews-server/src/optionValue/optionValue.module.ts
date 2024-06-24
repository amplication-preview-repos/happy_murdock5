import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OptionValueModuleBase } from "./base/optionValue.module.base";
import { OptionValueService } from "./optionValue.service";
import { OptionValueController } from "./optionValue.controller";
import { OptionValueResolver } from "./optionValue.resolver";

@Module({
  imports: [OptionValueModuleBase, forwardRef(() => AuthModule)],
  controllers: [OptionValueController],
  providers: [OptionValueService, OptionValueResolver],
  exports: [OptionValueService],
})
export class OptionValueModule {}
