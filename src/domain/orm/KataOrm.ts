import { KataEntity } from '../entities/KataEntity';

import { LogSuccess, LogError } from '../../utils/logger';

// CRUD

/**
 * Method to obtain all katas from db
 */
export const getAllKatas = async () => {
  try {
    let kataModel = KataEntity();
    return await kataModel.find({ isDelete: false });
  } catch(error) {
    LogError(`[ORM ERROR]: Getting all katas: ${error}`)
  }
};

// Get kata by id
// Get kata by name
// Create kata
// Update kata by id
// Delete kata by id