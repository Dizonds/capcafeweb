# CAP Cafe — Image Assets Container

This directory (`src/assets/`) is your dedicated container for all real café photography, logo, and menu files.

The website is wired to automatically detect and load your real files whenever you place them here:

| Filename | Purpose | Recommended Resolution | Description |
| :--- | :--- | :--- | :--- |
| `cap-logo.png` | **Primary Brand Logo** | Transparent or Cream BG (~400x120px) | Displayed in sticky navbar & footer. |
| `cap-interior.png` | **Hero Cafe Interior** | High-res (~1920x1080px or higher) | Real cafe photo showing cream walls, warm wood, lighting. |
| `cap-menu.png` | **Physical Menu Photo** | High-res (~1500px+) | Physical printed menu or counter chalkboard board photo. |
| `gallery-1.png` | **Gallery 1 - Espresso Bar** | ~1200x800px | Espresso extraction, steam wand, ceramic cups, barista. |
| `gallery-2.png` | **Gallery 2 - Seating & Interior**| ~800x1000px (Portrait) | Wooden tables, off-white seating, warm lighting. |
| `gallery-3.png` | **Gallery 3 - Coffee Close-up** | ~800x800px (Square) | Latte art, iced Spanish latte, cold brew glasses. |
| `gallery-4.png` | **Gallery 4 - Pastry / Bakes** | ~800x800px (Square) | Croissants, cookies, or counter display. |
| `gallery-5.png` | **Gallery 5 - Wide Atmosphere** | ~1200x800px | People studying, relaxed afternoon atmosphere, storefront. |

*(Note: The loader also supports `.jpg`/`.jpeg` automatically as well).*

---

### How it works:
1. Drag and drop your image files directly into this directory: `D:\CAPcafe_web\capcafeweb\src\assets\`.
2. Give them the filenames listed in the table above.
3. The website immediately detects them. If an image is not yet provided, the site gracefully falls back to curated warm aesthetic placeholders.
