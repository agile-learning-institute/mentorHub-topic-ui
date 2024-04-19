import { useTheme } from "@emotion/react";
import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useMockTopics } from "../context/MockTopicsContext";

function AddTopic() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const theme = useTheme();
  const navigate = useNavigate();
  const { state: mockTopics, addTopic } = useMockTopics();



  function handleNameChange(e) {
    setName(e.target.value);
    if (error && e.target.value !== "topic") setError(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (error) return;

    //validate name, save to db, and receive id
    if (name === "topic") {
      setError(true);
      return;
    } else setError(false);

    addTopic({
      Id: String(mockTopics.length + 1),
      Name: name,
      Status: "Active",
      Description: "",
      Category: "",

      Sequence: "1",
      Skills: [],
      Resources: [],
    });

    return navigate(`/topic/${mockTopics.length + 1}`);
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" fontWeight={700} mb={2.5}>
        Add Topic
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <TextField
          id="name"
          label="Topic Name"
          value={name}
          onChange={handleNameChange}
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

        <Button
          sx={{
            backgroundColor: theme.palette.grey[300],
            [theme.breakpoints.up("md")]: {
              width: "150px",
            },
          }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
export default AddTopic;
