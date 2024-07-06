import { Stack } from "@mui/material";

export const Header = () => {
	return (
		<Stack
			component="header"
			direction="row"
			sx={{
				height: { xs: "3rem", sm: "4rem" },
				alignItems: "center",
				justifyContent: "center",
				bgcolor: "var(--color-logo)",
				color: "var(--color-primary)",
				fontFamily: "var(--font-cinzel)",
				fontSize: { xs: "medium", sm: "large", md: "x-large" },
				fontWeight: 600,
			}}
		>
			Task - Todo
		</Stack>
	);
};
