import React from 'react'
import Paragraph from './Paragraph'
import ParagraphMock from './Paragraph.mock'

/// TODO: fix story entries
const ParagraphMeta = {
    title: "atoms/Paragraph",
    component: Paragraph,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Paragraph-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Paragraph {...args} />

export const DefaultParagraph = Template.bind({})
DefaultParagraph.args = {
    testID: testID,
    ...ParagraphMock
}

export default ParagraphMeta