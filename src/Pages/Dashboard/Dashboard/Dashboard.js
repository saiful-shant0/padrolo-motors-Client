import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Divider } from '@mui/material';

import {

    Switch,
    Link,

    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProduct from '../ManageProduct/ManageProduct';
import AddProduct from '../AddProduct/AddProduct';
import useAuth from '../../../hooks/useAuth'
import Myorders from '../Myorders/Myorders';
import MaleAdmin from '../MakeAdmin/MaleAdmin';
import AdminRoute from '../../LogIn/AdminRote/AdminRoute';
import PrivateRoute from '../../LogIn/PrivateRoute/PrivateRoute';

const drawerWidth = 200;

function Dashboard(props) {
    const { user, admin, logOut } = useAuth()

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>

            <Toolbar><h5>Padrolo Motos</h5></Toolbar>

            <Divider />
            <Link to="/home">
                <Button color="inherit">Go to Home</Button>
            </Link>
            <Link to={`${url}`}>
                <Button color="inherit">Dashboard</Button>
            </Link>
            <List>
                <Box>
                    {!admin && <Box>
                        <Link to={`${url}/myorders`}>
                            <Button color="inherit">my orders </Button>
                        </Link>
                        <Link to={`${url}/payment`}>
                            <Button color="inherit">bill payment </Button>
                        </Link>
                        <Link to={`${url}/review`}>
                            <Button color="inherit">Shop Reviews</Button>
                        </Link>
                    </Box>


                    }

                    {admin && <Box>
                        <Link to={`${url}/manageOrdes`}>
                            <Button color="inherit">Manage All Orders</Button>
                        </Link>
                        <Link to={`${url}/makeAdmin`}>
                            <Button color="inherit">Make Admin</Button>
                        </Link>
                        <Link to={`${url}/addBike`}>
                            <Button color="inherit">Add Product</Button>
                        </Link>
                        <Link to={`${url}/manageProduct`}>
                            <Button color="inherit">Manage Products</Button>
                        </Link>
                    </Box>}
                    {user && <Link to='/login'>
                        <Button onClick={logOut} color="inherit">Log Out</Button>
                    </Link>}
                </Box>

            </List>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <PrivateRoute exact path={path}>
                        <DashboardHome></DashboardHome>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/payment`}>
                        <Payment></Payment>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/review`}>
                        <Review></Review>
                    </PrivateRoute>
                    <AdminRoute path={`${path}/manageOrdes`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addBike`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProduct`}>
                        <ManageProduct></ManageProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MaleAdmin></MaleAdmin>
                    </AdminRoute>
                    <PrivateRoute path={`${path}/myorders`}>
                        <Myorders></Myorders>
                    </PrivateRoute>

                </Switch>


            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
