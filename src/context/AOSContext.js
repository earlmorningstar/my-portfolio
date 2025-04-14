import React, { createContext, useEffect, useContext, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSContext = createContext(null);

const hasVisitedKey = "aos-visited-components";

export const AOSProvider = ({ children }) => {
  const [visitedComponents, setVisitedComponents] = useState(() => {
    try {
      const stored = sessionStorage.getItem(hasVisitedKey);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      return {};
    }
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      disable: false,
    });

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setVisitedComponents({});
        sessionStorage.removeItem(hasVisitedKey);
        AOS.refreshHard();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(hasVisitedKey, JSON.stringify(visitedComponents));
    } catch (error) {
      console.error(
        "Failed to save visited components to sessionStorage",
        error
      );
    }
  }, [visitedComponents]);

  const aosWithTracking = {
    ...AOS,
    refreshComponent: (componentId) => {
      if (!visitedComponents[componentId]) {
        setVisitedComponents((prev) => ({
          ...prev,
          [componentId]: true,
        }));

        AOS.refresh();
        return true;
      }
      return false;
    },
  };

  return (
    <AOSContext.Provider value={aosWithTracking}>
      {children}
    </AOSContext.Provider>
  );
};

export const useAOS = () => {
  return useContext(AOSContext);
};
