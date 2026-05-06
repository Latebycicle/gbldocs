// React Theme — extracted from https://goodbusinesslab.org
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
    neutral700: string;
    neutral800: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '12': string;
    '13': string;
    '14': string;
    '16': string;
    '18': string;
    '20': string;
    '24': string;
    '32': string;
    '40': string;
    '56': string;
    '38.4': string;
 *   };
 *   space: {
    '1': string;
    '24': string;
    '30': string;
    '45': string;
    '60': string;
    '64': string;
    '80': string;
    '120': string;
 *   };
 *   radii: {
    md: string;
    lg: string;
    xl: string;
    full: string;
 *   };
 *   shadows: {
    sm: string;
 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#f9f58c",
    "secondary": "#0000ee",
    "accent": "#149d6c",
    "background": "#fffbed",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#1a1a1a",
    "neutral200": "#6b6b6b",
    "neutral300": "#ffffff",
    "neutral400": "#fffbed",
    "neutral500": "#767676",
    "neutral600": "#555555",
    "neutral700": "#adadad",
    "neutral800": "#999999"
  },
  "fonts": {
    "body": "'Inter', sans-serif"
  },
  "fontSizes": {
    "12": "12px",
    "13": "13px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "24": "24px",
    "32": "32px",
    "40": "40px",
    "56": "56px",
    "38.4": "38.4px"
  },
  "space": {
    "1": "1px",
    "24": "24px",
    "30": "30px",
    "45": "45px",
    "60": "60px",
    "64": "64px",
    "80": "80px",
    "120": "120px"
  },
  "radii": {
    "md": "10px",
    "lg": "16px",
    "xl": "20px",
    "full": "999px"
  },
  "shadows": {
    "sm": "rgba(0, 0, 0, 0.15) 0px 1px 3px 0px"
  },
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#f9f58c",
      "light": "hsl(58, 90%, 91%)",
      "dark": "hsl(58, 90%, 61%)"
    },
    "secondary": {
      "main": "#0000ee",
      "light": "hsl(240, 100%, 62%)",
      "dark": "hsl(240, 100%, 32%)"
    },
    "background": {
      "default": "#fffbed",
      "paper": "#f9f58c"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#0000ee"
    }
  },
  "typography": {
    "fontFamily": "'Times New Roman', sans-serif",
    "h1": {
      "fontSize": "32px",
      "fontWeight": "400",
      "lineHeight": "38.4px"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "400",
      "lineHeight": "33.6px"
    },
    "h3": {
      "fontSize": "20px",
      "fontWeight": "400",
      "lineHeight": "32px"
    }
  },
  "shape": {
    "borderRadius": 10
  },
  "shadows": [
    "rgba(0, 0, 0, 0.15) 0px 1px 3px 0px"
  ]
};

export default theme;
