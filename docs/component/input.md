---
title: "Input"
sidebar_position: 35
---

## Basic Usage

```jsx
import { useState } from 'react';
import { Input } from '@workokay/atom/input';
import { FiMail, FiPhone, FiLock } from 'react-icons/fi';

export function InputExamples() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px' }}>
      {/* Basic labeled input */}
      <Input
        id="email"
        label="Email address"
        required
        placeholder="user@example.com"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      {/* Icon slots */}
      <Input
        id="phone"
        label="Phone number"
        leftIcon={<FiPhone />}
        placeholder="+1 (555) 123-4567"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />

      {/* Error validation */}
      <Input
        id="password"
        label="Password"
        required
        type="password"
        errorText="Password must be at least 8 characters"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      {/* Success + loading */}
      <Input
        id="code"
        label="Confirmation code"
        tone="success"
        loading
        placeholder="Enter 6-digit code"
      />
    </div>
  );
}
```
## Props 
```jsx
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof inputVariants> {
  /** Leading icon */
  leftIcon?: React.ReactNode;
  /** Trailing icon or loading spinner */
  rightIcon?: React.ReactNode;
  /** Helper text (shows when no error) */
  hint?: string;
  /** Error message (takes priority over hint) */
  errorText?: string;
  /** Show loading spinner in right slot */
  loading?: boolean;
  /** Form label */
  label?: string;
  /** Required field indicator */
  required?: boolean;
  /** Custom required error message */
  requiredText?: string;
}
// Variants:
size: 'sm' | 'md' | 'lg'          // default: 'md'
tone: 'default' | 'invalid' | 'success'  // default: 'default'
```
## Size Variants

| Size | Height | Padding | Font      | Use Case         |
| ---- | ------ | ------- | --------- | ---------------- |
| sm   | 36px   | px-3    | text-sm   | Compact forms    |
| md   | 40px   | px-3.5  | text-sm   | Default          |
| lg   | 44px   | px-4    | text-base | Prominent inputs |

```jsx
<Input size="sm" label="Compact" />
<Input size="md" label="Default" />
<Input size="lg" label="Prominent" />
```

## Tone States
```tsx
<Input tone="default" label="Standard" />     {/* Theme border */}
<Input tone="success" label="Valid" />       {/* Success border */}
<Input tone="invalid" label="Error" />       {/* Error border */}
```

## Core Features

### Auto-Validation

### Required field validation (blur-triggered):

```tsx
const [touched, setTouched] = useState(false);

<Input
  label="Email"
  required
  requiredText="Email is required"
  value={email}
  onBlur={() => setTouched(true)}
/>
```

### Manual error states:

```tsx
<Input
  label="Phone"
  errorText={errors.phone || undefined}
  tone={errors.phone ? 'invalid' : 'default'}
/>
```

### Icon Slots
```tsx
<Input leftIcon={<FiSearch />} placeholder="Search..." />
<Input 
  leftIcon={<FiMail />} 
  rightIcon={<FiEyeOff />} 
  type="password" 
/>
```

### Loading State
```tsx
<Input 
  label="Verifying..." 
  loading 
  disabled 
  placeholder="Enter code" 
/>
```

## Production Examples

### Complete Form

```tsx
export function UserForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors: any = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (validate()) {
        setSubmitting(true);
        // Submit logic
      }
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <Input
          label="Full name"
          required
          errorText={errors.name}
          placeholder="John Doe"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <Input
          label="Email"
          type="email"
          required
          leftIcon={<FiMail />}
          errorText={errors.email}
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <Input
          label="Phone"
          leftIcon={<FiPhone />}
          hint="Optional"
          placeholder="+1 (555) 123-4567"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />

        <Button 
          type="submit" 
          variant="primary" 
          loading={submitting}
          className="mt-2"
        >
          Create Account
        </Button>
      </div>
    </form>
  );
}
```

### Search & Filters
```tsx
export function SearchBar() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'end' }}>
      <Input
        size="lg"
        leftIcon={<FiSearch />}
        placeholder="Search users, projects..."
        className="flex-1 min-w-[300px]"
      />
      
      <Input
        size="md"
        leftIcon={<FiCalendar />}
        placeholder="Filter by date"
      />
      
      <Input
        size="sm"
        leftIcon={<FiFilter />}
        placeholder="Status"
      />
    </div>
  );
}
```

## State Matrix

| State     | Border       | Background   | Ring         | Cursor      |
| --------- | ------------ | ------------ | ------------ | ----------- |
| Default   | Theme border | Input BG     | -            | Default     |
| Hover     | Primary tint | Primary 1%   | -            | Pointer     |
| Focus     | Primary      | Input BG     | Primary 35%  | -           |
| Success   | Success      | Input BG     | -            | -           |
| Invalid   | Error        | Input BG     | Error border | -           |
| Disabled  | Input border | Input BG 60% | -            | Not-allowed |
| Read-only | Theme border | Mixed BG     | -            | Default     |


## Theming System

### Advanced token-driven design:

| Token               | Usage                  |
| ------------------- | ---------------------- |
| --atom-input-bg     | Background             |
| --atom-input-fg     | Text + caret           |
| --atom-input-border | Border                 |
| --atom-input-focus  | Focus border           |
| --atom-primary      | Selection, hover, ring |
| --atom-error        | Invalid state          |
| --atom-success      | Success state          |


### Smart interactions:

```jsx
/* Hover tint */
hover:bg-[color-mix(in_srgb,var(--atom-primary)_1%,transparent)]

/* Focus ring */
focus-visible:ring-1 ring-[color-mix(in_srgb,var(--atom-primary)_35%,transparent)]

/* Selection */
selection:bg-[color-mix(in_srgb,var(--atom-primary)_30%,transparent)]

/* Placeholder */
placeholder:text-[color-mix(in_srgb,var(--atom-input-fg)_55%,transparent)]
```

## Accessibility
✅ Complete ARIA - ```aria-invalid```, ```aria-errormessage```,```aria-describedby```
✅ Label association - Proper ```htmlFor```/```id``` linking
✅ Auto-generated IDs - ```inp_${reactId}``` fallback
✅ Required indicator - Visual ```*``` + ```aria-required```
✅ Error regions - Screen reader announces errors
✅ Focus management - Clear focus rings
✅ Loading state - Non-interactive spinner
✅ Touch targets - 40px+ height (md size)

## Advanced Patterns

### Compact Stacked Form

```tsx  
<div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
  <Input size="sm" label="First name *" required />
  <Input size="sm" label="Last name *" required />
  <Input size="sm" label="Email" type="email" />
</div>
```
Key Features
- Complete form field - Label + validation + icons + loading
- 3 sizes - sm/md/lg responsive
- 3 tones - default/invalid/success
- Auto-validation - Required fields on blur
- Icon slots - Left/right positioning
- Loading spinner - Built-in animation
- Theme complete - 100% CSS variables
- TypeScript complete - Full prop interfaces
- Production-ready - ARIA + focus + keyboard