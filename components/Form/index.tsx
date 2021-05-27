import {
  Button,
  Chip,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core"
import { PetsOutlined } from "@material-ui/icons"
import { useState } from "react"

const formatToArray = (data: string) => data.split("\n").filter((s) => !!s)

const pick = (list: string[], length: number): string[] => {
  const picked = list.filter(() => Math.ceil(Math.random() * 10) % 2 === 1)
  if (picked.length > length) {
    return pick(picked, length)
  }
  if (picked.length < length) {
    const newList = list.filter((v) => !picked.includes(v))
    return [...picked, ...pick(newList, length - picked.length)]
  }
  return picked
}

const randomSplit = (value: string) => {
  const list = formatToArray(value)
  const pickCount = Math.round(list.length / 2)
  const first = pick(list, pickCount)
  const second = list.filter((v) => !first.includes(v))
  return [first, second]
}

const Result: React.FC<{ member: string[]; name: string }> = ({
  member,
  name,
}) => (
  <Grid item xs={6}>
    <Paper elevation={3} style={{ padding: "8px" }}>
      <Chip
        icon={<PetsOutlined />}
        label={name}
        clickable
        color="primary"
        variant="outlined"
        style={{ marginBottom: "16px" }}
      />
      {member.map((v) => (
        <Typography key={v} variant="body1">{`${v} さん`}</Typography>
      ))}
    </Paper>
  </Grid>
)

export const Form: React.FC = () => {
  const [value, setValue] = useState<string>("")
  const [teams, setTeams] = useState<string[][]>()
  const onClick = () => {
    setTeams(randomSplit(value))
  }

  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={6}>
        <TextField
          label="改行区切りで入力"
          multiline
          rows={8}
          fullWidth
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        {formatToArray(value).map((v, i) => (
          <Typography key={v} variant="body1">
            {`No.${i + 1}: ${v} さん`}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Button variant="contained" disabled={value === ""} onClick={onClick}>
          わけわけ！
        </Button>
      </Grid>
      {teams && (
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Result member={teams[0]} name={"うさぎさんチーム"} />
            <Result member={teams[1]} name={"こあらさんチーム"} />
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}
