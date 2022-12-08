export const changeTheme = (theme: string[], themeName: string) => {
    document.documentElement.style.setProperty(
        "--primary-color",
        theme[0]
      );
      document.documentElement.style.setProperty(
        "--secondary-color",
        theme[1]
      );
      document.documentElement.style.setProperty(
        "--secondary-color-dark",
        theme[2]
      );
      document.documentElement.style.setProperty(
        "--bg-color",
        theme[3]
      );
      document.documentElement.style.setProperty(
        "--text-color",
        theme[4]
      );
      document.documentElement.style.setProperty(
        "--rug-primary",
        theme[5]
      );
      document.documentElement.style.setProperty(
        "--rug-secondary",
        theme[6]
      );
      document.documentElement.style.setProperty(
        "--rug-border",
        theme[7]
      );

      localStorage.setItem("theme", themeName);
}