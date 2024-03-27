import { DataGrid } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarts } from "../../slice";
import { selectCartsState } from "../../slice/selectors";
import Grid from "@mui/material/Grid";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const CartsMain = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector(selectCartsState);
    
    useEffect(() => {
        dispatch(fetchCarts());
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
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <Grid container spacing={2}>
            <Grid item>
                <Button
                variant="contained"
                component={Link}
                to="/admin/carts/create"
                startIcon={<AddPhotoAlternateIcon />}
                >
                Add Cart
                </Button>
            </Grid>
            </Grid>
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

export default CartsMain;
