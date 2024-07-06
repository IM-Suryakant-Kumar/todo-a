import { Stack } from "@mui/material";
import { Task } from "./Task";

export const TaskList = () => {
	return (
		<Stack component="section" sx={{ maxWidth: "20rem", mx: "auto" }}>
			{Array(5)
				.fill([0, 5])
				.map((t, idx) => (
					<Task key={idx} t={t} />
				))}
		</Stack>
	);
};
