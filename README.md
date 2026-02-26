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
import { SponsorWidget } from 'open-sponsor-widget';

// Add the following line to import the CSS styles for the widget
import "open-sponsor-widget/style.css";

function App() {
  return (
    <div>
      <SponsorWidget
        title="Title of the Widget"
        description="A brief description about the sponsorship or support you are seeking."
        links={[
          {
            platform: "buymeacoffee",
            url: "https://www.buymeacoffee.com/yourprofile",
          },
          {
            platform: "patreon",
            url: "https://www.patreon.com/yourprofile",
          },
          {
            platform: "github",
            url: "https://github.com/yourprofile",
          },
          {
            platform: "custom",
            name: "Ko-fi",
            url: "https://ko-fi.com/yourprofile",
          },
        ]}
        hero={{
          image: "https://tse4.mm.bing.net/th/id/OIP.IDq8cZVcGfgwgkR1Bt0RywHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
          imageAlt: "Support Us",
        }}
        previousSponsors={[
          {
            name: "Alice",
            avatar: "Avatar URL",
            profileUrl: "Profile URL",
          },
          {
            name: "Alice",
            avatar: "Avatar URL",
            profileUrl: "Profile URL",
          },
          {
            name: "Alice",
            avatar: "Avatar URL",
            profileUrl: "Profile URL",
          },
          {
            name: "Alice",
            avatar: "Avatar URL",
            profileUrl: "Profile URL",
          },
        ]}
      ></SponsorWidget>
    </div>
  );
}

export default App;
```

## 🧩 Props API

| Prop         | Type   | Required | Description |
|------------- |--------|----------|------------ |
| `title`      | string | Yes      | Main heading of the widget |
| `description`| string | Yes      | Supporting text below title |
| `goal`       | object | No       | Optional goal object with `amount` and `currency` properties |
| `link`       | string | Yes      | Redirect URL when button is clicked |
| `hero`       | object | No       | Optional hero image with `image` and `imageAlt` properties |
| `previousSponsors` | array of objects | No | Optional list of previous sponsors with `name`, `avatar`, and `profileUrl` properties |
|layout        | string | No       | Optional layout style (e.g., "default", "compact", "minimal", "card", "inline") |
|theme         | string | No       | Optional theme (e.g., "light", "dark") |
|className     | string | No       | Optional additional CSS class for custom styling |
|containerClassName | string | No       | Optional CSS class for the widget container |
|openInNewTab  | boolean | No       | Optional flag to open links in a new tab (default: false) |
|animation     | Object | No       | Optional animation style (e.g., "enabled", "hoverScale", "fadeIn", "duration") |
|renderSponsor | Function | No       | Optional custom render function for sponsors (receives sponsor data as argument) |
|renderButton  | Function | No       | Optional custom render function for the call-to-action button (receives button props as argument) |

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