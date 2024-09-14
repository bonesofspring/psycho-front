import { styled } from '@linaria/react'
import { grey } from '@mui/material/colors'

interface IHeaderProps {
  stickyHeader: boolean
}

const getHeaderBoxShadow = (props: IHeaderProps) =>
  props.stickyHeader
    ? '0 0 2px rgba(38, 54, 75, 0.08), 7px 2px 24px rgba(26, 61, 107, 0.08)'
    : 'none'

export const Header = styled.header<IHeaderProps>`
  position: sticky;
  z-index: 900;
  top: 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  background: ${grey[50]};
  box-shadow: ${getHeaderBoxShadow};
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
`
