import React from "react";
import {AppBar, Toolbar, Typography,Tabs,Tab} from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { useState } from "react";
import { NavLink } from "react-router-dom"

const Header = () => {
    const [value, setValue] = useState();
    return (
        <div>
            <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
                <Toolbar>
                <Typography>
                    <LibraryBooksOutlinedIcon/>
                    </Typography>
                    <Tabs 
                      sx={{ ml: "auto" }}
                     textColor="inherit"
                     indicatorColor="primary"
                     value={value} 
                     onChange={(e, val) => setValue(val)}>
                        <Tab LinkComponent={NavLink} to="/add" label="Add product"></Tab>
                        <Tab LinkComponent={NavLink} to="/books" label="Books"></Tab>
                        <Tab LinkComponent={NavLink} to="/about"  label="About us"></Tab>
                    </Tabs>
                    </Toolbar>
            </AppBar>
        </div>
    )
};
export default Header;