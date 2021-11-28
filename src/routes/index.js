import React, {useContext} from "react";

import AuthContext from "../contexts/auth";

import  Login  from '../pages/login';
import {AppRoutes} from "./routes";

const Routes = () => {
    const { logado } = useContext(AuthContext);

    return logado? <AppRoutes/>: <Login/>;
}
export default Routes;