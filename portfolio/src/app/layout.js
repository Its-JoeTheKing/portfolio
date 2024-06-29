import "./globals.css";

export const metadata = {
	title: "Errfig Aymen | Web Developer",
	description: "Hello! I'm Errfig Aymen, an 18-year-old aspiring Junior Full Stack Web Developer and Intermediate in Pentesting. I'm passionate about expanding my knowledge to create secure, responsive, and optimized websites and applications.",
	viewport: "width=device-width, initial-scale=1.0"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" style={{height: '100vh', overflow: "hidden"}}>
			{children}
		</html>
	);
}
