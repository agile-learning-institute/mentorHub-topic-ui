import {
  Box,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { mockCategories } from "../mockdata/mockdata.js";
import TopicItem from "../ui/TopicItem.jsx";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useMockTopics } from "../context/MockTopicsContext.jsx";
import { ExpandMore } from "@mui/icons-material";

function Category() {
  const { state: mockTopics } = useMockTopics();

  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant={"h4"}
        component={"h1"}
        fontWeight={700}
        fontSize={"32px"}
        marginBottom={1}
      >
        Categories
      </Typography>

      <Button
        onClick={() => navigate("/topic")}
        sx={{
          marginBottom: "1.5rem",
          backgroundColor: theme.palette.grey[300],
        }}
        fullWidth
      >
        Add Topic
      </Button>

      {/* Accordions */}

      {mockCategories.map((cat) => (
        <Accordion key={cat}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-label="Expand"
            aria-controls="-content"
            id="-header"
          >
            <Typography>{cat}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#fff" }}>
            {mockTopics
              .filter((topic) => topic.Category === cat)
              .map((topic) => (
                <TopicItem isDraggable={false} key={topic.Id} topic={topic} />
              ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
export default Category;
