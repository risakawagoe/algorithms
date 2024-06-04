import { NoAnswerEditView } from "../../components/quiz-components/question-edit/no-answer-edit";
import { NoAnswerReviewView } from "../../components/quiz-components/question-review/no-answer-review";
import { NoAnswerTestView } from "../../components/quiz-components/question-test/no-answer-test";
import { Question, QuestionType } from "./Question";


export class NoAnswerQuestion extends Question {

    constructor() {
        super(QuestionType.NO_ANSWER);
    }

    cloneQuestion(): NoAnswerQuestion {
        const clone = new NoAnswerQuestion();
        clone.setPrompt(this.getPrompt());
        clone.setExplanation(this.getExplanation());
        clone.setAttachment(this.getAttachment());
        return clone;
    }

    setAnswers(answers: any): void {}
    setUserInput(input: any): void {}
    initializeUserInput(): void {}

    // Views
    getEditView(saveQuestion: (question: Question) => void): JSX.Element {
        return(
            <NoAnswerEditView question={this} saveQuestion={saveQuestion} />
        );
    }
    getTestView(saveQuestion: (question: Question) => void): JSX.Element {
        return(
            <NoAnswerTestView question={this} saveQuestion={saveQuestion} />
        );
    }
    getReviewView(): JSX.Element {
        return(
            <NoAnswerReviewView question={this} saveQuestion={() => {}} />
        );
        
    }
}
