import dashboardIcon from "~/assets/img/icon/Dashboard.svg";
import dashboardActiveIcon from "~/assets/img/icon/Dashboard-active.svg";
import reportsIcon from "~/assets/img/icon/Reports.svg";
import reportsActiveIcon from "~/assets/img/icon/Reports-active.svg";
import productIcon from "~/assets/img/icon/Product.svg";
import productActiveIcon from "~/assets/img/icon/Product-active.svg";
import ordersIcon from "~/assets/img/icon/Orders_Leftside.svg";
import ordersActiveIcon from "~/assets/img/icon/Orders_Leftside-active.svg";
import statisticsIcon from "~/assets/img/icon/Statistics.svg";
import statisticsActiveIcon from "~/assets/img/icon/Statistics-active.svg";
import settingsIcon from "~/assets/img/icon/Settings_Leftside.svg";
import settingsActiveIcon from "~/assets/img/icon/Settings_Leftside-active.svg";
import othersIcon from "~/assets/img/icon/Others_Leftside.svg";
import othersActiveIcon from "~/assets/img/icon/Others_Leftside-active.svg";

export const menuItems = [
  {
    id: 1,
    label: "menu.dashboard",
    src: dashboardIcon,
    srcActive: dashboardActiveIcon,
    role: ['user'],
    to: '/',
  },
  {
    id: 2,
    label: "menu.reports",
    src: reportsIcon,
    srcActive: reportsActiveIcon,
    role: ['user'],
    to: '/reports',
  },
  {
    id: 3,
    label: "menu.products",
    src: productIcon,
    srcActive: productActiveIcon,
    role: ['user'],
    to: '/products',
  },
  {
    id: 4,
    label: "menu.Orders",
    src: ordersIcon,
    srcActive: ordersActiveIcon,
    role: ['user'],
    isMenuCollapsed: false,
    path:'orders',
    subItems: [
      {
        id: 301,
        label: 'menu.Orders',
        to: '/orders',
      },
      {
        id: 302,
        label: 'menu.abandoned',
        to: '/orders/abandoned'
      },
      {
        id: 303,
        label: 'menu.archived',
        to: '/orders/archived'
      },
  ]
  },
  {
    id: 5,
    label: "menu.Statistics",
    src: statisticsIcon,
    srcActive: statisticsActiveIcon,
    role: ['user'],
    to: '/statistics',
  },
  //   {
//       id: 6,
//       label: "menu.tools",
//       //src: "/img/icon/Product.svg",
//       icon: "ri-add-circle-fill",
//       role:'user',
//       isMenuCollapsed: false,
//       path:'tools',
//       subItems: [
//           {
//             id: 5,
//             label: 'menu.customDomains',
//             to: '/tools/custom-domains'
//           },
//           {
//             id: 6,
//             label: 'menu.teamMembers',
//             to: '/tools/team-members'
//           },
//       ]
//   },
  {
    id: 7,
    label: "menu.settings",
    src: settingsIcon,
    srcActive: settingsActiveIcon,
    role: ['user'],
    isMenuCollapsed: false,
    path:'settings',
    subItems: [
      {
        id: 701,
        label: 'menu.accountSettings',
        to: '/settings/account'
      },
      {
        id: 702,
        label: 'menu.notifications',
        to: '/settings/notifications'
      },
      // {
      //   id: 106,
      //   label: 'menu.orderCreation',
      //   to: '/settings/order'
      // },
      {
        id: 603,
        label: 'menu.customDomains',
        to: '/settings/domains'
      },
      {
        id: 511,
        label: 'menu.tracking',
        to: '/settings/tracking'
      },
      {
        id: 49,
        label: 'menu.followUp',
        to: '/settings/followUp'
      },
      {
        id: 147,
        label: 'menu.balance',
        to: '/settings/balance'
    },
  ]
  },
  {
    id: 8,
    label: "menu.others",
    src: othersIcon,
    srcActive: othersActiveIcon,
    role: ['user'],
    isMenuCollapsed: false,
    path:'others',
    subItems: [
      {
          id: 801,
          label: 'menu.payments',
          to: '/others/payments'
      },
      {
          id: 802,
          label: 'menu.productReports',
          to: '/others/product-reports'
      },
      {
          id: 803,
          label: 'menu.teamMembers',
          to: '/others/team-members'
        },
      {
          id: 804,
          label: 'menu.inventory',
          to: '/others/inventory'
        },
      {
          id: 805,
          label: 'menu.transactions',
          to: '/others/transactions'
        },
    ]
  },
  {
    id: 9,
    label: "menu.admindashboard",
    src: dashboardIcon,
    srcActive: dashboardActiveIcon,
    to: '/admin/',
    role: ['admin', 'superadmin'],
  },
    // {
  //   id: 19,
  //   label: "menu.affiliate",
  //   src: require("~/assets/img/icon/Affiliate_Leftside.svg"),
  //   srcActive: require("~/assets/img/icon/Affiliate_Leftside-active.svg"),
  //   role:['user'],
  //   isBeta: true,
  //   path:'affiliate',
  //   //icon: "ri-stack-line",
  //   isMenuCollapsed: false,
  //   subItems: [
  //     {
  //         id: 1901,
  //         label: 'menu.commission',
  //         to: '/affiliate/commission',
  //         isMenuCollapsed: false,
  //         subItems: [
  //           {
  //               id: 19011,
  //               label: 'menu.commission',
  //               to: '/affiliate/commission',
  //           },
  //           {
  //             id: 19012,
  //             label: 'menu.member',
  //             to: '/affiliate/member'
  //           },
  //           {
  //               id: 19013,
  //               label: 'menu.product',
  //               to: '/affiliate/product'
  //           },
  //         ]
  //     },
  //     {
  //         id: 1904,
  //         label: 'menu.affiliate',
  //         to: '/affiliate/affiliate',
  //         isMenuCollapsed: false,
  //         subItems: [
  //           {
  //               id: 19041,
  //               label: 'menu.earnings',
  //               to: '/affiliate/earnings'
  //           },
  //           {
  //               id: 19042,
  //               label: 'menu.orderList',
  //               to: '/affiliate/order-list'
  //           },
  //           {
  //               id: 19043,
  //               label: 'menu.productList',
  //               to: '/affiliate/product-list'
  //           },
  //         ]
  //     },
  //   ]
  // },
];


