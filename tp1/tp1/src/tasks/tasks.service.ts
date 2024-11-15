import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) {}

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = new Task();
    task.description = createTaskDto.description;
    task.status = createTaskDto.status;
    return this.taskRepository.save(task);
  }

  findAllTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  findOneTask(id: number): Promise<Task> {
    return this.taskRepository.findOneBy({ id });
  }

  updateTask(id: number, updateTaskDto: UpdateTaskDto) {
    const task = new Task();
    task.id = id;
    task.description = updateTaskDto.description;
    task.status = updateTaskDto.status;
    return this.taskRepository.save(task);
  }

  removeTask(id: number) {
    this.taskRepository.delete(id);
  }
}
