# PostHog Self-driving setup report

## Summary

PostHog Self-driving is configured for this web application: Session Replay, Error Tracking, and Support are enabled, and the health, error, and support signal sources are active. The browser runtime was configured with the supplied PostHog project settings so recordings can reach the project. Findings should begin appearing in the [Self-driving inbox](https://us.posthog.com/project/625120/inbox) within about 30 minutes once traffic and recordings arrive.

## AI data processing

Approved by the setup gate.

## GitHub

Connected before this setup run. No issue-tracker responder was enabled because the connected-tools selection timed out with no selection.

## Products enabled

| Product | Result | Notes |
|---|---|---|
| Session Replay | Already enabled | The `posthog-js` initialization does not disable session recording. Browser environment configuration was added for the supplied project. |
| Error Tracking | Enabled | The `posthog-js` initialization does not set `capture_exceptions: false`. |
| Support (Conversations) | Enabled | Tickets require an inbound email, inbox, or Slack channel before any arrive. |

## Signal sources

| Source product | Source type | Action |
|---|---|---|
| `health_checks` | `health_issue` | Enabled (config `01a0cfd9-a3f7-7916-ab1d-b910a7d09887`) |
| `error_tracking` | `issue_created` | Enabled (config `01a0cfd9-a45a-7e92-b69b-a74f17085599`) |
| `error_tracking` | `issue_reopened` | Enabled (config `01a0cfd9-a396-783b-8fc8-0718e10c1d27`) |
| `error_tracking` | `issue_spiking` | Enabled (config `01a0cfd9-a3b9-7292-82a3-a04e7778fb05`) |
| `conversations` | `ticket` | Enabled (config `01a0cfd9-a42f-7bc4-82c2-dcd446afa0e6`) |
| `signals_scout` | `cross_source_issue` | No row created; Self-driving scouts are enabled by default. |
| `session_replay` | `session_analysis_cluster` | Deliberately skipped; Replay Vision scanners are the supported route for replay findings. |
| `replay_vision` | — | Deliberately skipped; each scanner self-authorizes with `emits_signals`. |

## Connected tools

No connected tool was selected: the batched picker timed out and was treated as a decline. GitHub remains connected to the project, but the GitHub Issues responder was not enabled. No warehouse-backed responder was created.

## Scout troop

**Enabled (4):**

| Scout | Why it is enabled |
|---|---|
| General | Watches cross-product patterns not owned by a specialist. |
| Product analytics | Watches saved journeys and conversion or retention regressions in the booking-oriented web app. |
| Web analytics | Watches traffic, attribution, landing-page health, and 404s. |
| Web vitals | Watches Core Web Vitals regressions by page. |

**Disabled (23):** AI observability, anomaly detection, APM, conversations, CSP violations, customer analytics, data pipelines, data warehouse, error tracking, experiments, feature flags, inbox validation, insight alerts, logs, MCP tool calls, observability gaps, PR follow-up, Replay Vision, revenue analytics, session replay, skills store, surveys, and tasks. These are disabled because the repository and server-side evidence did not establish active use of their respective surfaces; inbox validation is also premature on a new setup. Error tracking is covered by its native source and session replay is intended to be covered by Replay Vision scanners rather than duplicate scouts.

| Run budget | Value |
|---|---:|
| Maximum runs per day | 100 |
| Runs used today | 0 |
| Runs remaining today | 100 |

Early-access notice: “Scouts are in early access. Each project gets up to 100 scout runs a day. Contact team-self-driving@posthog.com if you need more.”

## Custom scouts

No custom scout was created. Two candidates were presented but the approval prompt timed out and was treated as a decline:

- **Appointment-booking handoff health:** a focused check for users reaching the booking flow but not continuing to the scheduling handoff. It partly overlaps the enabled Product analytics scout but would be specific to the clinic’s key conversion flow.
- **Calendar availability and booking delivery:** a check for availability lookup or calendar-booking failures. The Worker has `GET /availability` and `POST /book` routes in `worker/src/calendar.ts`, but no non-sensitive success/failure telemetry is currently captured, so this would first surface an instrumentation gap.

The clinical consent flow was not proposed for monitoring because its user-entered health and identity data must not enter analytics. If a future custom scout is noisy, set its config `emit` to `false` in PostHog to retain dry-run behavior without creating inbox reports.

## Replay Vision scanners

Replay Vision scanners are LLM monitors that inspect individual session recordings on a schedule and send unambiguous visible defects to the inbox. They are the only configuration in this setup that spends Replay Vision quota; findings have half weight and need independent corroboration before promotion to a report.

| Brief | Intended scope | Result |
|---|---|---|
| Completion-flow breakage monitor | The appointment modal and handoff to the external scheduling calendar, the app’s identifiable completion flow. | Deferred: the PostHog access token expired before scanner inventory, quota sizing, or creation could be completed. |
| User-frustration monitor | Sessions containing `$rageclick`, without a URL filter so it stays distinct from the completion-flow monitor. | Deferred: the PostHog access token expired before scanner inventory, quota sizing, or creation could be completed. |

The project had no session recordings in the initial probe. Once scanner access is restored, create both monitors with `emits_signals: true`; they can be armed before recordings arrive and will begin inspecting new recordings automatically.

## Files changed

| File | Change |
|---|---|
| `web/.env` | Created with the supplied browser-safe PostHog project key and ingestion host. |
| `posthog-self-driving-report.md` | Created this setup report. |
| `dist/` | Regenerated by the production build verification. |

## Verification

- `npm run build` completed successfully, including TypeScript compilation and the Vite production build.
- Vite reported a pre-existing-style bundle-size advisory for a JavaScript asset above 500 kB; it did not fail the build.

## Follow-ups

- [ ] Connect an inbound Support channel (email, inbox, or Slack) in PostHog so the enabled Conversations responder can receive tickets.
- [ ] Refresh the PostHog MCP access token, then create the two Replay Vision monitors above and confirm their scanner estimates and existing-scanner collision checks.
- [ ] Generate real browser traffic after deployment; the initial recording probe returned no recordings.
- [ ] If issue tracking is wanted, re-run connected-tools setup and explicitly select the desired responder. Selecting a tool allows Self-driving to read its open records and automatically open draft PRs for fixable items at $15 each.
- [ ] Consider adding non-sensitive Worker telemetry for calendar availability and booking success/failure only—never clinical, identity, calendar-detail, or consent-form data—before enabling a calendar-reliability custom scout.

## What happens next

Fresh scout configurations are picked up by the coordinator within about 30 minutes and consume the 100-runs-per-day project budget. Self-driving groups corroborated findings into reports in the [inbox](https://us.posthog.com/project/625120/inbox), where immediately actionable reports can begin coding tasks.
