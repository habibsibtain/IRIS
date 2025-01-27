import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const studentTable = pgTable('student' , {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('Student_Name',{length:25}).notNull(),
  email: varchar('Email').notNull().unique(),
  phone: varchar('Contact_Number').notNull(),
  dob: varchar('DOB').notNull(),
  school: varchar('School').notNull(),
  class: varchar('Class')
}) 