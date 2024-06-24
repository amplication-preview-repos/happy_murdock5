/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OptionValueWhereInput } from "./OptionValueWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OptionValueListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OptionValueWhereInput,
  })
  @ValidateNested()
  @Type(() => OptionValueWhereInput)
  @IsOptional()
  @Field(() => OptionValueWhereInput, {
    nullable: true,
  })
  every?: OptionValueWhereInput;

  @ApiProperty({
    required: false,
    type: () => OptionValueWhereInput,
  })
  @ValidateNested()
  @Type(() => OptionValueWhereInput)
  @IsOptional()
  @Field(() => OptionValueWhereInput, {
    nullable: true,
  })
  some?: OptionValueWhereInput;

  @ApiProperty({
    required: false,
    type: () => OptionValueWhereInput,
  })
  @ValidateNested()
  @Type(() => OptionValueWhereInput)
  @IsOptional()
  @Field(() => OptionValueWhereInput, {
    nullable: true,
  })
  none?: OptionValueWhereInput;
}
export { OptionValueListRelationFilter as OptionValueListRelationFilter };
