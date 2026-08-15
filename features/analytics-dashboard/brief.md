# Analytics Dashboard

## How Might We

How might we let an ops/growth team notice something worth acting on within
the first five seconds of opening the dashboard, instead of having to read
every chart to find the one that moved?

## Background

Internal analytics dashboard for a B2B SaaS product, used daily by a small
ops/growth team to track product health: signups, activation, revenue, and
churn risk. It's opened dozens of times a day, often just glanced at, so it
has to reward a five-second glance as well as a five-minute deep read. There
is no single "north star" metric the whole org agrees on — the team currently
tracks four roughly equally-important series and argues about which one
matters most this week.

## Audience

Internal ops and growth analysts, technical enough to read a chart without
hand-holding, but not data scientists — no expectation of raw data export,
pivoting, or statistical annotations. Viewed on a desktop monitor during work
hours, often side-by-side with other tools, so density and scanability matter
more than marketing polish.

## Requirements

- Four core metrics, each with a daily time series for the last 30 days:
  New signups, Activation rate (%), MRR ($), Churn rate (%).
- At least one metric must visibly show an anomaly in the last 30 days (a
  spike or dip that breaks the trend) — this is the "why did that happen"
  moment the dashboard should surface, not bury.
- Each metric needs a current value, a trend delta vs. the prior period, and
  its 30-day series rendered as a chart — sparkline, full chart, or small
  multiple depending on the direction.
- All charts are hand-authored inline SVG with plausible hardcoded data — no
  chart-library CDN (Chart.js, D3, etc.), consistent with this repo's
  self-contained single-file HTML convention.
- Lofi tier: charts must still be readable in grayscale — differentiate
  series by line shape, dash pattern, and a direct label, not color alone,
  since color-coding is a hifi-only technique here.
- Brand: neutral (using the default tokens)
- Reference: none — no photography or stock imagery; CSS/inline SVG only.

## Seed Ideas

- A KPI-tile row where each tile doubles as a lightweight sparkline, with one
  metric promoted to a larger "hero" chart below.
- An anomaly-first layout: lead with the one metric that broke trend, explain
  it with an annotation/callout pinned to the chart point, and demote the
  other three to a supporting strip.
- A dense, dark "operator" grid: nine small-multiple charts on a shared
  y-axis scale, built for fast side-by-side comparison rather than narrative.

## Success Metrics

- Someone glancing at the dashboard for five seconds can say whether things
  are trending up, flat, or down without reading a single number.
- The anomaly is impossible to miss, even in the least narrative-driven
  layout.

## Sprint Questions

What a Validate session with real users would need to answer before any of
these directions ships:

- Does the anomaly-first layout's callout actually get read, or does a
  five-second glance skip straight past an annotation to the number?
- Does promoting one metric to "selected"/hero status change which metric
  someone assumes matters most this week, independent of what's actually
  happening in the data?

## Out of Scope

- Real data pipeline, filtering/date-range controls, or drill-down
  interactions — this is a static end-state mockup, not a working app.
- User/permissions management, alerting configuration.
- Any metric beyond the four listed.

## Fidelity

Two tiers per direction, per this repo's convention: lofi (grayscale
wireframe, chart series distinguished by shape/dash/label) and hifi
(production-real, resolved token values, one accent plus 2-3 additional
series colors since a dashboard needs more differentiation than a single
accent provides).
