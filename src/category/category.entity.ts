import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 250, nullable: true })
  name: string

  @Column({ length: 250, nullable: true })
  slug: string
}
