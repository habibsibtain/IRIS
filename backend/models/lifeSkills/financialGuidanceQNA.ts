import { integer, pgTable, varchar, timestamp, uuid } from 'drizzle-orm/pg-core';

export const financialGuidanceQNA = pgTable('financialGuidanceQNA', {
  id: uuid("id").primaryKey().defaultRandom(),
  questionNo: integer(),
  questionID: integer(),
  answerID: integer(),
  answerNo: integer(),
  question: varchar(),
  answer: varchar(),
  score: integer(),
  created_at: timestamp(),
  updated_at: timestamp(),
});
