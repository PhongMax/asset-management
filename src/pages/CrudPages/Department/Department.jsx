import React, { useState, useEffect } from "react";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import { Search } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";

import {
  Paper,
  makeStyles,
  withStyles,
  TableBody,
  TableRow,
  TableCell,
  InputAdornment,
} from "@material-ui/core";

import DepartmentForm from "./DepartmentForm";
import PageHeader from "../../../oftadeh-layouts/layout/PageHeader";
import useTable from "../commons/useTable";
import Controls from "../commons/Controls";
import Popup from "../commons/Popup";
import Notification from "../commons/Notification";
import ConfirmDialog from "../commons/ConfirmDialog";

import * as departmentService from "../../../services/departmentService";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
  newButton: {
    maxHeight: "50px",
    width: "75%",
  },
}));

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.selected,
    },
  },
}))(TableRow);

const headCells = [
  { id: "name", label: "Tên phòng ban" },
  { id: "description", label: "Mô tả" },
  { id: "createdAt", label: "Ngày tạo dữ liệu" },
  { id: "updatedAt", label: "Ngày cập nhật" },
  { id: "actions", label: "Actions", disableSorting: true },
];

export default function Department(props) {
  const { history } = props;
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);

  const [records, setRecords] = useState([]);

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  //=======================================   XỬ LÝ CALL API    ===========================================

  const getDepartmentAndUpdateToState = async () => {
    try {
      const { data: responseData } = await departmentService.getAllDepartment();
      const { data: department } = responseData;

      setRecords(department);
    } catch (ex) {
      console.log("===> lỗi ");
    }
  };

  const insertDepartment = async (department) => {
    try {
      await departmentService.insertDepartment(department);
      getDepartmentAndUpdateToState();
      setNotify({
        isOpen: true,
        message: "Thêm thành công",
        type: "success",
      });
    } catch (ex) {
      console.log("===> lỗi ");
    }
  };
  const updateDepartment = async (department) => {
    try {
      await departmentService.updateDepartment(department);
      getDepartmentAndUpdateToState();
      setNotify({
        isOpen: true,
        message: "Cập nhật thành công",
        type: "success",
      });
    } catch (ex) {
      console.log("===> lỗi ");
    }
  };
  const deleteDepartment = async (departmentId) => {
    const originalDepartmentRecord = records;
    const newDepartmentRecord = originalDepartmentRecord.filter(
      (x) => x.id != departmentId
    );
    setRecords(newDepartmentRecord);
    try {
      await departmentService.deleteDepartment(departmentId);
      setNotify({
        isOpen: true,
        message: "Đã xoá thành công",
        type: "error",
      });
    } catch (ex) {
      console.log("===> lỗi ");
      setRecords(originalDepartmentRecord);
    }
  };
  //===================================================================================

  useEffect(() => {
    getDepartmentAndUpdateToState();
  }, []);

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x.name.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const addOrEdit = (department, resetForm) => {
    if (department.id === 0) insertDepartment(department);
    else updateDepartment(department);

    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  const onDelete = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    deleteDepartment(id);
  };

  return (
    <>
      <PageHeader
        history={history}
        title="New department"
        subTitle="Form design with validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper elevator={3} className={classes.pageContent}>
        <div className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item sm={9}>
              <Controls.Input
                label="Tìm kiếm "
                className={classes.searchInput}
                // thực ra cái này có thèn order nó hứng bên kia rồi
                // ko phải import props other bên này
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                onChange={handleSearch}
              />
            </Grid>
            <Grid item sm={3}>
              <Controls.Button
                text="Thêm mới"
                variant="outlined"
                startIcon={<AddIcon />}
                className={classes.newButton}
                onClick={() => {
                  setOpenPopup(true);
                  setRecordForEdit(null);
                }}
              />
            </Grid>
          </Grid>
        </div>

        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <StyledTableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.createdAt}</TableCell>
                <TableCell>{item.updatedAt}</TableCell>
                <TableCell>
                  <Controls.ActionButton
                    color="primary"
                    onClick={() => {
                      openInPopup(item);
                    }}
                  >
                    <EditOutlinedIcon fontSize="small" />
                  </Controls.ActionButton>
                  <Controls.ActionButton
                    color="secondary"
                    onClick={() => {
                      setConfirmDialog({
                        isOpen: true,
                        title: "Bạn có chắc chắn xóa bản ghi này không?",
                        subTitle: "Bạn không thể hoàn tác thao tác này",
                        onConfirm: () => {
                          onDelete(item.id);
                        },
                      });
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </Controls.ActionButton>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        title="Biểu mẫu bộ phận"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        {/* // gọi department form ở trong popup nó sẽ hiện department đó ở trong popup */}
        <DepartmentForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
}
