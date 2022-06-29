import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Category{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 200, nullable: false})
    name: string

    @Column({length: 200, nullable: false})
    slug: string
}