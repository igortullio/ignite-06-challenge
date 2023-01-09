import { Box, styled, Text } from '@igortullio-ui/react'

export const Form = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$2',
  marginTop: '$4',

  '@bp2': {
    gridTemplateColumns: '1fr auto',
  },
})

export const FormAnnotation = styled('div', {
  marginTop: '$2',

  [`> ${Text}`]: {
    color: '$gray400',
  },
})
