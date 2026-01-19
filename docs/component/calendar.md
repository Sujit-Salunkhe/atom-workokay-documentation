---
title: "Calendar"
sidebar_position: 4
---

## Basic usage

```jsx title=Codeblocks
import { useState } from 'react'
import { Calendar } from '@workokay/atom'

export function CalendarExamples() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [multipleDates, setMultipleDates] = useState<Date[]>([])

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {/* Single date selection */}
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
      />

      {/* Date range selection */}
      <Calendar
        mode="range"
        selected={dateRange}
        onSelect={setDateRange}
      />

      {/* Multiple dates */}
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
      />
    </div>
  )
}
```
## Props

```jsx title=Codeblocks
  Calendar props:
    export type CalendarProps = DayPickerProps & {
      /** Custom variant for day selection buttons */
      navButtonVariant?: ButtonVariant;
    }

  Key props:
    mode: "single" | "multiple" | "range"
    selected: Date | Date[] | DateRange | undefined  
    onSelect: (date: Date | undefined | DateRange) => void
    disabled: Date | Date[] | Matcher | Matcher[]
    fromDate?: Date
    toDate?: Date
    defaultMonth?: Date
    numberOfMonths?: number
    showOutsideDays?: boolean (default: true)
    captionLayout?: "dropdown" | "label" | "dropdown-months" | "dropdown-years" (default: "dropdown")
    navButtonVariant?: ButtonVariant (default: "iconSquareGhost")
    className?: string
    classNames?: Partial<ClassNames>
    formatters?: Partial<Formatters>
    components?: Partial<Components>
```
### Mode variants

### Single date selection

```jsx title=Codeblocks
Select a single date from the calendar:
  const [date, setDate] = useState<Date>()

  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
  />

Use case: birthdate picker, appointment date, deadline selection

```

### Range selection

```jsx title=Codeblocks
Select a start and end date:
  import { DateRange } from 'react-day-picker'
  
  const [range, setRange] = useState<DateRange | undefined>()

  <Calendar
    mode="range"
    selected={range}
    onSelect={setRange}
  />

Use case: booking dates, report date ranges, vacation planning

```

### Multiple Dates

```jsx title=Codeblocks
Select multiple individual dates:
  const [dates, setDates] = useState<Date[]>([])

  <Calendar
    mode="multiple"
    selected={dates}
    onSelect={setDates}
    min={1}
    max={5}
  />

Use case: event scheduling, availability selection, multi-day tasks

```

## Variant props

### buttonVariant

```jsx title=codeblocks
Customize navigation button appearance:
  "ghost" (default) – transparent buttons with hover effect
  "default" – filled buttons using primary colors
  "outline" – outlined buttons with border
  "secondary" – secondary styled buttons
  "link" – link-styled buttons

Example:
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    buttonVariant="outline"
  />
```

### captionLayout

```jsx title=codeblocks
Control month/year navigation style:
  "dropdown" (default) – dropdowns for month and year
  "dropdown-months" – dropdown for months only
  "dropdown-years" – dropdown for years only
  "label" – static label with arrow navigation

Example:
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    captionLayout="label"
  />

```
### showOutsideDays

```jsx title=codeblocks
Show or hide dates from adjacent months:
  true (default) – show grayed-out dates from prev/next months
  false – hide outside dates

Example:
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    showOutsideDays={false}
/>
```

## Date restrictions

### Disable Past Dates

```jsx title=codeblocks
Prevent selection of dates before today:
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    disabled={{ before: new Date() }}
  />
```

### Disable weekends
```jsx title=codeblocks
Disable Saturdays and Sundays:
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    disabled={{ dayOfWeek:  }}[1]
  />

  // 0 = Sunday, 6 = Saturday

```

### Date range limits

```jsx title=codeblocks
Restrict selectable date range:
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    fromDate={new Date(2026, 0, 1)}
    toDate={new Date(2026, 11, 31)}
  />

  // Only allow dates in 2026

```
### Multiple disable conditions
```jsx title=codeblocks
Combine multiple disable rules:
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    disabled={[
      { before: new Date() },           // No past dates
      { dayOfWeek:  },            // No weekends[1]
      new Date(2026, 0, 1),             // Specific date
      { from: new Date(2026, 11, 24),   // Date range
        to: new Date(2026, 11, 31) }
    ]}
  />

```

## Advance Features

### Multiple Months Display