// export const menuItems11 = [

//   {
//     id: 10,
//     label: "menu.adminUserManagement",
//     src: require("~/assets/img/icon/Reports.svg"),
//     srcActive: require("~/assets/img/icon/Reports-active.svg"),
//     to: '/admin/user-management',
//     role:['admin', 'superadmin'],
//   },
//   {
//     id: 11,
//     label: "menu.adminSubUserManagement",
//     src: require("~/assets/img/icon/Reports.svg"),
//     srcActive: require("~/assets/img/icon/Reports-active.svg"),
//     to: '/admin/sub-users',
//     role:['admin', 'superadmin'],
//   },
//   {
//     id: 12,
//     label: "menu.adminproducts",
//     src: require("~/assets/img/icon/Product.svg"),
//     srcActive: require("~/assets/img/icon/Product-active.svg"),
//     to: '/admin/products',
//     role:['admin', 'superadmin'],
//   },
//   {
//     id: 13,
//     label: "menu.adminOrders",
//     src:  require("~/assets/img/icon/Orders_Leftside.svg"),
//     srcActive:  require("~/assets/img/icon/Orders_Leftside-active.svg"),
//     to: '/admin/orders',
//     role:['admin', 'superadmin'],
//   },
//   {
//     id: 14,
//     label: "menu.adminShippingOrders",
//     src:  require("~/assets/img/icon/Orders_Leftside.svg"),
//     srcActive:  require("~/assets/img/icon/Orders_Leftside-active.svg"),
//     to: '/admin/shippingOrder',
//     role:['admin', 'superadmin'],
//   },
//   {
//     id: 15,
//     label: "menu.adminShippingBatch",
//     src: require("~/assets/img/icon/Statistics.svg"),
//     srcActive: require("~/assets/img/icon/Statistics-active.svg"),
//     to: '/admin/shippingBatch',
//     role:['admin', 'superadmin'],
//   },
//   {
//     id: 16,
//     label: "menu.adminTransactions",
//     src: require("~/assets/img/icon/Others_Leftside.svg"),
//     srcActive: require("~/assets/img/icon/Others_Leftside-active.svg"),
//     to: '/admin/transaction',
//     role:['admin', 'superadmin'],
//   },
//   {
//     id: 17,
//     label: "menu.adminFeedback",
//     src: require("~/assets/img/icon/Others_Leftside.svg"),
//     srcActive: require("~/assets/img/icon/Others_Leftside-active.svg"),
//     to: '/admin/feedback',
//     role:['admin', 'superadmin'],
//   },
//   {
//     id: 18,
//     label: "admin.administrator",
//     src: require("~/assets/img/icon/Others_Leftside.svg"),
//     srcActive: require("~/assets/img/icon/Others_Leftside-active.svg"),
//     role: ['superadmin'],
//     isMenuCollapsed: false,
//     subItems: [
//         {
//             id: 19,
//             label: 'admin.roles',
//             to: '/admin/roles'
//         },
//         {
//             id: 20,
//             label: 'admin.usersList',
//             to: '/admin/admins'
//         },
//     ]
// },
// ];


