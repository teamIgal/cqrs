import { ICommand } from './command.interface';

export interface ICommandHandler<T extends ICommand = any, TRes = any> {
  execute(command: T): Promise<TRes>;
}
