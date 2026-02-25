# Open Sponsor Widget

A lightweight, reusable React widget that allows you to add a sponsorship/support section (like "Buy Me a Coffee") to your website or application.

It is designed to be simple, customizable, and easy to integrate into any React 18+ project.

---

## ✨ Features

- ⚛️ Built for React 18+
- 📦 ESM + CommonJS + UMD builds
- 🧠 TypeScript support included
- 🎨 Styled with Tailwind (no global resets)
- 🌍 CDN compatible (unpkg & jsDelivr)
- 🪶 Lightweight and optimized

---

## 📦 Installation

### Using npm

```bash
npm install open-sponsor-widget
```

### Using yarn

```bash
yarn add open-sponsor-widget
```

### Using pnpm

```bash
pnpm add open-sponsor-widget
```

# 🚀 Basic Usage

```js
import React from "react";
import { OpenSponsorWidget } from "open-sponsor-widget";

function App() {
  return (
    <div>
      <OpenSponsorWidget
        title="Support This Project"
        description="If you enjoy this project, consider supporting it."
        buttonText="Buy Me a Coffee"
        link="https://buymeacoffee.com/yourname"
      />
    </div>
  );
}

export default App;
```

## 🧩 Props API

| Prop         | Type   | Required | Description |
|------------- |--------|----------|------------|
| `title`      | string | Yes      | Main heading of the widget |
| `description`| string | Yes      | Supporting text below title |
| `buttonText` | string | Yes      | Button label |
| `link`       | string | Yes      | Redirect URL when button is clicked |

---

## 🎨 Styling

The component is styled using Tailwind CSS utilities internally.

It does not apply global CSS resets, so it will not interfere with your existing styles.

---

## 🧠 Peer Dependencies

This package requires:

- `react` >= 18  
- `react-dom` >= 18  

Make sure these are installed in your project.

---

## 🌍 CDN Usage (UMD Build)

You can use the UMD build directly in HTML:

```html
<script src="https://unpkg.com/open-sponsor-widget/dist/index.umd.js"></script>
```

Or via jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/open-sponsor-widget/dist/index.umd.js"></script>
```

> After including the script, the widget will be available as a global variable `OpenSponsorWidget`.

# 📦 Package Structure

### The package includes:

- index.esm.js – ES Module build

- index.cjs.js – CommonJS build

- index.umd.js – Browser/CDN build

- index.d.ts – TypeScript definitions

## 🤝 Contributing

- Contributions are welcome.

- Fork the repository

- Create a new branch

- Submit a pull request

 For major changes, please open an issue first.

## 🐛 Reporting Issues

If you encounter a bug or have a feature request, please open an issue on GitHub.