import { styled } from '@linaria/react'
import { blue } from '@mui/material/colors'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const FullName = styled.span`
  color: ${blue[500]};
`
