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
      {
        id: "vitri",
        title: "Vị trí",
        type: "item",
        icon: "location_on",
        url: "/pages/calendar",
        exact: true,
      },
      {
        id: "thanhly",
        title: "Thanh lý",
        type: "item",
        icon: "point_of_sale",
        url: "/pages/calendarx",
        exact: true,
      },
      {
        id: "nhansu",
        title: "Nhân sự",
        type: "item",
        icon: "people_alt",
        url: "/pages/calendars",
        exact: true,
      },
      {
        id: "bophan",
        title: "Bộ phận ",
        type: "item",
        icon: "apartment",
        url: "/pages/calendarxx",
        exact: true,
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
        title: "organization",
        type: "item",
        icon: "apps",
        url: "/organization",
        exact: true,
      },
      {
        id: "calculationUnit",
        title: "calculationUnit",
        type: "item",
        icon: "apps",
        url: "/calculationUnit",
        exact: true,
      },
      {
        id: "group",
        title: "group",
        type: "item",
        icon: "apps",
        url: "/group",
        exact: true,
      },
      {
        id: "category",
        title: "category",
        type: "item",
        icon: "apps",
        url: "/category",
        exact: true,
      },
      {
        id: "product",
        title: "product",
        type: "item",
        icon: "apps",
        url: "/product",
        exact: true,
      },
      {
        id: "campus",
        title: "campus",
        type: "item",
        icon: "apps",
        url: "/campus",
        exact: true,
      },
      {
        id: "typeplace",
        title: "typeplace",
        type: "item",
        icon: "apps",
        url: "/typeplace",
        exact: true,
      },
      {
        id: "department",
        title: "department",
        type: "item",
        icon: "apps",
        url: "/department",
        exact: true,
      },
      {
        id: "8",
        title: "user",
        type: "item",
        icon: "apps",
        url: "/user",
        exact: true,
      },
      {
        id: "9",
        title: "place",
        type: "item",
        icon: "apps",
        url: "/place",
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
            url: "/pages/auth/login",
            exact: true,
          },
          {
            id: "Register",
            title: "Register",
            type: "item",
            url: "/pages/auth/register",
            exact: true,
          },
        ],
      },
      {
        id: "kiemke",
        title: "Kiểm kê",
        type: "item",
        icon: "functions",
        url: "/test",
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
      {
        id: "kiemke111",
        title: "Department template",
        type: "item",
        icon: "functions",
        url: "/tesssst",
        exact: true,
      },

      {
        id: "ttts",
        title: "Tình trạng tài sản",
        type: "item",
        icon: "waves",
        url: "/pages/calendarxx",
        exact: true,
      },
      {
        id: "dmsd",
        title: "Định mức sử dụng",
        type: "item",
        icon: "all_inclusive",
        url: "/pages/calendarccc",
        exact: true,
      },
      {
        id: "bc",
        title: "Báo cáo",
        type: "item",
        icon: "poll",
        url: "/pages/about",
        exact: true,
      },
      {
        id: "Errors",
        title: "Errors và test chỗ này",
        type: "collapse",
        icon: "warning",
        children: [
          {
            id: "404",
            title: "404",
            type: "item",
            url: "/pages/errors/error-404",
            exact: true,
          },
          {
            id: "500",
            title: "500",
            type: "item",
            url: "/pages/errors/error-500",
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

  // {
  //   id: "pages",
  //   title: "Pages",
  //   type: "group",
  //   icon: "pages",
  //   children: [
  //     {
  //       id: "all pages",
  //       title: "Pages",
  //       type: "collapse",
  //       icon: "stars",
  //       badge: {
  //         title: "new",
  //         bg: "#525E8A",
  //         fg: "#FFFFFF",
  //       },
  //       children: [
  //         {
  //           id: "about",
  //           title: "About",
  //           type: "item",
  //           icon: "info",
  //           url: "/pages/about",
  //           exact: true,
  //         },
  //         {
  //           id: "contact",
  //           title: "Contact",
  //           type: "item",
  //           icon: "group",
  //           url: "/pages/contact",
  //           exact: true,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: "divider-2",
  //   type: "divider",
  // },
  // {
  //   id: "oftadeh-github",
  //   title: "Oftadeh Github",
  //   type: "link",
  //   icon: "link",
  //   url: "https://github.com/mohammadoftadeh",
  //   target: "_blank",
  //   badge: {
  //     title: "git",
  //     bg: "green",
  //     fg: "#FFFFFF",
  //   },
  // },
];

export default navigationConfig;
