import env from "react-dotenv";

export const usePassword = () => {
  const confirmPassword = (): boolean => {
    const password = window.prompt("Senha de administrador");
    return password === env.ADM_PASSWORD;
  };

  return { confirmPassword };
};
