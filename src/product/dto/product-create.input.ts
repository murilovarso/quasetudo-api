import { Field, InputType, Float } from '@nestjs/graphql'
import { IsUUID, isUUID, Length, Matches, Validate } from 'class-validator'
import { Column } from 'typeorm'
import { ProductSlugIsUnique } from '../validations/ProductSlugIsUnique'

@InputType()
export class ProductCreateInput {
  @Field()
  @Length(3)
  name: string

  @Field()
  @Length(3)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  @Validate(ProductSlugIsUnique)
  slug: string

  @Field()
  @Length(20)
  description: string

  @Field()
  @IsUUID()
  category: string

  @Field({defaultValue: true})
  sku: string

  @Field(type => Float, {defaultValue: true})
  price: number

  @Field(type => Float, {defaultValue: true})
  weight: number
}
