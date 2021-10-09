import Characters from './components/Characters/Characters'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

export default function App() {
  return (
    <Container sx={{ minWidth: 320, padding: '40px 0 40px 0' }}>
      <Box>
        <Characters />
      </Box>
    </Container>
  )
}
