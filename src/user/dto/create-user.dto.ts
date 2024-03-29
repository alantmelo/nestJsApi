import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
  @IsStrongPassword({
    minLength: 3,
  })
  password: string;

  @IsOptional()
  @IsDateString()
  birthAt: string;
}
