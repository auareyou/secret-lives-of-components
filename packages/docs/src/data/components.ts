/**
 * Registry of components. The sidebar nav, components index page,
 * and dynamic embed/[component] route all read from this.
 *
 * Add a new component here once its sl-* element is implemented.
 */

export interface ComponentEntry {
  slug: string;
  tagName: string;
  title: string;
  blurb: string;
  status: "stub" | "in-progress" | "shipped";
}

export const components: ComponentEntry[] = [
  {
    slug: "button",
    tagName: "sl-button",
    title: "Button",
    blurb: "The classic. More states than designers think.",
    status: "shipped",
  },
];
