export type Badge = 'recommended' | 'new' | 'free' | 'paid';

export interface Tool {
  name: string;
  description: string;
  url: string;
  badge?: Badge;
  tags?: string[];
  personalNote?: string;
}

export interface Category {
  id: string;
  label: string;
  description: string;
  tools: Tool[];
}

export const categories: Category[] = [
  {
    id: 'assistants',
    label: 'LLMs',
    description: 'General-purpose AI assistants for writing, reasoning, and research.',
    tools: [
      {
        name: 'ChatGPT',
        description: 'Full-suite AI assistant by OpenAI for writing, coding, analysis, and more.',
        url: 'https://chatgpt.com',
        tags: ['openai', 'general', 'writing', 'coding'],
      },
      {
        name: 'Claude',
        description: 'Full-suite AI assistant by Anthropic with strong reasoning and document handling.',
        url: 'https://claude.ai',
        tags: ['anthropic', 'general', 'writing', 'reasoning'],
      },
      {
        name: 'Gemini',
        description: 'Full-suite AI assistant by Google with deep Workspace integration.',
        url: 'https://gemini.google.com',
        tags: ['google', 'general', 'workspace'],
      },
      {
        name: 'Perplexity',
        description: 'AI-powered research and search engine that is great for staying current.',
        url: 'https://www.perplexity.ai',
        tags: ['research', 'search', 'citations'],
      },
    ],
  },
  {
    id: 'design-and-code',
    label: 'Design & Code',
    description: 'AI tools for generating UI designs, prototypes, and code from prompts or Figma.',
    tools: [
      {
        name: 'Galileo AI',
        description: 'Turns text prompts into polished, Figma-ready UI designs.',
        url: 'https://www.usegalileo.ai/',
        tags: ['figma', 'prompt-to-design', 'ui-generation'],
      },
      {
        name: 'UXPilot',
        description: 'AI UX assistant with versatile review and generation tools.',
        url: 'https://uxpilot.ai',
        tags: ['ux-review', 'ai-generation', 'design-system'],
      },
      {
        name: 'Uizard',
        description: 'Turns prompts, sketches, or screenshots into designs for rapid ideation.',
        url: 'https://uizard.io',
        tags: ['wireframe', 'sketch-to-design', 'miro'],
      },
      {
        name: 'Magic Patterns',
        description: 'Generates code from prompts, images, or Figma and exports to Figma and GitHub.',
        url: 'https://www.magicpatterns.com',
        badge: 'recommended',
        tags: ['figma', 'github', 'code-export', 'components'],
      },
      {
        name: 'Fray',
        description: 'Imports Figma frames, creates layout variations, and exports clean frames back.',
        url: 'https://fray.design',
        tags: ['figma', 'layout', 'design-system'],
      },
      {
        name: 'Google Stitch',
        description: 'Google AI design tool for generating app UI from prompts and exporting to code or Figma.',
        url: 'https://stitch.withgoogle.com',
        badge: 'new',
        tags: ['google', 'prompt-to-design', 'figma', 'ai-generation', 'ui'],
      },
      {
        name: 'Subframe',
        description: 'Designs, prototypes, and exports production-ready code with reusable components.',
        url: 'https://www.subframe.com',
        badge: 'recommended',
        tags: ['components', 'figma', 'react', 'code-export'],
      },
      {
        name: 'v0',
        description: 'Vercel UI generator that accepts prompts or Figma files and outputs React.',
        url: 'https://v0.dev',
        tags: ['vercel', 'react', 'figma', 'prompt-to-code'],
      },
      {
        name: 'Bolt',
        description: 'Turns a prompt or Figma import into a full app in the browser.',
        url: 'https://bolt.new',
        tags: ['prompt-to-app', 'figma', 'browser-based'],
      },
      {
        name: 'Builder.io',
        description: 'Visual development platform with prompt, website, and Figma-to-code workflows.',
        url: 'https://www.builder.io',
        tags: ['figma', 'design-tokens', 'visual-dev'],
      },
      {
        name: 'Lovable',
        description: 'Builds production-ready apps from prompts with Figma import support.',
        url: 'https://lovable.dev',
        tags: ['prompt-to-app', 'figma', 'full-stack'],
      },
      {
        name: 'Relume',
        description: 'Turns outlines into website wireframes and exports to Figma, Webflow, and React.',
        url: 'https://www.relume.io',
        tags: ['wireframe', 'figma', 'webflow', 'react'],
      },
      {
        name: 'Replit',
        description: 'Browser-based IDE with prompt-to-code AI for quick experiments.',
        url: 'https://replit.com',
        tags: ['ide', 'prompt-to-code', 'browser-based'],
      },
      {
        name: 'Cursor',
        description: 'AI-first code editor for working alongside AI on real codebases.',
        url: 'https://www.cursor.com',
        badge: 'recommended',
        personalNote: 'Most useful paired with component-level tools like Subframe.',
        tags: ['code-editor', 'ai', 'ide'],
      },
      {
        name: 'Pencil',
        description: 'Agent-driven MCP canvas for generating and iterating on UI visually.',
        url: 'https://www.pencil.dev',
        badge: 'new',
        tags: ['canvas', 'ai', 'agent', 'mcp', 'code-generation'],
      },
    ],
  },
  {
    id: 'markdown',
    label: 'Markdown',
    description: 'Text-based and markdown-driven tools for wireframes, diagrams, and lo-fi mockups.',
    tools: [
      {
        name: 'Mockdown',
        description: 'Free browser-based ASCII wireframe editor for lo-fi mockups and quick prototypes.',
        url: 'https://www.mockdown.design',
        badge: 'free',
        tags: ['wireframe', 'lofi', 'ascii', 'free', 'no-signup', 'browser-based'],
      },
      {
        name: 'MarkEdit',
        description: 'Free open-source Markdown editor for macOS with a native lightweight feel.',
        url: 'https://github.com/MarkEdit-app/MarkEdit',
        badge: 'free',
        tags: ['markdown', 'editor', 'macos', 'open-source', 'free', 'native'],
      },
      {
        name: 'TAAG',
        description: 'Classic online text-to-ASCII art generator with dozens of font styles.',
        url: 'https://patorjk.com/software/taag/',
        badge: 'free',
        tags: ['ascii', 'art', 'text', 'generator', 'free', 'browser-based'],
      },
      {
        name: 'Obsidian',
        description: 'Local-first markdown knowledge base for linked notes and long-term thinking.',
        url: 'https://obsidian.md',
        tags: ['markdown', 'notes', 'knowledge-base', 'local-first', 'pkm'],
      },
    ],
  },
  {
    id: 'image-generation',
    label: 'Image Generation',
    description: 'AI image generators for concept art, mockup visuals, and creative direction.',
    tools: [
      {
        name: 'Adobe Firefly',
        description: 'Adobe image generator trained on licensed content and integrated with Creative Cloud.',
        url: 'https://www.adobe.com/products/firefly.html',
        tags: ['adobe', 'creative-cloud', 'licensed', 'safe-for-commercial'],
      },
      {
        name: 'Midjourney',
        description: 'High-quality AI image generation known for artistic and photographic output.',
        url: 'https://www.midjourney.com',
        tags: ['image-generation', 'artistic', 'discord'],
      },
      {
        name: 'Reve',
        description: 'Fast, high-quality AI image generation for visual exploration.',
        url: 'https://reve.art',
        badge: 'new',
        tags: ['image-generation', 'fast'],
      },
    ],
  },
  {
    id: 'video-motion',
    label: 'Video & Motion',
    description: 'Tools for video generation, animation, and motion design.',
    tools: [
      {
        name: 'Runway',
        description: 'Industry-leading AI video generation and creative editing platform.',
        url: 'https://runwayml.com',
        tags: ['video-generation', 'editing', 'ai'],
      },
      {
        name: 'Luma Dream Machine',
        description: 'High-quality AI video generation known for smooth and realistic motion.',
        url: 'https://lumalabs.ai/dream-machine',
        badge: 'new',
        tags: ['video-generation', 'ai', 'text-to-video', 'image-to-video'],
      },
      {
        name: 'Pika',
        description: 'Creates, extends, and edits video clips from prompts or images.',
        url: 'https://pika.art',
        badge: 'new',
        tags: ['video-generation', 'ai', 'editing', 'text-to-video'],
      },
      {
        name: 'Google Veo',
        description: 'Google video generation model available through Gemini for cinematic clips.',
        url: 'https://deepmind.google/models/veo/',
        badge: 'new',
        tags: ['video-generation', 'google', 'gemini', 'text-to-video', 'ai'],
      },
      {
        name: 'Adobe Firefly Video',
        description: 'Adobe video generator built for commercial-safe workflows and Premiere integration.',
        url: 'https://www.adobe.com/products/firefly/features/ai-video-generator.html',
        badge: 'new',
        tags: ['video-generation', 'adobe', 'premiere', 'licensed', 'safe-for-commercial'],
      },
      {
        name: 'Rive',
        description: 'Interactive runtime animation tool for production interfaces across platforms.',
        url: 'https://rive.app',
        badge: 'recommended',
        tags: ['interactive', 'animation', 'runtime', 'react', 'ios', 'android'],
      },
      {
        name: 'LottieFiles',
        description: 'Standard workflow for bringing After Effects animations to web and native apps.',
        url: 'https://lottiefiles.com',
        tags: ['lottie', 'after-effects', 'handoff', 'animation'],
      },
      {
        name: 'Jitter',
        description: 'Fast and simple browser-based motion design tool.',
        url: 'https://jitter.video',
        tags: ['motion', 'browser-based', 'fast'],
      },
      {
        name: 'Flit',
        description: 'Lightweight SVG animation tool for quick motion experiments.',
        url: 'https://www.flit.design',
        tags: ['svg', 'animation', 'lightweight'],
      },
      {
        name: 'Descript',
        description: 'AI-powered video and podcast editor with transcript-based editing.',
        url: 'https://www.descript.com',
        tags: ['video-editing', 'ai', 'transcription', 'screen-recording', 'podcast'],
      },
    ],
  },
  {
    id: 'design-systems',
    label: 'Design Systems',
    description: 'Tools for building, documenting, and scaling design systems.',
    tools: [
      {
        name: 'Tokens Studio',
        description: 'The standard Figma plugin for managing and syncing design tokens.',
        url: 'https://tokens.studio',
        badge: 'recommended',
        tags: ['figma', 'tokens', 'design-system', 'plugin'],
      },
      {
        name: 'Storybook',
        description: 'Component documentation and isolated UI development for design system handoff.',
        url: 'https://storybook.js.org',
        badge: 'recommended',
        tags: ['components', 'documentation', 'react', 'handoff'],
      },
      {
        name: 'Supernova',
        description: 'Design system management, documentation, and code generation platform.',
        url: 'https://www.supernova.io',
        tags: ['documentation', 'tokens', 'code-generation'],
      },
      {
        name: 'Zeroheight',
        description: 'Living documentation platform for design systems and style guides.',
        url: 'https://zeroheight.com',
        tags: ['documentation', 'style-guide', 'figma'],
      },
      {
        name: 'UIMate',
        description: 'Quickly scaffolds a base design system with starter components.',
        url: 'https://www.uimate.design',
        tags: ['generator', 'design-system', 'starter'],
      },
      {
        name: 'Component.gallery',
        description: 'Curated index of components across major design systems for research.',
        url: 'https://component.gallery/design-systems/',
        badge: 'free',
        tags: ['reference', 'components', 'research', 'design-system'],
      },
    ],
  },
  {
    id: 'research-testing',
    label: 'Research & Testing',
    description: 'Tools for user research, testing, and product analytics.',
    tools: [
      {
        name: 'LogRocket',
        description: 'Session replay and product analytics for understanding user behavior.',
        url: 'https://logrocket.com',
        tags: ['session-replay', 'analytics', 'ux-research'],
      },
      {
        name: 'Hey Marvin',
        description: 'AI-powered research repository for interviews, synthesis, and tagging.',
        url: 'https://heymarvin.com',
        tags: ['research', 'ai', 'interviews', 'repository'],
      },
    ],
  },
  {
    id: 'typography',
    label: 'Typography',
    description: 'Font libraries, pairing tools, and type references for designers.',
    tools: [
      {
        name: 'Google Fonts',
        description: 'Free open-source web font library used across the web.',
        url: 'https://fonts.google.com',
        badge: 'free',
        tags: ['fonts', 'web', 'open-source', 'free'],
      },
      {
        name: 'Adobe Fonts',
        description: 'Professional font library included with Creative Cloud.',
        url: 'https://fonts.adobe.com',
        tags: ['fonts', 'adobe', 'creative-cloud', 'professional'],
      },
      {
        name: 'Fontshare',
        description: 'Free high-quality fonts from Indian Type Foundry.',
        url: 'https://www.fontshare.com',
        badge: 'free',
        tags: ['fonts', 'free', 'quality', 'open-source'],
      },
      {
        name: 'Fontjoy',
        description: 'ML-powered font pairing generator for finding complementary combinations.',
        url: 'https://fontjoy.com',
        badge: 'free',
        tags: ['font-pairing', 'ai', 'generator', 'free'],
      },
      {
        name: 'Fonts In Use',
        description: 'Archive of real-world typography across print, digital, and branding.',
        url: 'https://fontsinuse.com',
        tags: ['inspiration', 'typography', 'reference', 'real-world'],
      },
      {
        name: 'Variable Fonts',
        description: 'Reference and showcase for variable fonts with rich filtering.',
        url: 'https://v-fonts.com',
        badge: 'free',
        tags: ['variable-fonts', 'reference', 'css', 'web'],
      },
      {
        name: 'Kometa',
        description: 'Independent foundry producing contemporary, high-quality typefaces.',
        url: 'https://www.kometa.xyz',
        tags: ['foundry', 'typefaces', 'independent'],
      },
      {
        name: 'OH no Type Co',
        description: 'Independent foundry known for expressive display and text faces.',
        url: 'https://ohnotype.co',
        tags: ['foundry', 'display', 'expressive', 'independent'],
      },
      {
        name: 'Klim Type Foundry',
        description: 'Historically informed typefaces widely used in editorial and branding.',
        url: 'https://klim.co.nz',
        tags: ['foundry', 'editorial', 'branding', 'independent'],
      },
      {
        name: 'Connary Fagen',
        description: 'Independent type foundry with versatile display and text typefaces.',
        url: 'https://connary.com',
        tags: ['foundry', 'display', 'text', 'independent'],
      },
      {
        name: 'ABC Dinamo',
        description: 'Berlin-based foundry known for contemporary experimental typefaces.',
        url: 'https://abcdinamo.com',
        tags: ['foundry', 'experimental', 'branding', 'berlin'],
      },
      {
        name: 'Pangram Pangram',
        description: 'Type foundry offering free and premium typefaces popular with designers.',
        url: 'https://pangrampangram.com',
        tags: ['foundry', 'free', 'premium', 'popular'],
      },
      {
        name: 'Open Foundry',
        description: 'Curated platform for open-source typefaces selected for quality.',
        url: 'https://open-foundry.com',
        badge: 'free',
        tags: ['foundry', 'open-source', 'free', 'curated'],
      },
    ],
  },
  {
    id: 'color',
    label: 'Color',
    description: 'Palette generators, shade tools, and accessibility checkers.',
    tools: [
      {
        name: 'InclusiveColors',
        description: 'Accessible palette creator that builds WCAG-compliant color systems.',
        url: 'https://www.inclusivecolors.com/',
        badge: 'recommended',
        tags: ['accessibility', 'wcag', 'palette', 'a11y'],
      },
      {
        name: 'UI Colors',
        description: 'Tailwind-compatible color palette generator.',
        url: 'https://uicolors.app/create',
        badge: 'free',
        tags: ['tailwind', 'palette', 'generator'],
      },
      {
        name: 'Tints.dev',
        description: 'Generates tint and shade scales from a base color.',
        url: 'https://www.tints.dev',
        badge: 'free',
        tags: ['tints', 'shades', 'scale', 'tailwind'],
      },
      {
        name: 'Tailwind Shades',
        description: 'Tailwind CSS shade generator for color scales.',
        url: 'https://www.tailwindshades.com/',
        badge: 'free',
        tags: ['tailwind', 'shades', 'generator'],
      },
      {
        name: 'Tailcolor',
        description: 'Tailwind color tool for customizing and previewing palettes.',
        url: 'https://tailcolor.com/',
        badge: 'free',
        tags: ['tailwind', 'color', 'preview'],
      },
    ],
  },
  {
    id: 'iconography',
    label: 'Iconography',
    description: 'Icon libraries and frameworks for UI design and development.',
    tools: [
      {
        name: 'Iconify',
        description: 'Universal icon framework with more than 200,000 icons from many sets.',
        url: 'https://iconify.design',
        badge: 'recommended',
        tags: ['icons', 'framework', 'universal', 'open-source'],
      },
      {
        name: 'Lucide',
        description: 'Clean and consistent open-source icon set popular in React ecosystems.',
        url: 'https://lucide.dev',
        badge: 'free',
        tags: ['icons', 'react', 'open-source', 'svg'],
      },
      {
        name: 'Hero Icons',
        description: 'Hand-crafted SVG icons by the Tailwind CSS team.',
        url: 'https://heroicons.com',
        badge: 'free',
        tags: ['icons', 'tailwind', 'svg', 'open-source'],
      },
      {
        name: 'Untitled UI Icons',
        description: 'Clean modern icon library with free and pro tiers.',
        url: 'https://www.untitledui.com/icons',
        tags: ['icons', 'modern', 'figma'],
      },
      {
        name: 'Pika Icons',
        description: 'Premium icon set with a wide range of styles.',
        url: 'https://pikaicons.com',
        tags: ['icons', 'premium'],
      },
      {
        name: 'Font Awesome',
        description: 'Established icon library with a huge range of icons and styles.',
        url: 'https://fontawesome.com',
        tags: ['icons', 'web', 'established', 'free'],
      },
      {
        name: 'Google Icons',
        description: 'Google Material Symbols icon set with adjustable font-based properties.',
        url: 'https://fonts.google.com/icons',
        badge: 'free',
        tags: ['icons', 'google', 'material', 'variable-font'],
      },
    ],
  },
  {
    id: 'inspiration',
    label: 'Inspiration',
    description: 'Curated galleries and learning resources for designers.',
    tools: [
      {
        name: 'Awwwards',
        description: 'Award-winning web design showcase and benchmark for digital craft.',
        url: 'https://www.awwwards.com',
        tags: ['inspiration', 'web-design', 'awards'],
      },
      {
        name: 'Mobbin',
        description: 'Massive library of real mobile and web UI screenshots searchable by pattern.',
        url: 'https://mobbin.com',
        badge: 'recommended',
        tags: ['inspiration', 'mobile', 'web', 'ui-patterns', 'screenshots'],
      },
      {
        name: 'Shape of AI',
        description: 'Best practices and UI patterns for AI-powered products.',
        url: 'https://www.shapeof.ai',
        tags: ['ai', 'ux-patterns', 'best-practices'],
      },
      {
        name: 'Godly',
        description: 'Curated showcase of standout website design filtered by style and type.',
        url: 'https://godly.website',
        badge: 'recommended',
        tags: ['inspiration', 'web-design', 'curated'],
      },
      {
        name: 'Minimal Gallery',
        description: 'Curated collection of minimal and clean web design references.',
        url: 'https://minimal.gallery',
        badge: 'free',
        tags: ['inspiration', 'web-design', 'minimal', 'curated'],
      },
      {
        name: 'Dark Design',
        description: 'Curated gallery of dark mode interface design references.',
        url: 'https://www.dark.design',
        badge: 'free',
        tags: ['inspiration', 'dark-mode', 'ui', 'curated'],
      },
    ],
  },
  {
    id: 'visual-productivity',
    label: 'Visual Productivity',
    description: 'Tools for presentations, canvases, and visual communication.',
    tools: [
      {
        name: 'Gamma',
        description: 'AI-powered tool for presentations, lightweight websites, and social posts.',
        url: 'https://gamma.app',
        tags: ['presentations', 'ai', 'websites'],
      },
    ],
  },
]
  .map((category) => ({
    ...category,
    tools: [...category.tools].sort((a, b) => a.name.localeCompare(b.name)),
  }))
  .sort((a, b) => a.label.localeCompare(b.label));

export const totalTools = categories.reduce((count, category) => count + category.tools.length, 0);

export const allTools = categories.flatMap((category) =>
  category.tools.map((tool) => ({
    ...tool,
    categoryId: category.id,
    categoryLabel: category.label,
  })),
);
