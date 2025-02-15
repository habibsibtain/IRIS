import { integer, pgTable, varchar, timestamp, uuid } from 'drizzle-orm/pg-core';
import { studentTable } from '../../student/schema.js';

export const financialGuidanceTable = pgTable('financial_guidance', {
  id: uuid("id").primaryKey().defaultRandom(),
   student_id: uuid('Student_ID').notNull().references(() => studentTable.id),
   question_id: integer(),
   answer_id: integer(),
   question: varchar(),
   answer: varchar(),
   score: integer(),
   progress: integer(),
   created_at: timestamp(),
   updated_at: timestamp(),
});
