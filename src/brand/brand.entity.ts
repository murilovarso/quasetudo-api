import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Brand {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 250, nullable: true })
  name: string

  @Column({ length: 250, nullable: true })
  slug: string

  @Column({ length: 10000, nullable: true })
  logo: string
}
