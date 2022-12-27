import { Box, Container, Card} from '@mui/material';
import Signin from './SignIn'

import { styled } from '@mui/material/styles';
import Logo from 'src/components/LogoSign';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Login() {
  return (
    <OverviewWrapper>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" paddingTop={10} alignItems="center">
        </Box>
        <Card sx={{ mb: 10, borderRadius: 10 }} >
          <Signin/>
        </Card>
      </Container>
    </OverviewWrapper>
  );
}

export default Login;
