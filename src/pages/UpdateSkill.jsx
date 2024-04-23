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
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMockTopics } from "../context/MockTopicsContext";
import { mockMastery, mockSpecialty } from "../mockdata/mockdata";
import { useTheme } from "@emotion/react";

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

  function handleBlur(e) {
    const fieldName = e.currentTarget?.getAttribute("id") || "status";
    const fieldValue = e.target.value;

    const currentValue = topic.Skills[skillId][fieldName];

    // do nothing if value hasn't changed
    if (currentValue === fieldValue) {
      return;
    }

    updateSkill(topicId, skillId, fieldName, fieldValue);
  }
  function handleDescriptionChange(e){
    setDescription(e.target.value)
    handleBlur(e)
  }
  function handleNameChange(e){
    setSkillName(e.target.value)
    handleBlur(e)
  }

  function handleStatusChange(e){
    setStatus(e.target.value)
    handleBlur(e)
  }
  return (
    <Box mb={4}>
      <Typography variant="h4" component="h1" fontWeight={700} mb={2.5}>
        Update Skill
      </Typography>
      <Box style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <TextField
          id="name"
          label="Topic Name"
          value={skillName}
          onChange={handleNameChange}
          sx={{ marginBottom: 2 }}
          required
        />
      </Box>

      <FormControl variant="outlined" fullWidth>
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

      <Box mt={1}>
        <Typography variant="body2">Description</Typography>
        <TextField
          id="description"
          value={description}
          onChange={handleDescriptionChange }
          onBlur={null}
          multiline
          rows={4}
          variant="outlined"
          fullWidth
        />
      </Box>

      {/* Mastery */}
      <FormControl variant="outlined" sx={{ marginTop: "1rem" }} fullWidth>
        <InputLabel>Mastery</InputLabel>
        <Select
          id="mastery"
          label="Mastery"
          value={mastery}
          onBlur={handleBlur}
          onChange={(e) => {
            setMastery(e.target.value);
          }}
        >
          {mockMastery.map((item) => (
            <MenuItem key={item} value={item}>
              <ListItemText primary={item} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Speciality */}
      <FormControl variant="outlined" sx={{ marginTop: "1rem" }} fullWidth>
        <InputLabel>Speciality</InputLabel>
        <Select
          id="speciality"
          label="Speciality"
          value={speciality}
          onBlur={handleBlur}
          onChange={(e) => {
            setSpeciality(e.target.value);
          }}
        >
          {mockSpecialty.map((item) => (
            <MenuItem key={item} value={item}>
              <ListItemText primary={item} />
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

export default UpdateSkill;
