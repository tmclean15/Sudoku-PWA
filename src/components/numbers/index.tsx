import React, { FC } from 'react'
import { NUMBER } from 'typings'
import { Container } from './styles'
import Button from './button'

const Numbers: FC = () => (
  <Container>
    {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBER[]).map((value) => (
      <Button key={value} value={value} />
    ))}
  </Container>
)

export default Numbers
