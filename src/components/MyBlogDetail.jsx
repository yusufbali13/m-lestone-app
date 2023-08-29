import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import * as React from "react";
import { useSelector } from "react-redux";
import BlogBadgeFav, {
  BlogBadgeComment,
  BlogBadgeVisit,
} from "../components/BlogBage";
import Comments from "../components/Comments";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";
import { Helmet } from "react-helmet";

const MyBlogDetail = () => {
  const [open, setOpen] = useState(false);
  const { detail } = useSelector((state) => state.blog);
  //! Delete modal icin state
  const [modal, setModal] = React.useState(false);
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);
  //! UpDate modal icin state
  const [upmodal, setUpModal] = React.useState(false);
  const handleOpenUp = () => setUpModal(true);
  const handleCloseUp = () => setUpModal(false);
  const tarih = new Date(detail.publish_date);
  return (
    <div>
      <Helmet>
        <title>My-Blog-Details</title>
      </Helmet>
      <Box sx={{ width: "600px", m: "auto", p: 2 }}>
        <CardMedia
          component="img"
          height="500"
          image={detail.image}
          alt="green iguana"
          sx={{
            objectFit: "contain",
            mt: 2,
            width: "500px",
            m: "auto",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "start",
            width: "95%",
            p: 0.5,
            gap: "15px",
          }}
        >
          <AccountCircleIcon sx={{ fontSize: "50px" }} color="success" />
          <Box>
            <Typography variant="h6" component="h4">
              {detail.author}
            </Typography>
            <Typography variant="h6" component="h4">
              {tarih.toDateString()}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography gutterBottom variant="h4" component="div">
            {detail.title}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            {detail.content}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <BlogBadgeFav
              likes_n={detail.likes_n}
              id={detail.id}
              likes={detail.likes}
            />
            <BlogBadgeComment
              open={open}
              setOpen={setOpen}
              comment_count={detail.comment_count}
            />
            <BlogBadgeVisit post_views={detail.post_views} />
          </Box>
          {open ? <Comments detail={detail} /> : ""}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            mt: 7,
          }}
        >
          <Box>
            <Button
              sx={{ backgroundColor: "green", fontWeight: "600" }}
              color="primary"
              onClick={handleOpenUp}
            >
              UPDATE
            </Button>
          </Box>
          <Box>
            <Button
              sx={{ backgroundColor: "red", fontWeight: "600" }}
              color="primary"
              onClick={handleOpen}
            >
              DELETE
            </Button>
          </Box>
          <DeleteModal
            modal={modal}
            handleClose={handleClose}
            detailId={detail.id}
          />
          <UpdateModal upmodal={upmodal} handleCloseUp={handleCloseUp} />
        </Box>
      </Box>
    </div>
  );
};
export default MyBlogDetail;