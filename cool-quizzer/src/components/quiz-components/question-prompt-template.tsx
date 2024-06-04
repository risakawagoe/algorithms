import { Image } from "@mantine/core"
import { FC } from "react"
import { FieldRichTextEditor } from "./rich-text-editor"

interface Props {
    prompt: string
    attachment: File | null
}

export const QuestionPromptTemplate: FC<Props> = ({ prompt, attachment }) => {
    return (
        <>
            <FieldRichTextEditor field="" required={false} content={prompt} editable={false} updateContent={() => {}} />
            {attachment && <Image src={URL.createObjectURL(attachment)} alt={attachment.name} maw="100%" w="auto" h="auto" mb={16} radius="sm" />}
        </>
    )
}