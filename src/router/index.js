import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AppRoutes } from "./routes";
import PrivateRouter from "./privateRouter";

import {
  NotFound,
  Home,
  Login,
  Test,
  Lead,
  Sample,
  Example,
  Dashboard,
  NewDashboard,
  SearchFunc,
  UserManagement,
  Announcement,
} from './../screens';


const RouterApp = (props) => {

  return (
    <BrowserRouter>
      <Routes>

        {/* Home Route */}
        <Route path={AppRoutes.home} element={
          <PrivateRouter path={AppRoutes.home}>
            <Home />
          </PrivateRouter>
        } />

        <Route path={AppRoutes.lead} element={<Lead />} />
        <Route path={AppRoutes.test} element={<Test />} />
        <Route path={AppRoutes.sample} element={<Sample />} />
        <Route path={AppRoutes.example} element={<Example />} />
        <Route path={AppRoutes.dashboard} element={<Dashboard />} />
        <Route path={AppRoutes.newDashboard} element={<NewDashboard />} />
        <Route path={AppRoutes.search} element={<SearchFunc />} />
        <Route path={AppRoutes.userManagement} element={<UserManagement />} />
        <Route path={AppRoutes.multipleImage} element={<Announcement />} />

        







        {/* Login Route */}
        <Route path={AppRoutes.login} element={<Login />} />

        {/* For unknow/non-defined path */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
