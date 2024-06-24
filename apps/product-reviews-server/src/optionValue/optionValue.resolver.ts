import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OptionValueResolverBase } from "./base/optionValue.resolver.base";
import { OptionValue } from "./base/OptionValue";
import { OptionValueService } from "./optionValue.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OptionValue)
export class OptionValueResolver extends OptionValueResolverBase {
  constructor(
    protected readonly service: OptionValueService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
