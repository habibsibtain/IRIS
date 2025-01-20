import { pgTable, integer, timestamp, uuid } from 'drizzle-orm/pg-core';
import { emotionalIntelligenceQNA } from './lifeSkills/emotionalIntelligenceQNA';
import { financialGuidanceQNA } from './lifeSkills/financialGuidanceQNA';
import { mentalHealthQNA } from './lifeSkills/mentalHealthQNA';
import { timeManagementQNA } from './lifeSkills/timeManagementQNA';

export const lifeSkillsSchema = pgTable('lifeSkills', {
  id: uuid('id').primaryKey().defaultRandom(),
  emotionalIntelligenceQNAID: integer().references(() => emotionalIntelligenceQNA.id),
  financialGuidanceQNAID: integer().references(() => financialGuidanceQNA.id),
  mentalHealthQNAID: integer().references(() => mentalHealthQNA.id),
  timeManagementQNAID: integer().references(() => timeManagementQNA.id),
  studentID: integer(),
  created_at: timestamp(),
  updated_at: timestamp(),
});
