import variables from "../../assets/style/variables.scss"
import Stack from "@mui/material/Stack"
import { CircularProgress } from "@mui/material"

function Loader() {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
      spacing={2}
      direction="row"
    >
      <CircularProgress
        sx={{
          width: 300,
          color: variables.maincolor,
        }}
      />
    </Stack>
  )
}

export default Loader
