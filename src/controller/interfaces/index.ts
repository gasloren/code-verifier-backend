import { BasicResponse, GoodbyeResponse } from '../types';

/**
 * Hello Controller Interface
 */
export interface IHelloController {
  getMessage(name?: string): Promise<BasicResponse>;
}

/**
 * Goodbye Controller Interface
 */
export interface IGoodbyeController {
  getMessageAndDate(name?: string): Promise<GoodbyeResponse>;
}