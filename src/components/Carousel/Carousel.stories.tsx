import React from "react";
import { Carousel } from "./index";
import {
withKnobs,
text,
boolean,
color,
select,
} from "@storybook/addon-knobs";

export default {
title: "Carousel",
component: Carousel,
decorators: [withKnobs],
};

export const knobsBtn = () => (
);