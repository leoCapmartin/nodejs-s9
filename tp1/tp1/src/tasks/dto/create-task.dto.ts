import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsEnum(['OPEN', 'IN_PROGRESS', 'DONE'])
  status: string;
}
