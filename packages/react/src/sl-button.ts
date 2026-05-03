import * as React from "react";
import { createComponent } from "@lit/react";
import { SlButton as SlButtonElement } from "@secret-lives/core";

export const SlButton = createComponent({
  tagName: "sl-button",
  elementClass: SlButtonElement,
  react: React,
  events: {
    onClick: "click",
  },
});
