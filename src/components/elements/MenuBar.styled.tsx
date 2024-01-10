import { Box, keyframes, styled } from '@mui/material'

const fadeIn = keyframes`
  from {

    opacity: 0;
  }
  to {
    opacity: 1;
  }
`


export const StyledBoxMain = styled('main')(({ theme }) => ({
    animation: `${fadeIn} 0.08s forwards`,
    position: 'relative',
    overflowY: 'auto',
    flex: 1,
    padding: theme.spacing(2)
  }))

  export const StyledBoxRoot = styled(Box)(() => ({
    display: 'flex',
    minHeight: '100vh'
  }))

  export const StyledBoxContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    height: `calc(100vh - ${theme.spacing(8)})`
  }))