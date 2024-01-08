import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

//Layouts
import NonAuthLayout from "../Layouts/NonAuthLayout";
import VerticalLayout from "../Layouts/index";

//routes
import { routes, publicRoutes } from "./allRoutes";
import { AuthProtected } from './AuthProtected';
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

import { useNavigate } from 'react-router-dom';

const Index = () => {

    const navigate = useNavigate();


    const logoutData = createSelector(
        (state) => state.Login.isUserLogout,
        (isUserLogout) => isUserLogout
    );
    // Inside your component
    const isUserLogout = useSelector(logoutData);

    useEffect(() => {
        if (isUserLogout) {
            console.log(isUserLogout);
            navigate('/login')
        }
    }, [])

    return (
        <React.Fragment>
            <Routes>
                <Route>
                    {publicRoutes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={
                                <NonAuthLayout>
                                    {route.component}
                                </NonAuthLayout>
                            }
                            key={idx}
                            exact={true}
                        />
                    ))}
                </Route>

                <Route>
                    {routes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={
                                <AuthProtected>
                                    <VerticalLayout>{route.component}</VerticalLayout>
                                </AuthProtected>}
                            key={idx}
                            exact={true}
                        />
                    ))}
                </Route>
            </Routes>
        </React.Fragment>
    );
};

export default Index;