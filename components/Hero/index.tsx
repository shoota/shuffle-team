import { Box, Container, Typography } from "@material-ui/core"

export const Hero: React.FC = () => (
  <Box css={{ marginTop: "48px" }}>
    <Container maxWidth="md">
      <Typography component="h1" variant="h2" align="center" gutterBottom>
        ランダムチーム
      </Typography>
      <Typography variant="h6" align="left" paragraph>
        入力されたメンバーをランダムで２等分するツールです。チーム分けなどに利用してください。
      </Typography>
      <Typography variant="h6" align="left" paragraph>
        内容をサーバーへ送信したり、外部のストレージに保存することはありませんのでご安心ください。
      </Typography>
    </Container>
  </Box>
)
