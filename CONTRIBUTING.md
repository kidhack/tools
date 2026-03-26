# Adding a Tool

All tools live in `src/data/tools.ts`. Find the right category and add a new `Tool` object.

## Minimum required fields

```ts
{
  name: 'Tool Name',
  description: 'One-line description of what it does.',
  url: 'https://example.com',
}
```

## Full schema

```ts
{
  name: string;
  description: string;
  url: string;
  badge?: 'recommended' | 'new' | 'free' | 'paid';
  tags?: string[];
  personalNote?: string;
}
```

## Add a new category

Append a new object to the `categories` array:

```ts
{
  id: 'category-slug',
  label: 'Category Label',
  description: 'One-line description.',
  tools: [],
}
```

## Cursor prompt

Use a prompt like:

> Add `Tool Name` to the `Category Label` category in `src/data/tools.ts`. URL: `https://example.com`. Description: `One-line description`.
