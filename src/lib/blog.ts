/**
 * Launch blog posts for local SEO / AI search answers.
 * Expand with real job case studies as you complete work.
 */
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  /** Approximate read time */
  minutes: number;
  sections: { heading: string; paragraphs: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "tree-removal-cost-indiana",
    title: "How Much Does Tree Removal Cost in Indiana?",
    description:
      "Typical tree removal price ranges in Central Indiana, what drives the quote, and how to avoid surprise fees.",
    date: "2026-07-30",
    minutes: 6,
    sections: [
      {
        heading: "Typical price ranges",
        paragraphs: [
          "In Central Indiana, most residential tree removals fall somewhere between a few hundred dollars for a small ornamental tree and several thousand for a large hardwood near a house or power line. There is no single “standard” price — every tree is different — but knowing the ranges helps you spot a fair estimate.",
          "As a rough guide only: small trees under about 30 feet are often the most affordable; medium shade trees cost more; large oaks, maples, and multi-stem trees in tight yards sit at the high end. Stump grinding is usually quoted separately unless it is bundled into the job.",
        ],
      },
      {
        heading: "What changes the price",
        paragraphs: [
          "Size and species matter, but access often matters more. A large tree in an open backyard with room for a chipper and truck is simpler than the same tree wedged between a fence, pool, and roof. Hazardous lean, dead wood, storm damage, and proximity to the home or utility lines all add complexity and time.",
          "Cleanup is another big driver. Full haul-away costs more than leaving cut wood stacked for firewood. Same-day emergency storm work after severe weather can carry a premium because crews prioritize safety and access restoration.",
        ],
      },
      {
        heading: "How to get an accurate quote",
        paragraphs: [
          "The best quotes come from an on-site walkthrough. Photos help for a rough idea, but a good crew wants to see lean, targets (what the tree could hit), access paths, and underground or overhead hazards. Ask what is included: rigging, haul-away, stump grinding, and any permits if your city requires them.",
          "At QB Tree Services we give free written estimates for most residential jobs across North and Central Indiana — so you can compare apples to apples before anyone starts cutting.",
        ],
      },
      {
        heading: "Red flags",
        paragraphs: [
          "Be cautious of door-knockers after storms who demand cash only, refuse to put anything in writing, or claim they are “working for the city.” Ask about insurance, get the scope in writing, and never feel pressured to sign on the spot for non-emergency work.",
        ],
      },
    ],
  },
  {
    slug: "tree-removal-permit-indiana",
    title: "Do I Need a Permit to Remove a Tree in Indiana?",
    description:
      "When Indiana homeowners need tree removal permits, what HOAs may require, and how to check local rules.",
    date: "2026-07-30",
    minutes: 5,
    sections: [
      {
        heading: "State vs. local rules",
        paragraphs: [
          "Indiana does not have a single statewide “tree removal permit” that applies to every private yard. Whether you need permission usually depends on your city or town ordinance, whether the tree is in a right-of-way, and any HOA or historic-district rules that apply to your property.",
          "Many homeowners can remove a private-yard tree without a city permit — but that is not universal. Always verify before you cut, especially for large heritage trees or work near public streets.",
        ],
      },
      {
        heading: "Situations that often need extra approval",
        paragraphs: [
          "Trees in the public right-of-way (between sidewalk and curb) are frequently controlled by the municipality. Work near regulated wetlands, conservation easements, or protected species habitat can trigger additional rules. HOAs sometimes require architectural review even when the city does not.",
          "Utility companies may need to be involved when branches conflict with power lines — never attempt line clearance yourself.",
        ],
      },
      {
        heading: "How we handle it",
        paragraphs: [
          "When you request a quote, tell us your city and whether you are in an HOA. We will flag anything that commonly needs a permit in the areas we serve (Kokomo, Noblesville, Fishers, Carmel, Westfield, Cicero, Tipton, Arcadia, Indianapolis, and nearby). If a formal permit is required, we can discuss who files it and how it affects timing.",
          "Emergency removals after storms — trees on houses, blocked driveways, or imminent hazards — are usually treated differently. Safety comes first; paperwork can follow where allowed.",
        ],
      },
    ],
  },
  {
    slug: "signs-tree-needs-removal",
    title: "Signs a Tree Needs to Be Removed",
    description:
      "Common warning signs that a tree is hazardous or beyond saving — and when trimming is still an option.",
    date: "2026-07-30",
    minutes: 6,
    sections: [
      {
        heading: "Structural warning signs",
        paragraphs: [
          "Large cracks in the trunk, a sudden lean after a storm, or heaving soil around the root plate can mean the tree is unstable. Multiple trunks with included bark (tight V-shaped unions) sometimes fail under wind or ice. Fungal conks (mushrooms) on the trunk or major roots often indicate internal decay.",
          "Dead or hanging limbs over roofs, play areas, or driveways are an immediate risk even if the rest of the tree looks fine.",
        ],
      },
      {
        heading: "Health and location issues",
        paragraphs: [
          "A tree that is mostly dead, heavily storm-damaged, or repeatedly dropping large wood may not be worth saving. Trees planted too close to foundations, septic systems, or power lines can become long-term liabilities. Sometimes removal is about future plans — a pool, addition, or driveway — not just hazard.",
        ],
      },
      {
        heading: "When trimming is enough",
        paragraphs: [
          "Not every problem tree needs to come down. Crown cleaning, deadwood removal, and clearance pruning can extend the life of a healthy tree and reduce risk. We will tell you honestly if removal is the safer choice or if a targeted trim solves the issue for less money.",
        ],
      },
      {
        heading: "What to do next",
        paragraphs: [
          "If something looks wrong, do not wait for the next big windstorm. Call for a free on-site estimate. We will walk the property with you, explain options in plain language, and give a clear written price before any work begins.",
        ],
      },
    ],
  },
  {
    slug: "insurance-cover-fallen-trees",
    title: "Does Homeowners Insurance Cover Fallen Trees?",
    description:
      "How homeowners insurance often treats fallen trees, storm damage, and tree removal in Indiana.",
    date: "2026-07-30",
    minutes: 5,
    sections: [
      {
        heading: "The short answer",
        paragraphs: [
          "Sometimes yes, sometimes no — it depends on what the tree damaged and the wording of your policy. Many policies help when a fallen tree damages a covered structure (house, garage, fence in some cases). Coverage for removing a tree that simply falls in the yard with no property damage is often limited or excluded.",
          "This is general information, not insurance advice. Always confirm with your agent or carrier.",
        ],
      },
      {
        heading: "Common scenarios",
        paragraphs: [
          "Tree through the roof or on a vehicle: often involves a claim for structure or auto coverage, with removal as part of making the property safe. Tree blocking only the driveway or yard: you may pay out of pocket for removal unless another covered peril applies. Neighbor’s tree on your property: rules vary; liability can get complicated — document everything and talk to your insurer.",
        ],
      },
      {
        heading: "How we help with claims",
        paragraphs: [
          "We can document storm damage with clear photos, provide a written estimate that itemizes the work, and prioritize emergency access so your family is safe while the claim process moves. You (or your adjuster) decide how the claim is filed; we focus on safe, professional removal and cleanup.",
          "Keep records of weather events, photos before cleanup if it is safe to do so, and all estimates. That paperwork makes conversations with your carrier much easier.",
        ],
      },
    ],
  },
  {
    slug: "best-time-trim-trees-indiana",
    title: "Best Time of Year to Trim Trees in Indiana",
    description:
      "Seasonal guidance for trimming and pruning trees in Central Indiana — plus when storm work cannot wait.",
    date: "2026-07-30",
    minutes: 5,
    sections: [
      {
        heading: "Late fall through winter",
        paragraphs: [
          "For many deciduous trees in Indiana, dormant-season pruning (late fall through late winter) is ideal. Leaves are off, structure is easy to see, and pests and diseases are less active. Cold weather can be tough on crews, but it is often the best window for major structural work on healthy trees.",
        ],
      },
      {
        heading: "Spring and summer",
        paragraphs: [
          "Light cleanup, clearance over roofs and driveways, and removal of storm-damaged limbs happen year-round. Heavy pruning right as trees leaf out or during extreme heat is less ideal for some species. Oak wilt concerns in the broader Midwest mean certain oak pruning is often discouraged in warmer months — ask if your tree is an oak and we will plan timing carefully.",
        ],
      },
      {
        heading: "Storm season never waits",
        paragraphs: [
          "Hazardous hangers, trees on structures, and blocked access are not seasonal projects. After severe weather across Central Indiana, call for emergency response. Safety and access come first; cosmetic pruning can wait for a better window.",
        ],
      },
      {
        heading: "Plan ahead",
        paragraphs: [
          "If you know you want canopy work before summer cookouts or after leaf drop, schedule early. Spring and post-storm weeks fill up. A free estimate now locks in a plan so you are not stuck on a waitlist when the weather finally cooperates.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
