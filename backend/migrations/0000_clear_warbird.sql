CREATE TABLE "emotional_intelligence" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"Student_ID" uuid NOT NULL,
	"question_id" integer,
	"answer_id" integer,
	"question" varchar,
	"answer" varchar,
	"score" integer,
	"progress" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "financial_guidance" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"Student_ID" uuid NOT NULL,
	"question_id" integer,
	"answer_id" integer,
	"question" varchar,
	"answer" varchar,
	"score" integer,
	"progress" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "mental_health" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"Student_ID" uuid NOT NULL,
	"question_id" integer,
	"answer_id" integer,
	"question" varchar,
	"answer" varchar,
	"score" integer,
	"progress" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "time_management" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"Student_ID" uuid NOT NULL,
	"question_id" integer,
	"answer_id" integer,
	"question" varchar,
	"answer" varchar,
	"score" integer,
	"progress" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "student" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"Student_Name" varchar(25) NOT NULL,
	"Email" varchar NOT NULL,
	"Contact_Number" varchar NOT NULL,
	"DOB" varchar NOT NULL,
	"School" varchar NOT NULL,
	"Class" varchar,
	CONSTRAINT "student_Email_unique" UNIQUE("Email")
);
--> statement-breakpoint
ALTER TABLE "emotional_intelligence" ADD CONSTRAINT "emotional_intelligence_Student_ID_student_id_fk" FOREIGN KEY ("Student_ID") REFERENCES "public"."student"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "financial_guidance" ADD CONSTRAINT "financial_guidance_Student_ID_student_id_fk" FOREIGN KEY ("Student_ID") REFERENCES "public"."student"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "mental_health" ADD CONSTRAINT "mental_health_Student_ID_student_id_fk" FOREIGN KEY ("Student_ID") REFERENCES "public"."student"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "time_management" ADD CONSTRAINT "time_management_Student_ID_student_id_fk" FOREIGN KEY ("Student_ID") REFERENCES "public"."student"("id") ON DELETE no action ON UPDATE no action;