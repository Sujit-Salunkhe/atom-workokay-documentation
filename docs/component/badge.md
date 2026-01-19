---
title: "Badge"
sidebar_position: 1
--- 

  ## Basic usage

  ```jsx title=Codeblocks
  export function BadgeExamples() {
    return (
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
        <Badge variant="primary" tone="medium">
          Primary
        </Badge>
        
        <Badge variant="success" tone="high">
          Success
        </Badge>
        
        <Badge variant="warning" tone="medium">
          12 Pending
        </Badge>
        
        <Badge variant="danger" tone="high">
          Critical
        </Badge>
        
        <Badge variant="info" tone="low">
          New
        </Badge>
        
        <Badge variant="neutral" tone="medium">
          Draft
        </Badge>
      
        <Badge variant="accent" tone="high">
          VIP
        </Badge>
      </div>
    );
  }
  ```
  ## Props

  ```jsx title=codeblocks
  export type BadgeProps = React.ComponentPropsWithoutRef<"span"> &
    VariantProps<typeof badgeVariants> & {
      /** Render as child element via Radix Slot */
      asChild?: boolean;
      /** Semantic color variant */
      variant?: BadgeVariant;
      /** Intensity level within variant */
      tone?: BadgeTone;
    };

    Types:
    BadgeVariant = "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "neutral" | "accent"
    BadgeTone = "low" | "medium" | "high" (default: "low")
  ```

  ## Variant props

  ### Variant + Tone system

  ```jsx title =codeblocks
  8 semantic variants × 3 tone levels = 24 combinations:

  **Variants:**
  primary – main brand color
  secondary – subtle secondary brand
  success – green (positive/complete)
  warning – yellow/orange (caution)
  danger – red (error/critical)  
  info – blue (information)
  neutral – gray (neutral/status)
  accent – purple/pink (highlight/special)

  **Tones:**
  "low" – subtle, outline-like (default)
  "medium" – moderate fill
  "high" – solid, high contrast

  Examples:
  <Badge variant="primary" tone="low">Primary Low</Badge>
  <Badge variant="primary" tone="medium">Primary Medium</Badge>
  <Badge variant="primary" tone="high">Primary High</Badge>

  <Badge variant="success" tone="high">✓ Complete</Badge>
  <Badge variant="danger" tone="high">✗ Failed</Badge>
  <Badge variant="warning" tone="medium">⚠ 2 Warnings</Badge>
  ```


  ## Icon support
  ```jsx title =Codeblocks
  import { FiBell, FiCheck, FiAlertTriangle } from "react-icons/fi";

  export function BadgeWithIcons() {
    return (
      <div style={{ display: "flex", gap: "0.75rem" }}>
        <Badge variant="info" tone="medium">
          <FiBell />
          5 New
        </Badge>
        
        <Badge variant="success" tone="high">
          <FiCheck />
          Complete
        </Badge>
        
        <Badge variant="warning" tone="medium">
          <FiAlertTriangle />
          Warnings
        </Badge>
      </div>
    );
  }
  ```

  ## Behavioral props

  ### asChild

  ```jsx title =Codeblocks
  Render badge styles on any child element:
    <Badge asChild variant="success" tone="high">
      <a href="#completed">✓ Task Complete</a>
    </Badge>

    <Badge asChild variant="primary" tone="medium">
      <button type="button">Edit</button>
    </Badge>

  When asChild=true:
    Renders Radix Slot instead of span
    Passes all classes/props to single child
    Maintains full accessibility

  ```

  ### Numbers & Status

  ```jsx title =Codeblocks
  // Notification counts
  <Badge variant="info" tone="high">42</Badge>
  <Badge variant="primary" tone="medium">1.2K</Badge>

  // Status badges
  <Badge variant="success" tone="low">Active</Badge>
  <Badge variant="danger" tone="medium">Blocked</Badge>
  <Badge variant="warning" tone="high">Review</Badge>
  <Badge variant="neutral" tone="low">Draft</Badge>
  ```


  ### Sizing & Layout

  ```jsx title =Codeblocks
  // Fixed height, auto-width by default
  <Badge variant="secondary" tone="medium" className="px-3">
    Custom padding
  </Badge>

  // Stack multiple badges
  <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
    <Badge variant="success" tone="high">Published</Badge>
    <Badge variant="primary" tone="low">Pro</Badge>
    <Badge variant="info" tone="medium">Sponsored</Badge>
  </div>
  ```

  ### Accessibility features

  ```jsx title =Codeblocks
    Production-ready a11y:
    ✅ Focus ring: ring-[3px] with --atom-ring-color
    ✅ Ring offset: ring-offset-2 with theme background
    ✅ Readable text-xs across all variants/tones
    ✅ data-slot="badge" for testing
    ✅ Works with asChild (props pass through)
    ✅ Smooth transitions don't cause layout shift
    ✅ Screen magnifier friendly (no overflow-hidden issues)

  ```

## Theming behavior

```jsx title =Codeblocks
  Fully token-driven with 48 CSS custom properties (8 variants × 3 tones × 2 states):
  
  Token pattern:
    --atom-badge-{variant}-{bg|fg|border}-{tone}
  
  Examples:
    primary-medium → --atom-badge-primary-bg-medium
    success-high → --atom-badge-success-bg-high text-[var(--atom-primary-contrast)]
    
  Your theme defines all combinations:
    .atom-theme[data-theme="light"] {
      --atom-badge-primary-bg-low: color-mix(in srgb, var(--atom-primary) 10%, white)
      --atom-badge-primary-fg-low: var(--atom-primary)
      --atom-badge-success-bg-high: var(--atom-success)
      /* ... 48 total tokens */
    }

  Theme changes instantly update all badges.
```

  ### Compound variant matrix

  | Variant\\Tone | low (subtle)   | medium      | high (solid)    |
  | ------------ | -------------- | ----------- | --------------- |
  | primary      | Outline brand  | Semi-fill   | Solid brand     |
  | secondary    | Subtle outline | Muted fill  | Solid secondary |
  | success      | Light green    | Green fill  | Solid success ✓ |
  | warning      | Pale yellow    | Amber fill  | Solid warning ⚠ |
  | danger       | Light red      | Red fill    | Solid danger ✗  |
  | info         | Light blue     | Blue fill   | Solid info ℹ     |
  | neutral      | Light gray     | Gray fill   | Solid neutral   |
  | accent       | Light purple   | Purple fill | Solid accent    |


Key Features
- 24 visual combinations (8×3 matrix)

- Token-based theming (48 CSS variables)

- asChild support via Radix Slot

- Icon-ready (svg size-3 with pointer-events-none)

- Focus management with theme ring colors

- Smooth transitions (color/background/border/box-shadow)

- TypeScript complete (BadgeVariant/BadgeTone types)

- Production spacing (px-2 py-0.5, text-xs, font-medium)

