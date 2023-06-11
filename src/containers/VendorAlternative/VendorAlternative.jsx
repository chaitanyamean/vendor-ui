import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as React from 'react';
import '../../App.css';
import { Formik } from "formik";
import SendIcon from '@mui/icons-material/Send';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

const VendorAlternative = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [prompt, setPrompt] = React.useState('');
  const [txtField, setTxt] = React.useState('');
  const [response, setResponse] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);



  const handleChange = (event) => {
    console.log(event.target.value)
    setPrompt(event.target.value);
    let str = event.target.value + ' alternatives'
    setTxt(str)
  };

  const handleTextField = (event) => {
    let str = event.target.value;
    setTxt(str)
  }



  const handleIconClick = async () => {
    console.log('click')
    setResponse('')
    setIsLoading(true)
    // https://codex-xov7.onrender.com

    const response = await fetch('https://codex-xov7.onrender.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: txtField
      })
    })


    if (response.ok) {
      const data = await response.json();
      // console.log(data)
      const parsedData = data.bot.trim() // trims any trailing spaces/'\n' 
      setResponse(parsedData)
      setIsLoading(false)

      // typeText(messageDiv, parsedData)
    } else {
      const err = await response.text()

      // messageDiv.innerHTML = "Something went wrong"
      alert(err)
    }

  }


  // const {classes} = this.props; backgroundColor="#ffffff"
  return (
    <Box m="20px" >
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">

        <Box mb="60px">
          <Typography
            variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "0 0 5px 0" }}
          >
            Vendor Dashboard
          </Typography>
          <Typography variant="h5" color={colors.greenAccent[400]}>
            Find Vendor Alternative with Generative AI
          </Typography>
        </Box>


      </Box>

      <Box mb="30px" m="20px">
        <Box display="flex" justifyContent="left" alignItems="center">
          <Box>
            <Typography
              variant="h2"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "0 0 5px 0" }}
            >
              Select Vendor
            </Typography>

          </Box>
          <Box >
            <FormControl sx={{ m: 1, minWidth: 300 }} size="big">
              {/* <InputLabel id="demo-select-small-label">Age</InputLabel> */}
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={prompt}
                label="Prompt"
                onChange={handleChange}
              >
                <MenuItem value="Please select">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Siteminder"}>Siteminder</MenuItem>
                <MenuItem value={"Zendesk"}>Zendesk</MenuItem>
                <MenuItem value={"Apache"}>Apache</MenuItem>
              </Select>
            </FormControl>
          </Box>

        </Box>
      </Box>

      <Box mt="30px" m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box
            flexGrow={1}
          >
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Send a messaage"
              // onBlur={handleBlur}
              onChange={handleTextField}
              value={txtField}
              name="message"
            // error={!!touched.address1 && !!errors.address1}
            // helperText={touched.address1 && errors.address1}
            // sx={{ gridColumn: "span 12" }}
            />
          </Box>
          <Box >
            {/* <Button type="submit" color="secondary" variant="contained">
              Create New User
            </Button> */}
            <IconButton onClick={handleIconClick}>
              <SendIcon
                sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
              />
            </IconButton>
          </Box>

        </Box>
      </Box>

      <Box mt="30px" m="20px">

        {response && response.length > 0 ?
          <div>{response}</div>
          : ""}

        {isLoading && isLoading == true ? 'Loading please wait...' : ''}
      </Box>

    </Box>
  );
};

export default VendorAlternative;
