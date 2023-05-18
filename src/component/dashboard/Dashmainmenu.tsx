import {useState,useEffect} from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SpaIcon from "@mui/icons-material/Spa";
import Dashboard2 from "./Dashboard2"
import axios from "axios"
import "./Dash.css";
import { useNavigate } from "react-router-dom";


export default function Dashmainmenu() {
  const navi = useNavigate();
  const clicks = () =>
  {
    navi("/")
    }
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));
    const [datas, setdatas] = useState({
      name: "",
      email: "",
      phone: "",
      links: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
  
    })
    useEffect(() =>
    {
      async function fet()
      {
        let dat = await axios.get("https://loginbackend-v2oi.onrender.com/collectdata");
        if (dat.data)
        {
          setdatas(dat.data)
        }
      }
      fet()
  
      
    },[])
  return (
    <main className="dash_main">
      <Box sx={{ flexGrow: 1 }} className="dash_main_box">
        <Grid container spacing={1} className="dash_main_container">
          <Grid xs={0} className="dash_grid_header">
            <Item className="dash_grid_header_item1">
              <section className="dash_grid_header_item1_section">
                <blockquote className="dash_grid_header_item1_section_icon_pic">
                  <BsFillArrowLeftCircleFill className="dash_grid_header_item1_section_icon" onClick={clicks}/>
                  <section className="dash_grid_header_item1_section_pic">
                    <SpaIcon className="dash_grid_header_item1_section_pic_icon" />
                    <h2 className="dash_grid_header_item1_section_heading">
                      FYNDNXT VENTURES
                    </h2>
                    <div className="dash_grid_header_item1_section_sechead">
                      INVEST AND IMPACT
                    </div>
                  </section>
                </blockquote>
                <blockquote className="dash_grid_header_item1_section_icons_block">
                  <NotificationsActiveIcon className="dash_grid_header_item1_section_bell_icon" />
                </blockquote>
              </section>
            </Item>
          </Grid>

          <section className="dash_section_block">
            <Grid xs={2.4} className="dash_grid_left">
              <Item className="dash_grid_header_item2">
                <section className="dash_grid_header_item2_pic_list_main_block">
                  <blockquote className="dash_grid_header_item2_pic_main_block_pic_name_block">
                    <picture className="dash_grid_header_item2_pic_main_block_pic_block" />
                    <h3 className="dash_grid_header_item2_pic_main_block_name_block">
                      {datas.name}
                    </h3>
                  </blockquote>

                  <blockquote className="dash_grid_header_item2_list_main_block">
                    <div className="dash_grid_header_item2_list_main_block_item1">
                      DashBoard
                    </div>
                    <div className="dash_grid_header_item2_list_main_block_item2">
                      Profile
                    </div>
                    <div className="dash_grid_header_item2_list_main_block_item3">
                      Edit Profile
                    </div>
                    <div className="dash_grid_header_item2_list_main_block_item4">
                      {" "}
                      My Network
                    </div>
                    <div className="dash_grid_header_item2_list_main_block_item5">
                      {" "}
                      Need Help ?
                    </div>
                    <div className="dash_grid_header_item2_list_main_block_item6" onClick={()=>navi("/")}>
                    
                      Logout
                    </div>
                  </blockquote>
                </section>
              </Item>
            </Grid>

            <Grid xs={9.6} className="dash_grid_middle">
                          <Item className="dash_grid_header_item3">
                              <section className="dash_grid_header_item3_heading_main_block"> 
                                  <div className="divi1">Live Deals</div>
                                  <div className="divi2"> Most Funded</div>
                                  
                              </section>
                <Dashboard2 datas={datas} />
              </Item>
            </Grid>
          </section>
        </Grid>
      </Box>
    </main>
  );
}
