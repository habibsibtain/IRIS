import db from "../lib/db.js";
import { mentalHealthQNA } from "../models/lifeSkills/mentalHealthQNA.js";


export const question = async (req , res)=>{
  try {
    const {question} = req.body;
    if(!question){
      return res.json({
        success: false, 
        message: 'Question is required'
      })
    }
    const data = await db.insert(mentalHealthQNA).values({ 
      question: question,
      questionNo: 1,
      answerNo: 1,
      answer: 'Yes',
      score: 1,
      created_at: new Date(),
      updated_at: new Date(),
    })

    return res.json({
      success: true,
      message: 'Question added successfully',
      data
    })
  } catch (error) {
    res.json({
      success: false,
      message: 'Something went wrong in question'
    })
    console.log(error)
  }
}