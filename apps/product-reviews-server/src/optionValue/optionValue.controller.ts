import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OptionValueService } from "./optionValue.service";
import { OptionValueControllerBase } from "./base/optionValue.controller.base";

@swagger.ApiTags("optionValues")
@common.Controller("optionValues")
export class OptionValueController extends OptionValueControllerBase {
  constructor(
    protected readonly service: OptionValueService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
