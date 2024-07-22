import React from 'react'
import Heading from './Heading'
import HeadingMock from './Heading.mock'

/// TODO: fix story entries
const HeadingMeta = {
    title: "atoms/Heading",
    component: Heading,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Heading-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Heading {...args} />

export const DefaultHeading = Template.bind({})
DefaultHeading.args = {
    testID: testID,
    ...HeadingMock
}

export default HeadingMeta