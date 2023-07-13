import { useCallback, useState, useLayoutEffect } from "react";

function useTheme() {
  const [theme, setTheme] = useState("light");

  // 설정한 테마 값을 로컬스토리지에 저장하여 새로고침을 하더라도 이전에 설정한 테마 값을 유지
  const onChangeTheme = useCallback(() => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  }, [theme]);

  // useLayoutEffect를 사용하여 렌더링된 컴포넌트가 화면에 그려지기 전에 동기적으로 실행
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
      return;
    }
    // 사용자의 시스템 설정이 다크모드일 경우 초기 테마를 다크모드로 적용
    // prefers-color-scheme 미디어 쿼리를 사용하여 prefers-color-scheme 값이 ‘dark’ 라면 프로젝트 테마를 다크모드로 설정
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    }
  }, []);

  return {
    theme,
    onChangeTheme,
  };
}

export default useTheme;
