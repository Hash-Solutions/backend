import { SurveyModel } from '@/domain/models/survey'
import { AddSurveyParams } from '@/domain/usecase/survey/add-survey'
import faker from 'faker'

export const mockSurveyModel = (): SurveyModel => {
  return {
    id: faker.random.uuid(),
    question: faker.random.words(),
    answers: [{
      answer: faker.random.word()
    }, {
      answer: faker.random.word(),
    }],
    date: faker.date.recent()
  }
}

export const mockSurveyModels = (): SurveyModel[] => [
  mockSurveyModel(),
  mockSurveyModel()
]

export const mockAddSurveyParams = (): AddSurveyParams => ({
  question: faker.random.words(),
  answers: [{
    answer: faker.random.word()
  }, {
    answer: faker.random.word()
  }],
  date: faker.date.recent()
})
