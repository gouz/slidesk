export const css = `
:root {
  font-family: SegoeUI, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  --sd-heading1-size: 3.75em;
  --sd-heading1-line-height: 1;
  --sd-heading2-size: 2.25em;
  --sd-heading2-line-height: 1;
  --sd-heading3-size: 1.75em;
  --sd-heading3-line-height: 1;
  --sd-text-size: 40px;
  --sd-text-line-height: 1.2;

  --sd-background-color: #242424;
  --sd-heading-color: rgba(255, 255, 255, 0.97);
  --sd-text-color: rgba(255, 255, 255, 0.87);
  --sd-primary-color: rgb(37, 186, 146);
}

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

p, img {
  margin: 0.5rem auto;
}

a, .b {
  color: var(--sd-primary-color);
}

.b {
  font-weight: bold;
}

.i {
  font-style: italic;
}

.code, pre {
  font-family: monospace;
  white-space: pre;
}

.s {
  text-decoration-line: line-through;
}

.u {
  text-decoration-line: underline;
}

#sd-progress {
  background-color: var(--sd-primary-color);
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0.25rem;
  z-index: 1;
}

.📽️ {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: var(--sd-background-color);
  color: var(--sd-text-color);
  font-size: var(--sd-text-size);
  line-height: var(--sd-text-line-height);
}

.🎞️ {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateX(100%);
  transition: all var(--animationTimer) ease;
  padding: 30px;
}

.🎞️ h1, h2, h3 {
    margin: 0;
    text-align: center;
    color: var(--sd-heading-color);
}

.🎞️ h1 {
    font-size: var(--sd-heading1-size);
    line-height: var(--sd-heading1-line-height);
    margin-bottom: 20px;
}

.🎞️ h2 {
    font-size: var(--sd-heading2-size);
    line-height: var(--sd-heading2-line-height);
    margin-bottom: 20px;
}

.🎞️ h3 {
    font-size: var(--sd-heading3-size);
    line-height: var(--sd-heading3-line-height);
    margin-bottom: 20px;
}

.🎞️.no-🏄 {
  transition-duration: 0ms;
}

.🎞️.👆 {
  transform: translateX(0);
}

.🎞️.👈 {
  transform: translateX(-100%);
}

.🎞️ .📝 {
  display: none;
}

.🎞️ img {
  max-height: 90%;
}
`;
