import { messageValidate } from '@/utils/messageValidate';
import j from 'joi';

// input add quizz
export const quizzSchema = j.object({
    quizzName: j.string().required().min(2).max(30).messages({
        'string.min': messageValidate.quizzForm.name.min,
        'string.max': messageValidate.quizzForm.name.max,
        'any.required': messageValidate.quizzForm.name.required
    }),
    
});
// input add question
export const questionSchema = j.object({
    questionName: j.string().required().min(2).max(50).messages({
        'string.min': messageValidate.questionForm.name.min,
        'string.max': messageValidate.questionForm.name.max,
        'any.required':messageValidate.questionForm.name.required,
    }),
    
});
// input add option
export const optionSchema = j.object({
    optionName: j.string().required().min(2).max(50).messages({
        'string.min': messageValidate.optionForm.name.min,
        'string.max': messageValidate.optionForm.name.max,
        'any.required': messageValidate.optionForm.name.required,
    }),
    isCorrect: j.boolean().invalid(false),
});

//input user 
export const userSchema = j.object({
    username: j.string().required().min(2).max(30).messages({
        'string.min': messageValidate.userForm.name.min,
        'string.max': messageValidate.userForm.name.max,
        'any.required': messageValidate.userForm.name.required,
    }),
    email: j.string().required().email().messages({
        'string.email': messageValidate.userForm.email.valid,
        'any.required': messageValidate.userForm.email.required,
    }),
    password: j.string().trim().required().min(6).max(30).messages({
        'string.min': messageValidate.userForm.password.min,
        'string.max': messageValidate.userForm.password.max,
        'any.required': messageValidate.userForm.password.required,
    })
})