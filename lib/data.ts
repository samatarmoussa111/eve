export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  publishDate: string
  readTime: string
  category: string
  imageAlt: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "first-time-home-buyer-guide-maine",
    title: "What First-Time Buyers in Maine Usually Don't Know (But Should)",
    excerpt:
      "Buying your first home is exciting — and also kind of overwhelming. Here's an honest look at what the process actually involves.",
    content: `<p>A lot of first-time buyers come to me with the same feeling: "I want to buy a home, but I don't even know where to start." That's completely normal. The process isn't something most people learn about until they're in it.</p>

<h2>Start with a conversation, not a search</h2>
<p>Most people start by scrolling listings. I'd suggest starting by talking to someone who can give you an honest picture of what you can actually afford and what the market looks like right now. It saves a lot of time and disappointment down the line.</p>

<h2>Get pre-approved before you fall in love with a house</h2>
<p>Pre-approval tells you two things: how much a lender is willing to lend you, and that you're serious enough for sellers to take you seriously. In Maine's market, especially in popular areas, you'll often need this before a seller will even consider an offer.</p>

<h2>The buyer's agent works for you — not the seller</h2>
<p>This is something a lot of people don't realize. When you work with a buyer's agent, they represent your interests. They're not trying to sell you on a particular house. Their job is to make sure you understand what you're buying and that the price makes sense.</p>

<h2>Inspections matter more than people think</h2>
<p>Maine homes, especially older ones, can have issues that aren't obvious from a walkthrough. A good inspector will look at the foundation, the roof, the heating system, the insulation — all the things that can cost you a lot of money if they fail. Don't skip this step to be competitive. It's rarely worth it.</p>

<h2>Closing costs are real and sometimes surprising</h2>
<p>Beyond your down payment, you'll pay closing costs — things like lender fees, title insurance, and property taxes. These typically run 2–4% of the purchase price. Make sure you're budgeting for them.</p>

<h2>It's okay to take your time</h2>
<p>The right house is out there. I've worked with buyers who found their home in two weeks and others who took eight months. Both outcomes were fine. Don't let anyone rush you into something that doesn't feel right.</p>`,
    publishDate: "2026-04-10",
    readTime: "7 min read",
    category: "First-Time Buyers",
    imageAlt: "A quiet street in Auburn, Maine",
  },
  {
    slug: "maine-towns-for-families",
    title: "A Few Maine Towns Worth Knowing If You're Buying for Your Family",
    excerpt:
      "Not sure where in Maine to put down roots? Here's an honest look at some towns that tend to work well for families.",
    content: `<p>Maine has a lot of places to live, and choosing the right town for your family involves more than just the house. Schools, commute time, community feel, things for kids to do — it all adds up. Here are a few towns I know well and what makes them worth considering.</p>

<h2>Auburn</h2>
<p>I'm based here, so I'll be upfront about that. Auburn is part of the Lewiston-Auburn metro area, which gives you access to hospitals, shops, and services without the density of a bigger city. It's affordable compared to southern Maine, and the school system has been improving steadily. If you work somewhere between Portland and Lewiston, this can be a solid middle point.</p>

<h2>Brunswick</h2>
<p>Brunswick has a college-town feel — Bowdoin College is here — with a good mix of older homes, walkability, and a decent restaurant and arts scene. It's also along the coast, which matters to a lot of people. Homes tend to cost more than in the L-A area but less than Portland.</p>

<h2>Scarborough</h2>
<p>If proximity to Portland is important but you want more space, Scarborough is worth looking at. Good schools, access to beaches, and newer development alongside older neighborhoods. It's grown a lot in the last decade and prices reflect that.</p>

<h2>Windham</h2>
<p>A bit inland from Portland, Windham is popular with families who want more square footage and land for their money. It's suburban in feel, with good access to Sebago Lake. Schools are well-regarded.</p>

<h2>Gray and Poland</h2>
<p>If you're open to a rural setting and a longer commute, Gray and Poland offer significantly more home for the money. These are quieter towns with a strong sense of community. They work well for people who work remotely or don't mind the drive.</p>

<h2>The honest take</h2>
<p>There's no perfect town — there's the town that fits your specific situation. I'd rather spend time understanding what matters to you than push you toward a particular place. If you want to talk through the tradeoffs, I'm happy to.</p>`,
    publishDate: "2026-03-15",
    readTime: "6 min read",
    category: "Neighborhood Guides",
    imageAlt: "Tree-lined street in a Maine neighborhood",
  },
  {
    slug: "making-an-offer-maine",
    title: "Making an Offer on a House in Maine: What Actually Happens",
    excerpt:
      "The offer process is something most buyers haven't done before. Here's what it looks like in practice.",
    content: `<p>You've found a house you like. Maybe you've seen it twice, walked every room, stood in the backyard. Now what? Here's what the offer process actually involves.</p>

<h2>We look at the numbers first</h2>
<p>Before we talk price, I'll pull comparable sales — homes similar to this one that have sold nearby in the last few months. This tells us what the market says the house is worth, and gives us a starting point for what to offer.</p>

<h2>The offer is more than just a price</h2>
<p>Your offer includes the price, yes, but also: how much you're putting down, your financing terms, your proposed closing date, and any contingencies you want to include — like an inspection contingency or a financing contingency. These details matter as much as the number.</p>

<h2>Contingencies protect you</h2>
<p>A contingency is a condition that has to be met for the sale to go through. The most common ones are an inspection contingency (you can back out if the inspection reveals serious problems) and a financing contingency (you can back out if your loan falls through). I generally recommend keeping these in, especially for first-time buyers.</p>

<h2>The seller will respond</h2>
<p>They can accept, reject, or counter. If they counter, we look at what they changed and decide whether to accept their terms, counter again, or walk away. This back-and-forth is normal and usually doesn't take long.</p>

<h2>Once accepted, you're under contract</h2>
<p>This means both parties are committed to the sale, subject to the contingencies. You'll schedule an inspection, finalize your financing, and work toward a closing date. I'll be with you through all of it.</p>

<h2>It can feel fast</h2>
<p>From offer to closing is typically 30–45 days in Maine. It can feel like a lot is happening quickly. That's why it helps to have someone who's been through it explaining things as they come up, so nothing feels like a surprise.</p>`,
    publishDate: "2026-02-05",
    readTime: "5 min read",
    category: "Buying Tips",
    imageAlt: "Someone signing documents at a table",
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, 2)
}
