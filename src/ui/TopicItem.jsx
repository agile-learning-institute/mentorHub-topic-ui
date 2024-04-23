import { DragHandle } from "@mui/icons-material";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function TopicItem({ topic, isDraggable = true }) {
  const navigate = useNavigate();
  return (
    <Typography
      variant="body1"
      component="div"
      color="initial"
      sx={{
        px: "12px",
        py: "8px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        my: "0.5rem",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: {
          md: "70%",
          lg: "60%",
          xl: "60%",
        },
        cursor: "grab",
      }}
      draggable
    >
      <div key={topic.Id} style={{ display: "flex", alignItems: "center" }}>
        {isDraggable && <DragHandle sx={{ ml: "8px", mr: "18px" }} />} {topic.Name}
      </div>
      <Button onClick={() => navigate(`/topic/${topic.Id}`)} size="small" sx={{height: "30px", marginX: "2px"}}>
        EDIT
      </Button>
    </Typography>
  );
}
export default TopicItem;
