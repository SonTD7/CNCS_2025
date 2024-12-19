import "./styles.css";

import { useState } from "react";
import {
  useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment
} from "@rive-app/react-canvas";

export default function RiveApp() {
	const { rive, RiveComponent } = useRive({
		src: 'http://localhost:1337/uploads/egypt_02_c2edcd0583.riv',
		stateMachines: "State Machine 1",
		autoplay: false,
	  });
  
  return (
	<RiveComponent className="w-screen h-screen"
	onMouseEnter={() => rive && rive.play()}
	onMouseLeave={() => rive && rive.pause()}
  />
  );
}
