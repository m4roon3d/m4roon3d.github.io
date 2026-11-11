/* Reviewed project metadata. Keep project keys consistent across all four registries.
   Topology edges are conceptual relationships indexed into nodes. */
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
    }
  }
};
window.PORTFOLIO_PROJECTS = projects;
})();
