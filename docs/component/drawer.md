---
title: "Drawer"
sidebar_position: 3
---

## Basic usage

```jsx title=codeblocks

import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerBody,
  DrawerFooter,
} from "@workokay/atom";
import { useState } from "react";

export function DrawerExamples() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>

      <Drawer open={open} onOpenChange={setOpen} variant="right" size="md">
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <p>This is the drawer content.</p>
        </DrawerBody>
        <DrawerFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setOpen(false)}>
            Save
          </Button>
        </DrawerFooter>
      </Drawer>
    </>
  );
}
```

## Props

```jsx title=codeblocks

  Drawer props:
    export interface DrawerProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof drawerVariants> {
    /** Controls drawer visibility */
    open: boolean;
    /** Callback when drawer open state changes */
    onOpenChange?: (open: boolean) => void;
    /** Drawer content */
    children?: React.ReactNode;
    /** Render as child element via Radix Slot */
    asChild?: boolean;
    /** Close drawer when clicking backdrop */
    closeOnBackdropClick?: boolean;
    /** Close drawer on Escape key press */
    closeOnEscape?: boolean;
    /** Show semi-transparent backdrop */
    showBackdrop?: boolean;
  }
```

## Variant Props

### Variant

```jsx title=codeblocks

  Position and slide direction:
    "right" (default) – slides from right edge, full height
    "left" – slides from left edge, full height 
    "top" – slides from top edge, full width
    "bottom" – slides from bottom edge, full width

  Example:
    <Drawer open={open} onOpenChange={setOpen} variant="right" />
    <Drawer open={open} onOpenChange={setOpen} variant="left" />
    <Drawer open={open} onOpenChange={setOpen} variant="bottom" />
    <Drawer open={open} onOpenChange={setOpen} variant="top" />

```

### Size

```jsx title=codeblocks

  Controls drawer dimensions based on variant:
    For right/left variants (width):
      "sm" – 239px (w-[239px])
      "md" – 478px (w-[478px]) (default)
      "lg" – 720px (w-[720px])
      "xl" – 900px (w-[900px])

    For top/bottom variants (height):
      "sm" – 320px (h-80)
      "md" – 384px (h-96)
      "lg" – 500px
      "xl" – 600px

  Example:
    <Drawer variant="right" size="sm" open={open} onOpenChange={setOpen} />
    <Drawer variant="right" size="lg" open={open} onOpenChange={setOpen} />
    <Drawer variant="bottom" size="xl" open={open} onOpenChange={setOpen} />

```

## Behavioral props

### open

```jsx title=codeblocks
  Controls drawer visibility state:
    const [open, setOpen] = useState(false);

    <Drawer open={open} onOpenChange={setOpen}>
      {/* Drawer content */}
    </Drawer>

  When open is true:
    Drawer slides into view with 300ms transition
    Body scroll is prevented (with scrollbar compensation)
    Backdrop appears (if showBackdrop is true)
    Focus is trapped within drawer content

```

### onOpenChange

```jsx title=codeblocks
  Callback invoked when drawer should open or close:
    const handleOpenChange = (isOpen: boolean) => {
      setOpen(isOpen);
    };

    <Drawer open={open} onOpenChange={handleOpenChange}>
      {/* Drawer content */}
    </Drawer>

  Triggered by:
    Backdrop click (if closeOnBackdropClick=true)
    Escape key press (if closeOnEscape=true)
    Manual state changes

```

### closeOnBackdropClick

```jsx title=codeblocks
  Close drawer when clicking backdrop overlay:
     Close drawer when clicking backdrop overlay:
    <Drawer open={open} onOpenChange={setOpen} closeOnBackdropClick={true} />
    <Drawer open={open} onOpenChange={setOpen} closeOnBackdropClick={false} />
```

### closeOnEscape

```jsx title=codeblocks
  Close drawer when Escape key is pressed:
    <Drawer open={open} onOpenChange={setOpen} closeOnEscape={true} />
    <Drawer open={open} onOpenChange={setOpen} closeOnEscape={false} /
```

### showBackdrop

```jsx title=codeblocks
  Display semi-transparent backdrop overlay:
    <Drawer open={open} onOpenChange={setOpen} showBackdrop={true} />
    <Drawer open={open} onOpenChange={setOpen} showBackdrop={false} />
```

### asChild

```jsx title=codeblocks
  Render drawer styles on a different element via Radix Slot:
    <Drawer open={open} onOpenChange={setOpen} asChild>
      <aside aria-label="Custom drawer">
        {/* Custom element with drawer behavior */}
      </aside>
    </Drawer>
```

