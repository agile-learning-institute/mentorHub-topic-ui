import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Add, HorizontalRule } from "@mui/icons-material";

import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { mockCategories } from "../mockdata/mockdata";
import { useTheme } from "@emotion/react";
import { useMockTopics } from "../context/MockTopicsContext";
import { useRef } from "react";

function UpdateTopic() {
  const { topicId } = useLoaderData();
  const {
    state: mockTopics,
    updateTopic,
    addResource,
    addSkillToTopic,
  } = useMockTopics();
  const [topic, setTopic] = useState(mockTopics.find((t) => t.Id === topicId));
  const { Category, Name, Resources, Status, Description, Skills } = topic
    ? topic
    : {};
  const [error, setError] = useState(false);
  const [name, setName] = useState(Name);
  const [skills, setSkills] = useState(Skills || []);
  const [status, setStatus] = useState(Status || "Active");
  const [category, setCategory] = useState(Category);
  const [resources, setResources] = useState(Resources || []);
  const [description, setDescription] = useState(Description || "");

  const [showAddResource, setShowAddResource] = useState(false);
  const [newResourceValue, setNewResourceValue] = useState("");
  const [showAddSkill, setShowAddSkill] = useState(false);
  const [newSkillValue, setNewSkillValue] = useState("");
  const skillInput = useRef(null);
  const resourceInput = useRef(null);
  const theme = useTheme();
  const navigate = useNavigate();

  function handleAddResource(e) {
    e.preventDefault();
    if (newResourceValue === "") {
      resourceInput.current.focus();
      return;
    }
    addResource(topicId, { Name: newResourceValue });
    setResources([...resources, { Name: newResourceValue }]);
    setShowAddResource(false);
    setNewResourceValue("");
  }

  function handleBlur(e) {
    const fieldName = e.currentTarget.getAttribute("id");
    const fieldValue = e.target.value;

    const currentValue = topic[fieldName];
    if (currentValue === fieldValue) {
      return;
    }

    updateTopic(topicId, fieldName, fieldValue);
  }

  function handleStatusChange(e) {
    setStatus(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleAddSkill(e) {
    e.preventDefault();
    if (newSkillValue === "") {
      skillInput.current.focus();
      return;
    }

    const skillObj = {
      _id: {
        $oid: "BBBB00000000000000000002",
      },
      name: newSkillValue,
      status: "Active",
      description: "",
      mastery: "",
      speciality: "",
      lastSaved: {
        atTime: { $date: "2/26/2024 18:17:58" },
        byUser: { $oid: 1 },
        fromIp: "192.168.1.2",
        correlationId: "ae078031-7de2-4519-bcbe-fbd5e72b69d3",
      },
    };

    addSkillToTopic(topicId, skillObj);
    setSkills([...skills, skillObj]);
    setShowAddSkill(false);
    setNewSkillValue("");
  }

  if (!topic) return <p>Sorry , topic not found.</p>;

  return (
    <Box mb={4}>
      <Typography variant="h4" component="h1" fontWeight={700} mb={2.5}>
        Edit Topic
      </Typography>

      <Box style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <TextField
          id="Name"
          label="Topic Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleBlur}
          fullWidth
          sx={{ marginBottom: 2 }}
          error={error}
          helperText={error ? "Topic name already exists" : ""}
          FormHelperTextProps={{
            sx: {
              color: error ? "red" : "gray",
              fontSize: "0.875rem",
              fontStyle: error ? "italic" : "normal",
            },
          }}
          required
        />
        <FormControl variant="outlined">
          <InputLabel>Status</InputLabel>
          <Select
            id="Status"
            label="Status"
            value={status}
            onBlur={handleBlur}
            onChange={handleStatusChange}
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Archived">Archived</MenuItem>
          </Select>
        </FormControl>

        <Box>
          <TextField
            id="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={handleBlur}
            multiline
            rows={4}
            variant="outlined"
            label={"Description"}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </Box>

        <FormControl variant="outlined">
          <InputLabel>Category</InputLabel>
          <Select
            id="Category"
            label="Category"
            value={category}
            onChange={handleCategoryChange}
            onBlur={handleBlur}
          >
            {mockCategories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box mb={2}>
          <Typography variant="body2" mb mt={2}>
            Skills
          </Typography>
          {skills.length > 0 &&
            skills.map((s, i) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: 1,
                  border: "1px solid lightgrey",
                  px: 2,
                  py: 1,
                  ml: 1.5,
                  mb: 2,
                }}
                key={i}
              >
                <Typography variant="body2">{s?.name}</Typography>
                <Button
                  onClick={() => navigate(`/topic/skills/${topicId}/${i}`)}
                  size="small"
                  sx={{ ml: 2 }}
                >
                  Edit
                </Button>
              </Box>
            ))}
          <Button
            onClick={() => setShowAddSkill(!showAddSkill)}
            sx={{ backgroundColor: theme.palette.grey[300], ml: 1.5 }}
          >
            {showAddSkill ? <HorizontalRule /> : <Add />}
          </Button>
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
      </Box>

      <Box mb={2}>
        <Typography variant="body2" mb mt={2}>
          Resources
        </Typography>
        {resources.length > 0 &&
          resources.map((res, i) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 1,
                border: "1px solid lightgrey",
                px: 2,
                py: 1,
                ml: 1.5,
                mb: 2,
              }}
              key={i}
            >
              <Typography variant="body2">{res?.Name}</Typography>
              <Button
                onClick={() => navigate(`/resource/${topicId}/${res.Name}`)}
                size="small"
                sx={{ ml: 2 }}
              >
                Edit
              </Button>
            </Box>
          ))}
        <Button
          onClick={() => setShowAddResource(!showAddResource)}
          sx={{ backgroundColor: theme.palette.grey[300], ml: 1.5 }}
        >
          {showAddResource ? <HorizontalRule /> : <Add />}
        </Button>
      </Box>

      {/* Conditionally render the "Add Resource" form */}
      {showAddResource && (
        <form onSubmit={handleAddResource}>
          <Box border={1} borderColor="grey.400" borderRadius={1} p={2}>
            <TextField
              value={newResourceValue}
              onChange={(e) => setNewResourceValue(e.target.value)}
              fullWidth
              label="Resource Name"
              inputRef={resourceInput}
              autoFocus
            />
            <Button
              type="submit"
              onClick={handleAddResource}
              variant="contained"
              sx={{ mt: 1 }}
            >
              Add Resource
            </Button>
          </Box>
        </form>
      )}

      {/* button with link to /path */}
    </Box>
  );
}
export default UpdateTopic;

async function loader({ params }) {
  const { topicId, resourceName } = params;

  return { topicId, resourceName };
}

UpdateTopic.loader = loader;
