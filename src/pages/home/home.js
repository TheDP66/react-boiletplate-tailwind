import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="w-screen h-screen flex items-center justify-center text-enter">
      <h1>{t("home.greeting")} React + Tailwind boilerplate</h1>
    </div>
  );
};

export default Home;
