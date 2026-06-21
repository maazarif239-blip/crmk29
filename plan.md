# Image Path Audit and Fix Plan

## Goal Description
Perform a complete production image-path audit across the project. This will resolve broken images on Netlify by fixing paths, correctly formatting filenames, ensuring case-sensitivity, removing absolute local paths, and enforcing proper Next.js `<Image>` attributes.

## Proposed Changes

### 1. File Renames in `public/`
The following files contain spaces or special characters and will be renamed to strictly lower kebab-case:
- `101 (1).png` -> `101-1-.png`
- `101 (2).png` -> `101-2-.png`
- `101 (3).png` -> `101-3-.png`
- `101 (4).png` -> `101-4-.png`
- `111 (3).png` -> `111-3-.png`
- `113 (1).png` -> `113-1-.png`
- `113 (2).png` -> `113-2-.png`
- `113 (3).png` -> `113-3-.png`
- `113 (4).png` -> `113-4-.png`
- `113 (5).png` -> `113-5-.png`
- `113 (6).png` -> `113-6-.png`
- `113 (7).png` -> `113-7-.png`
- `113 (8).png` -> `113-8-.png`
- `155 (1).png` -> `155-1-.png`
- `155 (10).png` -> `155-10-.png`
- `155 (11).png` -> `155-11-.png`
- `155 (12).png` -> `155-12-.png`
- `155 (13).png` -> `155-13-.png`
- `155 (14).png` -> `155-14-.png`
- `155 (15).png` -> `155-15-.png`
- `155 (2).png` -> `155-2-.png`
- `155 (3).png` -> `155-3-.png`
- `155 (4).png` -> `155-4-.png`
- `155 (5).png` -> `155-5-.png`
- `155 (6).png` -> `155-6-.png`
- `155 (7).png` -> `155-7-.png`
- `155 (8).png` -> `155-8-.png`
- `155 (9).png` -> `155-9-.png`
- `175 (1).png` -> `175-1-.png`
- `175 (2).png` -> `175-2-.png`
- `175 (3).png` -> `175-3-.png`
- `205 (6).png` -> `205-6-.png`
- `205 (7).png` -> `205-7-.png`
- `220 (1).png` -> `220-1-.png`
- `220 (2).png` -> `220-2-.png`
- `220 (3).png` -> `220-3-.png`
- `220 (4).png` -> `220-4-.png`
- `220 (5).png` -> `220-5-.png`
- `220 (6).png` -> `220-6-.png`
- `230 (1).png` -> `230-1-.png`
- `230 (2).png` -> `230-2-.png`
- `230 (3).png` -> `230-3-.png`
- `230 (4).png` -> `230-4-.png`
- `230 (5).png` -> `230-5-.png`
- `230 (6).png` -> `230-6-.png`
- `230 (7).png` -> `230-7-.png`
- `230 (8).png` -> `230-8-.png`
- `230 (9).png` -> `230-9-.png`
- `240(1).png` -> `240-1-.png`
- `240(2).png` -> `240-2-.png`
- `240(3).png` -> `240-3-.png`
- `240(4).png` -> `240-4-.png`
- `240(5).png` -> `240-5-.png`
- `245 (1).png` -> `245-1-.png`
- `245 (2).png` -> `245-2-.png`
- `245 (3).png` -> `245-3-.png`
- `245 (4).png` -> `245-4-.png`
- `245 (5).png` -> `245-5-.png`
- `245 (6).png` -> `245-6-.png`
- `245 (7).png` -> `245-7-.png`
- `245 (8).png` -> `245-8-.png`
- `245 (9).png` -> `245-9-.png`
- `270 (1).png` -> `270-1-.png`
- `270 (10).png` -> `270-10-.png`
- `270 (11).png` -> `270-11-.png`
- `270 (12).png` -> `270-12-.png`
- `270 (13).png` -> `270-13-.png`
- `270 (14).png` -> `270-14-.png`
- `270 (15).png` -> `270-15-.png`
- `270 (16).png` -> `270-16-.png`
- `270 (17).png` -> `270-17-.png`
- `270 (18).png` -> `270-18-.png`
- `270 (19).png` -> `270-19-.png`
- `270 (2).png` -> `270-2-.png`
- `270 (20).png` -> `270-20-.png`
- `270 (3).png` -> `270-3-.png`
- `270 (4).png` -> `270-4-.png`
- `270 (5).png` -> `270-5-.png`
- `270 (6).png` -> `270-6-.png`
- `270 (7).png` -> `270-7-.png`
- `270 (8).png` -> `270-8-.png`
- `270 (9).png` -> `270-9-.png`
- `99 (1).png` -> `99-1-.png`
- `99 (10).png` -> `99-10-.png`
- `99 (11).png` -> `99-11-.png`
- `99 (12).png` -> `99-12-.png`
- `99 (13).png` -> `99-13-.png`
- `99 (14).png` -> `99-14-.png`
- `99 (15).png` -> `99-15-.png`
- `99 (16).png` -> `99-16-.png`
- `99 (17).png` -> `99-17-.png`
- `99 (18).png` -> `99-18-.png`
- `99 (19).png` -> `99-19-.png`
- `99 (2).png` -> `99-2-.png`
- `99 (3).png` -> `99-3-.png`
- `99 (4).png` -> `99-4-.png`
- `99 (5).png` -> `99-5-.png`
- `99 (6).png` -> `99-6-.png`
- `99 (7).png` -> `99-7-.png`
- `99 (8).png` -> `99-8-.png`
- `99 (9).png` -> `99-9-.png`
- `9952 (3).png` -> `9952-3-.png`
- `New Volume (E) - Shortcut.lnk` -> `new-volume-e-shortcut.lnk`
- `Screenshot 2026-06-13 163948.png` -> `screenshot-2026-06-13-163948.png`
- `Screenshot 2026-06-13 164041.png` -> `screenshot-2026-06-13-164041.png`
- `Screenshot 2026-06-13 215230.png` -> `screenshot-2026-06-13-215230.png`
- `Screenshot 2026-06-15 225357.png` -> `screenshot-2026-06-15-225357.png`
- `Screenshot 2026-06-15 225440.png` -> `screenshot-2026-06-15-225440.png`
- `Screenshot 2026-06-16 163413.png` -> `screenshot-2026-06-16-163413.png`
- `Screenshot 2026-06-16 164124.png` -> `screenshot-2026-06-16-164124.png`
- `Screenshot 2026-06-16 164439.png` -> `screenshot-2026-06-16-164439.png`
- `Screenshot 2026-06-16 164657.png` -> `screenshot-2026-06-16-164657.png`
- `Screenshot 2026-06-16 164809.png` -> `screenshot-2026-06-16-164809.png`
- `Screenshot 2026-06-16 165028.png` -> `screenshot-2026-06-16-165028.png`
- `Screenshot 2026-06-16 165302.png` -> `screenshot-2026-06-16-165302.png`
- `Screenshot 2026-06-16 175833.png` -> `screenshot-2026-06-16-175833.png`
- `Screenshot 2026-06-16 175937.png` -> `screenshot-2026-06-16-175937.png`
- `Screenshot 2026-06-16 180108.png` -> `screenshot-2026-06-16-180108.png`
- `Screenshot 2026-06-16 181849.png` -> `screenshot-2026-06-16-181849.png`
- `Screenshot 2026-06-16 182144.png` -> `screenshot-2026-06-16-182144.png`
- `Screenshot 2026-06-16 182240.png` -> `screenshot-2026-06-16-182240.png`
- `Screenshot 2026-06-16 182346.png` -> `screenshot-2026-06-16-182346.png`
- `Screenshot 2026-06-16 182823.png` -> `screenshot-2026-06-16-182823.png`
- `Screenshot 2026-06-16 183344.png` -> `screenshot-2026-06-16-183344.png`
- `Screenshot 2026-06-16 184300.png` -> `screenshot-2026-06-16-184300.png`
- `Screenshot 2026-06-16 184310.png` -> `screenshot-2026-06-16-184310.png`
- `Screenshot 2026-06-16 184319.png` -> `screenshot-2026-06-16-184319.png`
- `Screenshot 2026-06-16 184330.png` -> `screenshot-2026-06-16-184330.png`
- `Screenshot 2026-06-20 162627.png` -> `screenshot-2026-06-20-162627.png`
- `Screenshot 2026-06-20 162639.png` -> `screenshot-2026-06-20-162639.png`
- `Screenshot 2026-06-20 162651.png` -> `screenshot-2026-06-20-162651.png`
- `Screenshot 2026-06-20 162655.png` -> `screenshot-2026-06-20-162655.png`
- `Screenshot 2026-06-20 162700.png` -> `screenshot-2026-06-20-162700.png`
- `Screenshot 2026-06-20 162706.png` -> `screenshot-2026-06-20-162706.png`
- `Screenshot 2026-06-20 162711.png` -> `screenshot-2026-06-20-162711.png`
- `Screenshot 2026-06-20 162723.png` -> `screenshot-2026-06-20-162723.png`
- `Screenshot 2026-06-20 162727.png` -> `screenshot-2026-06-20-162727.png`
- `Screenshot 2026-06-20 162734.png` -> `screenshot-2026-06-20-162734.png`
- `Screenshot 2026-06-20 162755.png` -> `screenshot-2026-06-20-162755.png`
- `Screenshot 2026-06-20 162805.png` -> `screenshot-2026-06-20-162805.png`
- `Screenshot 2026-06-20 162815.png` -> `screenshot-2026-06-20-162815.png`
- `Screenshot 2026-06-20 162837.png` -> `screenshot-2026-06-20-162837.png`
- `Screenshot 2026-06-20 162845.png` -> `screenshot-2026-06-20-162845.png`
- `Screenshot 2026-06-20 162850.png` -> `screenshot-2026-06-20-162850.png`
- `Screenshot 2026-06-20 162907.png` -> `screenshot-2026-06-20-162907.png`
- `Screenshot 2026-06-20 162914.png` -> `screenshot-2026-06-20-162914.png`
- `Screenshot 2026-06-20 162920.png` -> `screenshot-2026-06-20-162920.png`
- `Screenshot 2026-06-20 162939.png` -> `screenshot-2026-06-20-162939.png`
- `Screenshot 2026-06-20 162959.png` -> `screenshot-2026-06-20-162959.png`
- `Screenshot 2026-06-20 163020.png` -> `screenshot-2026-06-20-163020.png`
- `Screenshot 2026-06-20 163031.png` -> `screenshot-2026-06-20-163031.png`
- `Screenshot 2026-06-20 163042.png` -> `screenshot-2026-06-20-163042.png`
- `Screenshot 2026-06-20 163103.png` -> `screenshot-2026-06-20-163103.png`
- `Screenshot 2026-06-20 163107.png` -> `screenshot-2026-06-20-163107.png`
- `Screenshot 2026-06-20 163117.png` -> `screenshot-2026-06-20-163117.png`
- `Screenshot 2026-06-20 163121.png` -> `screenshot-2026-06-20-163121.png`
- `Screenshot 2026-06-20 163125.png` -> `screenshot-2026-06-20-163125.png`
- `Screenshot 2026-06-20 163129.png` -> `screenshot-2026-06-20-163129.png`
- `Screenshot 2026-06-20 163134.png` -> `screenshot-2026-06-20-163134.png`
- `Screenshot 2026-06-20 163140.png` -> `screenshot-2026-06-20-163140.png`
- `Screenshot 2026-06-20 163148.png` -> `screenshot-2026-06-20-163148.png`
- `Screenshot 2026-06-20 163152.png` -> `screenshot-2026-06-20-163152.png`
- `Screenshot 2026-06-20 163157.png` -> `screenshot-2026-06-20-163157.png`
- `Screenshot 2026-06-20 163202.png` -> `screenshot-2026-06-20-163202.png`
- `Screenshot 2026-06-20 163205.png` -> `screenshot-2026-06-20-163205.png`
- `Screenshot 2026-06-20 163236.png` -> `screenshot-2026-06-20-163236.png`
- `Screenshot 2026-06-20 163250.png` -> `screenshot-2026-06-20-163250.png`
- `Screenshot 2026-06-20 163259.png` -> `screenshot-2026-06-20-163259.png`
- `Screenshot 2026-06-20 163308.png` -> `screenshot-2026-06-20-163308.png`
- `Screenshot 2026-06-20 163315.png` -> `screenshot-2026-06-20-163315.png`
- `Screenshot 2026-06-20 163323.png` -> `screenshot-2026-06-20-163323.png`
- `Screenshot 2026-06-20 163331.png` -> `screenshot-2026-06-20-163331.png`
- `Screenshot 2026-06-20 163342.png` -> `screenshot-2026-06-20-163342.png`
- `Screenshot 2026-06-20 163351.png` -> `screenshot-2026-06-20-163351.png`

