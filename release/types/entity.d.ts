/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
/**
 * Event entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Event Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile Id.
     */
    profileId: string;
    /**
     * Target Id.
     */
    targetId?: string;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Expiration date.
     */
    expireAt: Date;
    /**
     * Event requester.
     */
    requester: Core.Entities.Identity;
    /**
     * Event section.
     */
    section: string;
    /**
     * Event action.
     */
    action: string;
    /**
     * Event parameters.
     */
    parameters: RestDB.Map<any>;
}
