import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OptionValueServiceBase } from "./base/optionValue.service.base";

@Injectable()
export class OptionValueService extends OptionValueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
