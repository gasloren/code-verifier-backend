import { LogSuccess } from '../utils/logger';
import { IGoodbyeController } from './interfaces';
import { GoodbyeResponse } from './types';


export class GoodbyeController implements IGoodbyeController {

  public async getMessageAndDate(name?: string): Promise<GoodbyeResponse> {
    LogSuccess(`[/api/goodbye] Get Request`);
    return {
      message: `Goodbye ${name || 'No name'}`,
      date: new Date()
    }
  }

}