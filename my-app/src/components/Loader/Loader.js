import variables from "../../assets/style/variables.scss"
import Box from "@mui/material/Box"
import { CircularProgress } from "@mui/material"

function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: variables.neutraldark,

      }}
      spacing={2}
      direction="row"
    >
      <CircularProgress
        sx={{
          color: variables.maincolor,
        }}
      />
    </Box>
  )
}

export default Loader
