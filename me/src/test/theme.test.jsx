import { StrictMode } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { ThemeProvider } from "../contexts/ThemeContext";
import { useTheme } from "../contexts/theme";
function Toggle() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {isDark ? "Dark theme" : "Light theme"}
    </button>
  );
}
it("preserves an existing dark preference in StrictMode and persists changes", () => {
  localStorage.setItem("theme", "dark");
  render(
    <StrictMode>
      <ThemeProvider>
        <Toggle />
      </ThemeProvider>
    </StrictMode>,
  );
  expect(screen.getByRole("button")).toHaveTextContent("Dark theme");
  expect(document.documentElement).toHaveClass("dark");
  expect(localStorage.getItem("theme")).toBe("dark");
  fireEvent.click(screen.getByRole("button"));
  expect(document.documentElement).not.toHaveClass("dark");
  expect(localStorage.getItem("theme")).toBe("light");
});
