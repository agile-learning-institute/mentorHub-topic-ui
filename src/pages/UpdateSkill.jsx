import {
  Box,
  Button,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMockTopics } from "../context/MockTopicsContext";
import { mockMastery, mockSpecialty } from "../mockdata/mockdata";
import { useTheme } from "@emotion/react";
import SaveAnimation from "../ui/SaveAnimation.jsx";
import { debounce } from "../helpers/utils.js";
import AnimationContainer from "../ui/AnimationContainer.jsx";

function UpdateSkill() {
  const { topicId, skillId } = useParams();
  const { state: mockTopics, updateSkill } = useMockTopics();
  const topic = mockTopics?.find((t) => t.Id === topicId);
  const skill = topic?.Skills[skillId];
  const [skillName, setSkillName] = useState(skill?.name || "");
  const [status, setStatus] = useState(skill?.status || "Active");
  const [description, setDescription] = useState(skill?.description || "");
  const [mastery, setMastery] = useState(skill?.mastery || "");
  const [speciality, setSpeciality] = useState(skill?.speciality || "");
  const theme = useTheme();
  const navigate = useNavigate();
  const animationTimeoutRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState({
    name: false,
    status: false,
    description: false,
    mastery: false,
    speciality: false,
  });

  const delayedSaveAndAnimate = useRef(
    debounce((fieldName, fieldValue) => {
      // Update the state of the skill
      updateSkill(topicId, skillId, fieldName, fieldValue);

      // Clear existing timeout if any
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }

      // Turn on the animation after save fn completes
      setShowAnimation((prevState) => ({
        ...prevState,
        [fieldName]: true,
      }));
    }, 1000),
  ).current;

  function handleDescriptionChange(e) {
    const fieldName = e.target["id"] || "status";
    const fieldValue = e.target.value;

    setShowAnimation((state) => ({
      ...state,
      description: false,
    }));
    setDescription(e.target.value);
    delayedSaveAndAnimate(fieldName, fieldValue);
  }

  const handleNameChange = (e) => {
    const fieldName = e.target["id"] || "status";
    const fieldValue = e.target.value;

    setShowAnimation((state) => ({
      ...state,
      name: false,
    }));
    const value = e.target.value;
    setSkillName(value);
    delayedSaveAndAnimate(fieldName, fieldValue);
  };

  function handleStatusChange(e) {
    const fieldName = e.target["id"] || "status";
    const fieldValue = e.target.value;

    setShowAnimation((state) => ({
      ...state,
      status: false,
    }));
    setStatus(e.target.value);
    delayedSaveAndAnimate(fieldName, fieldValue);
  }

  function handleMasteryChange(e) {
    const fieldName = "mastery";
    const fieldValue = e.target.value;
    setShowAnimation((state) => ({
      ...state,
      mastery: false,
    }));
    setMastery(e.target.value);
    delayedSaveAndAnimate(fieldName, fieldValue);
  }

  function handleSpecialityChange(e) {
    const fieldName = "speciality";
    const fieldValue = e.target.value;
    setShowAnimation((state) => ({
      ...state,
      speciality: false,
    }));
    setSpeciality(e.target.value);
    delayedSaveAndAnimate(fieldName, fieldValue);
  }

  return (
    <Box mb={4}>
      {/* name input */}
      <Box mb={2.5}>
        <Typography variant="h4" component="h1" fontWeight={700} mb={2.5}>
          Update Skill
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <TextField
            id="name"
            label="Topic Name"
            value={skillName}
            onChange={handleNameChange}
            sx={{ flexGrow: 1 }}
            required
          />
          <AnimationContainer>
            {showAnimation.name && <SaveAnimation />}
          </AnimationContainer>
        </Box>
      </Box>

      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        mb={2.5}
      >
        <FormControl
          variant="outlined"
          sx={{ marginRight: "0.5rem" }}
          fullWidth
        >
          <InputLabel>Status</InputLabel>
          <Select
            id="status"
            label="Status"
            value={status}
            onChange={handleStatusChange}
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Archived">Archived</MenuItem>
          </Select>
        </FormControl>
        <AnimationContainer>
          {showAnimation.status && <SaveAnimation />}
        </AnimationContainer>
      </Box>

      <Box style={{ display: "flex", alignItems: "center" }} mb={2.5}>
        <FormControl
          variant="outlined"
          sx={{ marginRight: "0.5rem" }}
          fullWidth
        >
          <TextField
            id="description"
            label="Description"
            value={description}
            onChange={handleDescriptionChange}
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />
        </FormControl>
        <AnimationContainer>
          {showAnimation.description && <SaveAnimation />}
        </AnimationContainer>
      </Box>

      {/* Mastery */}
      <Box style={{ display: "flex", alignItems: "center" }} mb={2.5}>
        <FormControl
          variant="outlined"
          sx={{ marginRight: "0.5rem" }}
          fullWidth
        >
          <InputLabel>Mastery</InputLabel>
          <Select
            id="mastery"
            label="Mastery"
            value={mastery}
            onChange={handleMasteryChange}
          >
            {mockMastery.map((item) => (
              <MenuItem key={item} value={item}>
                <ListItemText primary={item} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <AnimationContainer>
          {showAnimation.mastery && <SaveAnimation />}
        </AnimationContainer>
      </Box>

      {/* Speciality */}
      <Box mb={2.5}></Box>
      <Box style={{ display: "flex", alignItems: "center" }} mb={2.5}>
        <FormControl
          variant="outlined"
          sx={{ marginRight: "0.5rem" }}
          fullWidth
        >
          <InputLabel>Speciality</InputLabel>
          <Select
            id="speciality"
            label="Speciality"
            value={speciality}
            onChange={handleSpecialityChange}
          >
            {mockSpecialty.map((item) => (
              <MenuItem key={item} value={item}>
                <ListItemText primary={item} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <AnimationContainer>
          {showAnimation.speciality && <SaveAnimation />}
        </AnimationContainer>
      </Box>

      <Box display={"flex"} justifyContent="center">
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

export default UpdateSkill;
