import { UserEntity } from "../entities/UserEntity";

import { LogSuccess, LogError } from "@/utils/logger";

// CRUD

/**
 * Method to obtain all users from mongodb
 */
export const getAllUsers = async () => {
  try {
    let userModel = UserEntity();
    return await userModel.find({ isDelete: false });
  } catch(error) {
    LogError(`[ORM ERROR]: Getting all users: ${error}`)
  }
};

// Get user by id
// Get user by name
// Create user
// Update user by id
// Delete user by id