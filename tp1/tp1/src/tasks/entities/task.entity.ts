import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  description: string;

  @Column({
    type: 'enum',
    enum: ['OPEN', 'IN_PROGRESS', 'DONE'],
    default: 'OPEN',
  })
  status: string;
}
