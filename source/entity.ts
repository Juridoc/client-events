/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Core from '@juridoc/client-core';

/**
 * Event entity class.
 */
@RestDB.Schema.Entity('events')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Event Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Profile Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public profileId!: string;

  /**
   * Target Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public targetId?: string;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Expiration date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public expireAt!: Date;

  /**
   * Event requester.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Core.Entities.Identity)
  @Class.Public()
  public requester!: Core.Entities.Identity;

  /**
   * Event section.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public section!: string;

  /**
   * Event action.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public action!: string;

  /**
   * Event parameters.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Object)
  @Class.Public()
  public parameters!: RestDB.Map<any>;
}
