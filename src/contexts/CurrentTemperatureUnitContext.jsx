import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
  currentTempUnit: "F",
  handleToggleSwitchChange: () => {},
});

export { CurrentTemperatureUnitContext };
