import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class ToDos {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userId: number;

    @Column()
    description: string;

    @Column({ type: 'timestamp with time zone', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date
}