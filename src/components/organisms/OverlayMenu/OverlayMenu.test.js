import React from 'react'
import { render, screen } from "@testing-library/react"
import OverlayMenuMock from './OverlayMenu.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultOverlayMenu } from './OverlayMenu.stories'

const testID = "OverlayMenu-" + Math.floor(Math.random()*90000) + 10000

describe("OverlayMenu", () => {

    it("Can render OverlayMenu", () => {
        render(<DefaultOverlayMenu testID={ testID } { ...OverlayMenuMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})