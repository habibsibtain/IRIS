import { pgTable, integer, varchar, timestamp, uuid } from 'drizzle-orm/pg-core';
import { studentTable } from '../student/student.js';

export const mentalHealthTable = pgTable('mental_health', {
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
