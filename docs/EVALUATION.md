# OpenAGI — Evaluation guide

Start with the smallest path that exercises the project. Distinguish source inspection,
syntax/build checks, functional behavior and domain validation when recording a result.

## Guided reading and demonstration

1. **Read the intended design.** Compare DESIGN.md with the actual frontend and backend files.
Treat requirements as proposed scope rather than completed functionality.

2. **Inspect the editor source.** Review the sidebar and MainContent component, their props and
expected API calls. The current app/entry wiring does not form a verified runnable frontend.

3. **Inspect the API model.** Follow LLM/Agent models and component/workflow routes. Compare
schema placement, response models and database configuration with the UI expectations.

4. **Reconcile before running.** Resolve entry points, imports, dependencies and contracts before
an end-to-end trial. No API provider execution pipeline is supplied by the current scaffold.

## Declared checks

These commands/checks describe the intended verification path. Their presence in this
guide does not claim that they passed. See the dated evidence below and the README for setup.

```text
python -m compileall -q openagi/backend
```

## Evidence levels

| Level | What it establishes | What it does not establish |
| --- | --- | --- |
| Source review | A path exists in tracked code | Successful runtime behavior |
| Syntax/build | Parser/compiler accepts that path | End-to-end correctness |
| Behavioral check | A specific input/output case passed | Generalization beyond cases |
| Domain evaluation | Performance on a stated target setting | Other users/data/environments |

## What to record

- Commit, environment, dependency versions and date.
- Input provenance and whether data is synthetic, public or privately supplied.
- Absolute pass/fail/skip counts; keep failed cases and their root causes.
- Whether external services, hardware or a production deployment were actually exercised.
- Expected output and an artifact showing the observation.

## Review scenarios

- **Design and build remain separate:** A design document does not prove that its routes and
models were implemented.

- **Contracts before integration:** The frontend requested resources and backend routes must agree
before an execution claim.

- **Syntax is a narrow check:** Parsing Python does not catch missing runtime names or incorrect
ORM/Pydantic usage.

## Documentation inspection — 7 October 2026

The documentation was traced to committed source and checked for local links, balanced
code fences and supported implementation claims. Historical notebook outputs remain labeled
as historical. Live provider access, private databases and hardware behavior are not inferred
from configuration or dependency files. Any fresh run is recorded separately in the README.

## Next evidence to collect

- Reconcile frontend entry points and imports.
- Define a single database/schema contract.
- Build and test one complete saved workflow before expanding execution scope.
