import { IconButton, useColorMode } from "theme-ui";
import { motion } from "framer-motion";

const ColorSwitcher = (props) => {
  const [mode, setMode] = useColorMode();
  const MotionIconButton = motion(IconButton, { forwardMotionProps: true });
  return (
    <MotionIconButton
      whileTap={{ scale: 0.8, rotate: 180 }}
      animate={{ scale: 1, rotate: 0 }}
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      sx={{
        color: "primary",
        cursor: "pointer",
        borderRadius: "circle",
        width: [24, 28, 32],
        height: [24, 28, 32],
        transition: "box-shadow .2s ease-in-out",
        ":hover,:focus": {
          boxShadow: "0 0 0 3px",
          outline: "none",
        },
      }}
      {...props}
    >
      <svg viewBox="0 0 32 32" width={32} height={32} fill="currentcolor">
        <circle cx={16} cy={16} r={14} fill="none" stroke="currentcolor" strokeWidth={4} />
        <path d="M 16 0 A 16 16 0 0 0 16 32 z" />
      </svg>
    </MotionIconButton>
  );
};

export default ColorSwitcher;
