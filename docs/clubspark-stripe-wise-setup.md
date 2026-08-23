# Routing ClubSpark payments to separate Stripe and Wise accounts

Preston Park, Brighton — splitting income from individual sessions, tournaments and
pickleball court bookings into different bank accounts.

## The short version

ClubSpark supports connecting **more than one Stripe account** to a venue, and assigning
each account to a different **module**. Each Stripe account has its own payout bank
account, so each module's income can land in a different Wise account.

The constraint that shapes everything below: **one Stripe account per module, and only
one**. You can split *across* modules, not *within* one.

## Modules that take online payments

| Module | Takes Stripe payments | Typical use |
|---|---|---|
| Booking | Yes | Court / facility bookings |
| Coaching | Yes | Courses, lessons, programmes |
| Events | Yes | One-off events, club competitions, tournaments |
| Membership | Yes | Membership subscriptions |

## Mapping your three activities

| Your activity | Module it runs through | Can it have its own Stripe account? |
|---|---|---|
| Individual sessions | Coaching | Yes |
| Tournaments | Events | Yes |
| Pickleball court bookings | Booking | **Only if you take no other court booking income** |

### The pickleball catch

Pickleball courts in ClubSpark are set up as courts (or linked resources on a tennis
court) inside the **Booking** module — the same module as your tennis court bookings.
Because a module can only have one Stripe account, pickleball booking income and tennis
booking income go to the same place.

Three ways round it:

1. **Run pickleball sessions as Events rather than court bookings.** The Events module
   takes registrations and fees, and has its own Stripe account. This works well for
   organised pickleball sessions; it works less well for open pay-and-play court hire,
   because you lose the booking sheet.
2. **Ask the LTA / Sport:80 for a separate ClubSpark venue for pickleball.** A separate
   venue has its own payment settings, so its Booking module gets its own Stripe account.
   This needs LTA support to set up, and gives members a second site to book on.
3. **Accept one Stripe account for all bookings and split afterwards.** Stripe's reporting
   tags each charge, so you can reconcile tennis vs pickleball and move money between Wise
   accounts yourself. Simplest to set up, more admin each month.

Option 1 is usually the least friction if the pickleball is session-based. Option 2 is the
clean answer if it is genuine open court hire.

Also worth checking: if you take payment for individual sessions through the **booking
sheet** rather than the Coaching module, those payments follow the Booking module's Stripe
account, not Coaching's. Confirm which route your 1-2-1s actually use before assuming they
are separated.

## Setup

### 1. Create the Stripe accounts

Stripe lets you hold several accounts under one login. From the Stripe dashboard, click
the account name in the top-left, then **New account**. Create one per revenue stream you
are separating, and name them so they are obvious in ClubSpark's account list — for
example `Preston Park – Coaching`, `Preston Park – Tournaments`.

Each account needs its own verification (identity, business details) before it can take
live payments. Budget time for this.

If the streams belong to genuinely different legal entities with different tax details,
separate Stripe accounts are not just allowed, they are required.

### 2. Point each Stripe account at a Wise account

In each Stripe account: **Settings → Bank accounts and scheduling**, add the Wise GBP
account number and sort code, and set the payout schedule (daily, weekly or monthly).

You do not necessarily need several Wise logins. In the UK, Wise lets you hold **up to 10
sets of GBP account details** across your main account, Jars and Business Groups — so one
Wise Business account can give each Stripe account a distinct sort code and account number,
with the money landing in a separate Jar.

**Name matching is the thing to get right.** Stripe expects the payout account to belong to
the Stripe account holder. Since all three Stripe accounts will be registered to your one
business, all three Wise destinations must be held in that same business name. A mismatch
is the usual reason a payout account is rejected or a payout is reversed.

That has a practical consequence for how you hold the Wise side:

- **Jars inside one Wise Business account** — every set of GBP details is in your business
  name by definition, so name matching is automatic. This is the low-friction route.
