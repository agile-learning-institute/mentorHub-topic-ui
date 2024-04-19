import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { mockCategories } from "../mockdata/mockdata.js";
import TopicItem from "../ui/TopicItem.jsx";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useMockTopics } from "../context/MockTopicsContext.jsx";

function Category() {
  const [category, setCategory] = useState("");
  const { state: mockTopics } = useMockTopics();

  const currTopics = mockTopics.filter((topic) => {
    return topic.Category === category;
  });
  const navigate = useNavigate();
  const theme = useTheme();

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <FormControl fullWidth>
          {/* Selection for Category/Path */}
          <InputLabel id="demo-simple-select-label"> Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={handleCategoryChange}
          >
            {mockCategories.map((cat, i) => (
              <MenuItem key={i} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* Conditionally render topics*/}
      {category && (
        <div
          key={currTopics.length}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            color="initial"
            sx={{ marginBottom: "0.5rem", marginTop: "1rem" }}
          >
            Topics:
          </Typography>
          {currTopics?.length ? (
            currTopics.map((topic) => (
              <TopicItem isDraggable={false} key={topic.Id} topic={topic} />
            ))
          ) : (
            <Typography>No Topics to Display</Typography>
          )}
        </div>
      )}
    </Box>
  );
}
export default Category;
