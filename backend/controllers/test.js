import db from '../lib/db.js'
import {emotionalIntelligenceQNA} from '../models/lifeSkills/emotionalIntelligenceQNA.js'

export const post_Question = async (req, res) => {
  try {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res
        .status(400)
        .json({ error: 'Question and answer are required' });
    }

    // Insert data into the database
    const result = await db.insert(emotionalIntelligenceQNA).values({
      question: question,
      answer: answer,
      questionNo: 1,
      questionID: 1,
      answerID: 1,
      answerNo: 1, 
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
