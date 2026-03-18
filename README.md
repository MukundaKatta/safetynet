# SafetyNet

AI safety research community platform for tracking publications, collaboration, grants, career opportunities, and reading groups.

## Features

- **Research Dashboard** -- Publication trends, research areas, and community statistics
- **Paper Tracker** -- Browse and track AI safety research papers across venues
- **Safety Taxonomy** -- Categorized taxonomy of AI safety research areas
- **Collaboration Hub** -- Connect researchers and facilitate joint projects
- **Grants Directory** -- Active AI safety grants and funding opportunities
- **Career Board** -- Open positions in AI safety organizations
- **Reading Groups** -- Organize and join paper reading groups
- **Metrics Dashboard** -- Track field-wide progress on key safety metrics

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **State Management:** Zustand
- **Database:** Supabase (with SSR support)
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone <repository-url>
cd safetynet
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
safetynet/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── research/     # Research papers
│   │   ├── taxonomy/     # Safety taxonomy
│   │   ├── collaborate/  # Collaboration hub
│   │   ├── grants/       # Funding directory
│   │   ├── careers/      # Job board
│   │   ├── reading-groups/ # Reading groups
│   │   └── metrics/      # Progress metrics
│   ├── components/       # Shared UI components
│   └── lib/              # Utilities, store, mock data
├── public/               # Static assets
└── package.json
```

## License

MIT
