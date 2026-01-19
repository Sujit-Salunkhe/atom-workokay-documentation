---
title: "Tooltip"
sidebar_position: 70
---

## Basic usage

```jsx
export function TooltipExamples() {
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Tooltip content="Default tooltip">
        <Button>Default</Button>
      </Tooltip>

      <Tooltip content="Soft variant" variant="soft">
        <Button>Soft</Button>
      </Tooltip>

      <Tooltip content="Solid tooltip" variant="solid">
        <Button>Solid</Button>
      </Tooltip>

      <Tooltip content="With arrow" showArrow>
        <Button>Arrow</Button>
      </Tooltip>
    </div>
  );
}
```

## Props

```jsx

  Tooltip props:
    export interface TooltipProps
    extends Omit<RadixTooltipContentProps, "content">,
    VariantProps<typeof tooltipContentVariants> {
    /** Text or React node to render inside the tooltip */
    content: React.ReactNode;
    /** Trigger element */
    children: React.ReactNode;
    /** Visual style of the tooltip */
    variant?: "default" | "soft" | "solid" | "outline";
    /** Size of the tooltip */
    size?: "sm" | "md" | "lg";
    /** Whether to show the arrow pointer */
    showArrow?: boolean;
    /** Preferred side for tooltip placement */
    side?: "top" | "right" | "bottom" | "left";
    /** Alignment relative to the trigger */
    align?: "start" | "center" | "end";
    /** Distance in pixels from the trigger */
    sideOffset?: number;
  }
```
## Variant props

### Variant

```jsx

  Visual style of the tooltip:
    "default" – dark background (--atom-theme-surface-secondary), white text
    "soft" – subtle background with border, uses muted theme colors
    "solid" – bold background using primary color (--atom-primary)
    "outline" – transparent background with visible border

  Example:
    <Tooltip content="Default style">
      <Button>Default</Button>
    </Tooltip>

    <Tooltip content="Soft style" variant="soft">
      <Button>Soft</Button>
    </Tooltip>

    <Tooltip content="Solid style" variant="solid">
      <Button>Solid</Button>
    </Tooltip>

    <Tooltip content="Outline style" variant="outline">
      <Button>Outline</Button>
    </Tooltip>
```
### Size
```jsx
  Controls padding and font size:
    "sm" – compact: px-2 py-1, text-[11px]
    "md" – default: px-3 py-1.5, text-xs
    "lg" – large: px-4 py-2, text-sm
     
  Example:
    <Tooltip content="Small tooltip" size="sm">
      <Button>Small</Button>
    </Tooltip>

    <Tooltip content="Medium tooltip" size="md">
      <Button>Medium</Button>
    </Tooltip>

    <Tooltip content="Large tooltip" size="lg">
      <Button>Large</Button>
    </Tooltip>
```

## Behavioral props

### content

```jsx
  The content to display inside the tooltip. Can be a string or React node:

  <Tooltip content="Simple text">
    <Button>Hover me</Button>
  </Tooltip>

  <Tooltip
    content={
      <div>
        <div className="font-semibold">User Details</div>
        <div className="text-[11px]">Last active: 2 hours ago</div>
      </div>
    }
  >
    <Button>Rich content</Button>
  </Tooltip>
```

### showArrow
```jsx

  Controls whether to display an arrow pointer from the tooltip to the trigger:
    false (default) → no arrow
    true → arrow is shown

  <Tooltip content="With arrow" showArrow>
    <Button>Arrow tooltip</Button>
  </Tooltip>

  <Tooltip content="No arrow" showArrow={false}>
    <Button>No arrow</Button>
  </Tooltip>

```
### side

```jsx
  Preferred side for tooltip placement (auto-adjusts on collision):
    "top" – appears above the trigger
    "right" (default) – appears to the right
    "bottom" – appears below the trigger
    "left" – appears to the left

  <Tooltip content="Top tooltip" side="top">
    <Button>Top</Button>
  </Tooltip>

  <Tooltip content="Bottom tooltip" side="bottom">
    <Button>Bottom</Button>
  </Tooltip>
```

### align
```jsx
  Alignment relative to the trigger element:
    "start" – aligns to the start edge
    "center" (default) – centers the tooltip
    "end" – aligns to the end edge

  <Tooltip content="Start aligned" align="start">
    <Button>Start</Button>
  </Tooltip>

  <Tooltip content="End aligned" align="end">
    <Button>End</Button>
  </Tooltip>
```

### sideOffset
```jsx
  Distance in pixels between the tooltip and the trigger:

  <Tooltip content="Close to trigger" sideOffset={4}>
    <Button>Close</Button>
  </Tooltip>

  <Tooltip content="Far from trigger" sideOffset={20}>
    <Button>Far</Button>
  </Tooltip>
```

## Common patterns

### Icon with tooltip

```jsx
  Use tooltips to explain icon-only buttons:

  import { InfoIcon } from "@/components/icons";

  export function IconWithTooltip() {
    return (
      <Tooltip content="Additional information" size="sm">
        <button 
          className="p-1 rounded hover:bg-[var(--atom-muted)]"
          aria-label="Additional information"
        >
          <InfoIcon size={16} />
        </button>
      </Tooltip>
    );
  }
```

### Disabled element
```jsx 
  Wrap disabled elements in a span to ensure tooltip works:

  <Tooltip content="This button is disabled">
    <span>
      <Button disabled>Disabled</Button>
    </span>
  </Tooltip>

  Note: Disabled elements don't trigger pointer events, so wrapping is required.
```

## Theming behaviour
```jsx
  The Tooltip does not hard-code colors. It resolves its styles via utility classes pointing at tokens:
    text-[var(--atom-text)]
    bg-[var(--atom-card-bg)]
    border-[var(--atom-border)]
    bg-[var(--atom-primary)] (for solid variant)
    bg-[var(--atom-theme-surface-secondary)] (for default variant)

  These tokens are set by the active theme:
    .atom-theme[data-theme="light"] {
      --atom-text: oklch(0.2 0 0);
      --atom-card-bg: oklch(1 0 0);
      --atom-primary: oklch(0.55 0.22 264);
      --atom-theme-surface-secondary: oklch(0.3 0 0);
      /* ... */
    }

  Changing data-theme (or overriding the token values) will automatically recolor all Tooltip instances.
```

## Accessibility
```jsx
  The Tooltip component is built on Radix UI and follows WAI-ARIA best practices:
    - Automatically adds aria-describedby to link trigger and tooltip
    - Appears on both hover and keyboard focus
    - Dismisses with Escape key
    - Portal rendering ensures proper z-index stacking
    - 200ms delay before showing (configurable via Provider)

  For icon-only triggers, always add aria-label:
    <Tooltip content="Settings">
      <button aria-label="Settings">
        <SettingsIcon />
      </button>
    </Tooltip>

  Don't use tooltips for critical information – they should be supplementary only.
```

## Animation
```jsx
  Built-in animations controlled by Radix UI data attributes:
    - Fade in/out: data-[state=delayed-open]:fade-in
    - Slide animation based on placement side
    - 200ms delay before showing (prevents accidental triggers)

  Animations respect prefers-reduced-motion for accessibility.
```
Notes
Tooltip uses portal rendering for proper z-index stacking (via useThemePortal hook)

Provider is included in the component (no separate setup needed)

Automatically handles collision detection and repositioning

Arrow color inherits from variant styling via CSS custom properties

Wrap disabled elements in a span to ensure tooltip functionality

Keep tooltip content concise – for longer content, consider a Popover component instead