```jsx title=codeblocks
Combine multiple disable rules:
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    disabled={[
      { before: new Date() },           // No past dates
      { dayOfWeek:  },            // No weekends[1]
      new Date(2026, 0, 1),             // Specific date
      { from: new Date(2026, 11, 24),   // Date range
        to: new Date(2026, 11, 31) }
    ]}
  />

```
### Custom formatters

```jsx title=codeblocks
Customize date display formatting:
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    formatters={{
      formatMonthDropdown: (date) => 
        date.toLocaleString('en-US', { month: 'long' }),
      formatYearDropdown: (date) => 
        date.getFullYear().toString(),
      formatWeekdayName: (date) => 
        date.toLocaleString('en-US', { weekday: 'narrow' })
    }}
  />

```
### Week numbers
```jsx title=codeblocks
Customize date display formatting:
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    formatters={{
      formatMonthDropdown: (date) => 
        date.toLocaleString('en-US', { month: 'long' }),
      formatYearDropdown: (date) => 
        date.getFullYear().toString(),
      formatWeekdayName: (date) => 
        date.toLocaleString('en-US', { weekday: 'narrow' })
    }}
  />

```
### Custom locale
```jsx title=codeblocks
Use different locale and week start:
  import { es } from 'date-fns/locale'

  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    locale={es}
    weekStartsOn={1}  // Monday
  />

```

### Default displayed month

```jsx title=codeblocks
Control initial visible month:
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    defaultMonth={new Date(2026, 5)}  // June 2026
  />

```

## Styling & Customization

### Custom class names

```jsx title=codeblocks
Override specific element styles:
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    classNames={{
      month_caption: 'text-lg font-bold',
      day: 'hover:bg-blue-100',
      today: 'bg-yellow-100 font-bold',
      selected: 'bg-green-500 text-white'
    }}
  />

Available classNames keys:
  root, months, month, month_caption, caption_label
  nav, button_previous, button_next
  table, weekdays, weekday, week, week_number
  day, today, selected, disabled, outside, hidden
  range_start, range_middle, range_end

```

### Wrapper styling

```jsx title=codeblocks
Add custom styles to calendar container:
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="shadow-lg border-2 border-blue-500"
  />

```

## Accessibility

### Keyword navigation

```jsx title=codeblocks
Built-in keyboard support:
  Arrow Keys → Navigate between dates
  Enter / Space → Select focused date
  Page Up / Page Down → Navigate months
  Shift + Page Up / Down → Navigate years
  Home / End → Jump to first/last day of week
  Tab → Navigate between UI elements

The component automatically manages focus states and ARIA attributes.

```

### Screen Reader Support 

```jsx title=codeblocks
Add descriptive labels for better accessibility:
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    labels={{
      labelNext: () => 'Go to next month',
      labelPrevious: () => 'Go to previous month',
      labelDayButton: (date) => `Select ${format(date, 'PPP')}`
    }}
  />

```



## Theming behavior

```jsx title=codeblocks
The Calendar does not hard-code colors. It resolves styles via CSS custom properties:
  Background: var(--atom-theme-bg)
  Card background: var(--atom-card-bg)
  Borders: color-mix(in srgb, var(--atom-primary) 15%, transparent)
  Selected state: var(--atom-info-card-jobstatus-secondary-text)
  Today indicator: color-mix(in srgb, var(--atom-badge-archived-border) 50%, transparent)
  Range middle: color-mix(in srgb, var(--atom-badge-archived-border) 90%, transparent)
  Hover state: color-mix(in srgb, var(--atom-badge-archived-border) 90%, transparent)

These tokens are set by the active theme:
  .atom-theme[data-theme="light"] {
    --atom-theme-bg: #ffffff;
    --atom-card-bg: #f9fafb;
    --atom-primary: #3b82f6;
    /* ... */
  }

  .atom-theme[data-theme="dark"] {
    --atom-theme-bg: #1f2937;
    --atom-card-bg: #374151;
    --atom-primary: #60a5fa;
    /* ... */
  }

Changing data-theme will automatically recolor all Calendar instances.

```
## Browser support 

```jsx title=codeblocks
Compatible with all modern browsers:
  Chrome/Edge 90+
  Firefox 88+
  Safari 14+
  Mobile browsers (iOS Safari, Chrome Android)

Requires:
  ES6+ JavaScript features
  CSS custom properties
  CSS color-mix() function

```
## Dependencies

``` jsx title=codeblocks
External dependencies:
  react-day-picker: ^9.x – Core calendar functionality
  lucide-react: ^0.x – Icons for navigation
  date-fns: ^3.x – Date manipulation (optional, for formatters)

Internal dependencies:
  Button component – For navigation and day buttons
  cn utility – Class name merging

```


