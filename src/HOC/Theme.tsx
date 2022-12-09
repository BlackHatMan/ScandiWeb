import { ThemeProvider } from 'styled-components';
import {ReactNode} from "react";

const theme = {
  color: {
    green: '#5ECE7B',
    gray: '#8D8F9A',
    black: '#1D1F22',
  },
  fonts: {
    roboto: 'Roboto Condensed',
    raleway: 'Raleway,  sans-serif',
    source: 'Source Sans Pro, sans-serif',
  },
};

const Theme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
