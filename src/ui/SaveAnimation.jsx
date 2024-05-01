import Lottie from "react-lottie";
import save_animation from "../animations/save_animation.json";
import { Box, Typography } from "@mui/material";

function SaveAnimation() {
  const defaultOptions = {
    loop: false, // Set loop to true or false
    autoplay: true, // Set autoplay to true or false
    animationData: save_animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="caption" component="span" color="initial">
        Saved
      </Typography>
      <Lottie
        options={defaultOptions}
        height={20} // Set the height of the animation
        width={20} // Set the width of the animation
      />
    </div>
  );
}
export default SaveAnimation;
