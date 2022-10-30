import { Get, Query, Route, Tags } from 'tsoa';
import { LogSuccess } from '../utils/logger';
import { IGoodbyeController } from './interfaces';
import { GoodbyeResponse } from './types';


@Route('/api/goodbye')
@Tags('GoodbyeController')
export class GoodbyeController implements IGoodbyeController {

  /**
   * Endpoint to retrieve a "goodbye {name}" with de date {Date} in JSON
   * @param { string | undefined } name Name of user to be greeted 
   * @returns { GoodbyeResponse } Promise of GoodbyeResponse
   */
  @Get('/')
  public async getMessageAndDate(@Query()name?: string): Promise<GoodbyeResponse> {
    LogSuccess(`[/api/goodbye] Get Request`);
    return {
      message: `Goodbye ${name || 'No name'}`,
      date: new Date()
    }
  }

}