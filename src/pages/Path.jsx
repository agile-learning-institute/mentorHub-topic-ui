import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { mockPaths, mockSegments } from "../mockdata/mockdata.js";
// import mockTopics from "../mockdata/mockdata.js";
import TopicItem from "../ui/TopicItem.jsx";
import { useMockTopics } from "../context/MockTopicsContext.jsx";

function Path() {
  const { state: mockTopics } = useMockTopics();
  const [path, setPath] = useState("");
  const [segment, setSegment] = useState("");
  const currTopics = mockTopics.filter((topic) => {
    return topic.Path === path && topic.Subpath.includes(segment);
  });
  const indexOfPath = mockPaths.indexOf(path);

  function handlePathChange(e) {
    setPath(e.target.value);
    setSegment("");
  }

  function handleSegmentChange(e) {
    setSegment(e.target.value);
  }

  return (
    <Box>
      <Typography
        variant={"h4"}
        component={"h1"}
        fontWeight={700}
        fontSize={"32px"}
        marginBottom={"2rem"}
      >
        Paths
      </Typography>

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
          {/* Selection for Path */}
          <InputLabel id="demo-simple-select-label">Path</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={path}
            label="Path"
            onChange={handlePathChange}
          >
            {mockPaths.map((path, i) => (
              <MenuItem key={i} value={path}>
                {path}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* Selection for Segment */}
        {path && (
          <FormControl fullWidth>
            <InputLabel>Segment</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={segment}
              label="Segment"
              onChange={handleSegmentChange}
            >
              {mockSegments[indexOfPath]?.map((segment, i) => (
                <MenuItem key={i} value={segment}>
                  {segment}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </div>
      {/* Conditionally render topics*/}
      {path && segment && (
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
              <TopicItem key={topic.Id} topic={topic} />
            ))
          ) : (
            <Typography>No Topics to Display</Typography>
          )}
        </div>
      )}
    </Box>
  );
}
export default Path;
