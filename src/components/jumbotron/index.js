import React from 'react'
import { Inner, Item } from "./styles/jumbotron";

export default function Jumbotron({children, direction = 'row', ...restProps}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>hello world</Inner>
    </Item>
  )
}