### 2. Code Updates
The following files will be updated to point to the correct, newly formatted image paths, removing any `/public/` or absolute path prefixes, and adding `fill` to `<Image>` tags missing dimensions:

#### [MODIFY] [app\ant-chairs\page.tsx](file:///e:/crm/app/ant-chairs/page.tsx)
- Fixed src: `Added missing leading slash`

#### [MODIFY] [app\conference-meeting-tables\page.tsx](file:///e:/crm/app/conference-meeting-tables/page.tsx)
- Fixed src: `Added missing leading slash`

#### [MODIFY] [app\hardwood-executive-tables\page.tsx](file:///e:/crm/app/hardwood-executive-tables/page.tsx)
- Fixed src: `Renamed to kebab-case: screenshot-2026-06-16-164439.png`

#### [MODIFY] [app\library-shelves\page.tsx](file:///e:/crm/app/library-shelves/page.tsx)
- Fixed src: `Renamed to kebab-case: 155-4-.png`

#### [MODIFY] [app\products\conference-and-meeting-tables\page.tsx](file:///e:/crm/app/products/conference-and-meeting-tables/page.tsx)
- Fixed src: `Renamed to kebab-case: 175-1-.png`

#### [MODIFY] [app\products\director-chair\page.tsx](file:///e:/crm/app/products/director-chair/page.tsx)
- Fixed src: `Renamed to kebab-case: screenshot-2026-06-16-165028.png`

