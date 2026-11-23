/* Reviewed project metadata. Keep project keys consistent across all four registries.
   Edit visibility.hidden to hide projects from the published portfolio. */
(()=>{
const projects = {
  "details": {
    "dashadisha": {
      "description": "A Vedic astrology app featuring birth charts, planetary periods, panchang, compatibility matching and personalised readings.",
      "stack": [
        "Flutter",
        "Dart",
        "Python",
        "FastAPI",
        "Swiss Ephemeris"
      ]
    },
    "seedbed": {
      "description": "A data engineering practice environment generating reproducible, realistically messy datasets with duplicates, late records, schema drift and answer keys.",
      "stack": [
        "Python",
        "React",
        "Vite",
        "DuckDB",
        "Pyodide",
        "Capacitor",
        "Docker",
        "Render"
      ]
    },
    "datakul": {
      "description": "A quest-based AI learning platform for data engineering and analytics, with interview preparation, coding exercises, a concept library and grounded AI tutoring.",
      "stack": [
        "JavaScript",
        "Cloudflare Workers",
        "Cloudflare D1",
        "Workers AI",
        "RAG",
        "Groq",
        "Gemini"
      ]
    },
    "hodlr": {
      "description": "A cryptocurrency market companion for live prices, charts, watchlists, portfolio tracking and tax reporting across Android and the web.",
      "stack": [
        "JavaScript",
        "HTML",
        "CSS",
        "Android",
        "Java",
        "PWA",
        "GitHub Actions"
      ]
    },
    "nelabele": {
      "description": "A Bengaluru property intelligence platform providing indicative land, independent-house and apartment price ranges alongside government guidance values and confidence indicators.",
      "stack": [
        "Flutter",
        "Dart",
        "Python",
        "Neon PostgreSQL",
        "PostGIS",
        "Neon Data API",
        "MapLibre",
        "OpenFreeMap",
        "GitHub Actions"
      ]
    },
    "shorelessdev": {
      "description": "A remote data careers platform for India-based professionals. Aggregates hiring feeds, filters roles, tracks applications and highlights trends in demand for technical skills.",
      "stack": [
        "Python",
        "Flask",
        "Gunicorn",
        "Requests",
        "HTML",
        "CSS",
        "JavaScript",
        "GitHub Actions",
        "Render"
      ]
    },
    "done-and-dusted": {
      "description": "An offline-first task planner with Google Keep import, speech dictation, recurring tasks, due-time reminders, weekly planning and a red/amber/green dashboard. Ships as an installable web app and Android app, with iOS preparation documented.",
      "stack": [
        "JavaScript",
        "Vite",
        "Dexie",
        "IndexedDB",
        "Capacitor 8",
        "PWA",
        "Android",
        "GitHub Actions"
      ]
    },
    "tradeprint": {
      "description": "An offline-first trading journal for reviewing trades, importing Dhan and Zerodha tradebooks, measuring trading habits and generating optional BYOK AI reviews. Private Google Drive app-data sync is optional.",
      "stack": [
        "JavaScript",
        "PWA",
        "IndexedDB",
        "Google Drive API",
        "Claude",
        "OpenAI",
        "Gemini",
        "Node.js"
      ]
    },
    "reachloop": {
      "description": "An Instagram workflow companion for photographers and product workspaces: create branded carousels, plan posts, prepare reels, inspect reach signals and learn from manually logged results.",
      "stack": [
        "JavaScript",
        "PWA",
        "IndexedDB",
        "Cloudflare Pages",
        "Cloudflare Functions",
        "Gemini",
        "Claude Artifacts",
        "WebCodecs"
      ]
    },
    "annotated": {
      "description": "Transforms YouTube tutorials into structured study guides with insights, action checklists, sourced links, transcript-grounded Q&A, flashcards, quizzes and export formats.",
      "stack": [
        "JavaScript",
        "HTML",
        "CSS",
        "Chrome Extension MV3",
        "IndexedDB",
        "Gemini",
        "GitHub Pages",
        "SM-2"
      ]
    },
    "trove": {
      "description": "A native Android personal AI memory hub for capturing shared content, screenshots and voice notes, organising local collections, reviewing expenses and asking multiple AI models about saved memories.",
      "stack": [
        "Kotlin",
        "Jetpack Compose",
        "Room",
        "SQLite",
        "ML Kit OCR",
        "WorkManager",
        "Gemini",
        "OpenAI",
        "Perplexity"
      ]
    },
    "repwise": {
      "description": "A local-first AI workout coach that logs sets, recommends progressive overload, builds multi-week training blocks and answers fitness questions using a user-provided Gemini key.",
      "stack": [
        "React 19",
        "Vite",
        "JavaScript",
        "Gemini API",
        "PWA",
        "Vitest",
        "Local Storage"
      ]
    },
    "skyband": {
      "description": "A location-aware world radio player that combines an interactive globe and maps with searchable live radio stations, resilient streaming playback and ambient listening features.",
      "stack": [
        "JavaScript",
        "HTML",
        "CSS",
        "D3",
        "Leaflet",
        "Radio Browser API",
        "hls.js",
        "GitHub Pages",
        "Node.js"
      ]
    }
  },
  "topology": {
    "datakul": {
      "nodes": [
        [
          "Browser learning app",
          "Quests, library and retrieval"
        ],
        [
          "Cloudflare Worker",
          "Secrets, prompt gateway, fallback"
        ],
        [
          "LLM providers",
          "AI tutoring responses"
        ],
        [
          "Workers AI embeddings",
          "Optional semantic matching"
        ],
        [
          "Cloudflare D1",
          "Shared library and review data"
        ]
      ],
      "edges": [
        [
          0,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          3
        ],
        [
          1,
          4
        ]
      ]
    },
    "seedbed": {
      "nodes": [
        [
          "React / Capacitor",
          "Web and Android clients"
        ],
        [
          "Python API / CLI",
          "Generation and dataset workspace"
        ],
        [
          "Scenario generator",
          "Seeded dirty datasets and answer keys"
        ],
        [
          "DuckDB SQL",
          "Server-side read-only queries"
        ],
        [
          "Pyodide Python",
          "Browser-side coding"
        ]
      ],
      "edges": [
        [
          0,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          0,
          4
        ]
      ]
    },
    "nelabele": {
      "nodes": [
        [
          "Flutter + MapLibre",
          "Web/Android and maps"
        ],
        [
          "Neon Data API",
          "Read-only views and lookups"
        ],
        [
          "Postgres + PostGIS",
          "Rates and geospatial data"
        ],
        [
          "Python ingestion",
          "Guidance extracts and loads"
        ],
        [
          "GitHub Actions",
          "Scheduled ingestion"
        ]
      ],
      "edges": [
        [
          0,
          1
        ],
        [
          1,
          2
        ],
        [
          3,
          2
        ],
        [
          4,
          3
        ]
      ]
    },
    "dashadisha": {
      "nodes": [
        [
          "Flutter Android",
          "Charts and readings UI"
        ],
        [
          "FastAPI",
          "Calculation and reading endpoints"
        ],
        [
          "Swiss Ephemeris",
          "Planetary positions"
        ],
        [
          "Rules engine",
          "Deterministic interpretations"
        ],
        [
          "Optional LLM",
          "Narrative responses"
        ]
      ],
      "edges": [
        [
          0,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ]
      ]
    },
    "shorelessdev": {
      "nodes": [
        [
          "Browser interface",
          "Browse, Today and Pipeline"
        ],
        [
          "Flask application",
          "Job filtering and aggregation"
        ],
        [
          "Hiring APIs / feeds",
          "Source listings"
        ],
        [
          "Browser storage",
          "Saved roles and pipeline"
        ],
        [
          "Render hosting",
          "Web app deployment"
        ]
      ],
      "edges": [
        [
          0,
          1
        ],
        [
          2,
          1
        ],
        [
          0,
          3
        ],
        [
          4,
          1
        ]
      ]
    },
    "hodlr": {
      "nodes": [
        [
          "PWA / Android shell",
          "Market and portfolio screens"
        ],
        [
          "Market data feeds",
          "Prices, charts and news"
        ],
        [
          "Local portfolio data",
          "Holdings and preferences"
        ],
        [
          "Reporting features",
          "Insights and tax estimates"
        ],
        [
          "GitHub Actions",
          "Android APK builds"
        ]
      ],
      "edges": [
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          4,
          0
        ]
      ]
    },
    "done-and-dusted": {
      "nodes": [
        [
          "Web / Android interface",
          "Tasks, Plan, Dashboard and Import"
        ],
        [
          "Core task engine",
          "Parsing, recurrence and prioritisation"
        ],
        [
          "Dexie + IndexedDB",
          "On-device tasks, backup and restore"
        ],
        [
          "Platform adapters",
          "Speech, haptics and file handling"
        ],
        [
          "Reminder engine",
          "Native local alerts / browser notifications"
        ]
      ],
      "edges": [
        [
          0,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          3
        ],
        [
          1,
          4
        ],
        [
          4,
          3
        ]
      ]
    },
    "tradeprint": {
      "nodes": [
        [
          "PWA screens",
          "Log, trades, dashboard, calendar and insights"
        ],
        [
          "Trade analysis engine",
          "Charges, CSV pairing, strategies and performance"
        ],
        [
          "IndexedDB store",
          "Trades, journal, settings and screenshots"
        ],
        [
          "Optional Drive sync",
          "OAuth and private app-data merge"
        ],
        [
          "Optional AI review",
          "Direct browser calls to BYOK LLM providers"
        ]
      ],
      "edges": [
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          3,
          2
        ]
      ]
    },
    "reachloop": {
      "nodes": [
        [
          "Installable PWA",
          "Create, grid, plan, reels and reach check"
        ],
        [
          "IndexedDB + share target",
          "Offline posts, settings and gallery imports"
        ],
        [
          "Cloudflare Pages Function",
          "Passcode-protected AI proxy"
        ],
        [
          "Gemini / optional fallback",
          "Captions, concepts and reach suggestions"
        ],
        [
          "Claude artifact runtime",
          "Alternative synced artifact experience"
        ]
      ],
      "edges": [
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          2,
          3
        ],
        [
          0,
          4
        ]
      ]
    },
    "annotated": {
      "nodes": [
        [
          "YouTube MV3 extension",
          "Video metadata and best-effort captions"
        ],
        [
          "Study-guide web app",
          "Understand, Act and Retain views"
        ],
        [
          "Gemini extraction + web check",
          "Structured analysis and source-grounded updates"
        ],
        [
          "IndexedDB library",
          "Saved guides, notes and review queue"
        ],
        [
          "Export / review",
          "Markdown, Anki, Obsidian and spaced repetition"
        ]
      ],
      "edges": [
        [
          0,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          3,
          4
        ]
      ]
    },
    "trove": {
      "nodes": [
        [
          "Android capture surfaces",
          "Share sheet, floating key, quick tile and voice"
        ],
        [
          "ML Kit OCR",
          "On-device screenshot and receipt text extraction"
        ],
        [
          "Room / SQLite",
          "Memories, collections, expenses and suggestions"
        ],
        [
          "Mind Pilot",
          "Ask / agent modes across BYOK providers"
        ],
        [
          "WorkManager digest",
          "Scheduled suggestions from recent memories"
        ]
      ],
      "edges": [
        [
          0,
          1
        ],
        [
          1,
          2
        ],
        [
          2,
          3
        ],
        [
          2,
          4
        ]
      ]
    },
    "repwise": {
      "nodes": [
        [
          "React / Vite PWA",
          "Workout plans, logs, coach and exercise library"
        ],
        [
          "Local training state",
          "Profile, workouts, logs and backups"
        ],
        [
          "Progression engine",
          "Offline double-progression suggestions"
        ],
        [
          "Gemini AI coach",
          "BYOK plans, Q&A and optional photo form checks"
        ],
        [
          "Exercise animation UI",
          "Parametric exercise demonstrations"
        ]
      ],
      "edges": [
        [
          0,
          1
        ],
        [
          1,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ]
      ]
    },
    "skyband": {
      "nodes": [
        [
          "Single-page radio UI",
          "Floating search dock and player"
        ],
        [
          "Interactive maps",
          "D3 globe, Leaflet street/satellite and day/night"
        ],
        [
          "Radio Browser API",
          "Nearby and worldwide station discovery"
        ],
        [
          "Stream playback",
          "Native HLS / hls.js with stall recovery"
        ],
        [
          "Static GitHub Pages",
          "Test-gated deployment with no backend"
        ]
      ],
      "edges": [
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          4,
          0
        ]
      ]
    }
  },
  "architectures": {
    "dashadisha": [
      [
        "Flutter Android app",
        "Birth charts · Dasha · Match"
      ],
      [
        "FastAPI service",
        "Chart / Panchang / Reading endpoints"
      ],
      [
        "Swiss Ephemeris",
        "Planetary calculations"
      ],
      [
        "Rules + optional LLM",
        "Interpretations and narratives"
      ]
    ],
    "seedbed": [
      [
        "React + Capacitor",
        "Web / Android experience"
      ],
      [
        "Python REST API + CLI",
        "Dataset generation and validation"
      ],
      [
        "Scenario generator",
        "Late data · duplicates · drift"
      ],
      [
        "DuckDB + Pyodide",
        "SQL / Python practice + answer keys"
      ]
    ],
    "datakul": [
      [
        "Browser learning app",
        "Quests · Library · AI tutor"
      ],
      [
        "Retrieval layer",
        "Keyword / semantic matching"
      ],
      [
        "Cloudflare Worker",
        "Prompt gateway + API secrets"
      ],
      [
        "LLM providers + D1",
        "AI answers · shared library"
      ]
    ],
    "hodlr": [
      [
        "Android shell / PWA",
        "Market and portfolio screens"
      ],
      [
        "Market data services",
        "Prices · charts · news"
      ],
      [
        "On-device portfolio",
        "Holdings · alerts · settings"
      ],
      [
        "Reporting tools",
        "Analytics · tax estimates"
      ]
    ],
    "nelabele": [
      [
        "Flutter app",
        "Android + web · MapLibre"
      ],
      [
        "Neon Data API",
        "Read-only endpoints"
      ],
      [
        "Postgres + PostGIS",
        "Rates · guidance · geospatial"
      ],
      [
        "Python ingestion",
        "Guidance extracts via GitHub Actions"
      ]
    ],
    "shorelessdev": [
      [
        "Browser interface",
        "Today · Browse · Pipeline"
      ],
      [
        "Flask application",
        "Filtering and job aggregation"
      ],
      [
        "Hiring APIs + remote feeds",
        "Greenhouse · Lever · Ashby + more"
      ],
      [
        "Browser storage",
        "Saved roles · applications"
      ]
    ],
    "done-and-dusted": [
      [
        "Vite + JavaScript UI",
        "Tasks · Plan · Dashboard · Import"
      ],
      [
        "Core + Dexie storage",
        "Date parsing · recurrence · offline data"
      ],
      [
        "Capacitor platform layer",
        "Android native shell · speech · haptics"
      ],
      [
        "Notification adapters",
        "Native scheduled reminders · web alerts"
      ]
    ],
    "tradeprint": [
      [
        "Browser PWA",
        "Quick log, dashboard, calendar, insights"
      ],
      [
        "Pure JS modules",
        "Tradebook parsing, charges and analytics"
      ],
      [
        "IndexedDB + sync",
        "Local journal, screenshots and optional Drive"
      ],
      [
        "BYOK AI review",
        "Direct provider requests and saved reviews"
      ]
    ],
    "reachloop": [
      [
        "PWA / Claude artifact",
        "Two runtimes for planning and creating posts"
      ],
      [
        "Local workspace store",
        "Per-account posts, brand settings and results"
      ],
      [
        "Cloudflare AI function",
        "Server-side Gemini key and passcode gate"
      ],
      [
        "Export + Instagram share",
        "Slides, MP4 reels and native share sheet"
      ]
    ],
    "annotated": [
      [
        "YouTube capture",
        "Extension transfers metadata and transcript"
      ],
      [
        "Analysis pipeline",
        "Gemini extraction, link checks and timestamps"
      ],
      [
        "Study library",
        "IndexedDB guides, notes and search"
      ],
      [
        "Retention workflow",
        "SM-2 flashcards, quiz and exports"
      ]
    ],
    "trove": [
      [
        "Kotlin + Compose",
        "Native Android capture and memory screens"
      ],
      [
        "ML Kit + SpeechRecognizer",
        "Local OCR and voice transcription"
      ],
      [
        "Room persistence",
        "On-device memory, receipts and collections"
      ],
      [
        "Mind Pilot + WorkManager",
        "Optional multi-model reasoning and daily digest"
      ]
    ],
    "repwise": [
      [
        "React + Vite PWA",
        "Personal coach, workout log and exercise library"
      ],
      [
        "Local progression logic",
        "Offline rep targets and load suggestions"
      ],
      [
        "Gemini BYOK integration",
        "Coach chat, plan generation and photo form help"
      ],
      [
        "Exercise animations",
        "20 animation patterns across 68 exercises"
      ]
    ],
    "skyband": [
      [
        "Static HTML / JavaScript app",
        "Search, map modes, playback and explore"
      ],
      [
        "D3 + Leaflet map layer",
        "Globe, flat, street and satellite views"
      ],
      [
        "Radio Browser + stream player",
        "Station search, HLS playback and failover"
      ],
      [
        "GitHub Actions + Pages",
        "Automated tests before static deployment"
      ]
    ]
  },
  "caseStudies": {
    "datakul": {
      "problem": "Make data engineering and analytics learning approachable, with practice and grounded AI help.",
      "decision": "Use a browser-first learning experience with a Cloudflare Worker gateway, reviewed library retrieval and provider fallback.",
      "tradeoff": "Free-tier AI availability varies, so the learning library and quests also work without an AI gateway."
    },
    "seedbed": {
      "problem": "Provide realistic, repeatable data engineering exercises rather than pristine toy datasets.",
      "decision": "Build a seeded Python generation engine shared by CLI, REST API and React/Capacitor clients, with DuckDB SQL and client-side Pyodide Python.",
      "tradeoff": "Browser-side Python reduces server execution risk but requires additional client downloads."
    },
    "nelabele": {
      "problem": "Present Bengaluru property price indications with supporting government guidance values.",
      "decision": "Use Flutter, read-only Neon Data API views, PostGIS and scheduled Python ingestion.",
      "tradeoff": "Indicative ranges and confidence signals are more defensible than claiming exact property valuations."
    },
    "dashadisha": {
      "problem": "Deliver consistent Vedic calculations across charts, dashas, panchang and matching.",
      "decision": "Separate Flutter presentation from a FastAPI calculation service powered by Swiss Ephemeris.",
      "tradeoff": "Interpretation can use optional LLM narration while deterministic rules remain available."
    },
    "shorelessdev": {
      "problem": "Find fresh remote data roles accessible to applicants in India.",
      "decision": "Aggregate direct hiring-system feeds through Flask and keep personal job tracking in browser storage.",
      "tradeoff": "Listings and geographic eligibility can change; regular refresh and explicit eligibility tags help users assess them."
    },
    "hodlr": {
      "problem": "Bring market data, portfolio monitoring and reporting into one lightweight companion.",
      "decision": "Reuse web screens in a PWA and Android native shell, with local portfolio data.",
      "tradeoff": "Local-first storage improves privacy but requires users to manage their own backups."
    },
    "done-and-dusted": {
      "problem": "Make daily and weekly task planning reliable on a phone, including offline use, repeat schedules and timely reminders, without requiring an account.",
      "decision": "Share framework-free JavaScript modules between a Vite PWA and a Capacitor Android app; keep task data in IndexedDB via Dexie, separate pure task logic from platform adapters, and use native local notifications for closed-app reminders.",
      "tradeoff": "Local-only data avoids a backend and account system but does not sync across devices; users transfer JSON backups. Browser reminders are more limited when the web app is closed, and exact Android alarms may require additional permission."
    },
    "tradeprint": {
      "problem": "Help a trader discover which setups and habits improve or damage performance, without requiring a hosted trading account.",
      "decision": "Keep the journal local-first in IndexedDB, isolate analytics and tradebook parsing in testable JavaScript modules, and make Drive sync and provider-key AI review opt-in.",
      "tradeoff": "Single-user local storage protects autonomy but requires backup or optional OAuth sync. Broker imports are not yet validated against real exports, and estimated charges differ from actual broker charges."
    },
    "reachloop": {
      "problem": "Help photographers and small brands post consistently and learn from results without requiring a full marketing platform.",
      "decision": "Ship a single-file offline-capable PWA with separate workspaces, plus a Cloudflare Pages Function that keeps the Gemini API key server-side; retain a Claude-artifact runtime for its native AI and storage features.",
      "tradeoff": "AI availability depends on configured secrets and providers. Insights are entered manually, and automated Instagram Graph API retrieval and publishing remain roadmap items."
    },
    "annotated": {
      "problem": "Turn passive tutorial watching into usable knowledge, practical actions and long-term retention.",
      "decision": "Use a static single-page app and MV3 extension, split extraction from web verification, and ground quotes and timestamps in available transcripts before saving guides for spaced-repetition review.",
      "tradeoff": "YouTube caption extraction is best-effort and can fail. AI analysis requires a user-supplied Gemini key; transcript-only basic extraction is available without one."
    },
    "trove": {
      "problem": "Capture fragmented personal information across Android apps and turn it into searchable memories and useful follow-up suggestions.",
      "decision": "Build Android-native capture entry points and local OCR around a Room database, keeping memories on-device while allowing user-supplied keys for optional Gemini, OpenAI and Perplexity reasoning.",
      "tradeoff": "System overlays and screen capture require explicit Android permissions. External AI calls are optional but send selected context to providers; the repository documents local storage rather than cross-device synchronization."
    },
    "repwise": {
      "problem": "Make personalised training plans and progression tracking accessible without an account or hosted fitness backend.",
      "decision": "Use a React/Vite installable PWA with offline progression logic, on-device training history and opt-in Gemini coaching through the user's own API key.",
      "tradeoff": "AI coaching and photo analysis require a configured external API and transmit selected inputs to Gemini. Local-first data requires user-managed backups rather than automatic cross-device synchronization."
    },
    "skyband": {
      "problem": "Make radio discovery feel geographic and exploratory while keeping live playback dependable.",
      "decision": "Use a single static HTML app with D3 and Leaflet map views, the public Radio Browser directory, browser-native audio and HLS fallback, plus a stream stall guard.",
      "tradeoff": "No backend or API keys simplifies deployment, but station availability and stream quality depend on external providers. Location-aware discovery requires browser permission and HTTPS."
    }
  },
  "visibility": {
    "hidden": []
  }
};
window.PORTFOLIO_PROJECTS = projects;
})();
