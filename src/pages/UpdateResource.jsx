import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { useLoaderData } from "react-router";
import { useNavigate } from 'react-router-dom'
import { useMockTopics } from "../context/MockTopicsContext";
import { useTheme } from "@emotion/react";

const mockTags = [
  "$",
  "Article",
  "Book",
  "Exam",
  "Interactive",
  "Lecture",
  "Lesson",
  "Reference",
  "Tutorial",
  "User Guide",
  "Video",
  "UI/UX",
  "API",
  "Data",
  "SRE",
];

function UpdateResource() {
  const { state: mockTopics } = useMockTopics();
  const { topicId, resourceName: name } = useLoaderData();
  const topic = mockTopics.find((t) => t.Id === topicId);
  const resource = topic?.Resources?.find((r) => r?.Name === name);
  const [status, setStatus] = useState(resource?.Status || "Active");

  const [resourceName, setResourceName] = useState(name);
  const [description, setDescription] = useState(resource?.Description || "");
  const [duration, setDuration] = useState(resource?.Duration || 0);
  const [link, setLink] = useState(resource?.Link || "");
  const [tags, setTags] = useState(resource?.Tags || []);
  const [showAddSkill, setShowAddSkill] = useState(false);
  const [newSkillValue, setNewSkillValue] = useState("");
  const topicSkills = topic?.Skills?.map((s) => s.name);
  const [resourceSkillNames, setResourceSkillNames] = useState(
    resource?.Skills?.map((s) => s.name) || [],
  );
  const [skills, setSkills] = useState(resourceSkillNames || []);
  const skillInput = useRef(null);
  const navigate = useNavigate()
  const theme = useTheme();

  const handleSkillsChange = (event) => {
    setSkills(event.target.value);
  };
  const handleTagChange = (event) => {
    setTags(event.target.value);
  };

  function handleAddSkill(e) {
    e.preventDefault();
    if (newSkillValue === "") {
      skillInput.current.focus();
      return;
    }

    setSkills([...skills, newSkillValue]);
    setShowAddSkill(false);
    setNewSkillValue("");
  }

  return (
    <Box mb={4}>
      <Typography variant="h4" component="h1" fontWeight={700} mb={2.5}>
        Update Resource{" "}
      </Typography>

      <Box style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <TextField
          id="Name"
          label="Topic Name"
          value={resourceName}
          onChange={(e) => setResourceName(e.target.value)}
          onBlur={null}
          fullWidth
          sx={{ marginBottom: 2 }}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />

        <FormControl variant="outlined">
          <InputLabel>Status</InputLabel>
          <Select
            id="Status"
            label="Status"
            value={status}
            onBlur={null}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Archived">Archived</MenuItem>
          </Select>
        </FormControl>

        <Box>
          <Typography variant="body2">Description</Typography>
          <TextField
            id="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={null}
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />
        </Box>

        <Box>
          <TextField
            id="number"
            label="Duration (minutes)"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              setDuration(e.target.value);
            }}
            value={duration}
            fullWidth
          />
        </Box>
        <TextField
          id="Link"
          label="URL Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <FormControl variant="outlined">
          <InputLabel>Skills</InputLabel>
          <Select
            id="Skills"
            multiple
            value={skills}
            onChange={handleSkillsChange}
            label="Skills"
            renderValue={(selected) => selected.join(", ")}
            sx={{ marginBottom: 1.5 }}
          >
            {topicSkills?.map((s, i) => (
              <MenuItem key={i} value={s} onClick={handleSkillsChange}>
                <Checkbox
                  checked={
                    resourceSkillNames?.includes(s) || skills.includes(s)
                  }
                />
                <ListItemText primary={s} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {showAddSkill && (
        <form onSubmit={handleAddSkill}>
          <Box border={1} borderColor="grey.400" borderRadius={1} p={2}>
            <TextField
              value={newSkillValue}
              onChange={(e) => setNewSkillValue(e.target.value)}
              fullWidth
              label="Skill Name"
              inputRef={skillInput}
              autoFocus
            />
            <Button
              type="submit"
              onClick={handleAddSkill}
              variant="contained"
              sx={{ mt: 1 }}
            >
              Add Skill
            </Button>
          </Box>
        </form>
      )}

      <FormControl variant="outlined" fullWidth>
        <InputLabel>Tags</InputLabel>
        <Select
          id="Tags"
          multiple
          value={tags}
          onChange={handleTagChange}
          onBlur={null}
          label="Tags"
          renderValue={(selected) => selected.join(", ")}
        >
          {mockTags.map((t) => (
            <MenuItem key={t} value={t}>
              <Checkbox checked={tags?.includes(t)} />
              <ListItemText primary={t} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box mt={2} display={"flex"} justifyContent="center">
        <Button
          onClick={() => navigate(-1)}
          sx={{ backgroundColor: theme.palette.grey[300] }}
        >
          Return to Topic
        </Button>
      </Box>
    </Box>
  );
}
export default UpdateResource;

async function loader({ params }) {
  return {
    topicId: params.topicId,
    resourceName: params.resourceName,
  };
}

UpdateResource.loader = loader;
