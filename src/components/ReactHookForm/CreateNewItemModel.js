import { yupResolver } from '@hookform/resolvers/yup';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { 
    Box,
    Modal, 
    Paper, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import * as yup  from "yup";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
  };

const CreateNewItemModel = ({
    openItemCreationModal,
    handleClose,
    tableDataList,
    setTableDataList,
    selectedRow,
    setSelectedRow,
}) => {
    const [tableDataItems, setTableDataItems] = useState([]);
    const schema = yup
    .object({
      itemName: yup.string().required(),
      itemCode: yup
        .string()
        .required("Required")
        .min(2, "Add Item Code")
        .matches(/^[A-Za-z0-9]+$/, "Only alphabets and numbers are allowed"),

      qty: yup.number().required(),
      price: yup.number().required(),
      discPercentage: yup.number().required(),
      discAmt: yup.number().required(),
      gstPercentage: yup.number().required(),
      gstAmt: yup.number().required(),
    })
    .required();
    const defaultValues = {
        itemName: "",
        itemCode: "",
        qty: "",
        price: "",
        totalAmt: "",
        discPercentage: "",
        discAmt: "",
        gstPercentage: "",
        gstAmt: "",
        netAmt: "",
        isActive: true,
      };
    
      const {
        control,
        watch,
        reset,
        setValue,
        register,
        trigger,
        handleSubmit,
        formState: { errors, isValid, isDirty },
      } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
        defaultValues, // Correct spelling here
      });
    
      // local variables
      let itemNameFocus = useRef();
      let itemCodeFocus = useRef();
    
      const [itemTableDataList, setItemTableDataList] = useState([]);
    
      let [
        itemName,
        itemCode,
        qty,
        price,
        totalAmt,
        discPercentage,
        discAmt,
        gstPercentage,
        gstAmt,
        netAmt,
      ] = watch([
        "itemName",
        "itemCode",
        "qty",
        "price",
        "totalAmt",
        "discPercentage",
        "discAmt",
        "gstPercentage",
        "gstAmt",
        "netAmt",
      ]);
    
      // functions
    
      //
      const onSubmit = (data) => {
        let tempArr = [...tableDataList];
        tempArr.push(data);
        setTableDataList(tempArr);
        console.log(data);
        handleClose();
      };
    
      useEffect(() => {
        if (openItemCreationModal === true) {
          itemNameFocus.current?.focus();
        }
      }, [openItemCreationModal]);
    
      function handleQtyChange(value) {
        setValue("totalAmt", Number(value) * Number(price));
        setValue("netAmt", Number(value) * Number(price));
      }
    
      function handleChangePrice(value) {
        setValue("totalAmt", Number(value) * Number(qty));
        setValue("netAmt", Number(value) * Number(qty));
      }
    
      function handleChangeDiscAmt(value) {
        setValue("discAmt", (Number(qty) * Number(price) * Number(value)) / 100);
      }
    
      function handleChangeDiscPercenet(value) {
        let totalAmout = Number(qty) * Number(price);
        let discPercentageValue = (Number(value) / totalAmout) * 100;
        setValue("discPercentage", discPercentageValue);
      }
    
      function handleChangeGstAmt(value) {
        let totalAmount = Number(qty) * Number(price);
        let gstAmt = (Number(totalAmount) * Number(value)) / 100;
        setValue("gstAmt", gstAmt);
      }
    
      function handleChangeGstPercentage(value) {
        let totalAmount = Number(qty) * Number(price);
        let gstPercent = (Number(value) * 100) / totalAmount;
        setValue("gstPercentage", gstPercent);
      }
    
      const handleAddTableItems = (data) => {
        if (isValid === true) {
          let tempArr = [...itemTableDataList];
          let tempObj = {
            id: Date.now(),
            itemName: itemName,
            itemCode: itemCode,
            qty: qty,
            price: price,
            totalAmt: totalAmt,
            discPercentage: discPercentage,
            discAmt: discAmt,
            gstPercentage: gstPercentage,
            gstAmt: gstAmt,
            netAmt: netAmt,
          };
          tempArr.push(tempObj);
    
          let tempFilterdData = tempArr.filter(
            (list) => list.itemName === itemName
          );
          if (tempFilterdData.length > 1) {
            alert("duplicate entry found!");
          } else {
            setItemTableDataList(tempArr);
          }
        } else {
          trigger();
        }
      };
      console.log("tableDataList", itemTableDataList);
  return (
    <div>
      <Modal
        open={openItemCreationModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="rounded-lg w-[70%] max-h-[70%] overflow-y-auto"
        >
          <div className="flex justify-between items-center py-1">
            <h1 className="font-semibold text-lg">Item Creation</h1>
            <button type="button" onClick={handleClose}>
              <HighlightOffIcon color="error" />
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-5 gap-2">
              <div ref={itemNameFocus}>
                <TextField
                  id="outlined-basic"
                  label="Item Name"
                  variant="outlined"
                  size="small"
                  {...register("itemName")}
                  error={errors.itemName}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      itemCodeFocus.current.focus();
                    }
                  }}
                  inputRef={itemNameFocus}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Item Code"
                  variant="outlined"
                  size="small"
                  {...register("itemCode")}
                  inputRef={itemCodeFocus}
                  error={errors.itemCode}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Quantity"
                  variant="outlined"
                  size="small"
                  {...register("qty")}
                  error={errors.qty}
                  onChange={(e) => {
                    handleQtyChange(e.target.value);
                  }}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  size="small"
                  {...register("price")}
                  error={errors.price}
                  onChange={(e) => {
                    handleChangePrice(e.target.value);
                  }}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Total Amt"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: totalAmt !== "" ? true : false,
                  }}
                  size="small"
                  {...register("totalAmt")}
                  error={errors.totalAmt}
                  disabled
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Disc%"
                  variant="outlined"
                  size="small"
                  {...register("discPercentage")}
                  InputLabelProps={{
                    shrink: discPercentage !== "" ? true : false,
                  }}
                  error={errors.discPercentage}
                  onChange={(e) => {
                    handleChangeDiscAmt(e.target.value);
                  }}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Disc Amt"
                  variant="outlined"
                  size="small"
                  {...register("discAmt")}
                  InputLabelProps={{
                    shrink: discAmt !== "" ? true : false,
                  }}
                  error={errors.discAmt}
                  onChange={(e) => {
                    handleChangeDiscPercenet(e.target.value);
                  }}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="GST %"
                  variant="outlined"
                  size="small"
                  {...register("gstPercentage")}
                  InputLabelProps={{
                    shrink: gstPercentage !== "" ? true : false,
                  }}
                  error={errors.gstPercentage}
                  onChange={(e) => {
                    handleChangeGstAmt(e.target.value);
                  }}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="GST Amt"
                  InputLabelProps={{
                    shrink: gstAmt !== "" ? true : false,
                  }}
                  variant="outlined"
                  size="small"
                  {...register("gstAmt")}
                  error={errors.gstAmt}
                  onChange={(e) => {
                    handleChangeGstPercentage(e.target.value);
                  }}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Net Amt"
                  variant="outlined"
                  size="small"
                  InputLabelProps={{
                    shrink: netAmt !== "" ? true : false,
                  }}
                  {...register("netAmt")}
                  error={errors.netAmt}
                  disabled
                />
              </div>
              {/* <div>
                <Controller
                  name="isActive"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox checked={field.value} {...field} />}
                        label="Active"
                      />
                    </FormGroup>
                  )}
                />
              </div> */}
            </div>
            <div className="flex justify-end space-x-2 mt-2">
              <button
                type="button"
                className="border border-red-600 text-red-600 px-3 py-1 rounded"
                onClick={() => {
                  reset();
                }}
              >
                Reset
              </button>

              <button
                type="button"
                className="bg-green-600 text-white px-3 py-1 rounded"
                onClick={handleAddTableItems}
              >
                Add
              </button>
            </div>
          </form>

          {itemTableDataList?.length > 0 ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Actions</TableCell>
                    <TableCell>Sr.No</TableCell>
                    <TableCell>Item Name</TableCell>
                    <TableCell>Item Code</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {itemTableDataList.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          paddingY: "2px",
                        }}
                      >
                        <div>
                          <button type="button">
                            <EditIcon color="primary" />
                          </button>
                          <DeleteIcon color="error" />
                        </div>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          paddingY: "2px",
                        }}
                      >
                        {index + 1}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          paddingY: "2px",
                        }}
                      >
                        {row.itemName}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          paddingY: "2px",
                        }}
                      >
                        {row.itemCode}
                      </TableCell>
                      <TableCell>
                        {row.isActive === true ? (
                          <span>Active</span>
                        ) : (
                          <span>InActive</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <p className="text-center my-40">No Records Found...</p>
          )}

          <div className="flex justify-end mt-2">
            <button
              type="button"
              className="bg-green-600 text-white px-3 py-1 rounded"
              onClick={() => {
                setTableDataList([...tableDataList, ...itemTableDataList]);
                handleClose();
              }}
            >
              Save
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default CreateNewItemModel