import {useEffect} from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import "./Dash2.css";
const Dashboard2 = ({datas}:{datas:any}) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  
  useEffect(() =>
  {


    
  },[])
  return (
    <>
      <main className="dash2_main_block">
        <h2> Details</h2>
        <div className="dash2_top_border"></div>
        <Box sx={{ flexGrow: 1 }} className="dash2_top_box">
          <Grid container spacing={2}>
            <Grid item xs={4} className="one">
              <Item>{datas.name}</Item>
            </Grid>
            <Grid item xs={8} className="two">
              <Item>{datas.email}</Item>
            </Grid>
            <Grid item xs={4}  className="three">
              <Item>{datas.phone}</Item>
            </Grid>
            <Grid item xs={4}  className="four">
              <Item>{datas.country}</Item>
            </Grid>
            <Grid item xs={4}  className="five">
              <Item>{datas.state}</Item>
            </Grid>
            <Grid item xs={6}  className="six">
              <Item>{datas.city}</Item>
            </Grid>
            <Grid item xs={4}  className="seven">
              <Item>{datas.pincode}</Item>
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  );
};

export default Dashboard2;
