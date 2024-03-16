import { DataGrid } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddresses } from "../../../addresses/slice";
import { selectAddressState } from "../../../addresses/slice/selectors";
import Grid from "@mui/material/Grid";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const AddressMain = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(selectAddressState);

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  const handleEditCellChange = (params) => {
    // Your logic to handle cell edits
    console.log(params);
    return params;
  };

  const handleProcessRowUpdateError = (error) => {
    // Your logic to handle cell edits
    console.log("Error");
    console.log(error);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "customerId",
      headerName: "Customer ID",
      width: 120,
      sortable: true,
    },
    {
      field: "street",
      headerName: "Street",
      width: 200,
      editable: true,
      sortable: true,
    },
    {
      field: "suburb",
      headerName: "Suburb",
      width: 150,
      editable: true,
      sortable: true,
    },
    {
      field: "city",
      headerName: "City",
      width: 120,
      editable: true,
      sortable: true,
    },
    {
      field: "state",
      headerName: "State",
      width: 120,
      editable: true,
      sortable: true,
    },
    {
      field: "postcode",
      headerName: "Postcode",
      width: 120,
      editable: true,
      sortable: true,
    },
    {
      field: "country",
      headerName: "Country",
      width: 120,
      editable: true,
      sortable: true,
    },
    {
      field: "created",
      headerName: "Created",
      width: 180,
      valueFormatter: (params) => params.value ? dayjs(params.value).format('DD/MM/YYYY') : null,
    },
    {
      field: "updated",
      headerName: "Updated",
      width: 180,
      valueFormatter: (params) => params.value ? dayjs(params.value).format('DD/MM/YYYY') : null,
    },
    {
      field: "deleted",
      headerName: "Deleted",
      width: 180,
      valueFormatter: (params) => params.value ? dayjs(params.value).format('DD/MM/YYYY') : null,
      sortable: true,
      editable: true,
    },
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <Button
          component={Link}
          variant="contained"
          startIcon={<AddPhotoAlternateIcon />}
          sx={{ mb: 2 }}
          to="/admin/address/new"
        >
          Add New Address
        </Button>
      </Grid>
      <Grid item xs={12}>
        <div style={{ height: 450, width: "100%" }}>
          <DataGrid
            rows={items}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            disableSelectionOnClick
            filterMode="client"
            editable
            processRowUpdate={handleEditCellChange}
            onProcessRowUpdateError={handleProcessRowUpdateError}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default AddressMain;
