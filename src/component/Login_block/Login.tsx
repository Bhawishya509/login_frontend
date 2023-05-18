import { useState, useEffect } from "react";
import { AiFillLinkedin } from "../../../node_modules/react-icons/ai";
import "./Login.css";
import Checkbox from "@mui/material/Checkbox";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";
import FlagIcon from "@mui/icons-material/Flag";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import ApartmentIcon from "@mui/icons-material/Apartment";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navi = useNavigate();
  interface datas {
    name: String;
    email: String;
    phone: String;
    links: String;
    country: String;
    state: String;
    city: String;
    pincode: String;
  }
  const [checked, setChecked] = useState(false);
  const [dataCollect, setdataCollect] = useState<datas>({
    name: "",
    email: "",
    phone: "",
    links: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
  });
  const handleChange = (event: any) => {
    setChecked(event.target.checked);
  };

  const cha = (e: any) => {
    const { name, value } = e.target;

    setdataCollect((old_data) => {
      return { ...old_data, [name]: value };
    });
  };

  const sumbits = async(e: any) => {
    e.preventDefault()
    
    let ab=await axios.post("https://loginbackend-v2oi.onrender.com/register", {
      name: dataCollect.name,
      email: dataCollect.email,
      phone: dataCollect.phone,
      links: dataCollect.links,
      country: dataCollect.country,
      state: dataCollect.state,
      city: dataCollect.city,
      pincode:dataCollect.pincode
    })

    if (ab.data)
    {

       navi("/Signup")
    
      }
  };
  useEffect(() => {}, []);
  return (
    <>
      <main className="login_box_main_block">
        <form onSubmit={sumbits} method="post">
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment" color="success">
              name
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle className="icon_account" />
                </InputAdornment>
              }
              color="success"
              size="medium"
              value={dataCollect.name}
              name="name"
              onChange={cha}
              required
            />
          </FormControl>

          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment" color="success">
              Email
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              type="email"
              startAdornment={
                <InputAdornment position="start">
                  <AttachEmailIcon className="icon_email" />
                </InputAdornment>
              }
              color="success"
              size="medium"
              value={dataCollect.email}
              onChange={cha}
              name="email"
              required
            />
          </FormControl>

          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment" color="success">
              Phone no
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <DeviceUnknownIcon className="icon_mobile" />
                </InputAdornment>
              }
              color="success"
              size="medium"
              value={dataCollect.phone}
              onChange={cha}
              name="phone"
              required
            />
          </FormControl>

          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment" color="success">
              Linkdin{" "}
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AiFillLinkedin className="icon_linkdin" />
                </InputAdornment>
              }
              color="success"
              size="medium"
              value={dataCollect.links}
              onChange={cha}
              name="links"
              required
            />
          </FormControl>

          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment" color="success">
              County
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <FlagIcon className="icon_flag" />
                </InputAdornment>
              }
              color="success"
              size="medium"
              value={dataCollect.country}
              onChange={cha}
              name="country"
              required
            />
          </FormControl>

          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment" color="success">
              state
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <FmdGoodIcon className="icon_loction" />
                </InputAdornment>
              }
              color="success"
              size="medium"
              value={dataCollect.state}
              onChange={cha}
              name="state"
              required
            />
          </FormControl>
          <div className="pincode_city">
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment" color="success">
                city
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <ApartmentIcon className="icon_loction" />
                  </InputAdornment>
                }
                color="success"
                size="medium"
                value={dataCollect.city}
                onChange={cha}
                name="city"
                required
              />
            </FormControl>

            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment" color="success">
                Pincode
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <DashboardCustomizeIcon className="icon_loction" />
                  </InputAdornment>
                }
                color="success"
                size="medium"
                value={dataCollect.pincode}
                onChange={cha}
                name="pincode"
                required
              />
            </FormControl>
          </div>
          <section className="term_main_block">
            <div className="term_main_block_div">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
                style={{ color: "#216D58" }}
                required
              />
              <div className="terms_text">
                I hereby agree to terms and conditions and whatever information
                is asked for i have Provided the right information
              </div>
            </div>
          </section>
          <section className="btnclass">
            <Button
              className="btnclass_btn"
              variant="contained"
              color="success"
              endIcon={<SendIcon />}
              type="submit"
            >
              Next
            </Button>
          </section>
        </form>
      </main>
    </>
  );
};

export default Login;
