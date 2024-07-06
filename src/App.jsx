import { Stack, Typography } from "@mui/material";
import { Header, TaskInput, TaskList } from "./components";

function App() {
	return (
		<Stack component="main" sx={{}}>
			<Header />
			<TaskInput />
			<Typography
				variant="h2"
				sx={{
          my: "0.5em",
          color: "var(--color-logo)",
					fontFamily: "var(--font-cinzel)",
					fontSize: "large",
					fontWeight: 600,
					textAlign: "center",
				}}
			>
				Latest Task
			</Typography>
			<TaskList />
		</Stack>
	);
}

export default App;
