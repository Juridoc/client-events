/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import { Entity } from './entity';
/**
 * Events mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Load the event that corresponds to the specified event Id.
     * @param id Event Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the event entity.
     * @throws Throws an error when the event wasn't found.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * List all categories that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the event list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all events that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of events or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
}
