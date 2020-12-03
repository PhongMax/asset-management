import React, { useState, useEffect } from "react";
import DomainTwoToneIcon from "@material-ui/icons/DomainTwoTone";
import { Search } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import { toast } from "react-toastify";
import Tooltip from "@material-ui/core/Tooltip";
import {
  Paper,
  makeStyles,
  withStyles,
  TableBody,
  TableRow,
  TableCell,
  Icon,
  InputAdornment,
} from "@material-ui/core";
import MaterialForm from "./MaterialForm";
import TransferMaterialForm from "../TransferMaterial/TransferMaterialForm";
import PageHeader from "../../../oftadeh-layouts/layout/PageHeader";
import useTable from "../commons/useTable";
import Controls from "../commons/Controls";
import Popup from "../commons/Popup";
import Notification from "../commons/Notification";
import ConfirmDialog from "../commons/ConfirmDialog";
import * as MaterialService from "../../../services/materialService";
import * as TransferMaterialService from "../../../services/transferMaterialService";
import * as utils from "../../../utils/Utils.js";

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
  { id: "credentialCode", label: "credentialCode" },
  { id: "status", label: "status" },
  { id: "timeStartDepreciation", label: "timeStartDepreciation" },
  { id: "actions", label: "Actions", disableSorting: true },
];

export default function Material(props) {
  const { history } = props;
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState([]);

  const [inforTransfer, setInforTransfer] = useState(null);

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupTransfer, setOpenPopupTransfer] = useState(false);
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

  // ======================================    XỬ LÝ DATA FROM SERVER ====================================
  const MaterialHandledToShow = (obj) => {
    const objConverted = obj.map((item) => {
      item.timeStartDepreciation = utils.convertDateTime(
        item.timeStartDepreciation
      );

      const aditionalProps = {
        userId: item.additional.user.id,
        productId: item.product.id,
        placeId: item.currentPlace && item.currentPlace.id,
        additionalId: item.additional.id,
      };

      return Object.assign(item, aditionalProps);
    });

    return objConverted;
  };

  const MaterialHandledToInsert = (obj) => {
    const temp = {
      credentialCode: obj.credentialCode,
      status: obj.status,
      allocationDuration: obj.allocationDuration,
      haveInclude: obj.haveInclude,
      timeStartDepreciation: obj.timeStartDepreciation,
      parentCode: obj.parentCode,
      embedded: {
        additionalId: obj.additionalId,
        productId: obj.productId,
        placeId: obj.placeId,
        userId: obj.userId,
      },
    };
    return temp;
  };

  const MaterialHandledToUpdate = (obj) => {
    const temp = {
      id: obj.id,
      credentialCode: obj.credentialCode,
      status: obj.status,
      allocationDuration: obj.allocationDuration,
      haveInclude: obj.haveInclude,
      timeStartDepreciation: obj.timeStartDepreciation,
      parentCode: obj.parentCode,
      embedded: {
        additionalId: obj.additionalId,
        productId: obj.productId,
        placeId: obj.placeId,
        userId: obj.userId,
      },
    };

    return temp;
  };

  const TransferMaterialHandledToInsert = (obj) => {
    const temp = {
      time: obj.time,
      reason: obj.reason,
      embedded: {
        placeFromId: obj.placeFromId,
        placeTargetId: obj.placeTargetId,
        materialId: obj.materialId,
        userId: obj.userId,
      },
    };

    return temp;
  };

  //=======================================   XỬ LÝ CALL API    ===========================================
  const getMaterialAndUpdateToState = async () => {
    try {
      const { data: responseData } = await MaterialService.getAllMaterial();
      const { data: Material } = responseData;
      setRecords(MaterialHandledToShow(Material));
    } catch (ex) {
      toast.error("Errors: Lỗi lấy dữ liệu ");
    }
  };

  const insertMaterial = async (Material) => {
    try {
      await MaterialService.insertMaterial(MaterialHandledToInsert(Material));
      getMaterialAndUpdateToState();
      setNotify({
        isOpen: true,
        message: "Thêm thành công",
        type: "success",
      });
    } catch (ex) {
      toast.error("Errors: Lỗi thêm mới dữ liệu ");
    }
  };
  const insertTransferMaterial = async (transferedMaterial) => {
    try {
      await TransferMaterialService.insertTransferMaterial(
        TransferMaterialHandledToInsert(transferedMaterial)
      );
      getMaterialAndUpdateToState();
      setNotify({
        isOpen: true,
        message: "Thao tác điều chuyển thành công",
        type: "success",
      });
    } catch (ex) {
      toast.error("Errors: Điều chuyển thất bại ");
    }
  };

  const updateMaterial = async (Material) => {
    try {
      await MaterialService.updateMaterial(MaterialHandledToUpdate(Material));
      getMaterialAndUpdateToState();
      setNotify({
        isOpen: true,
        message: "Cập nhật thành công",
        type: "success",
      });
    } catch (ex) {
      toast.error("Errors: Lỗi cập nhật dữ liệu ");
    }
  };

  const deleteMaterial = async (MaterialId) => {
    const originalMaterialRecord = records;
    const newMaterialRecord = originalMaterialRecord.filter(
      (x) => x.id !== MaterialId
    );
    setRecords(newMaterialRecord);
    try {
      await MaterialService.deleteMaterial(MaterialId);
      setNotify({
        isOpen: true,
        message: "Đã xoá thành công",
        type: "error",
      });
    } catch (ex) {
      toast.error("Errors: Lỗi xóa dữ liệu ");
      setRecords(originalMaterialRecord);
    }
  };
  //===================================================================================

  useEffect(getMaterialAndUpdateToState, []);

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

  const addOrEdit = (Material, resetForm) => {
    if (Material.id === 0) insertMaterial(Material);
    else updateMaterial(Material);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
  };

  const addTransferMaterial = (transferedMaterial, resetForm) => {
    insertTransferMaterial(transferedMaterial);
    resetForm();

    setOpenPopupTransfer(false);
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  const openInPopupTransfer = (item) => {
    setInforTransfer(item);
    setOpenPopupTransfer(true);
  };
  const onDelete = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    deleteMaterial(id);
  };

  return (
    <>
      <PageHeader
        history={history}
        title="Phòng ban"
        subTitle="Tất cả các phòng ban mà bạn hiện đang quản lý"
        icon={<DomainTwoToneIcon fontSize="large" />}
      />
      <Paper elevator={3} className={classes.pageContent}>
        <div className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item sm={9}>
              <Controls.Input
                label="Tìm kiếm "
                className={classes.searchInput}
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
                <TableCell>{item.credentialCode}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.timeStartDepreciation}</TableCell>
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

                  <Controls.ActionButton
                    color="primary"
                    onClick={() => {
                      openInPopupTransfer(item);
                    }}
                  >
                    <Tooltip title="Điều chuyển" arrow>
                      <Icon fontSize="small">directions</Icon>
                    </Tooltip>
                  </Controls.ActionButton>
                  <Controls.ActionButton color="primary">
                    <Tooltip title="Thanh lý" arrow>
                      <Icon fontSize="small">gavel</Icon>
                    </Tooltip>
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
        <MaterialForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>

      <Popup
        title="Điều chuyển xxx "
        openPopup={openPopupTransfer}
        setOpenPopup={setOpenPopupTransfer}
      >
        <TransferMaterialForm
          inforTransfer={inforTransfer}
          addTransferMaterial={addTransferMaterial}
        />
      </Popup>

      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
}
