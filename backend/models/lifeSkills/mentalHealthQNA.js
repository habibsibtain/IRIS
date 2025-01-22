import { pgTable, integer, varchar, timestamp, uuid } from 'drizzle-orm/pg-core';

export const mentalHealthQNA = pgTable('mentalHealthQNA', {
  id: uuid("id").primaryKey().defaultRandom(),
  questionNo: integer(),
  questionID: integer(),
  question: varchar(),
  answerID: integer(),
  answerNo: integer(),
  answer: varchar(),
  score: integer(),
  created_at: timestamp(),
  updated_at: timestamp(),
});