## Subcomponents

### DrawerHeader

```jsx title=codeblocks

  Container for drawer title and optional description:
    <DrawerHeader>
      <DrawerTitle>Edit Profile</DrawerTitle>
      <DrawerDescription>
        Update your profile information below.
      </DrawerDescription>
    </DrawerHeader>

  Includes padding and vertical spacing by default.
```

### DrawerTitle

```jsx title=codeblocks

  Semantic heading for drawer (h2 element):
    <DrawerTitle>Settings</DrawerTitle>

  Automatically linked to drawer via aria-labelledby.
  Uses id="drawer-title" for accessibility.
```

### DrawerDescription

```jsx title=codeblocks

  Optional descriptive text below title:
    <DrawerDescription>
      Configure your application preferences.
    </DrawerDescription>

  Styled with smaller text and muted color.
```

### DrawerBody

```jsx title=codeblocks

  Scrollable main content area:
    <DrawerBody>
      <form>
        <Input label="Name" />
        <Input label="Email" />
        <Textarea label="Bio" />
      </form>
    </DrawerBody>

  Features:
    Flex-grow to fill available space
    Automatic overflow scrolling
    Consistent padding
```

### DrawerFooter

```jsx title=codeblocks

  Action buttons aligned to the right:
    <DrawerFooter>
      <Button variant="secondary" onClick={() => setOpen(false)}>
        Cancel
      </Button>
      <Button variant="primary" onClick={handleSave}>
        Save Changes
      </Button>
    </DrawerFooter>

  Buttons are spaced with gap-2 and right-aligned.
```

## Usage examples

### Form drawer

```jsx title =codeblocks

import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerBody,
  DrawerFooter,
} from "@workokay/atom";
import { useState } from "react";

export function FormDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Add User</Button>

      <Drawer open={open} onOpenChange={setOpen} variant="right" size="md">
        <DrawerHeader>
          <DrawerTitle>Create New User</DrawerTitle>
          <DrawerDescription>
            Fill in the details to add a new team member.
          </DrawerDescription>
        </DrawerHeader>

        <DrawerBody>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Input label="Full Name" placeholder="John Doe" />
            <Input label="Email" type="email" placeholder="john@example.com" />
            <Select label="Role">
              <option>Admin</option>
              <option>Editor</option>
              <option>Viewer</option>
            </Select>
          </div>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setOpen(false)}>
            Create User
          </Button>
        </DrawerFooter>
      </Drawer>
    </>
  );
}
```

### Bottom sheet

```jsx title=codeblocks

import { Drawer, DrawerHeader, DrawerTitle, DrawerBody } from "@workokay/atom";
import { useState } from "react";

export function BottomSheet() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Options</Button>

      <Drawer open={open} onOpenChange={setOpen} variant="bottom" size="sm">
        <DrawerHeader>
          <DrawerTitle>Choose an action</DrawerTitle>
        </DrawerHeader>

        <DrawerBody>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <Button variant="ghost" fullWidth onClick={() => setOpen(false)}>
              Share
            </Button>
            <Button variant="ghost" fullWidth onClick={() => setOpen(false)}>
              Download
            </Button>
            <Button variant="ghost" fullWidth onClick={() => setOpen(false)}>
              Delete
            </Button>
          </div>
        </DrawerBody>
      </Drawer>
    </>
  );
}
```

### Navigation drawer

```jsx title=codeblocks

import { Drawer, DrawerBody } from "@workokay/atom";
import { useState } from "react";

export function NavigationDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="icon" onClick={() => setOpen(true)}>
        <MenuIcon />
      </Button>

      <Drawer open={open} onOpenChange={setOpen} variant="left" size="sm">
        <DrawerBody>
          <nav
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <a href="/dashboard">Dashboard</a>
            <a href="/projects">Projects</a>
            <a href="/team">Team</a>
            <a href="/settings">Settings</a>
          </nav>
        </DrawerBody>
      </Drawer>
    </>
  );
}
```

## Theming behavior

```jsx title=codeblocks
  The Drawer uses CSS tokens for theming:
    Background: var(--atom-card-bg)
    Border: var(--atom-card-border) 
    Text: var(--atom-card-fg)
    Backdrop: bg-black/50 (fixed opacity)

  These tokens adapt to your active theme automatically.
```

## Accessibility

```jsx title=codeblocks
  Full keyboard and screen reader support:
    role="dialog" aria-modal="true"
    Focus trapping within drawer content
    Escape key handling
    ARIA label/description support
    Automatic focus restoration on close
    Body scroll prevention with layout shift compensation
    Portal rendering via useThemePortal hook
```
