import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

function Admin() {
  const [expanded, setExpanded] = useState("");

  function handleChange(panel) {
    return (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  }

  return (
    <Stack
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4" component={"h1"} color="initial">
        Admin Dashboard
      </Typography>
      <TextField id="outlined-basic" label="UI Version" variant="outlined" />
      <TextField id="outlined-basic" label="API Version" variant="outlined" />
      <Box>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{ backgroundColor: "#fff" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="h6" component={"h2"}>
              Database Collections
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{ backgroundColor: "#fff" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography variant="h6">API Config Items</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          sx={{ backgroundColor: "#fff" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography variant="h6">Enumerators</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions>
        </Accordion>
      </Box>
    </Stack>
  );
}

export default Admin;
