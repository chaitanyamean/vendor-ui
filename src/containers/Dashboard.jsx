import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { bottom5Vendors, top5Vendors } from "../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
// import Header from "../../components/Header";
// import LineChart from "../../components/LineChart";
// import GeographyChart from "../../components/GeographyChart";
// import BarChart from "../../components/BarChart";
import StatBox from "../components/StatBox";
import { useEffect } from "react";
import { LineChart } from "../components/LineCharts";
// import ProgressCircle from "../../components/ProgressCircle";
// import SingleBarChart from '../../components/SingleBarChart';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    // fetch('https://nodejs-chatgpt-production.up.railway.app/').then((res) => console.log(res))
    // fetch('http://localhost:4000/zendesk usecases').then((res) => console.log(res))

    // axios.post('http://localhost:4000/getdata', { data: 'React uses' }).then((res) => console.log(res))
  }, [])

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">

        <Box mb="30px">
          <Typography
            variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "0 0 5px 0" }}
          >
            Vendor Dashboard
          </Typography>
          <Typography variant="h5" color={colors.greenAccent[400]}>
            Vendor Dashboard
          </Typography>
        </Box>

        <Box>

        </Box>
      </Box>

      {/* GRID & CHARTS */}
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
            title="2500"
            subtitle="Total Vendors"
            progress="1"
            // increase="+14%"
            icon={
              <PersonAddIcon
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
            title="2000"
            subtitle="On-boarded"
            progress="0.80"
            increase="80%"
            icon={
              <PersonAddIcon
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
            title="500"
            subtitle="On-hold"
            progress="0.20"
            increase="20%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>



        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Top 5 Vendors
            </Typography>
          </Box>
          {top5Vendors.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                {/* <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography> */}
              </Box>
              <Box color={colors.grey[100]}>Joined on {transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transaction.cost}%
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Bottom 5 Vendors
            </Typography>
          </Box>
          {bottom5Vendors.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                {/* <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography> */}
              </Box>
              <Box color={colors.grey[100]}>Joined on {transaction.date}</Box>
              <Box
                backgroundColor={colors.redAccent[600]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transaction.cost}%
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          height="500px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Vendor Incident Charts
            </Typography>
          </Box>

          <LineChart />
          {/* {bottom5Vendors.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>

              </Box>
              <Box color={colors.grey[100]}>Ending on {transaction.date}</Box>
              <Box
                backgroundColor={colors.redAccent[600]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transaction.cost}%
              </Box>
            </Box>
          ))} */}
        </Box>
        <Box height="100px"></Box>

      </Box>
    </Box>
  );
};

export default Dashboard;
