import { DragHandle } from "@mui/icons-material";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

function TopicItem({
  topic,
  topics,
  handleDragOver,
  handleDragStart,
  handleDrop,
}) {
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
        width: "75%",
        display: "flex",
        justifyContent: "space-between",
        maxWidth: {
          md: "70%",
          lg: "60%",
          xl: "60%",
        },
        cursor: 'grab'
      }}
      draggable
      onDragStart={(e) => handleDragStart(e, topics.indexOf(topic))}
      onDragOver={(e) => handleDragOver(e, topics.indexOf(topic))}
      onDrop={(e) => handleDrop(e, topics.indexOf(topic))}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <DragHandle sx={{ ml: "8px", mr: "18px" }} /> {topic.Name}
      </div>
      <Button size="small">EDIT</Button>
    </Typography>
  );
}
export default TopicItem;
