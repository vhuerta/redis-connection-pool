'use strict';

/**
 * Redis connection pool
 *
 * @author Victor Huerta <vhuertahnz@gmail.com>
 */
import { Pool } from 'generic-pool';

class RedisConnectionPool {
  constructor() {
    this.pool = null;
  }
}

export default RedisConnectionPool;
