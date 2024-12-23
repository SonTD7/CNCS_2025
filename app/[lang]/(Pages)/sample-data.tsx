"use client"
import React from "react"
import SimpleSlider from "./sample/simple-slider"
import RiveApp from "./sample/rive-app"

export default function SampleData() {
	return (
		<>
			<div className="block relative w-auto">
				<SimpleSlider />
				<RiveApp />
			</div>
		</>
	)
}