// export const menuItems1155 = [
//   {
//     id: 1,
//     label: "menu.dashboard",
//     src: require("~/assets/img/icon/Dashboard.svg"),
//     srcActive:require("~/assets/img/icon/Dashboard-active.svg"),
//     role:['user'],
//     //icon: "ri-dashboard-line",
//     to: '/',
//   },
//   {
//     id: 2,
//     label: "menu.reports",
//     src: require("~/assets/img/icon/Reports.svg"),
//     srcActive: require("~/assets/img/icon/Reports-active.svg"),
//     role:['user'],
//     to: '/reports',
//   },
//   {
//     id: 3,
//     label: "menu.products",
//     src: require("~/assets/img/icon/Product.svg"),
//     srcActive: require("~/assets/img/icon/Product-active.svg"),
//     role:['user'],
//     //icon: "ri-shopping-cart-line",
//     to: '/products',
//   },
//   {
//     id: 4,
//     label: "menu.Orders",
//     src:  require("~/assets/img/icon/Orders_Leftside.svg"),
//     srcActive:  require("~/assets/img/icon/Orders_Leftside-active.svg"),
//     role:['user'],
//     //icon: "ri-archive-line",
//     isMenuCollapsed: false,
//     subItems: [
//         {
//           id: 301,
//           label: 'menu.Orders',
//           to: '/orders',
//         },
//         {
//           id: 302,
//           label: 'menu.abandoned',
//           to: '/orders/abandoned'
//         },
//         {
//           id: 303,
//           label: 'menu.archived',
//           to: '/orders/archived'
//         },
//     ]
//   },
//   {
//     id: 5,
//     label: "menu.Statistics",
//     src: require("~/assets/img/icon/Statistics.svg"),
//     srcActive: require("~/assets/img/icon/Statistics-active.svg"),
//     role:['user'],
//     //icon: "ri-bar-chart-box-line",
//     to: '/statistics',
//   },
// //   {
// //       id: 6,
// //       label: "menu.tools",
// //       //src: "/img/icon/Product.svg",
// //       icon: "ri-add-circle-fill",
// //       role:'user',
// //       isMenuCollapsed: false,
// //       subItems: [
// //           {
// //             id: 5,
// //             label: 'menu.customDomains',
// //             to: '/tools/custom-domains'
// //           },
// //           {
// //             id: 6,
// //             label: 'menu.teamMembers',
// //             to: '/tools/team-members'
// //           },
// //       ]
// //   },
//   {
//     id: 7,
//     label: "menu.settings",
//     src: require("~/assets/img/icon/Settings_Leftside.svg"),
//     srcActive: require("~/assets/img/icon/Settings_Leftside-active.svg"),
//     role:['user'],
//     //icon: "ri-settings-3-line",
//     isMenuCollapsed: false,
//     subItems: [
//         {
//           id: 701,
//           label: 'menu.accountSettings',
//           to: '/settings/account'
//         },
//         {
//           id: 702,
//           label: 'menu.notifications',
//           to: '/settings/notifications'
//         },
//         // {
//         //   id: 106,
//         //   label: 'menu.orderCreation',
//         //   to: '/settings/order'
//         // },
//         {
//           id: 603,
//           label: 'menu.customDomains',
//           to: '/settings/domains'
//         },
//         {
//           id: 511,
//           label: 'menu.tracking',
//           to: '/settings/tracking'
//         },
//         {
//           id: 49,
//           label: 'menu.followUp',
//           to: '/settings/followUp'
//         },
//         {
//           id: 147,
//           label: 'menu.balance',
//           to: '/settings/balance'
//       },
//     ]
//   },
//   {
//     id: 8,
//     label: "menu.others",
//     src: require("~/assets/img/icon/Others_Leftside.svg"),
//     srcActive: require("~/assets/img/icon/Others_Leftside-active.svg"),
//     role:['user'],
//     //icon: "ri-stack-line",
//     isMenuCollapsed: false,
//     subItems: [
//       {
//           id: 801,
//           label: 'menu.payments',
//           to: '/others/payments'
//       },
//       {
//           id: 802,
//           label: 'menu.productReports',
//           to: '/others/product-reports'
//       },
//       {
//           id: 803,
//           label: 'menu.teamMembers',
//           to: '/others/team-members'
//         },
//       {
//           id: 804,
//           label: 'menu.inventory',
//           to: '/others/inventory'
//         },
//       {
//           id: 805,
//           label: 'menu.transactions',
//           to: '/others/transactions'
//         },
//     ]
//   },
//   // {
//   //   id: 19,
//   //   label: "menu.affiliate",
//   //   src: require("~/assets/img/icon/Affiliate_Leftside.svg"),
//   //   srcActive: require("~/assets/img/icon/Affiliate_Leftside-active.svg"),
//   //   role:['user'],
//   //   isBeta: true,
//   //   //icon: "ri-stack-line",
//   //   isMenuCollapsed: false,
//   //   subItems: [
//   //     {
//   //         id: 1901,
//   //         label: 'menu.commission',
//   //         to: '/affiliate/commission',
//   //         isMenuCollapsed: false,
//   //         subItems: [
//   //           {
//   //               id: 19011,
//   //               label: 'menu.commission',
//   //               to: '/affiliate/commission',
//   //           },
//   //           {
//   //             id: 19012,
//   //             label: 'menu.member',
//   //             to: '/affiliate/member'
//   //           },
//   //           {
//   //               id: 19013,
//   //               label: 'menu.product',
//   //               to: '/affiliate/product'
//   //           },
//   //         ]
//   //     },
//   //     {
//   //         id: 1904,
//   //         label: 'menu.affiliate',
//   //         to: '/affiliate/affiliate',
//   //         isMenuCollapsed: false,
//   //         subItems: [
//   //           {
//   //               id: 19041,
//   //               label: 'menu.earnings',
//   //               to: '/affiliate/earnings'
//   //           },
//   //           {
//   //               id: 19042,
//   //               label: 'menu.orderList',
//   //               to: '/affiliate/order-list'
//   //           },
//   //           {
//   //               id: 19043,
//   //               label: 'menu.productList',
//   //               to: '/affiliate/product-list'
//   //           },
//   //         ]
//   //     },
//   //   ]
//   // },
//   {
//     id: 9,
//     label: "menu.admindashboard",
//     src: require("~/assets/img/icon/Dashboard.svg"),
//     srcActive: require("~/assets/img/icon/Dashboard-active.svg"),
//     to: '/admin/',
//     role:['admin', 'superadmin'],
//   },
//   {
//     id: 10,
//     label: "menu.adminUserManagement",
//     src: require("~/assets/img/icon/Reports.svg"),
//     srcActive: require("~/assets/img/icon/Reports-active.svg"),
//     to: '/admin/user-management',
//     role:['admin', 'superadmin'],
//   },
//   {
//     id: 11,
//     label: "menu.adminSubUserManagement",
//     src: require("~/assets/img/icon/Reports.svg"),
//     srcActive: require("~/assets/img/icon/Reports-active.svg"),
//     to: '/admin/sub-users',
//     role:['admin', 'superadmin'],
//   },
//   {
//     id: 12,
//     label: "menu.adminproducts",
//     src: require("~/assets/img/icon/Product.svg"),
//     srcActive: require("~/assets/img/icon/Product-active.svg"),
//     to: '/admin/products',
//     role:['admin', 'superadmin'],
//   },
//   {
//     id: 13,
//     label: "menu.adminOrders",
//     src:  require("~/assets/img/icon/Orders_Leftside.svg"),
//     srcActive:  require("~/assets/img/icon/Orders_Leftside-active.svg"),
//     to: '/admin/orders',
//     role:['admin', 'superadmin'],
//   },
//   {
//     id: 14,
//     label: "menu.adminShippingOrders",
//     src:  require("~/assets/img/icon/Orders_Leftside.svg"),
//     srcActive:  require("~/assets/img/icon/Orders_Leftside-active.svg"),
//     to: '/admin/shippingOrder',
//     role:['admin', 'superadmin'],
//   },
//   {
//     id: 15,
//     label: "menu.adminShippingBatch",
//     src: require("~/assets/img/icon/Statistics.svg"),
//     srcActive: require("~/assets/img/icon/Statistics-active.svg"),
//     to: '/admin/shippingBatch',
//     role:['admin', 'superadmin'],
//   },
//   {
//     id: 16,
//     label: "menu.adminTransactions",
//     src: require("~/assets/img/icon/Others_Leftside.svg"),
//     srcActive: require("~/assets/img/icon/Others_Leftside-active.svg"),
//     to: '/admin/transaction',
//     role:['admin', 'superadmin'],
//   },
//   {
//     id: 17,
//     label: "menu.adminFeedback",
//     src: require("~/assets/img/icon/Others_Leftside.svg"),
//     srcActive: require("~/assets/img/icon/Others_Leftside-active.svg"),
//     to: '/admin/feedback',
//     role:['admin', 'superadmin'],
//   },
//   {
//     id: 18,
//     label: "admin.administrator",
//     src: require("~/assets/img/icon/Others_Leftside.svg"),
//     srcActive: require("~/assets/img/icon/Others_Leftside-active.svg"),
//     role: ['superadmin'],
//     isMenuCollapsed: false,
//     subItems: [
//         {
//             id: 19,
//             label: 'admin.roles',
//             to: '/admin/roles'
//         },
//         {
//             id: 20,
//             label: 'admin.usersList',
//             to: '/admin/admins'
//         },
//     ]
// },
// ];


