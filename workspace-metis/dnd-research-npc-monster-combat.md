# D&D Companion App Research: NPC Management, Monster/Bestiary, and Combat Mechanics

**For: Paul Simulator — D&D 2024 Web App**
**Date: 2026-03-31**

---

## Table of Contents
1. [NPC Management — Best Practices](#1-npc-management--best-practices)
2. [Monster/Bestiary System](#2-monsterbestiary-system)
3. [Combat/War Mechanics](#3-combatwar-mechanics)
4. [Feature Recommendations for Paul Simulator](#4-feature-recommendations-for-paul-simulator)

---

## 1. NPC Management — Best Practices

### 1.1 How Existing Apps Handle NPC Creation

| App | Approach | Strengths | Weaknesses |
|-----|----------|-----------|------------|
| **D&D Beyond** | Full digital stat blocks with official content; NPCs treated as monsters with "humanoid" type; NPC stat blocks (e.g., "Bandit Captain", "Archmage") are official presets; homebrew creator for custom NPCs | Best official content integration; polished stat block display | Locked behind paywall; homebrew tools are slow/clunky; no roleplay-focused NPC fields |
| **Improved Initiative** | Open-source combat tracker; import monsters/NPCs from SRD or JSON; create custom stat blocks; primary focus is initiative/combat tracking | Fast, lightweight; great for combat; open-source; self-hostable | No NPC personality/roleplay fields; combat-only focus |
| **Shmeppy** | Minimal VTT — "wet erase mat online"; no stat blocks at all; tokens + map only; $4.99/mo for GMs | Extremely simple; fast to use; great for theater-of-mind-adjacent play | No NPC management; no stat blocks; map-only tool |
| **Owlbear Rodeo** | VTT focused on maps/tokens; no built-in stat block system; you bring your own NPC data; extensions available | Simple, free, no account needed | No NPC data management; external tools needed |
| **5e.tools** | Comprehensive free reference; searchable monster/NPC database; filters by source, CR, type, environment | Most complete free reference available | Read-only; no creation tools; legal grey area |
| **Kobold Plus Fight Club** | Encounter builder + monster search; filters by CR, type, size, environment; calculates encounter difficulty | Excellent encounter planning | No NPC roleplay features; combat focus only |

### 1.2 Essential NPC Stat Block Fields

**Combat-Oriented Fields (for NPCs in encounters):**
```
- Name
- Size (Tiny, Small, Medium, Large, Huge, Gargantuan)
- Type (Humanoid, Beast, Fiend, etc.) + optional subtag
- Alignment
- Armor Class (value + type: natural, armor name, etc.)
- Hit Points (value + hit dice formula, e.g., "65 (10d8 + 20)")
- Speed (walk, fly, swim, climb, burrow, hover)
- Ability Scores: STR, DEX, CON, INT, WIS, CHA
- Saving Throw proficiencies
- Skill proficiencies
- Damage Vulnerabilities / Resistances / Immunities
- Condition Immunities
- Senses (darkvision, blindsight, tremorsense, truesight, passive perception)
- Languages
- Challenge Rating + XP + Proficiency Bonus
- Special Abilities (traits)
- Actions (including Multiattack)
- Bonus Actions
- Reactions
- Legendary Actions (if applicable)
- Lair Actions (if applicable)
- Mythic Actions (if applicable)
- Regional Effects (if applicable)
```

**Roleplay-Oriented Fields (unique to NPCs vs generic monsters):**
```
- Full Name + Nicknames/Aliases
- Race/Species
- Occupation/Role
- Faction/Affiliation
- Location (where they can be found)
- Campaign/Adventure association
- Personality Traits (2-3 bullet points)
- Ideals
- Bonds
- Flaws
- Appearance (physical description)
- Voice/Mannerisms (DM notes for roleplaying)
- Motivation/Goals (what drives them)
- Secrets (hidden from players)
- Relationships (connections to other NPCs/PCs)
- Notes (freeform DM notes)
- Status (alive, dead, missing, unknown)
- Tags/Labels (custom organizational tags)
- Portrait/Image URL
```

### 1.3 How DMs Organize NPCs

Based on common patterns across apps and community practices:

1. **By Campaign** — Top-level organization; NPCs belong to a specific campaign
2. **By Location** — "NPCs in Waterdeep" vs "NPCs in the Feywild"
3. **By Encounter** — NPCs grouped into specific encounters/combats
4. **By Faction** — "Zhentarim agents", "Harper contacts"
5. **By Relationship** — Allied, Neutral, Hostile
6. **Favorites/Pinned** — Quick access to frequently-used NPCs
7. **By Status** — Alive, Dead, Missing
8. **Tags/Labels** — Free-form tagging system (most flexible)

**Best Practice:** Use tags + search as primary. Folders/hierarchies as secondary. Don't force one organizational pattern — DMs think differently.

### 1.4 Quick-Create vs Detailed Templates

**Quick-Create NPC (for improvised encounters):**
- Name + Race + Occupation
- Use a preset stat block template (e.g., "Guard", "Commoner", "Noble", "Bandit")
- Auto-generate: random personality trait, ideal, bond, flaw
- Editable after creation
- Goal: under 30 seconds to create

**Detailed NPC (for planned/recurring NPCs):**
- Full stat block with all combat fields
- Full roleplay profile
- Relationship map connections
- Timeline of interactions with party
- Multiple stat block versions (e.g., "friendly" vs "hostile")

**NPC Preset Templates (from the SRD):**
The D&D 5e SRD includes these NPC stat blocks that serve as templates:
- Acolyte (CR 1/4)
- Assassin (CR 8)
- Bandit (CR 1/8)
- Bandit Captain (CR 2)
- Berserker (CR 2)
- Commoner (CR 0)
- Cult Fanatic (CR 2)
- Cultist (CR 1/8)
- Druid (CR 2)
- Gladiator (CR 5)
- Guard (CR 1/8)
- Knight (CR 3)
- Mage (CR 6)
- Noble (CR 1/8)
- Priest (CR 2)
- Scout (CR 1/2)
- Spy (CR 1)
- Thug (CR 1/2)
- Tribal Warrior (CR 1/8)
- Veteran (CR 3)

### 1.5 NPC Generators

**Random NPC Generation Tables (from DMG/community):**
- **Name:** Race-appropriate random name tables
- **Personality:** d8 table of personality traits
- **Ideal:** d6 table aligned to alignment axis
- **Bond:** d6 table of bonds
- **Flaw:** d6 table of flaws
- **Appearance:** d20 table of distinguishing features
- **Mannerism:** d20 table of speech/behavior quirks
- **Talent:** d20 table of unusual talents
- **Interaction trait:** d12 table (friendly, hostile, suspicious, etc.)

**Existing Generator Tools:**
- **Kassoon NPC Generator** — web-based random NPC with name, personality, appearance, backstory
- **DonJon** — random NPC generator with basic stats
- **Fantasy Name Generators** — name-only, sorted by race
- **ChatGPT/AI** — increasingly used for NPC generation (opportunity for Paul Simulator to integrate AI)

### 1.6 Displaying NPC Stat Blocks: Combat vs Roleplay

**Combat View (during initiative):**
- Compact stat block: AC, HP (editable/trackable), Speed
- Attack actions listed prominently with to-hit and damage
- Conditions currently applied (visual indicators)
- Initiative order position
- Concentration tracking
- Quick action buttons: "Roll Attack", "Roll Save"
- Collapse abilities not relevant to current turn

**Roleplay View (during social encounters):**
- Name, appearance, voice notes prominently displayed
- Personality traits, ideals, bonds, flaws visible
- Relationship to party shown
- Key dialogue/motivation notes
- DC suggestions for social skill checks
- Secrets (spoiler-hidden, DM can reveal)
- Stat block hidden/minimized unless needed

---

## 2. Monster/Bestiary System

### 2.1 D&D 2024 Monster Manual

**The 2024 Monster Manual** (published February 2025) is the revised core monster book for D&D 2024:
- **~500 monsters** (up from ~450 in the 2014 edition)
- **Every monster has new or updated art** — full-color illustrations throughout
- **Revised stat blocks** following the 2024 rules format
- **14 creature types:** Aberration, Beast, Celestial, Construct, Dragon, Elemental, Fey, Fiend, Giant, Humanoid, Monstrosity, Ooze, Plant, Undead

**Key Changes from 2014 to 2024 Monster Manual:**
- Proficiency bonus explicitly listed in stat blocks
- Spellcasting simplified — many spell-like abilities converted to "X/day" abilities rather than full spell lists
- Legendary Actions renamed/restructured
- New "Mythic" encounters for some creatures
- Better lair action formatting
- CR ratings adjusted for some creatures
- More environmental/encounter hooks in descriptions

**The SRD (System Reference Document)** contains ~334 monsters under the Creative Commons license that can be freely used in apps. These are available via the D&D 5e API.

### 2.2 Key Monster Stat Block Fields

Based on the official D&D 5e API schema (from dnd5eapi.co), here is the **complete field structure**:

```json
{
  "index": "aboleth",              // URL-safe identifier
  "name": "Aboleth",               // Display name
  "size": "Large",                 // Tiny|Small|Medium|Large|Huge|Gargantuan
  "type": "aberration",            // creature type
  "subtype": null,                 // optional subtype tag
  "alignment": "lawful evil",      // alignment string
  "armor_class": [                 // can have multiple AC sources
    { "type": "natural", "value": 17 }
  ],
  "hit_points": 135,
  "hit_dice": "18d10",
  "hit_points_roll": "18d10+36",   // full formula
  "speed": {
    "walk": "10 ft.",
    "swim": "40 ft."
    // also: fly, climb, burrow, hover (boolean)
  },
  "strength": 21,
  "dexterity": 9,
  "constitution": 15,
  "intelligence": 18,
  "wisdom": 15,
  "charisma": 18,
  "proficiencies": [               // saving throws + skills
    { "value": 6, "proficiency": { "index": "saving-throw-con", "name": "Saving Throw: CON" } },
    { "value": 12, "proficiency": { "index": "skill-history", "name": "Skill: History" } }
  ],
  "damage_vulnerabilities": [],
  "damage_resistances": [],
  "damage_immunities": [],
  "condition_immunities": [],
  "senses": {
    "darkvision": "120 ft.",
    "passive_perception": 20
  },
  "languages": "Deep Speech, telepathy 120 ft.",
  "challenge_rating": 10,
  "proficiency_bonus": 4,
  "xp": 5900,
  "special_abilities": [           // passive traits
    { "name": "Amphibious", "desc": "..." }
  ],
  "actions": [                     // including Multiattack
    {
      "name": "Multiattack",
      "multiattack_type": "actions",
      "desc": "The aboleth makes three tentacle attacks.",
      "actions": [{ "action_name": "Tentacle", "count": "3", "type": "melee" }]
    },
    {
      "name": "Tentacle",
      "desc": "Melee Weapon Attack: +9 to hit...",
      "attack_bonus": 9,
      "damage": [
        { "damage_type": { "index": "bludgeoning" }, "damage_dice": "2d6+5" }
      ],
      "dc": { "dc_type": { "index": "con" }, "dc_value": 14, "success_type": "none" }
    },
    {
      "name": "Enslave",
      "desc": "...",
      "usage": { "type": "per day", "times": 3 },
      "dc": { "dc_type": { "index": "wis" }, "dc_value": 14 }
    }
  ],
  "bonus_actions": [],
  "reactions": [],
  "legendary_actions": [
    { "name": "Detect", "desc": "The aboleth makes a Wisdom (Perception) check." },
    { "name": "Psychic Drain (Costs 2 Actions)", "desc": "...", "damage": [...] }
  ],
  "forms": [],                     // for shapeshifters
  "image": "/api/images/monsters/aboleth.png"
}
```

### 2.3 How Apps Implement Searchable Monster Databases

**Common Implementation Patterns:**

1. **Client-Side Search (best for <1000 entries):**
   - Load all monsters into memory as JSON array
   - Use fuzzy search library (e.g., Fuse.js) for name matching
   - Filter functions for CR, type, size, environment
   - Instant results as user types
   - Used by: Kobold Fight Club, Improved Initiative

2. **Server-Side Search (for large datasets):**
   - REST API with query parameters: `/api/monsters?cr=5&type=dragon&name=adult`
   - Full-text search with database indexing
   - Pagination for results
   - Used by: D&D Beyond, dnd5eapi.co

3. **Hybrid Approach (recommended for Paul Simulator):**
   - Download monster index (name, CR, type, size) to client on first load
   - Client-side filtering on index for instant feedback
   - Fetch full stat block on-demand when user clicks a monster
   - Cache recently viewed stat blocks in localStorage

### 2.4 Filtering Categories

**Standard Filters Across All Major Tools:**

| Filter | Values | UI Pattern |
|--------|--------|------------|
| **CR** | 0, 1/8, 1/4, 1/2, 1-30 | Range slider or dropdown |
| **Type** | 14 creature types (Aberration through Undead) | Multi-select checkboxes |
| **Size** | Tiny, Small, Medium, Large, Huge, Gargantuan | Multi-select checkboxes |
| **Environment** | Arctic, Coastal, Desert, Forest, Grassland, Hill, Mountain, Swamp, Underdark, Underwater, Urban | Multi-select checkboxes |
| **Source** | MM, DMG, VGM, MTF, etc. | Multi-select (useful for filtering homebrew vs official) |
| **Name** | Free text search | Search input with fuzzy matching |
| **Legendary** | Yes/No | Toggle |
| **Has Lair** | Yes/No | Toggle |

**Advanced Filters (nice-to-have):**
- Alignment (filter by lawful/chaotic/good/evil/neutral)
- Has spellcasting (yes/no)
- Has flying speed (yes/no)
- Damage resistances/immunities (useful for encounter planning)

### 2.5 Encounter Builders & Difficulty Calculation

**D&D 2024 Encounter Difficulty (revised from 2014):**

The 2024 DMG introduces a simplified encounter difficulty system:

| Difficulty | XP Budget per Character |
|-----------|------------------------|
| Low | 50 × character level |
| Moderate | 75 × character level |
| High | 100 × character level |
| Deadly | 150 × character level |

**Steps:**
1. Determine party level and size
2. Calculate XP budget = (difficulty multiplier) × (avg character level) × (number of characters)
3. Add up XP values of all monsters in the encounter
4. Compare total monster XP to budget

**2014 Method (Kobold Fight Club approach — still widely used):**
1. Sum the XP of all monsters
2. Apply a multiplier based on number of monsters:
   - 1 monster: ×1
   - 2 monsters: ×1.5
   - 3-6 monsters: ×2
   - 7-10 monsters: ×2.5
   - 11-14 monsters: ×3
   - 15+ monsters: ×4
3. Compare adjusted XP to party thresholds (Easy/Medium/Hard/Deadly per level)

**Kobold Plus Fight Club Implementation:**
- Input: party size + levels
- Browse/search monsters to add to encounter
- Real-time difficulty calculation
- Shows: easy/medium/hard/deadly thresholds
- Can randomize encounters within a CR budget
- Shows daily XP budget tracking

### 2.6 Custom Monster Creation Tools

| Tool | Features | Output Format |
|------|----------|---------------|
| **Tetra-Cube Stat Block Generator** | Full form-based creator; all D&D fields; generates visual stat block matching official formatting; supports legendary, mythic, lair, regional effects | Visual HTML/image stat block |
| **D&D Beyond Homebrew** | Official tool; form-based; integrates with character sheets; shareable | D&D Beyond proprietary format |
| **GM Binder** | Markdown-based document creator; stat block formatting with custom syntax; print-ready layouts | PDF/print |
| **Homebrewery** | Similar to GM Binder; markdown to D&D-styled documents | PDF/print |
| **CritterDB** | Web-based monster creator; shareable; JSON export | JSON + visual |

### 2.7 Balancing Homebrew Monsters

**CR Calculation Guidelines (from DMG):**

1. **Determine Defensive CR:**
   - HP ranges map to CR tiers (e.g., 86-100 HP ≈ CR 4)
   - Adjust up/down for AC deviations from expected AC at that CR
   - Account for resistances/immunities (effectively multiply HP)

2. **Determine Offensive CR:**
   - Calculate average damage per round over 3 rounds
   - Map damage to CR tiers
   - Adjust for attack bonus / save DC deviations

3. **Average the two** = Final CR

**Quick Balance Rules of Thumb:**
- HP ≈ 15 × CR (for CR 1-20)
- AC ≈ 13 + (CR / 3)
- Attack bonus ≈ 3 + (CR / 2)
- Save DC ≈ 11 + (CR / 2)
- Damage/round ≈ 5 + (6 × CR) for CR 1-20
- Proficiency bonus = 2 + (CR / 5), rounded up

---

## 3. Combat/War Mechanics

### 3.1 D&D 2024 Combat Rules Summary

**Action Economy (per turn):**
- **1 Action** (Attack, Cast a Spell, Dash, Disengage, Dodge, Help, Hide, Influence, Magic, Ready, Search, Study, Utilize)
- **1 Bonus Action** (if a feature grants one)
- **1 Reaction** (per round, resets at start of your turn)
- **Movement** (up to speed, can split between actions)
- **Free Interaction** (open door, draw weapon, speak briefly)

**Key 2024 Changes from 2014:**
- Disengage is now a general action (not just Rogues)
- Grapple/Shove are part of the Attack action via Unarmed Strike options
- Two-Weapon Fighting now uses a Bonus Action but adds ability modifier to off-hand damage
- Mounted combat rules clarified
- New action types: Influence, Magic, Study, Utilize (replacing some vague "DM calls")
- Exhaustion is now a simpler system (−2 to d20 rolls per level, speed reduced by 5× level, 10 levels = death)

**Initiative:**
- Standard: d20 + DEX modifier (2024 also allows proficiency bonus if proficient in specific features)
- Monsters and NPCs each roll or use group initiative

**Turn Structure:**
1. Move (up to speed, can split)
2. Action
3. Bonus Action (if available)
4. Free interaction (one per turn)
5. Reactions (on others' turns)

### 3.2 Mass Combat Rules

**Official D&D Rules:**
- **No official mass combat rules in the 2024 core books**
- The 2014 DMG had a brief "Handling Mobs" rule (DMG p. 250): instead of rolling attacks for many creatures, use a lookup table where X creatures hit automatically based on the number needed to hit
- Unearthed Arcana released "When Armies Clash" as a playtest (never became official)

**The "Handling Mobs" Table (DMG):**
| d20 Roll Needed | Attackers Needed for 1 Hit |
|-----------------|---------------------------|
| 1-5 | 1 |
| 6-12 | 2 |
| 13-14 | 3 |
| 15-16 | 4 |
| 17-18 | 5 |
| 19 | 10 |
| 20 | 20 |

### 3.3 Popular Homebrew Mass Combat Systems

**1. Kingdoms & Warfare (MCDM Productions, Matt Colville)**
- Most popular third-party mass combat system
- **Unit-based:** Groups of soldiers become a single "unit" with its own stat block
- **Unit Stats:** Size, Type, Ancestry, Equipment, Experience, AC, HP, Attack, Power, Toughness, Morale, Command
- Units can have special abilities
- Battle maps with zones
- Integrates with normal D&D — PCs act as "commanders" who buff/direct units
- Includes domain-level play (running kingdoms, organizations)

**2. Matt Colville's "Strongholds & Followers" (predecessor)**
- Simpler mass combat
- Warfare as an abstraction layer on top of regular D&D

**3. "War Machine" (from BECMI D&D)**
- Classic mass combat from Rules Cyclopedia
- Entirely abstract — no minis needed
- Compares Battle Ratings on a table

**4. Community Homebrew Approaches:**
- **"Theater of War"** — Abstracted, narrative combat with rolls for army actions
- **Simplified Stat Blocks** — Treat an army unit as a single creature with scaled HP/damage
- **Morale Systems** — Add morale checks; units that fail morale break and flee

### 3.4 How Digital Tools Handle Large-Scale Battles

**Performance Strategies:**

1. **Grouping/Batching:** Multiple identical creatures share one initiative; roll once, apply to all (Improved Initiative does this)
2. **Auto-Resolve:** For large mob vs mob, use statistical outcomes rather than rolling each attack
3. **Simplified Tokens:** Many VTTs use numbered tokens rather than detailed character sheets for each mook
4. **Theater of Mind:** For truly massive battles, abstract away positioning
5. **Layered Resolution:** PCs fight in their immediate area (detailed combat), while army clashes happen abstractly in parallel

**Technical Solutions:**
- Lazy rendering — only render visible tokens/stat blocks
- Batch HP tracking — "this group of 10 goblins has collectively taken X damage"
- Template-based creatures — don't duplicate full stat blocks; reference a template
- Initiative grouping — group identical monsters on one initiative count
- Auto-damage calculation for groups

### 3.5 Initiative Variants

| Variant | How It Works | Pros | Cons |
|---------|-------------|------|------|
| **Standard (RAW)** | d20 + DEX mod, rolled once at start | Simple, familiar | Can feel static; same order every round |
| **Side Initiative** | Each side rolls d20; winning side goes first, all members act in any order | Fast; tactical flexibility within a team | Swingy; one side can alpha-strike |
| **Popcorn Initiative** | After your turn, you choose who goes next (enemy or ally) | Highly tactical; engaging | Can be abused; confusing for new players |
| **Speed Factor** | Roll each round; modifiers based on actions taken (heavy weapons = slower) | Unpredictable; realistic | Slow; lots of rolling |
| **Narrative Initiative** | No rolls; DM determines order based on fiction | Fastest; cinematic | DM bias; no mechanical fairness |
| **Card-Based** | Deal cards from a deck; act in card order | Visual; fun physical component | Needs physical/virtual cards |
| **Phase-Based** | All movement happens first, then all attacks, then all spells | Simultaneous feel | Unrealistic; complex |

### 3.6 Combat Automation — What Can Be Auto-Calculated

**Fully Automatable:**
- Initiative rolls (d20 + modifier)
- Attack rolls (d20 + attack bonus vs AC)
- Damage rolls (dice + modifier)
- Saving throw rolls (d20 + save modifier vs DC)
- Death saving throws (d20, succeed on 10+)
- HP tracking (current HP after damage/healing)
- Condition duration tracking (X rounds remaining)
- Concentration checks (d20 + CON save vs DC 10 or half damage)
- Turn order management
- Proficiency bonus calculation
- Ability modifier calculation
- Spell slot tracking

**Semi-Automatable (need DM adjudication):**
- Whether an attack hits (need to know target AC — auto if tracked)
- Advantage/disadvantage determination (contextual)
- Critical hit effects (auto-detect on nat 20, but special effects vary)
- Spell effects (many are complex/narrative)
- Grapple/shove contests
- Environmental damage

**Cannot/Should Not Automate:**
- Tactical decisions (where to move, what to target)
- Roleplay elements of combat
- Creative use of abilities
- DM fiat rulings
- Terrain interaction decisions

### 3.7 Condition Tracking Best Practices

**The 15 D&D Conditions:**
Blinded, Charmed, Deafened, Exhaustion, Frightened, Grappled, Incapacitated, Invisible, Paralyzed, Petrified, Poisoned, Prone, Restrained, Stunned, Unconscious

**Best Practices for Tracking:**
1. **Visual Indicators:** Color-coded icons/badges on tokens (industry standard)
2. **Tooltip on Hover:** Show full condition text when hovering over the icon
3. **Duration Tracking:** "Ends at start/end of X's next turn" or "Lasts X rounds"
4. **Auto-Remind:** Alert DM when a condition is about to expire
5. **Mechanical Effects Applied:** Auto-apply advantage/disadvantage where applicable
6. **Stacking:** Handle exhaustion stacking (2024: cumulative −2 per level)
7. **Source Tracking:** Note what caused the condition (for dispel/remove)
8. **Concentration Link:** If the condition is from a concentration spell, link them

**UI Pattern:**
```
[Goblin A] ❤️ 7/12 HP | 🛡️ AC 15 | 🔥 Frightened (2 rounds) | 💀 Poisoned
```

### 3.8 Lair Actions & Legendary Actions Implementation

**Legendary Actions:**
- Available to creatures with the Legendary tag
- Typically 3 legendary actions per round
- Can be used at the end of another creature's turn
- Cost 1-3 legendary action points per use
- Reset at start of the legendary creature's turn

**Implementation:**
- Track legendary action points (display as pips/dots)
- After each non-legendary creature's turn, prompt: "Use a legendary action?"
- Show available legendary actions with their costs
- Deduct points when used
- Auto-reset at start of legendary creature's turn

**Lair Actions:**
- Trigger on initiative count 20 (losing ties)
- One lair action per round (usually choice of 2-3 options)
- Only when creature is in its lair

**Implementation:**
- Add "Lair (Init 20)" as a pseudo-combatant in initiative order
- When its turn comes up, display lair action options
- DM picks one; mark the others as unavailable until next round (if rules specify)
- Track effects that persist (e.g., "difficult terrain until init 20 next round")

---

## 4. Feature Recommendations for Paul Simulator

### 4.1 Must-Have Features — NPC Management

1. **NPC Quick-Create** — Name, race, occupation, pick a preset template (Commoner, Guard, etc.) in <30 seconds
2. **Full NPC Editor** — Complete stat block + roleplay fields (personality, motivation, secrets, appearance, voice notes)
3. **Dual-View Mode** — Toggle between "Combat View" (stat block focused) and "Roleplay View" (personality focused)
4. **NPC Organization** — Tag-based system + search; allow assigning NPCs to campaigns, locations, factions
5. **NPC Preset Templates** — All SRD NPC stat blocks as starting templates
6. **HP/Condition Tracking** — Edit HP inline, toggle conditions with visual indicators
7. **NPC Status** — Track alive/dead/missing per NPC
8. **NPC Search** — Search by name, tag, faction, location across all NPCs
9. **Clone NPC** — Duplicate an NPC as a starting point for variants ("Bandit Captain" → "Pirate Captain")
10. **NPC Portrait** — Upload or link an image for each NPC

### 4.2 Must-Have Features — Monster/Bestiary

1. **SRD Monster Database** — Pre-loaded with all ~334 SRD monsters from the D&D 5e API
2. **Searchable Bestiary** — Full-text search + filters (CR, type, size, environment)
3. **Monster Stat Block Display** — Beautiful, readable stat blocks matching D&D official formatting
4. **Encounter Builder** — Add monsters + party info; auto-calculate encounter difficulty (Easy/Medium/Hard/Deadly)
5. **Custom Monster Creator** — Full form-based monster creation (use Tetra-Cube field set as reference)
6. **Homebrew Monster Storage** — Save custom monsters to personal bestiary
7. **Add Monster to Initiative** — One-click add from bestiary to active combat
8. **CR Calculator** — When creating custom monsters, estimate CR based on HP/AC/damage stats
9. **Monster Grouping** — Support adding multiple identical monsters (e.g., "4 Goblins") as grouped entries

### 4.3 Nice-to-Have Combat Enhancements

1. **Random NPC Generator** — Roll random name, personality, appearance, motivation
2. **AI NPC Generator** — "Generate a sketchy tavern owner in Waterdeep" → full NPC
3. **Mass Combat Mode** — Simplified rules for army-vs-army (mob attack tables or K&W-style units)
4. **Initiative Variants** — Options for side initiative, popcorn initiative
5. **Auto-Attack Roller** — Click monster's attack → roll to-hit and damage automatically
6. **Legendary Action Tracker** — Track points, prompt between turns
7. **Lair Action on Init 20** — Auto-insert lair action turn in initiative
8. **Concentration Tracker** — Flag spells requiring concentration; auto-prompt CON saves on damage
9. **Death Save Tracker** — Visual tracker for PC death saves (3 successes / 3 failures)
10. **Condition Auto-Effects** — When marking a creature as "Prone", note "attackers within 5 ft have advantage"
11. **Encounter History** — Log of what happened each round (attack rolls, damage, conditions)
12. **NPC Relationship Map** — Visual graph of NPC connections
13. **Monster Loot Tables** — Random loot generation by CR
14. **Battle Timer** — Optional real-time timer per turn (for pacing)
15. **Spell Slot Tracker** — For NPC spellcasters, track slots remaining

### 4.4 Data Schema Suggestions

#### Monster/NPC Schema (TypeScript)

```typescript
interface Monster {
  // Identity
  id: string;                        // UUID
  name: string;                      // Display name
  slug: string;                      // URL-safe identifier
  source: 'srd' | 'homebrew' | 'campaign';
  createdBy?: string;                // User ID for homebrew
  campaignId?: string;               // Campaign association

  // Core Stats
  size: 'Tiny' | 'Small' | 'Medium' | 'Large' | 'Huge' | 'Gargantuan';
  type: CreatureType;                // Enum of 14 types
  subtype?: string;                  // e.g., "elf", "demon"
  alignment: string;                 // e.g., "lawful evil"
  armorClass: ArmorClassEntry[];     // [{value: 17, type: "natural", desc?: "plate armor"}]
  hitPoints: number;                 // Default HP
  hitDice: string;                   // e.g., "18d10"
  hitPointsFormula: string;          // e.g., "18d10+36"
  speed: {
    walk?: string;
    fly?: string;
    swim?: string;
    climb?: string;
    burrow?: string;
    hover?: boolean;
  };

  // Ability Scores
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  // Proficiencies
  savingThrows: { ability: Ability; value: number }[];
  skills: { skill: string; value: number }[];
  proficiencyBonus: number;

  // Defenses
  damageVulnerabilities: string[];
  damageResistances: string[];
  damageImmunities: string[];
  conditionImmunities: string[];

  // Senses & Communication
  senses: {
    blindsight?: string;
    darkvision?: string;
    tremorsense?: string;
    truesight?: string;
    passivePerception: number;
  };
  languages: string;
  telepathy?: string;

  // Challenge
  challengeRating: number;           // 0, 0.125, 0.25, 0.5, 1-30
  xp: number;

  // Abilities
  specialAbilities: Ability[];
  actions: Action[];
  bonusActions: Action[];
  reactions: Action[];
  legendaryActions?: LegendaryAction[];
  legendaryActionCount?: number;     // Usually 3
  lairActions?: LairAction[];
  mythicActions?: Action[];
  regionalEffects?: string[];

  // Metadata
  environments: Environment[];       // For encounter filtering
  image?: string;                    // URL to portrait/image
  description?: string;              // Lore/flavor text
  tags: string[];                    // Custom tags for organization
  isLegendary: boolean;
  hasLair: boolean;
  isMythic: boolean;

  // Timestamps
  createdAt: string;
  updatedAt: string;
}

interface Action {
  name: string;
  desc: string;                      // Full text description
  attackBonus?: number;              // For attack actions
  damage?: DamageEntry[];
  dc?: {
    type: Ability;                   // STR, DEX, CON, INT, WIS, CHA
    value: number;
    successType: 'none' | 'half';
  };
  usage?: {
    type: 'per day' | 'recharge' | 'per rest';
    times?: number;
    dice?: string;                   // For recharge (e.g., "5-6")
    minValue?: number;
  };
  multiattack?: {
    actions: { name: string; count: number }[];
  };
}

interface DamageEntry {
  damageType: string;                // "bludgeoning", "fire", etc.
  damageDice: string;                // "2d6+5"
}

type CreatureType =
  | 'Aberration' | 'Beast' | 'Celestial' | 'Construct'
  | 'Dragon' | 'Elemental' | 'Fey' | 'Fiend'
  | 'Giant' | 'Humanoid' | 'Monstrosity' | 'Ooze'
  | 'Plant' | 'Undead';

type Environment =
  | 'Arctic' | 'Coastal' | 'Desert' | 'Forest'
  | 'Grassland' | 'Hill' | 'Mountain' | 'Swamp'
  | 'Underdark' | 'Underwater' | 'Urban' | 'Any';

type Ability = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';
```

#### NPC Extension Schema (extends Monster)

```typescript
interface NPC extends Monster {
  // NPC-specific fields
  isNpc: true;
  
  // Identity
  fullName?: string;                 // Full name vs display name
  aliases?: string[];
  race: string;                      // Species/race
  occupation?: string;
  
  // Organization
  campaignId: string;
  locationIds: string[];             // Can appear in multiple locations
  factionIds: string[];
  encounterIds: string[];
  
  // Roleplay
  personalityTraits: string[];       // 2-3 traits
  ideals: string[];
  bonds: string[];
  flaws: string[];
  appearance: string;                // Physical description
  voiceNotes?: string;               // DM notes for roleplaying voice/mannerisms
  motivation?: string;               // What drives this NPC
  secrets?: string[];                // Hidden info (DM eyes only)
  backstory?: string;                // Freeform backstory
  
  // Relationships
  relationships: {
    npcId: string;
    type: 'ally' | 'enemy' | 'neutral' | 'family' | 'employer' | 'employee' | 'rival' | 'romantic' | 'custom';
    description?: string;
  }[];
  
  // Status
  status: 'alive' | 'dead' | 'missing' | 'unknown' | 'undead';
  
  // Interaction Log
  interactions: {
    date: string;                    // Session date
    sessionNumber?: number;
    summary: string;                 // What happened
  }[];
  
  // Display
  portrait?: string;                 // URL to NPC portrait
  isFavorite: boolean;
}
```

#### Combat Encounter Schema

```typescript
interface Encounter {
  id: string;
  name: string;
  campaignId: string;
  description?: string;

  // Combatants
  combatants: Combatant[];

  // Party info for difficulty calculation
  party: {
    size: number;
    averageLevel: number;
    characters: { name: string; level: number; ac?: number }[];
  };

  // Difficulty
  difficulty: 'Low' | 'Moderate' | 'High' | 'Deadly' | 'Custom';
  totalXP: number;
  adjustedXP: number;
  xpBudget: number;

  // State
  status: 'planning' | 'active' | 'completed';
  currentRound: number;
  currentTurnIndex: number;

  // Log
  combatLog: CombatLogEntry[];

  // Environment
  environment?: Environment;
  hasLair: boolean;
  lairInitiative?: number;          // Usually 20
}

interface Combatant {
  id: string;
  monsterId?: string;               // Reference to Monster/NPC
  name: string;                      // Display name (may be "Goblin 1", "Goblin 2")
  initiative: number;
  initiativeModifier: number;

  // Current State
  currentHP: number;
  maxHP: number;
  tempHP: number;
  armorClass: number;

  // Conditions
  conditions: {
    condition: Condition;
    source?: string;                 // What caused it
    duration?: number;               // Rounds remaining (null = indefinite)
    endsOn: 'start' | 'end';        // Of whose turn
    endsOnCombatantId?: string;      // Whose turn triggers the end
  }[];

  // Concentration
  isConcentrating: boolean;
  concentrationSpell?: string;

  // Death Saves (for PCs)
  deathSaves?: {
    successes: number;               // 0-3
    failures: number;                // 0-3
  };

  // Legendary
  legendaryActionsRemaining?: number;
  legendaryActionsMax?: number;

  // Resource Tracking
  usedAbilities: {                   // Track per-day/recharge abilities
    abilityName: string;
    usesRemaining: number;
    usesMax: number;
  }[];

  // Grouping
  groupId?: string;                  // For grouping identical monsters
  isGrouped: boolean;

  // Display
  type: 'pc' | 'npc' | 'monster' | 'lair';
  isVisible: boolean;                // Hidden from players?
  color?: string;                    // Token color
}

type Condition =
  | 'Blinded' | 'Charmed' | 'Deafened' | 'Exhaustion'
  | 'Frightened' | 'Grappled' | 'Incapacitated' | 'Invisible'
  | 'Paralyzed' | 'Petrified' | 'Poisoned' | 'Prone'
  | 'Restrained' | 'Stunned' | 'Unconscious';

interface CombatLogEntry {
  round: number;
  turn: number;
  timestamp: string;
  combatantId: string;
  action: string;                    // "Attack", "Cast Spell", "Move", etc.
  details: string;                   // "Goblin 1 attacks Ranger with Scimitar: 15 vs AC 16 — Miss"
  rolls?: {
    type: string;                    // "attack", "damage", "save"
    dice: string;                    // "1d20+4"
    result: number;
    natural?: number;                // The natural roll (for crit detection)
  }[];
}
```

### 4.5 UI Layout Suggestions for DM Panels

#### DM Monster/NPC Panel — Layout Recommendation

```
┌──────────────────────────────────────────────────────────────┐
│  PAUL SIMULATOR — DM Screen                                  │
├──────────────┬───────────────────────────────────────────────┤
│              │                                               │
│  SIDEBAR     │  MAIN CONTENT AREA                            │
│  (Collapsible│                                               │
│              │  [Tab: Combat] [Tab: NPCs] [Tab: Bestiary]    │
│  ┌─────────┐ │                                               │
│  │Campaign │ │  ┌──────────────────────────────────────────┐ │
│  │Selector │ │  │  INITIATIVE TRACKER (when in combat)      │ │
│  └─────────┘ │  │  ▶ Goblin 1 (HP: 7/12) [🔥Frightened]  │ │
│              │  │    Ranger (HP: 34/42) [🎯Concentrating]  │ │
│  QUICK       │  │    Goblin 2 (HP: 12/12)                  │ │
│  ACTIONS:    │  │    Wizard (HP: 18/28)                     │ │
│  [+NPC]      │  │    Init 20: Lair Actions                  │ │
│  [+Monster]  │  └──────────────────────────────────────────┘ │
│  [+Encounter]│                                               │
│              │  ┌──────────────────────────────────────────┐ │
│  FAVORITES:  │  │  ACTIVE STAT BLOCK                        │ │
│  • Captain   │  │  (Selected combatant's stat block)        │ │
│  • Merchant  │  │                                            │ │
│  • Dragon    │  │  [Combat View] / [Roleplay View] toggle   │ │
│              │  │                                            │ │
│  RECENT:     │  │  ┌─────────────────┐ ┌─────────────────┐  │ │
│  • Bandit    │  │  │ Quick Actions    │ │ Conditions      │  │ │
│  • Skeleton  │  │  │ [Roll Attack]   │ │ [+Condition ▼]  │  │ │
│              │  │  │ [Roll Save]     │ │ 🔥Frightened ✕  │  │ │
│  SEARCH:     │  │  │ [Roll Damage]   │ │                 │  │ │
│  [🔍_______] │  │  └─────────────────┘ └─────────────────┘  │ │
│              │  └──────────────────────────────────────────┘ │
│  FILTERS:    │                                               │
│  CR: [___]   │  ┌──────────────────────────────────────────┐ │
│  Type: [__▼] │  │  COMBAT LOG (collapsible)                 │ │
│  Env:  [__▼] │  │  Round 3: Goblin 1 attacks Ranger...     │ │
│              │  │  Round 3: Ranger casts Healing Word...    │ │
│              │  └──────────────────────────────────────────┘ │
└──────────────┴───────────────────────────────────────────────┘
```

#### Key UI Principles:

1. **Information Hierarchy:** Initiative tracker at top (most glanced at), stat block in middle (most read), combat log at bottom (reference)
2. **Minimal Clicks:** Common actions (roll attack, add condition, adjust HP) should be 1-2 clicks max
3. **Responsive:** Must work on tablets (many DMs use iPads at the table)
4. **Dark Mode:** Essential — most D&D is played in dim lighting
5. **Keyboard Shortcuts:** Next turn (Space/Enter), roll dice (R), add condition (C)
6. **Player View:** Separate URL/view that shows only what players should see (initiative order, public HP bars, no stat blocks)
7. **Drag & Drop:** Reorder initiative, drag monsters from bestiary into encounter
8. **Context Menus:** Right-click on any combatant for common actions

#### Bestiary Page Layout:

```
┌──────────────────────────────────────────────────────────────┐
│  BESTIARY                                    [+ Create New]  │
├──────────────────────────────────────────────────────────────┤
│  [🔍 Search monsters...                                    ]│
│                                                              │
│  Filters: CR [0 ─●─── 30]  Type [All ▼]  Size [All ▼]     │
│           Env [All ▼]  Source [SRD ▼]  [Legendary Only □]   │
│                                                              │
│  Showing 47 of 334 monsters                                  │
│  ┌───────────────────────────────┬──────────────────────────┐│
│  │ Name              CR  Type    │  STAT BLOCK PREVIEW      ││
│  │─────────────────────────────── │                          ││
│  │ ▶ Aboleth         10  Aberr.  │  [Full stat block of     ││
│  │   Adult Red Dragon 17  Dragon  │   selected monster       ││
│  │   Beholder         13  Aberr.  │   renders here]          ││
│  │   Death Knight     17  Undead  │                          ││
│  │   Goblin           1/4 Human.  │  [Add to Encounter]      ││
│  │   ...                          │  [Clone & Edit]          ││
│  │                                │  [Add to Favorites]      ││
│  └───────────────────────────────┴──────────────────────────┘│
└──────────────────────────────────────────────────────────────┘
```

#### NPC Manager Layout:

```
┌──────────────────────────────────────────────────────────────┐
│  NPCs — Waterdeep Campaign                  [+ Quick Create] │
│                                              [+ Detailed NPC] │
├──────────────────────────────────────────────────────────────┤
│  [🔍 Search NPCs...]  [Filter by: Location ▼] [Status ▼]   │
│  [Tags: merchant, ally, waterdeep ×]                         │
│                                                              │
│  ┌──────────────────────────────┬───────────────────────────┐│
│  │ ★ Durnan — Yawning Portal   │  [Combat] [Roleplay]      ││
│  │   Innkeeper • Alive         │                             ││
│  │   CR 9 • Veteran template   │  DURNAN                    ││
│  │───────────────────────────── │  "One-eyed owner of the   ││
│  │   Xoblob — Purple Curiosity │  Yawning Portal"           ││
│  │   Shopkeeper • Alive        │                             ││
│  │   CR 1/8 • Commoner         │  Personality: Gruff but    ││
│  │───────────────────────────── │  fair. Doesn't suffer      ││
│  │   Jarlaxle — Bregan D'aerthe│  fools.                    ││
│  │   Spy Master • Alive        │                             ││
│  │   CR 15 • Custom            │  Voice: Deep, gravelly.    ││
│  │───────────────────────────── │  Short sentences.          ││
│  │   ☠ Floon — Missing         │                             ││
│  │                              │  [Edit] [Add to Encounter] ││
│  └──────────────────────────────┴───────────────────────────┘│
└──────────────────────────────────────────────────────────────┘
```

---

## Appendix A: Data Sources for Pre-Loading

| Source | URL | Content | License |
|--------|-----|---------|---------|
| **D&D 5e API** | `https://www.dnd5eapi.co/api/2014/monsters` | 334 SRD monsters, full JSON | Open/SRD |
| **Open5e API** | `https://api.open5e.com/v2/creatures/` | SRD + 3rd party OGL monsters | OGL |
| **D&D 5e SRD** | CC-BY-4.0 licensed | Core rules, monsters, spells | Creative Commons |

## Appendix B: Competitive Landscape Summary

| Feature | D&D Beyond | Improved Initiative | Owlbear Rodeo | Shmeppy | Foundry VTT | Roll20 |
|---------|-----------|-------------------|--------------|---------|-------------|--------|
| Monster Database | ✅ Full (paid) | ✅ SRD | ❌ | ❌ | ✅ (modules) | ✅ (compendiums) |
| NPC Creation | ✅ (homebrew) | ✅ (JSON) | ❌ | ❌ | ✅ (rich) | ✅ (basic) |
| NPC Roleplay Fields | ❌ | ❌ | ❌ | ❌ | ✅ (modules) | ❌ |
| Combat Tracker | ❌ (basic) | ✅ (excellent) | ❌ | ❌ | ✅ (excellent) | ✅ (good) |
| Encounter Builder | ✅ | ❌ | ❌ | ❌ | ✅ (modules) | ❌ |
| Map/VTT | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ |
| Condition Tracking | ❌ | ✅ | ❌ | ❌ | ✅ | ✅ |
| Legendary Actions | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Mass Combat | ❌ | ❌ | ❌ | ❌ | ❌ (module) | ❌ |
| Free Tier | ✅ (limited) | ✅ (full) | ✅ (full) | ❌ ($5/mo) | ❌ ($50 once) | ✅ (limited) |
| Open Source | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |

**Paul Simulator's Opportunity:** No existing tool combines strong NPC roleplay management + combat tracking + encounter building in a single, focused DM tool. Most tools excel at one thing. A unified DM companion that handles NPCs (both combat AND roleplay), monster bestiary, and combat tracking would fill a significant gap — especially if it's web-based, free/affordable, and doesn't require the complexity of a full VTT.

---

## Appendix C: Quick Reference — CR to XP Table

| CR | XP | Prof Bonus | Example |
|----|-----|-----------|---------|
| 0 | 0-10 | +2 | Commoner |
| 1/8 | 25 | +2 | Bandit |
| 1/4 | 50 | +2 | Goblin |
| 1/2 | 100 | +2 | Orc |
| 1 | 200 | +2 | Bugbear |
| 2 | 450 | +2 | Ogre |
| 3 | 700 | +2 | Owlbear |
| 4 | 1,100 | +2 | Ettin |
| 5 | 1,800 | +3 | Troll |
| 6 | 2,300 | +3 | Young White Dragon |
| 7 | 2,900 | +3 | Mind Flayer |
| 8 | 3,900 | +3 | Assassin |
| 9 | 5,000 | +4 | Abominable Yeti |
| 10 | 5,900 | +4 | Aboleth |
| 11 | 7,200 | +4 | Remorhaz |
| 12 | 8,400 | +4 | Archmage |
| 13 | 10,000 | +5 | Beholder |
| 14 | 11,500 | +5 | Death Tyrant |
| 15 | 13,000 | +5 | Adult Green Dragon |
| 16 | 15,000 | +5 | Iron Golem |
| 17 | 18,000 | +6 | Adult Red Dragon |
| 18 | 20,000 | +6 | Demilich |
| 19 | 22,000 | +6 | Balor |
| 20 | 25,000 | +6 | Ancient White Dragon |
| 21 | 33,000 | +7 | Lich |
| 22 | 41,000 | +7 | Ancient Brass Dragon |
| 23 | 50,000 | +7 | Ancient Green Dragon |
| 24 | 62,000 | +7 | Ancient Red Dragon |
| 25 | 75,000 | +8 | — |
| 26 | 90,000 | +8 | — |
| 27 | 105,000 | +8 | — |
| 28 | 120,000 | +8 | — |
| 29 | 135,000 | +9 | — |
| 30 | 155,000 | +9 | Tarrasque |
