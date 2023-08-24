import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import useBlogCall from "../../hook/useBlogCall";
import { useSelector } from "react-redux";
import { cardBtn, homeCard } from "../../styles/globalStyles";
const HomeCard = ({ blog }) => {
  const { id, image, title, publish_date, content, author } = blog;
  const tarih = new Date(publish_date);
  const navigate = useNavigate();
  const { getBlogDetailsData } = useBlogCall();
  const { data } = useSelector((state) => state.auth);
  return (
    <div>
      <Card sx={homeCard}>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt="green iguana"
          sx={{ objectFit: "contain", mt: 2, width: "160px" }}
        />
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography
          gutterBottom
          variant="p"
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            width: { xs: "250px", md: "400px" },
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {content}
        </Typography>
        <Typography variant="p" component="div">
          {tarih.toDateString()}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "start",
            width: "95%",
            p: 0.5,
            gap: "5px",
          }}
        >
          <Typography
            variant="h6"
            component="h4"
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 5,
              fontWeight: "600",
            }}
          >
            <AccountCircleIcon />
            {author}
          </Typography>
        </Box>

        <Box sx={cardBtn}>
          <Button
            sx={cardBtn}
            onClick={() => {
              getBlogDetailsData("blogs", id);
              {
                author === data.username
                  ? navigate("/blogdetail")
                  : navigate(`/${id}`);
              }
            }}
          >
            READ MORE
          </Button>
        </Box>
      </Card>
    </div>
  );
};
export default HomeCard;