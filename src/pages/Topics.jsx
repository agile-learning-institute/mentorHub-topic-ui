import { useState } from "react";
import {
  Typography,
  Container,
  ToggleButtonGroup,
  ToggleButton,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
} from "@mui/material";
import TopicItem from "../ui/TopicItem.jsx";
const mockTopics = [
  {
    Id: "1",
    Name: "Topic 1",
  },
  {
    Id: "2",
    Name: "Topic 2",
  },
  {
    Id: "3",
    Name: "Topic 3",
  },
  {
    Id: "4",
    Name: "Topic 4",
  },
  {
    Id: "5",
    Name: "Topic 5",
  },
  {
    Id: "6",
    Name: "Topic 6",
  },
];

function Topics() {
  const [topics, setTopics] = useState(mockTopics);
  const [alignment, setAlignment] = useState("Category");
  const [path, setPath] = useState("");
  const [category, setCategory] = useState("");
  const [subpath, setSubpath] = useState("");
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggedItemIndex(index);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e, index) => {
    const newItems = [...topics];
    const draggedItem = newItems[draggedItemIndex];
    newItems.splice(draggedItemIndex, 1);
    newItems.splice(index, 0, draggedItem);
    setTopics(newItems);
    setDraggedItemIndex(null);
  };

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }
  function handlePathChange(e) {
    setPath(e.target.value);
  }

  function handleToggleChange(event) {
    const val = event.target.value;
    setAlignment(event.target.value);
    if (val === "Category") {
      setPath("");
      setSubpath("");
    } else {
      setCategory("");
    }
  }

  function handleSubpathChange(e) {
    setSubpath(e.target.value);
  }

  return (
    <>
      <Typography
        variant={"h4"}
        component={"h1"}
        fontWeight={700}
        fontSize={"32px"}
        marginBottom={"2rem"}
      >
        Topics
      </Typography>
      <Button sx={{ marginBottom: "3rem" }}>CREATE TOPIC</Button>

      <Container maxWidth="lg">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          sx={{ justifyContent: "center", mb: "4rem" }}
          onChange={handleToggleChange}
          aria-label="Category-Path"
          fullWidth
        >
          <ToggleButton value="Category">Category</ToggleButton>
          <ToggleButton value="Path">Path</ToggleButton>
        </ToggleButtonGroup>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <FormControl sx={{ width: "50%" }}>
            {/* Selection for Category/Path */}
            <InputLabel id="demo-simple-select-label">{alignment}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={alignment === "Category" ? category : path}
              label={alignment}
              onChange={
                alignment === "Category"
                  ? handleCategoryChange
                  : handlePathChange
              }
            >
              <MenuItem
                value={alignment === "Category" ? "Category 1" : "Path 1"}
              >
                {alignment === "Category" ? "Category 1" : "Path 1"}
              </MenuItem>
              <MenuItem
                value={alignment === "Category" ? "Category 2" : "Path 2"}
              >
                {alignment === "Category" ? "Category 2" : "Path 2"}
              </MenuItem>
              <MenuItem
                value={alignment === "Category" ? "Category 3" : "Path 3"}
              >
                {alignment === "Category" ? "Category 3" : "Path 3"}
              </MenuItem>
            </Select>
          </FormControl>

          {/* Selection for Subpath */}
          {path && alignment === "Path" && (
            <FormControl sx={{ width: "50%" }} fullWidth>
              <InputLabel>Subpath</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subpath}
                label="Subpath"
                onChange={handleSubpathChange}
              >
                <MenuItem value={"Subpath 1"}>Subpath 1</MenuItem>
                <MenuItem value={"Subpath 2"}>Subpath 2</MenuItem>
                <MenuItem value={"Subpath 3"}>Subpath 3</MenuItem>
              </Select>
            </FormControl>
          )}
        </div>
        {/* Conditionally render topics*/}
        {((path && subpath) || category) && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <Typography
              variant="h5"
              color="initial"
              sx={{ marginBottom: "1.5rem", marginTop: "2rem" }}
            >
              Topic Items (Ordered):
            </Typography>
            {topics.map((topic, index) => (
              <TopicItem
                key={topic.Id}
                topic={topic}
                topics={topics}
                index={index}
                handleDragStart={handleDragStart}
                handleDragOver={handleDragOver}
                handleDrop={handleDrop}
                draggedItemIndex={draggedItemIndex}
              />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
export default Topics;
