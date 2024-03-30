import { DataGrid } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, editProduct } from "../../../products/slice";
import { selectProductState } from "../../../products/slice/selectors";
import Grid from "@mui/material/Grid";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import Loader from "../../../../components/Loader";
import dayjs from "../../../../utils/day";

const GalleryMain = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(selectProductState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleEditCellChange = (params, origParams) => {
    // change the value of the edited cell to utc date time if column is date
    if (!origParams.deleted && params.deleted) {
      params.deleted = dayjs(params.deleted).utc().format();
    }
    if (!origParams.soldDate && params.soldDate) {
      params.soldDate = dayjs(params.soldDate).utc().format();
    }
    if (origParams.isSold === false && params.isSold === true) {
      params.soldDate = dayjs().utc().format();
    }
    dispatch(editProduct(params));
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
      field: "price",
      headerName: "Price",
      width: 120,
      sortable: true,
      editable: true,
      type: "number",
      step: "0.01",
    },
    {
      field: "description",
      headerName: "Description",
      width: 200,
      sortable: true,
      editable: true,
      type: "string",
    },
    { field: "imageUrl", headerName: "Image URL", width: 200, type: "string" },
    {
      field: "weight",
      headerName: "Weight",
      width: 120,
      sortable: true,
      editable: true,
      type: "number",
      step: "0.01",
    },
    {
      field: "width",
      headerName: "Width",
      width: 120,
      sortable: true,
      editable: true,
      type: "number",
      step: "0.01",
    },
    {
      field: "depth",
      headerName: "Depth",
      width: 120,
      sortable: true,
      editable: true,
      type: "number",
      step: "0.01",
    },
    {
      field: "height",
      headerName: "Height",
      width: 120,
      sortable: true,
      editable: true,
      type: "number",
      step: "0.01",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 120,
      sortable: true,
      type: "number",
      step: "1",
    },
    {
      field: "created",
      headerName: "Created",
      width: 180,
      sortable: true,
      type: "dateTime",
      valueFormatter: (params) =>
        params.value ? dayjs(params.value).format("lll") : null,
    },
    {
      field: "updated",
      headerName: "Updated",
      width: 180,
      sortable: true,
      type: "dateTime",
      valueFormatter: (params) =>
        params.value ? dayjs(params.value).format("lll") : null,
    },
    {
      field: "isSold",
      headerName: "Sold",
      width: 120,
      sortable: true,
      editable: true,
      type: "boolean",
    },
    {
      field: "soldDate",
      headerName: "Sold Date",
      width: 180,
      sortable: true,
      editable: true,
      type: "dateTime",
      valueFormatter: (params) =>
        params.value ? dayjs(params.value).format("lll") : null,
    },
    {
      field: "deleted",
      headerName: "Deleted",
      width: 180,
      sortable: true,
      editable: true,
      type: "dateTime",
      valueFormatter: (params) =>
        params.value ? dayjs(params.value).format("lll") : null,
    },
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <Button
          component={Link}
          variant="contained"
          startIcon={<AdminPanelSettingsIcon />}
          sx={{ mb: 2, mr: 2 }}
          to="/admin"
        >
          Back to Dashboard
        </Button>
        <Button
          component={Link}
          variant="contained"
          startIcon={<AddPhotoAlternateIcon />}
          sx={{ mb: 2 }}
          to="/admin/gallery/new"
        >
          Add New Item
        </Button>
      </Grid>
      <Grid item xs={12}>
        <div style={{ height: 550, width: "100%" }}>
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
      <Grid item xs={12}>
        {loading && <Loader />}
        {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
      </Grid>
    </Grid>
  );
};

export default GalleryMain;
