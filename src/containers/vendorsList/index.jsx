import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
// import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useNavigate, createSearchParams } from "react-router-dom";
import { Outlet } from "react-router-dom"

const VendorList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "vendorId", headerName: "Vendor ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  const handleOnCellClick = (params) => {
    // setUserList(params);
    // history('/pages/IndividualUsers');

    const currentRow = params.row;
    console.log(currentRow)
    const options = {
      pathname: `/vendor-details/${currentRow.vendorId}`,
    };
    navigate(options, { replace: true });
  };

  return (
    <>
      <Box m="20px">
        {/* <Header
          title="Vendor Details"
          subtitle="List of Vendors"
        /> */}
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          <DataGrid
            rows={mockDataContacts}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            onCellClick={handleOnCellClick}
          />
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default VendorList;
