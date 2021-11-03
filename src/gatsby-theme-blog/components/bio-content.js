import React from "react"
import { Themed } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      Hello, my name is <Themed.a href="http://manselmo.dev/">Max</Themed.a>!
      <br />
      Here's what I've been up to...
    </>
  )
}
