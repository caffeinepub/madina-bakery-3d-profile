# Madina Bakery 3D Profile

## Current State
New project with empty Motoko backend and no frontend UI.

## Requested Changes (Diff)

### Add
- Full 3D interactive business profile page for Madina Baker's & Sweets Jauharabad
- Backend: store business profile data (name, address, phone, hours, rating, reviews, social links)
- Frontend: Complete 3D scene using React Three Fiber / Three.js
  - Floating 3D business info card with depth/shadow
  - Animated 3D extruded business name text
  - 3D rotating star rating display
  - Popular times bar chart as 3D rising bars (Mon–Sun)
  - 3D review card (floats/spins on hover)
  - "People also search for" section as 3D tiles
  - Floating 3D pill action buttons: Directions, Call, Save, Share, WhatsApp
  - Mouse parallax / scroll animations
  - Mobile responsive layout
  - Warm bakery theme: cream, beige, golden brown

### Modify
- Nothing (new project)

### Remove
- Nothing

## Implementation Plan
1. Backend: Motoko actor storing business profile data as stable record, expose query to fetch it
2. Frontend: React Three Fiber canvas scene with warm background
   - 3D extruded text for business name using drei Text3D
   - Floating card meshes with rounded box geometry, bevel, soft shadows
   - Star rating with 3D star geometries rotating
   - Popular times 3D bar chart (Mon–Sun) with animated rising bars
   - Review card mesh with float+tilt on hover
   - People also search for: 3D tile grid
   - Action button pills rendered as 3D rounded boxes with labels
   - HTML overlay for contact info, WhatsApp button
   - Mouse move parallax effect on the entire scene
   - Scroll-based animations using scroll position
   - Responsive canvas sizing
