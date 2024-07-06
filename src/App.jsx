import { Stack } from "@mui/material";
import { Header, TaskInput, TaskList } from "./components";

function App() {
	return (
		<Stack component="main" sx={{}}>
			<Header />
			<TaskInput />
			<TaskList />
		</Stack>
	);
}

export default App;
