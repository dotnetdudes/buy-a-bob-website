import { DataGrid } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShippingTypes } from "../../slice";
import { selectShippingTypesState } from "../../slice/selectors";
import Grid from "@mui/material/Grid";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const ShippingTypeMain = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(selectShippingTypesState);

  useEffect(() => {
    dispatch(fetchShippingTypes());
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
    { field: "id", headerName: "ID", width: 90, sortable: true },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      sortable: true,
      filterable: true,
      editable: true,
    },
    {
      field: "created",
      headerName: "Created",
      width: 180,
      sortable: true,
      type: "date",
      valueFormatter: (params) =>
        params.value ? dayjs(params.value).format("DD/MM/YYYY") : null,
    },
    {
      field: "updated",
      headerName: "Updated",
      width: 180,
      sortable: true,
      type: "date",
      valueFormatter: (params) =>
        params.value ? dayjs(params.value).format("DD/MM/YYYY") : null,
    },
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>Shipping Types</h1>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          component={Link}
          to="/admin/shippingtypes/add"
          startIcon={<AddPhotoAlternateIcon />}
        >
          Add Shipping Type
        </Button>
      </Grid>
      <Grid item xs={12}>
        <div style={{ height: 400, width: "100%" }}>
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

export default ShippingTypeMain;
