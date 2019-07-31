/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Stories repository interface
 */

import { Repository } from './repository';
import { Story } from 'src/app/domain/models/story.model';

export interface StoryRepository extends Repository<Story> {
}
