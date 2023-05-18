import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Login from "../Login_block/Login";
import "./Home.css";
const Home = () => {
    const imgs: any = new URL("../../../public/login.png", import.meta.url)

  return (
    <main className="main_block_home">
      <Box className="main_block_home_box">
        <Paper elevation={3} className="home_box_paper">
          <section className="Home_arrow_heading_block">
            <div className="Home_heading_arrow">
              <BsFillArrowLeftCircleFill />
            </div>
            <div className="Home_heading_head">
              <h1>
                Create
                <span className="home_heading_span">Inverstor Profile</span>
              </h1>
            </div>
          </section>
          <section className="home_box_paper_image_login_block">
            <div className="home_box_paper_image_block">
              <img src={imgs} />
            </div>
             <Login/>
          </section>
        </Paper>
      </Box>
    </main>
  );
};
export default Home;
