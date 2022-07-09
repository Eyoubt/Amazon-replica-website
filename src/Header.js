import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Header() {
  const [{ basket, user }] = useStateValue();
  const [select, setSelect] = useState("");
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  console.log(user);
  const handleChange = (event) => {
    setSelect(event.target.value);
  };
  return (
    <div>
      <div className="header">
        <Link to="/">
          <img
            className="header_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>

        <div className="header_search">
          {/* <FormControl
            className="box"
            sx={{ m: 0, minWidth: 65, minHeight: 34 }}
          >
            <Select
              className="select"
              value={select}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="" className="menu">
                <em>All</em>
              </MenuItem>
              <MenuItem value="Alexa Skills" className="menu">
                Alexa Skills
              </MenuItem>
              <MenuItem value="Amazon Devices" className="menu">
                Amazon Devices
              </MenuItem>
              <MenuItem value="Amazon Fresh" className="menu">
                Amazon Fresh
              </MenuItem>
              <MenuItem value="Amazon Pharmacy" className="menu">
                Amazon Pharmacy
              </MenuItem>
              <MenuItem value="Amazon Warehouse" className="menu">
                Amazon Warehouse
              </MenuItem>
              <MenuItem value="Appliances" className="menu">
                Appliances
              </MenuItem>
              <MenuItem value="Appliances" className="menu">
                Books
              </MenuItem>
              <MenuItem value="Appliances" className="menu">
                Apps and Games
              </MenuItem>
              <MenuItem value="Aws courses" className="menu">
                AWS courses
              </MenuItem>
            </Select>
          </FormControl> */}
          <input className="header_searchInput" type="text"></input>
          <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_nav">
          <Link to={!user && "/login"}>
            <div className="header_option" onClick={handleAuthentication}>
              <span className="header_optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="header_optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders">
            <div className="header_option">
              <span className="header_optionLineOne">Returns</span>
              <span className="header_optionLineTwo">& Orders</span>
            </div>
          </Link>

          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header_optionBasket ">
              <ShoppingBasketIcon />
              <span className="header_optionLineTwo header_basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="nav">
        {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="small"
              edge="left"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              All
            </Typography>
          </Toolbar>
        </AppBar>
      </Box> */}

        <ul>
          <li>Buy again</li>
          <li>Shopper Toolkit</li>
          <li>Health & Household</li>
          <li>Groceries</li>
          <li>Pharmacy</li>
          <li>Beauty & Personal care</li>
          <li>Coupons</li>
          <li>Amazon Basics</li>
          <li>Home Improvement</li>
          <li>Pet Supplies</li>
          <li>Amazon Launchpad</li>
          <li>Livestreams</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
