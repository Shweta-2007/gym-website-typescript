## Gym-website using Typescript

# Installation:

- npm create vite@latest
- npm i framer-motion react-anchor-link-smooth-scroll@1.0.12 @heroicons/react
- npm i -D @types/react-anchor-link-smooth-scroll@1.0.2 @types/node

# Configured vite.config

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

export default defineConfig({
plugins: [react()],
resolve: {
alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
},
});

# Configured tsConfig:

"compilerOptions": {
"paths": {
"@/_": ["./src/_"]
},
"target": "ES2020",
}

# Configured Tailwind

- Added some customized properties in extend.

# Chrome Extension:

- pesticide for design
- class name fixed so that it will always be fixed when we scroll down
- Multi cursor: alt + click
- Width of mobile: w-[300px]
- use gap-10 for maintaining gap between each elements rather than using margin.
- relative is used for parent container and absolute for child container

<div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]  md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

# Framer-motion

- npm i react-hook-form
