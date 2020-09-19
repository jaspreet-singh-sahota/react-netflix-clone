import React from 'react'
import { Inner } from "./styles/jumbotron";

export default function Jumbotron({direction = 'row', ...restProps}) {
  return (
    <Inner direction={'column'}>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
    </Inner>
  )
}
