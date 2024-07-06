import { Box, Button, Stack } from "@mui/material";

export const TaskInput = () => {
	return (
		<Box
			component="section"
			sx={{ mx: { xs: "0.25em", sm: "0.5em", md: "1em" }, my: { xs: "1em", sm: "2em" } }}
		>
			<Stack component="form" sx={{ maxWidth: "20rem", mx: "auto", gap: "0.5em" }}>
				{/* input box */}
				<Box
					component="input"
					required
					sx={{
						height: { xs: "2rem", sm: "4rem" },
						outline: "none",
						p: { xs: "1.5em", sm: "2em" },
						border: "4px solid var(--color-logo)",
						borderRadius: "0.4em",
						fontSize: "large",
					}}
				/>
				{/* submit button */}
				<Button
					variant="contained"
					size="small"
					type="submit"
					sx={{
						height: { xs: "2rem", sm: "2.5rem" },
						bgcolor: "var(--color-logo)",
						color: "var(--color-primary)",
						textTransform: "capitalize",
						fontFamily: "var(--font-cinzel)",
						fontWeight: 600,
					}}
				>
					Add Task
				</Button>
			</Stack>
		</Box>
	);
};
