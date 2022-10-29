
/**
 * Basic JSON response for Controllers
 */
export type BasicResponse = {
  message: string;
}

export type GoodbyeResponse = {
  message: string;
  date: Date;
}

/**
 * Error JSON response
 */
export type ErrorResponse = {
  error: string;
  message: string;
}