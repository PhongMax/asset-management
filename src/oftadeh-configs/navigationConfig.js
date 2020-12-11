const navigationConfig = [
  {
    id: "Main",
    title: "MAIN",
    type: "group",
    children: [
      {
        id: "trangchu",
        title: "Trang chủ",
        type: "item",
        icon: "apps",
        url: "/",
        exact: true,
      },
      {
        id: "taisan",
        title: "Tài sản",
        type: "collapse",
        icon: "source",
        badge: {
          title: "2",
          bg: "#525E8A",
          fg: "#FFFFFF",
        },
        children: [
          {
            id: "tscd",
            title: "Tài sản cố định",
            type: "item",
            url: "/pages/posts",
            exact: true,
          },
          {
            id: "ccdc",
            title: "Công cụ dụng cụ",
            type: "item",
            url: "/pages/posts/add-post",
            exact: true,
          },
        ],
      },
    
    ],
  },

  {
    id: "dd",
    title: "FORM ĐÃ LÀM",
    type: "group",
    children: [
      {
        id: "organization",
        title: "Tổ chức",
        type: "item",
        icon: "apartment",
        url: "/organization",
        exact: true,
      },
      {
        id: "calculationUnit",
        title: "Đơn vị tính",
        type: "item",
        icon: "graphic_eq",
        url: "/calculationUnit",
        exact: true,
      },
      {
        id: "group",
        title: "Nhóm Tài sản/CCDC",
        type: "item",
        icon: "widgets",
        url: "/group",
        exact: true,
      },
      {
        id: "category",
        title: "Danh mục",
        type: "item",
        icon: "category",
        url: "/category",
        exact: true,
      },
      
      {
        id: "product",
        title: "Sản phẩm",
        type: "item",
        icon: "ballot",
        url: "/product",
        exact: true,
      },
      {
        id: "campus",
        title: "Khuôn viên",
        type: "item",
        icon: "where_to_vote",
        url: "/campus",
        exact: true,
      },
     
      {
        id: "department",
        title: "Phòng ban",
        type: "item",
        icon: "location_city",
        url: "/department",
        exact: true,
      },
    
      {
        id: "9",
        title: "Vị trí",
        type: "item",
        icon: "gps_fixed",
        url: "/place",
        exact: true,
      },
      {
        id: "typeplace",
        title: "Kiểu vị trí",
        type: "item",
        icon: "filter_list",
        url: "/typeplace",
        exact: true,
      },
      {
        id: "10",
        title: "Đợt thanh lý",
        type: "item",
        icon: "settings_backup_restore",
        url: "/liquidate",
        exact: true,
      },
      {
        id: "11",
        title: "Đợt kiểm kê",
        type: "item",
        icon: "functions",
        url: "/inventory",
        exact: true,
      },
      {
        id: "AdditionalConfig",
        title: "Đợt bổ sung",
        type: "item",
        icon: "timer",
        url: "/additional",
        exact: true,
      },
      {
        id: "12",
        title: "Cơ sở vật chất",
        type: "item",
        icon: "home_work",
        url: "/material",
        exact: true,
      },
      {
        id: "kiemke1",
        title: "employees test",
        type: "item",
        icon: "functions",
        url: "/employees",
        exact: true,
      },
    
    ],
  },
  {
    id: "khac",
    title: "KHÁC",
    type: "group",
    children: [
      {
        id: "Authentication",
        title: "Authentication",
        type: "collapse",
        icon: "lock",
        children: [
          {
            id: "Login",
            title: "Login",
            type: "item",
            url: "/login",
            exact: true,
          },
          {
            id: "8",
            title: "User",
            type: "item",
            icon: "people_alt",
            url: "/user",
            exact: true,
          },
         
        ],
      },
    ],
  },
  {
    id: "divider-1",
    type: "divider",
  },
  {
    id: "about",
    title: "ABOUT",
    type: "group",
    children: [
      {
        id: "Team K&P",
        title: "Team K&P",
        type: "link",
        icon: "link",
        url: "https://github.com/PhongMax/asset-management",
        exact: true,
      },
    ],
  },
];

export default navigationConfig;
