# OpenAGI

A React and FastAPI scaffold for assembling AI components into workflows.
The repository captures a proposed builder interface and partial backend models.
It does not yet provide a working end-to-end agent execution platform.

## Implementation map

| Area | What exists | Current limit |
| --- | --- | --- |
| Frontend | Sidebar and workflow editor | Entry/import wiring incomplete |
| API | Workflow route and component create/list handlers | Frontend endpoint contract differs |
| Data | SQLAlchemy LLM and Agent models | Database setup is inconsistent |
| AI execution | Design description | No provider execution pipeline |

[DESIGN.md](DESIGN.md) describes the intended architecture, rather than completed capabilities.
Source lives under [openagi](openagi).

## Inspect the scaffold

The frontend package is in `openagi/frontend`; Python dependencies are in
`openagi/backend/requirements.txt`. The frontend declares React 17 and react-scripts 4.
Backend packages are unpinned.

```bash
git clone https://github.com/DanushArun/OpenAGI_project_final.git
cd OpenAGI_project_final
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r openagi/backend/requirements.txt
cd openagi/frontend
npm install
```

These commands install dependencies. A successful application launch needs the wiring issues
below resolved first; installation alone is not evidence that the scaffold works.

## Known launch blockers

- The frontend entry is a directory named `src/index.js` containing HTML, not a React entry file.
- `src/app.js` imports `./MainContent`, but that component is under `src/components`.
- The start script uses `cross-env`, which is not declared as a dependency.
- The backend schema file is nested under a directory named `schemas.py`.
- Component handlers use `List` without importing it and use an ORM model as a response schema.
- Backend startup references PostgreSQL while the SQLAlchemy setup points at SQLite.
- The frontend requests agents/tools/LLMs routes that the backend does not expose as written.

The database URL in source is an example configuration. Configure a real database through an
appropriate local configuration before attempting to run it.

## Evidence and boundaries

The README was checked against tracked source and dependency manifests. No end-to-end launch
or provider call was performed. There is no automated test suite or verified deployment here.
Workflow execution, complete component CRUD and production readiness remain unverified.
