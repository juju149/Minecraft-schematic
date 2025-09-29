# Minecraft Viewer Skeleton

This repository hosts a Vite + React + TypeScript workspace containing a data-driven Minecraft viewer architecture. The implementation provides module boundaries, responsibilities, and public APIs for an Epic 1 scope, ready for further development.

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

## Package layout

The viewer modules live in `packages/viewer/src`, mirroring the resource, meshing, lighting, and scene pipeline described in the architecture document. React bindings wrap the runtime for embedding in web applications.
