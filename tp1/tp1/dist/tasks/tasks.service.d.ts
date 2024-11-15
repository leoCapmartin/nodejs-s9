import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
export declare class TasksService {
    private readonly taskRepository;
    constructor(taskRepository: Repository<Task>);
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    findAllTasks(): Promise<Task[]>;
    findOneTask(id: number): Promise<Task>;
    updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<Task>;
    removeTask(id: number): void;
}
