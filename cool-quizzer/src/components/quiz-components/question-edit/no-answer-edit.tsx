import { QuestionEditor } from "../../../models/QuestionEditor";
import { getQuestionTypeLabel } from "../../../models/questions/Question";
import { Button, Group, Textarea } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { NoAnswerQuestion } from "../../../models/questions/NoAnswerQuestion";


export const NoAnswerEditView: QuestionEditor<NoAnswerQuestion> = ({ question, saveQuestion }) => {
    const [prompt, setPrompt] = useInputState(question.getPrompt());

    const updateQuestion = () => {
        const updatedQuestion: NoAnswerQuestion = new NoAnswerQuestion();
        updatedQuestion.setPrompt(prompt);
        saveQuestion(updatedQuestion);
    }

    return(
        <div>
            <Textarea
                label="Prompt"
                description={getQuestionTypeLabel(question.type)}
                value={prompt}
                onChange={setPrompt}
                required
                />
            <Group justify="flex-end" mt={20}>
                <Button variant="outline" onClick={updateQuestion}>Save</Button>
            </Group>
        </div>
    );
}