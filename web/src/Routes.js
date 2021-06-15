// // web/src/Routes.js

// import { Router, Route, Set } from '@redwoodjs/router'
// import PostsLayout from 'src/layouts/PostsLayout'
// import BlogLayout from 'src/layouts/BlogLayout'

// const Routes = () => {
  // return (
// // web/src/Routes.js

// <Router>
  // <Set wrap={BlogLayout}>
  // // web/src/Routes.js

    // <Route path="/blog-post/{id:Int}" page={BlogPostPage} name="blogPost" />
    // <Route path="/about" page={AboutPage} name="about" />
    // <Route path="/" page={HomePage} name="home" />
  // </Set>
  // <Route notfound page={NotFoundPage} />
// </Router>
  // )
// }

// export default Routes













/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "src/views/Dashboard/Dashboard.js";
import UserProfile from "src/views/UserProfile/UserProfile.js";
import TableList from "src/views/TableList/TableList.js";
import Typography from "src/views/Typography/Typography.js";
import Icons from "src/views/Icons/Icons.js";
import Maps from "src/views/Maps/Maps.js";
import NotificationsPage from "src/views/Notifications/Notifications.js";
import UpgradeToPro from "src/views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "src/views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl",
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin",
  },
];

export default dashboardRoutes;
