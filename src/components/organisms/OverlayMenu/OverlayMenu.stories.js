import React from 'react'
import OverlayMenu from './OverlayMenu'
import OverlayMenuMock from './OverlayMenu.mock'

/// TODO: fix story entries
const OverlayMenuMeta = {
    title: "organisms/OverlayMenu",
    component: OverlayMenu,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "OverlayMenu-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <OverlayMenu {...args} />

export const DefaultOverlayMenu = Template.bind({})
DefaultOverlayMenu.args = {
    testID: testID,
    ...OverlayMenuMock
}

export default OverlayMenuMeta