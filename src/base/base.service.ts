/* eslint-disable max-classes-per-file */
import { PrismaClient } from '@prisma/client';

class BaseService {
  protected db: PrismaClient;

  constructor() {
    this.db = new PrismaClient();
  }
}

export { BaseService };
