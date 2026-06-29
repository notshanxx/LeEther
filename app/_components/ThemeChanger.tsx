"use client";

export default function ThemeChanger() {
  const toggleTheme = () => {
    const html = document.documentElement;
    html.setAttribute(
      "data-theme",
      html.getAttribute("data-theme") === "black"
        ? "lofi"
        : "black"
    );
  };

  return (
    <input
      type="checkbox"
      className="toggle fixed top-4 right-4 z-50"
      onChange={toggleTheme}
    />
  );
}