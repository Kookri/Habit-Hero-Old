# Habit game Design Document -

Area & Resource: https://www.notion.so/Resource-Programming-6a9e18f7ce1e496594c2d5ec209ae445
Created: April 2, 2023 11:29 PM
Last Edited: May 20, 2023 11:22 PM
Project: https://www.notion.so/Habit-Hero-Game-Site-62143a6e40704c41bf73eeca52981904
Project Area Rollup: https://www.notion.so/6a9e18f7ce1e496594c2d5ec209ae445
Status: In Progress
Type: Note

Habit Hero

This design document serves as the foundation for the Gamified Habit Tracker website project. The aim is to create a website that helps users track and manage their habits effectively, while providing an engaging and enjoyable game experience.

1. Create an easy-to-use habit tracking system.
2. Implement engaging game mechanics to motivate users.
3. Develop a reward system to encourage habit completion.
4. Offer customization and personalization options.
5. Include social features for collaboration and competition.

The initial goals are to:

1. Set up authentication so that users can have profiles, and their habit data and other information are stored associated with their profile.
2. Set up a basic habit tracker that allows users to create recurring habits based on customizable intervals (such as every “x” days/weeks/months). This habit tracker should have a responsive React front end. 
3. Set up a database that is simple and easy to configure for a beginner programmer. This database (or set of databases) should store information such as habits, points, and heroes

Once the habit tracker is established and habits can be saved to user profiles, the next goal is to:

- Allow each completed habit to generate ‘coins’.
- Each user, acting as a sort of ‘adventurer’s guild’, can recruit heroes, which are like RPG characters, with names, stats and inventories which can be improved by investing points in them. These heroes will have an RPG like gameplay loop.
    - Actions for heroes will include things like “Train” to improve their stats, “Rest” to recover their HP, and “Adventure” to go out and procure loot. While they’re in one of these statuses, the player can allocate coins into them.
- Points should also be able to be used for other things. They should be kept as a currency that the player can use.

# Old

## Introduction

This design document serves as the foundation for the Gamified Habit Tracker website project. The aim is to create a website that helps users track and manage their habits effectively, while providing an engaging and enjoyable game experience.

## Project Goals

1. Create an easy-to-use habit tracking system.
2. Implement engaging game mechanics to motivate users.
3. Integrate with Fitbit API for step tracking.
4. Develop a reward system to encourage habit completion.
5. Offer customization and personalization options.
6. Include social features for collaboration and competition.

## Priority Features

### [Habit Site Phase 1: Core Features](https://www.notion.so/Habit-Site-Phase-1-Core-Features-b2aa4b60c0d74df8b644feb2ef16f324)

1. User Authentication
    - Registration and login system.
2. Habit Tracking
    - Create, edit, and delete habits.
    - Set recurrence patterns (daily, every x days).
    - Habits linked to specific attributes (strength, intelligence, etc.) that level up over time.

### Phase 2: Game Mechanics

1. Character
    - Leveling, inventory, and stats.
    - Customizable appearance.
2. Travel System
    - Integrate with Fitbit API for step tracking.
    - Travel between towns/quests based on habit progress.
3. Quests and Dungeons
    - Participate in battles and combat.
    - Highlighted tasks/quests for bonus rewards.
4. Daily Phases
    - Camp: Setting and prioritizing habits and goals.
    - Character: Managing inventory and stats.
    - Travel: Advancing towards quests/dungeons.
    - Events: Random daily events with various outcomes (loot, new quests, shops, bonus XP, highlighted priorities, etc.).
    - Evening Review: Users rate their day for a bonus and reflect on habit completion.
    
    ### Phase 3: Reward System
    
    1. Rewards
        - Items: Weapons, armor, and other game-related gear with attribute requirements.
        - Personal rewards: Users create a list of real-life rewards that can also be looted in-game.
        - Gold: In-game currency used to buy personal rewards or items.
    
    ### Phase 4: Additional Features
    
    1. Daily Priority Quest
        - Rank tasks by importance and offer bonus rewards or penalties.
    2. Failure Penalties
        - Backward progress for not completing certain goals.
    3. Customization
    - Character appearance: hairstyle, clothing, and accessories.
    - Personalization: themes and colors for the user interface.
    
    ### Phase 5: Social Features (Optional)
    
    1. Leaderboards
    - Compete with friends or other users based on habit completion and game progress.
    1. Group Quests
    - Team up to complete group quests and support each other in habit completion.
    1. Chat
    - Communicate with friends or other players for motivation and sharing tips.
    
    ### Phase 6: Tutorial and Onboarding
    
    1. Guided Tutorial
    - Help new users understand the game mechanics and habit setup.
    1. Tips and Suggestions
    - Offer in-game assistance to maximize progress and habit completion.
    
    ## Project Timeline
    
    Phase 1: Core Features - 1 month
    Phase 2: Game Mechanics - 2 months
    Phase 3: Reward System - 1 month
    Phase 4: Additional Features - 1 month
    Phase 5: Social Features (Optional) - 1.5 months
    Phase 6: Tutorial and Onboarding - 2 weeks
    
    Total estimated development time: 6-7 months
    
    ## Development Milestones
    
    1. Complete core features and habit tracking system.
    2. Implement game mechanics and character development.
    3. Develop and integrate the reward system.
    4. Add customization and personalization options.
    5. (Optional) Implement social features for collaboration and competition.
    6. Design and implement the tutorial and onboarding process.
    7. Launch the website and gather user feedback.
    8. Continuously update and improve the website based on user feedback and performance metrics.
    
    By following this design document and project timeline, the Gamified Habit Tracker website project will successfully create an engaging, enjoyable, and effective habit tracking experience for users.
    
- Initial Notes:

Names?

- Habit Hero (taken)
- Goal Guardian
- Habitactics
- Daily Dungeon
- Habit Forge

[get habit design doc from gpt](https://www.notion.so/get-habit-design-doc-from-gpt-540f9450acc7432aa874bd61ade6ec55) 

### Initial Notes

- Like Habitica, where you can set habits you need to routinely complete
    - Habits can recur daily, or every x days.
    - Each habit can be tied to an attribute, which you gradually level.
- One fun idea - travel system where you travel between towns/quests linked to steps via Fitbit API.
    - Integration with activity minutes too? Or sleep? Perhaps this can affect HP Regen.
- Types of rewards:
    - Items - things that work towards the game aspect like weapons/armor. These have attribute requirements, which encourages “grinding” using habits.
    - Personal rewards - users can create a list of personal rewards, which can also be looted.
    - Gold - can perhaps be used to buy personal rewards as well. Or items.

Mechanics

- Character goes on quests / dungeons, with travel in between. There is a combat system.
- Sometimes certain habits or tasks can be highlighted as a quest, providing bonus rewards .
- Perhaps a daily priority quest which helps you rank your tasks by importance and provide bonus rewards or penalties.
- Perhaps failures to do certain goals can result in backwards progress on certain things, like progress towards next quest/dungeon?
- Daily phases? Or diff pages
    - Camp - setting and prioritizing your habits and goals
    - Character - levelling, inventory, stats
    - Travel - advancing towards quests/dungeons. Perhaps a branching paths system like slay the spire/darkest dungeon, where you can pick your next room.
    - Events - can occur randomly once per day, with different results (loot, new quests, shops, bonus xp, highlighted priorities, etc)
    - Evening review - can rate your day for a bonus