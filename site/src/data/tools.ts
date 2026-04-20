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
        name: 'Figma',
        description:
          'Collaborative interface design and prototyping in the browser, with design systems, FigJam, and dev handoff.',
        url: 'https://www.figma.com',
        badge: 'recommended',
        tags: ['figma', 'prototyping', 'design-systems', 'collaboration', 'handoff'],
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
        name: 'MagicPath',
        description: 'AI design tool for creating, refining, and exploring apps and websites with a prompt-driven workflow.',
        url: 'https://magicpath.ai/',
        tags: ['ai', 'design', 'prompt-to-app', 'website', 'prototyping'],
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
        name: 'Spline',
        description: 'Web-based collaborative 3D design platform for interactive, production-ready experiences.',
        url: 'https://spline.design/',
        tags: ['3d', 'interactive', 'motion', 'web', 'collaboration'],
      },
      {
        name: 'Unicorn Studio',
        description:
          'No-code WebGL scene builder for interactive, shader-driven graphics in the browser—layers, effects, and export for sites, Framer, Webflow, and video.',
        url: 'https://www.unicorn.studio',
        badge: 'new',
        tags: ['webgl', 'motion', 'interactive', 'browser-based', 'no-code', 'export'],
      },
      {
        name: 'Shader Lab',
        description:
          'Browser shader playground for stacking retro effects like CRT, dithering, scanlines, and bloom with live controls.',
        url: 'https://eng.basement.studio/tools/shader-lab',
        tags: ['shader', 'webgl', 'effects', 'crt', 'retro', 'browser-based'],
      },
      {
        name: 'v0',
        description: 'Vercel UI generator that accepts prompts or Figma files and outputs React.',
        url: 'https://v0.dev',
        tags: ['vercel', 'react', 'figma', 'prompt-to-code'],
      },
      {
        name: 'Aura',
        description:
          'AI UI and multi-page site builder with a visual editor, prompt- and image-to-code flows, Tailwind/HTML output, and Figma export.',
        url: 'https://www.aura.build',
        tags: ['tailwind', 'figma', 'prompt-to-code', 'website', 'ai-generation', 'components'],
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
      {
        name: 'Paper',
        description:
          'Connected team canvas on web standards (HTML/CSS) that links agents, code, and real data so design and handoff stay in sync.',
        url: 'https://paper.design',
        badge: 'new',
        tags: ['canvas', 'collaboration', 'agents', 'code-sync', 'html-css', 'mcp'],
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
    description: 'AI image generators and canvas workflows for concept art, mockups, and creative direction.',
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
      {
        name: 'Flora',
        description:
          'Team canvas with 50+ generative models for image-led ideation, reusable flows, and scalable campaign output.',
        url: 'https://flora.ai',
        tags: ['image-generation', 'canvas', 'workflows', 'collaboration', 'ai'],
      },
      {
        name: 'Figma Weave',
        description:
          'Node-based creative platform from Figma that combines multiple AI models with professional editing tools for scalable media workflows.',
        url: 'https://weave.figma.com',
        tags: ['figma', 'ai', 'canvas', 'workflows', 'image-generation', 'video'],
      },
      {
        name: 'Lummi',
        description: 'Curated library of free AI stock photos, illustrations, and 3D renders from human creators.',
        url: 'https://lummi.ai',
        badge: 'free',
        tags: ['stock', 'photos', 'illustration', '3d', 'ai', 'free'],
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
        name: 'Open Design Systems',
        description: 'Curated directory of open design system kits published on the Figma Community.',
        url: 'https://www.designsystems.com/open-design-systems/',
        tags: ['figma', 'community', 'open-source', 'design-system', 'directory'],
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
      {
        name: 'Design Systems for Figma',
        description: 'Directory of design system libraries in Figma with implementation language and token notes.',
        url: 'https://www.designsystemsforfigma.com',
        tags: ['figma', 'directory', 'design-system', 'libraries', 'tokens'],
      },
      {
        name: 'Design Systems Surf',
        description: 'Reference hub for notable product design systems, with libraries, components, and articles.',
        url: 'https://designsystems.surf',
        tags: ['design-system', 'reference', 'directory', 'research'],
      },
      {
        name: 'Layout',
        description: 'Connects design systems from Figma or websites to AI coding agents with structured context.',
        url: 'https://layout.design',
        tags: ['design-system', 'figma', 'ai', 'mcp', 'tokens'],
      },
    ],
  },
  {
    id: 'figma-plugins',
    label: 'Figma plugins',
    description: 'Figma plugins that extend the canvas with automation, AI, and workflow helpers.',
    tools: [
      {
        name: 'Figma Intelligence',
        description:
          'Free Figma plugin that connects Claude, OpenAI, Gemini, Perplexity, Stitch, and external tools via MCP for design, tokens, accessibility, and code workflows.',
        url: 'https://figma-intelligence.vercel.app/#how-to-install',
        tags: ['figma', 'plugin', 'mcp', 'ai', 'accessibility', 'tokens', 'code'],
      },
      {
        name: 'A11y — Color Contrast Checker',
        description: 'Checks text and UI color contrast against WCAG targets directly inside Figma.',
        url: 'https://www.figma.com/community/plugin/733159460536249875/a11y-color-contrast-checker',
        tags: ['figma', 'plugin', 'accessibility', 'wcag', 'contrast', 'color'],
      },
      {
        name: 'Autoflow',
        description: 'Draws user flows and diagrams as editable connector lines between frames and shapes.',
        url: 'https://www.figma.com/community/plugin/733902567457592893/autoflow',
        tags: ['figma', 'plugin', 'diagrams', 'flows', 'connectors'],
      },
      {
        name: 'Brandfetch',
        description: 'Pulls official brand logos, colors, and typography into Figma from Brandfetch.',
        url: 'https://www.figma.com/community/plugin/733590967040604714/brandfetch',
        tags: ['figma', 'plugin', 'brand', 'logos', 'colors', 'typography'],
      },
      {
        name: 'Dither',
        description: 'Applies stylized dithering effects to images for retro, print, and texture-driven visuals.',
        url: 'https://www.figma.com/community/plugin/1420427052856622613/dither-apply-amazing-dithering-effect-for-any-images',
        tags: ['figma', 'plugin', 'image', 'texture', 'effects'],
      },
      {
        name: 'Export Comments',
        description: 'Exports Figma comments for sharing, archiving, and handoff outside the file.',
        url: 'https://www.figma.com/community/plugin/930702747188058634/export-comments',
        tags: ['figma', 'plugin', 'comments', 'export', 'handoff'],
      },
      {
        name: 'Feather Icons',
        description: 'Inserts Feather icons as editable vectors with consistent stroke styling.',
        url: 'https://www.figma.com/community/plugin/744047966581015514/feather-icons',
        tags: ['figma', 'plugin', 'icons', 'feather', 'svg'],
      },
      {
        name: 'Font Awesome Icons',
        description: 'Search and place Font Awesome icons directly on the canvas.',
        url: 'https://www.figma.com/community/plugin/774202616885508874/font-awesome-icons',
        tags: ['figma', 'plugin', 'icons', 'font-awesome'],
      },
      {
        name: 'HTML to Design',
        description: 'Imports live webpages into editable Figma frames using HTML and CSS.',
        url: 'https://www.figma.com/community/plugin/1159123024924461424/html-to-design-by-divriots-import-websites-to-figma-designs-web-html-css',
        tags: ['figma', 'plugin', 'import', 'html', 'css', 'web'],
      },
      {
        name: 'Isometric',
        description: 'Transforms layers into isometric projections for illustrative UI mockups.',
        url: 'https://www.figma.com/community/plugin/741184519069077841/isometric',
        tags: ['figma', 'plugin', 'isometric', 'transform', 'illustration'],
      },
      {
        name: 'Lorem Ipsum',
        description: 'Generates placeholder text with flexible length and formatting options.',
        url: 'https://www.figma.com/community/plugin/736000994034548392/lorem-ipsum-by-divriots',
        tags: ['figma', 'plugin', 'content', 'placeholder', 'copy'],
      },
      {
        name: 'LottieFiles',
        description: 'Browse community Lottie animations and insert or export Lottie from Figma.',
        url: 'https://www.figma.com/community/plugin/809860933081065308/lottiefiles-discover-create-export-lottie-animations',
        tags: ['figma', 'plugin', 'lottie', 'animation', 'motion'],
      },
      {
        name: 'Map Maker',
        description: 'Generates editable map imagery from Google Maps or Mapbox inside Figma frames.',
        url: 'https://www.figma.com/community/plugin/731312569747199418',
        tags: ['figma', 'plugin', 'maps', 'google-maps', 'mapbox'],
      },
      {
        name: 'Material Design Icons',
        description: 'Adds Google’s Material Symbols / icon set as scalable vectors for UI work.',
        url: 'https://www.figma.com/community/plugin/740272380439725040/material-design-icons',
        tags: ['figma', 'plugin', 'icons', 'material', 'google'],
      },
      {
        name: 'Pixels',
        description: 'Snaps measurements, spacing, and alignment checks while you design in Figma.',
        url: 'https://www.figma.com/community/plugin/775716538746765221/pixels',
        tags: ['figma', 'plugin', 'measurement', 'spacing', 'layout'],
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
      {
        name: 'Iconshock',
        description: 'Large library of royalty-free icons in many styles and formats for apps and sites.',
        url: 'https://www.iconshock.com',
        tags: ['icons', 'vectors', 'stock', 'png', 'svg'],
      },
      {
        name: 'The Noun Project',
        description: 'Huge collection of icons for any idea, with SVG and PNG downloads and licensing options.',
        url: 'https://thenounproject.com',
        tags: ['icons', 'svg', 'png', 'stock', 'library'],
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
        name: 'Spotted in Prod',
        description: 'Curated collection of standout iOS product details, interactions, and interface patterns.',
        url: 'https://www.spottedinprod.com',
        tags: ['inspiration', 'ios', 'ui-patterns', 'product-design'],
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
    id: 'presentations-storytelling',
    label: 'Presentations & storytelling',
    description: 'AI-assisted decks, narrative sites, and slide-driven storytelling for teams.',
    tools: [
      {
        name: 'Chronicle',
        description:
          'AI presentation maker for professional, on-brand decks with a freeform canvas, team collaboration, templates, and export to PPT, PDF, or the web.',
        url: 'https://chroniclehq.com',
        tags: ['presentations', 'ai', 'collaboration', 'slides', 'brand'],
      },
      {
        name: 'Gamma',
        description: 'AI-powered tool for presentations, lightweight websites, and social posts.',
        url: 'https://gamma.app',
        tags: ['presentations', 'ai', 'websites'],
      },
    ],
  },
  {
    id: 'visual-productivity',
    label: 'Visual Productivity',
    description: 'Screenshots and on-screen measurement for polish and QA.',
    tools: [
      {
        name: 'xScope',
        description: 'Screen measurement and inspection toolkit for testing on-screen graphics and layouts.',
        url: 'https://xscopeapp.com',
        tags: ['measurement', 'inspection', 'layout', 'macos', 'screenshots'],
      },
      {
        name: 'Xnapper',
        description: 'Mac screenshot app for quickly creating polished screenshots with automatic balancing and redaction.',
        url: 'https://xnapper.com',
        tags: ['screenshots', 'macos', 'sharing', 'redaction'],
      },
    ],
  },
  {
    id: 'productivity',
    label: 'Productivity',
    description: 'Meetings, calendar defense, and notes for people who live in their schedule.',
    tools: [
      {
        name: 'Granola',
        description:
          'AI meeting notepad: transcribes from your device audio with no meeting bots, polishes the notes you jot during calls, and helps with follow-ups and summaries.',
        url: 'https://www.granola.ai',
        tags: ['meetings', 'notes', 'transcription', 'ai', 'macos'],
      },
      {
        name: 'In Your Face',
        description:
          'Meeting reminder app for Mac, iPhone, and iPad: full-screen alerts before events, calendar sync, and one-tap join for 30+ video services.',
        url: 'https://www.inyourface.app',
        tags: ['meetings', 'calendar', 'reminders', 'macos', 'ios', 'productivity'],
      },
      {
        name: 'Reclaim.ai',
        description:
          'AI scheduling for Google Calendar: auto-blocks focus time, habits, and meetings while keeping your calendar flexible.',
        url: 'https://reclaim.ai',
        tags: ['calendar', 'scheduling', 'time-blocking', 'productivity', 'google-calendar'],
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
