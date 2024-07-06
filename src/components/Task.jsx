import { Delete, Edit } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

export const Task = ({ t }) => {
	return (
		<Box
			component="Section"
			sx={{
				width: "17rem",
				m: "0.25em",
				p: "0.5em 1em",
				display: "flex",
				alignItems: "center",
				gap: "0.5em",
				bgcolor: "var(--color-secondary)",
				borderRadius: "0.4em",
			}}
		>
			{/* task label */}
			<Stack component="label" direction="row" sx={{ gap: "0.5em", alignItems: "center" }}>
				<Box component="input" type="checkbox" />
				<Typography>{t}</Typography>
			</Stack>
      
			{/* Action button */}
			<Stack direction="row" sx={{ ml: "auto", gap: "0.5em" }}>
				<Edit sx={{ color: "#666666", fontSize: "large" }} />
				<Delete sx={{ color: "#f00", fontSize: "large" }} />
			</Stack>
		</Box>
	);
};

Task.propTypes = {
	t: PropTypes.number,
};
