import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.css"

import App from "./App"

import styled, { keyframes } from "styled-components"
import { bounce } from "react-animations"

const bounceAnimation = keyframes`${bounce}`

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

ReactDOM.render(<App />, document.getElementById("root"))
