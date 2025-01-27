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