- **Genuinely separate Wise logins** — Wise generally issues one Business account per legal
  entity, so separate logins usually means separate entities (or a personal account). If a
  Wise account is in a different name from the Stripe account paying into it, expect
  trouble. If they really are separate entities, then the Stripe accounts need to be
  registered to those entities too, each with its own tax details.

### 3. Connect the accounts to ClubSpark

In the ClubSpark admin area, open the **Payments** module and click **Payment Options**
(top right). As venue owner you will have the Super Admin rights this needs.

Add each Stripe account in turn. The connect flow hands you to Stripe — make sure you pick
the intended Stripe account there, since it defaults to whichever you last used.

### 4. Assign modules

Still in Payment Options, open the **Assign modules** tab and set which Stripe account each
module uses:

- Coaching → coaching Stripe account
- Events → tournaments Stripe account
- Booking → pickleball / court booking Stripe account

The **Accounts** tab has a *Connected to* column showing which modules each Stripe account
serves. Check it after assigning — this is where a mis-assignment shows up.

### 5. Test before going live

Take one real low-value payment through each of the three routes and confirm it lands in
the right Stripe account, then that the payout reaches the right Wise Jar. Do this before
the first tournament rather than after.

## Things to be aware of

- **One legal entity, several Stripe accounts.** As the owner-operator you are running all
  three streams through one business, which Stripe allows — separate accounts are only
  *required* when the entities have different tax details. But it means every Wise account
  you pay out to must be held in that same business name (see below).
- **Changing a module's Stripe account mid-season.** Existing subscriptions and
  instalment plans (memberships, courses paid in instalments) are tied to the Stripe
  account that created them. Reassigning a module does not migrate them — check with
  ClubSpark support before switching a module that has live recurring payments.
- **Refunds** are issued from the Stripe account that took the payment, so each account
  needs enough balance to cover them.
- **Fees.** ClubSpark's published transaction fee is 2.9% + 25p, with an extra 0.5% from
  Stripe on recurring payments. This applies per transaction regardless of how many
  accounts you run, so splitting costs you nothing extra in fees.
- **Reporting.** Separate Stripe accounts mean separate dashboards and separate exports.
  Good for clean bookkeeping per activity, slightly more work for a combined view.

## Sources

- [Multiple Stripe Accounts – LTA / ClubSpark](https://sportlabs.zendesk.com/hc/en-us/articles/27559293030813-Multiple-Stripe-Accounts)
- [Adding Multiple Stripe Accounts – ClubSpark](https://clubspark.zendesk.com/hc/en-us/articles/14974757620637-Adding-Multiple-Stripe-Accounts)
- [Managing Multiple Stripe Accounts – ClubSpark](https://clubsparkcustomerservice.zendesk.com/hc/en-us/articles/23851798400285-Managing-Multiple-Stripe-Accounts)
- [Managing Your Stripe Account – LTA / ClubSpark](https://sportlabs.zendesk.com/hc/en-us/articles/360046599211-Managing-Your-Stripe-Account)
- [Introduction to our new Events module – LTA / ClubSpark](https://sportlabs.zendesk.com/hc/en-us/articles/18884564975517-Introduction-to-our-new-Events-module)
- [Managing Your Courts for Multi-Use – LTA / ClubSpark](https://sportlabs.zendesk.com/hc/en-us/articles/29452210119965-Managing-Your-Courts-for-Facility-Court-Pitch-Booking-for-Multi-Use)
- [What are the Costs of ClubSpark? – LTA / ClubSpark](https://sportlabs.zendesk.com/hc/en-us/articles/203030535-What-are-the-Costs-of-Clubspark)
- [Multiple separate accounts – Stripe Documentation](https://docs.stripe.com/get-started/account/multiple-accounts?locale=en-GB)
- [How your Wise account details work – Wise Help Centre](https://wise.com/help/articles/5zoKjEdRMag0F7IsGBA8sK/how-your-wise-account-details-work)
