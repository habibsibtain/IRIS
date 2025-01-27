import { db } from '../lib/db.js';
import { emotionalIntelligenceTable } from '../models/lifeskill/emotionalIntelligenceQNA.js';
import { studentTable } from '../models/student/student.js';

export const post_Question = async (req, res) => { 
  try {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res
        .status(400)
        .json({ error: 'Question and answer are required' });
    }

    // Insert data into the database
    const result = await db.insert(emotionalIntelligenceTable).values({ 
      question: question,
      answer: answer,
      questionID: 1,
      answerID: 1,
      progress: 1,
      score: 1,
    });
    res
      .status(201)
      .json({ message: 'Data inserted successfully', data: result });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const register_student = async(req , res) => {
  try {
    const {name , email , phone , dob , school} = req.body;

    if(!(name && email && phone && dob && school)){
      return res
      .status(400)
      .json({ error: 'All fields are required' });
    }

    const result = await db.insert(studentTable).values({
      name,
      email,
      phone,
      dob,
      school
    })

    res.status(201).json({ message: 'Data inserted successfully', data: result });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(error)
  }
}
