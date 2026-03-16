export interface Extension {
  id: string;
  name: string;
  description: string;
  icon: string;
  isActive: boolean;
  color: string; // Background color for the icon
}

export const initialExtensions: Extension[] = [
  {
    id: "devlens",
    name: "DevLens",
    description: "Quickly inspect page layouts and visualize element boundaries.",
    icon: "/assets/images/logo-devlens.svg",
    isActive: true,
    color: "#E1F5E6",
  },
  {
    id: "stylespy",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    icon: "/assets/images/logo-style-spy.svg",
    isActive: true,
    color: "#E1F1F8",
  },
  {
    id: "speedboost",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    icon: "/assets/images/logo-speed-boost.svg",
    isActive: false,
    color: "#FFE9E9",
  },
  {
    id: "jsonwizard",
    name: "JSONWizard",
    description: "Formats, validates, and prettifies JSON responses in-browser.",
    icon: "/assets/images/logo-json-wizard.svg",
    isActive: true,
    color: "#F8E1F8",
  },
  {
    id: "tabmasterpro",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    icon: "/assets/images/logo-tab-master-pro.svg",
    isActive: true,
    color: "#E8E1F8",
  },
  {
    id: "viewportbuddy",
    name: "ViewportBuddy",
    description: "Simulates various screen resolutions directly within the browser.",
    icon: "/assets/images/logo-viewport-buddy.svg",
    isActive: false,
    color: "#E1EBFA",
  },
  {
    id: "markupnotes",
    name: "Markup Notes",
    description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
    icon: "/assets/images/logo-markup-notes.svg",
    isActive: true,
    color: "#E1F1F8",
  },
  {
    id: "gridguides",
    name: "GridGuides",
    description: "Overlay customizable grids and alignment guides on any webpage.",
    icon: "/assets/images/logo-grid-guides.svg",
    isActive: false,
    color: "#E1E4F8",
  },
  {
    id: "palettepicker",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    icon: "/assets/images/logo-palette-picker.svg",
    isActive: true,
    color: "#E1F8F1",
  },
  {
    id: "linkchecker",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    icon: "/assets/images/logo-link-checker.svg",
    isActive: true,
    color: "#FBE9E1",
  },
  {
    id: "domsnapshot",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    icon: "/assets/images/logo-dom-snapshot.svg",
    isActive: false,
    color: "#E1F8FA",
  },
  {
    id: "consoleplus",
    name: "ConsolePlus",
    description: "Enhanced developer console with advanced filtering and logging.",
    icon: "/assets/images/logo-console-plus.svg",
    isActive: true,
    color: "#E8F8E1",
  },
];
