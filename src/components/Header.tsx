import { useEffect, useState } from 'react';

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // On first load, check for user's theme preference (optional)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const initialDark = storedTheme === 'dark' || (!storedTheme && prefersDark);
    setIsDark(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme);
    localStorage.setItem('theme', nextTheme ? 'dark' : 'light');
  };

  return (
    <header className="shadow p-4 flex justify-between items-center bg-white dark:bg-gray-800 text-black dark:text-white">
      <h1 className="font-bold text-lg">Where in the world?</h1>
      <button onClick={toggleTheme} className="flex items-center gap-2">
        {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
}
