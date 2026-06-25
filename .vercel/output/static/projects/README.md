# Project Images Folder

Place your project preview or dashboard screenshot images in this folder (e.g. `retail-dashboard-1.png`).

Once placed here, they will be automatically served by Vite at the root, and you can reference them in your portfolio `index.tsx` file like this:
```json
images: [
  "/projects/retail-dashboard-1.png",
  "/projects/retail-dashboard-2.png"
]
```

This is the easiest way to showcase your project dashboards without needing to configure complex Webpack/Vite bundler imports for local files.