#### [MODIFY] [app\products\executive-chairs\page.tsx](file:///e:/crm/app/products/executive-chairs/page.tsx)
- Fixed src: `Renamed to kebab-case: 230-1-.png`

#### [MODIFY] [app\products\executive-furniture\page.tsx](file:///e:/crm/app/products/executive-furniture/page.tsx)
- Fixed src: `Renamed to kebab-case: 240-1-.png`

#### [MODIFY] [app\products\lotus-30-office-workstations\page.tsx](file:///e:/crm/app/products/lotus-30-office-workstations/page.tsx)
- Fixed src: `Renamed to kebab-case: screenshot-2026-06-16-183344.png`

#### [MODIFY] [app\products\manager-chair-collection\page.tsx](file:///e:/crm/app/products/manager-chair-collection/page.tsx)
- Fixed src: `Renamed to kebab-case: 245-1-.png`

#### [MODIFY] [app\products\modern-workstation-systems\page.tsx](file:///e:/crm/app/products/modern-workstation-systems/page.tsx)
- Fixed src: `Renamed to kebab-case: screenshot-2026-06-16-164657.png`

#### [MODIFY] [app\reception-counters\page.tsx](file:///e:/crm/app/reception-counters/page.tsx)
- Fixed src: `Added missing leading slash`

#### [MODIFY] [app\sofas-lounge-seating\page.tsx](file:///e:/crm/app/sofas-lounge-seating/page.tsx)
- Fixed src: `Added missing leading slash`

#### [MODIFY] [app\visitor-chairs\page.tsx](file:///e:/crm/app/visitor-chairs/page.tsx)
- Fixed src: `Added missing leading slash`

#### [MODIFY] [app\workspace-solutions\page.tsx](file:///e:/crm/app/workspace-solutions/page.tsx)
- Fixed src: `Renamed to kebab-case: screenshot-2026-06-16-163413.png`

## Verification Plan
1. Ensure all modified files compile successfully (`npm run build`).
2. Verify all image references exactly match the filenames in the `public` folder.
3. Test locally by running `npm run dev` and visually checking pages.
