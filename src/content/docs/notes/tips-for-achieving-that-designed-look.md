---
title: Tips for achieving that designed look
---
Screenshots probably won't load, would need to add cloudinary or some other image hosting that I don't really feel like doing right now.

This is just a general dump of design tips, might clean this up later, might not.

## Spacing and layout
- Too much white space
- Don't need to fill whole screen
- Start mobile first, than move to larger screen. Might find that you don't need a different design
- Only use percentages if you want it to scale, use max-width instead
- Don't shrink unless necessary
- Relative sizing does not scale
- If you can't decide on a value, pick the middle of 2 sizes and and move up and down until you find the right size
- Different text and symbols might require different space in between
![[Screenshot 2023-12-18 at 8.04.57 AM.png]]![[Screenshot 2023-12-18 at 8.05.23 AM.png]] ![[Screenshot 2023-12-18 at 8.05.37 AM.png]]
## Text
- Avoid em, stick to px or rem
- Use good fonts, stick to known fonts
- Keep line length in check, 45 - 75 chars per line -- here you can use em units
- baseline when combining different texts instead of center
- Line height is proportional, narrow = shorter, wider = larger
	- Line height also is affected by font-size
- Align with readability in mind
	- Don't center long text, left if > 2 or 3 lines
	- Center shorter and stay consistent
	- Modify wording so that the texts match up
![[Screenshot 2023-12-18 at 8.11.19 AM.png]]
- Right align numbers
 - if you justify-text also hyphenate
 - Use letter spacing correctly, increase all caps spacing

## Color
- Ditch hex for HSL
- You will need more colors than you think (5-10)
	- Pick base color first, pick shade that would work well as a button background
	- Then find the edges, and work your way in 500 -> 100, 900 -> 700, 300 -> 200, 400, 600, 800
	- Grays: Start at the edges -- darkest gray should be darkest text color, lightest should work well for subtle off-white background
- True black tends to look unnatural, so start with really dark grey
- 1 maybe 2 primary colors for primary actions, navigation
- Few accent colors
- Few semantic (error, info, success) colors
- Change brightness of a color by rotating it's hue
	- Darker rotate towards nearest dark, 0, 120, 240
	- Lighter rotate towards nearest bright 60, 180, 300
	- Don't rotate hue more than 20 to 30 degrees or it will end up as different color
- Accessibility
	- Text under 18px must have 4.5:1 contrast ratio
	- Larger must have 3:1
	- Flip the contrast, lighter button background with darker text
	- Rotate the hue
	- Don't rely on color alone
![[Screenshot 2023-12-18 at 8.21.21 AM.png]]
- Always use color to support something design is already sayin g
![[Screenshot 2023-12-18 at 8.21.33 AM.png]]

## Depth
- Emulate a light source, light comes from above
- Use combination of shadows, above, below, more than 1
- Use inset sources, modify bottom shadow
- Use shadows to convey elevation
- Typically 5 shadows is enough
- Combine shadows with interaction
- Shadows can have 2 parts
- You can create depth with color, lighter = closer, darker = further
- Overlap elements to create layers
![[Screenshot 2023-12-18 at 8.25.13 AM.png]]
- ![[Screenshot 2023-12-18 at 8.25.35 AM.png]]

## Images
- Use good photos
- Text on images need consistent contrast
	- Add an overlay to the image
	- Lower image contrast
	- Colorize the image
	- text shadow
- Everything has an intended size
	- Don't scale up or down icons
	- Enclose icons in another shape if too small feeling, like a circle
	- Don't scale down screenshots
	- Take partial screenshots
	- If you really need the whole app, use an illustration of a simplified version
- Beware user uploaded content
- Prevent background bleed with inner box shadow

## Finishing touches
- Supercharge the defaults
- Add color with accent borders
- Decorate your backgrounds
	- Change colors for excitement
	- Use a repeating pattern
- Don't overlook empty states
- Use fewer borders, more box shadows
- Use 2 different background colors
- Extra spacing
- Combine table columns
- Table content doesn't need to be just text
  
---
## Attributions
- [Refactoring UI](https://www.refactoringui.com/)

----
## Anki

TARGET DECK
ui ux

Q: What are some spacing and layout tips?
A: 1. Use too much spacing
2. Don't scale things that don't need scaling, you don't need to use the full screen
3. Use max-width instead of percentage scaling
<!--ID: 1703602861375-->


Q: What are some tips for text?
A: 1. Use the correct layout, longer text use left, while center shorter text
2. Different text and lines require different spacing
3. Don't use em
<!--ID: 1703602861380-->


Q: What are some tips for colors?
A: 1. Use hsl instead of hex
2. Will need a substantial amount of colors
3. Remember accessibility when using colors, 4.5:1 ratio on smaller text, 3:1 on larger
4. Don't rely on color for depicting information, use combination of color and symbols
<!--ID: 1703602861384-->


Q: What are some tips for depth?
A: 1. Emulate a real light source
2. You can combine shadows
<!--ID: 1703602861387-->


Q: What are some tips for images?
A: 1. Use good photos
2. Everything has an intended size, don't shrink or scale up, same with icons
3. Be careful with user uploaded content
<!--ID: 1703602861389-->


Q: What are some good general design tips?
A: 1. Don't overlook empty states
2. supercharge defaults
3. tables don't need to be just text
4. less borders more shadow
<!--ID: 1703602861390-->
