# Handoff: Clashpoint event page on clashpointsystem.netlify.app

## What I want done

Two things on the site at https://clashpointsystem.netlify.app/

1. **Add a new page** for the Clashpoint event on Saturday 19 September, containing
   the ClubSpark booking link.
2. **Update the existing page(s)** so the new event page is reachable from the site.
   *(The exact change to the existing page has not been decided yet — ask me. My
   assumption was "add a link/card pointing at the new event page", but confirm.)*

The site source is on my desktop. A previous session ran in a cloud container with no
desktop access and could not do this — see Blockers at the bottom.

## The event

| | |
|---|---|
| Name | Clashpoint - Fast Four Singles |
| When | Saturday 19 September, 2-5pm |
| Where | Preston Park, Brighton |
| Places | 16 |
| Standard | Good Club Standard and above |
| Format | Rotating singles. Continual play, not knockout - nobody eliminated, nobody sits out |
| Matches | Best of three Fast Four sets, 20-30 minutes each, new opponent each round |
| Decider | At one set all, a traditional 7-point tiebreak (first to seven, two clear points) |
| Set scoring | First to four games. No advantage - sudden-death point at deuce, receiver chooses side. Let serves played. At three games all, a short tiebreak to five points, sudden death at four-all |
| Running order | 2.00pm arrival and briefing / 2.15pm play begins / 4.30pm final round / 5.00pm finish |
| Kit | Tennis shoes, racket, water. Balls provided. Outdoor courts |

**Booking link (must appear on the new page):**
https://clubspark.lta.org.uk/PrestonParkTennisCourts/EventsV2/Book/f3e28cc8-5a1f-45b8-b954-0437758f9afa

Price and booking are handled by the ClubSpark event itself — do not put a price on
the page or the artwork.

## What already exists

On branch `claude/clubspark-stripe-multi-account-wdkgx6` of
`github.com/DanTravis621/tennis3point`, under `design/clashpoint/`:

| File | What it is |
|---|---|
| `clashpoint-banner-1800x440.png` | Finished event banner, 1800x440, already uploaded to ClubSpark |
| `site/clashpoint-event.html` | **A complete, standalone draft of the new page**, booking link wired in twice |
| `clubspark-fields.txt` | The ClubSpark Description and Additional Confirmation copy |
| `clubspark-description.txt` | Longer single-field version of the same copy |
| `Main.dc.html`, `render.html`, `shoot.mjs` | Banner source and the headless-Chromium render script |

`site/clashpoint-event.html` is the main thing to start from. It is responsive and
self-contained, but it was built on the **banner's** visual language, not the site's,
because the site could not be reached. **Rework it to match the real site** — its
header, nav, footer, spacing, type scale and components. Lift exact values from the
site's actual source, do not approximate.

## Design tokens used in the draft

Only relevant if the site has no design system of its own; otherwise the site wins.

- Ink `#0D1211`, lime `#D8F651`, off-white `#F7F9F4`, rules `rgba(247,249,244,.20)`
- Display: Anton (fallback Impact). Body: Space Grotesk (fallback Helvetica/Arial)
- Motifs: faint raked court lines, tennis-ball roundel

## Ask me before you build

1. What exactly should change on the existing page?
2. Where does the new page live — what URL/route, and does it go in the nav?
3. Is the site plain HTML or a framework/static-site generator with a build step?
4. Should the banner PNG appear on the page, or is a native HTML hero better?
   (The draft uses a native hero — it is responsive; the 1800x440 banner is not.)
5. Deploy: push to a repo and let Netlify build, or drag-and-drop the folder?

## Blockers hit in the previous session — do not repeat

- **No desktop access.** That session was a cloud container with only `tennis3point`
  cloned. If you are running locally this is solved.
- **Egress blocked.** Both `clashpointsystem.netlify.app` and `clubspark.lta.org.uk`
  returned 403 at the network proxy, so neither the live site nor the booking page
  could be read. If this recurs locally, work from the source files on disk instead.
- **Repo not in scope.** Only `DanTravis621/tennis3point` was accessible.
  `DanTravis621/clashpointsystem` and `DanTravis621/clashpoint` both 404.

## Still open

The rotation mechanic — how players are paired each round (fixed schedule, ladder by
result, fresh draw) — has never been specified. The copy currently says only "the
rotation is explained in the briefing". If it gets nailed down, it should go on the
page and into the ClubSpark description.
