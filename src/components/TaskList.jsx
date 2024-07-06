import { Stack } from "@mui/material";

export const TaskList = () => {
	return (
		<Stack component="section" sx={{ maxWidth: "20rem", mx: "auto" }}>
			{Array(5)
				.fill(0)
				.map((t, idx) => (
					<div key={idx}>{t}</div>
				))}
		</Stack>
	);
};
