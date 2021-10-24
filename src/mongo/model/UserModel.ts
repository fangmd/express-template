import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm'

@Entity()
export default class User {
  @ObjectIdColumn()
  id!: ObjectID
  @Column()
  account!: string
  @Column()
  pwd!: string
  @Column()
  name!: string
}
