
import {

  useParams,
  useNavigate,
} from 'react-router-dom';
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../../theme";
import StatBox from "../../../components/StatBox";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EmailIcon from '@mui/icons-material/Email';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import DraftsIcon from '@mui/icons-material/Drafts';
import MailLockIcon from '@mui/icons-material/MailLock';
import ScartedAreaChart from '../../../components/ScartedAreaChart';
import axios from 'axios'
const VendorDetails = () => {

  const { id } = useParams();
  let navigate = useNavigate()
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  console.log('ID', id)


  const handleClick = async () => {
    console.log('click')
    // https://codex-xov7.onrender.com

    const response = await fetch('https://codex-xov7.onrender.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: "nodejs uses"
      })
    })


    if (response.ok) {
      const data = await response.json();
      console.log(data)
      // const parsedData = data.bot.trim() // trims any trailing spaces/'\n' 

      // typeText(messageDiv, parsedData)
    } else {
      const err = await response.text()

      // messageDiv.innerHTML = "Something went wrong"
      alert(err)
    }

  }


  return (<div>


    <ArrowBackIosNewIcon onClick={() => navigate("/vendor-details")} />


    <div style={{ margin: '40px' }}>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="100"
            subtitle="Total Tickets"
            progress="1"
            // increase="+14%"
            icon={
              <ConfirmationNumberIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />


        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="80"
            subtitle="Open Tickets"
            progress="0.80"
            increase="80%"
            icon={
              <DraftsIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="20"
            subtitle="Tickets Closed"
            progress="0.20"
            increase="20%"
            icon={
              <MailLockIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 12"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Tickets Types Stats
          </Typography>
          <Box height="400px">
            {/* <GeographyChart isDashboard={true} />
             */}
            <ScartedAreaChart />
          </Box>
        </Box>

        {/* <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="20"
            subtitle="Tickets Closed"
            progress="0.20"
            increase="20%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box> */}

        <button onClick={() => handleClick()}>Click here</button>

      </Box>

    </div>

  </div>)
}

export default VendorDetails