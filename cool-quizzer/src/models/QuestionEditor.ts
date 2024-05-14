import { FC } from 'react';
import { Question } from './questions/Question';

export type QuestionProps<T extends Question> = {
  question: T;
}

export type QuestionEditor<T extends Question> = FC<QuestionProps<T>>;