# PROJECT: Habit Tracker

## PURPOSE
This is a beginner web app used to learn the Claude Code workflow and GitHub integration.

The app allows a user to:
- Enter a habit
- Click "Add"
- See the habit appear in a list on the page

---

## FILE STRUCTURE
- index.html → main structure of the app
- style.css → styling only (no HTML or JS inside)
- script.js → all JavaScript logic

---

## CORE FUNCTIONALITY
- User types into input field (id="habitInput")
- User clicks button
- Function `addHabit()` runs
- A new list item is created and added to the habit list

---

## RULES FOR CLAUDE

### BEFORE making changes
- Always read ALL existing files first
- Do NOT overwrite working code unnecessarily
- Identify the exact bug before fixing

### WHEN writing code
- Keep code simple (beginner-friendly)
- Do NOT introduce frameworks (no React, no libraries)
- Use plain HTML, CSS, JavaScript only
- Keep IDs consistent between HTML and JS

### DEBUGGING RULES
When something does not work:
1. Check if script.js is linked correctly
2. Check if function is being called
3. Check if element IDs match
4. Check browser console for errors
5. Fix ONE issue at a time

---

## TESTING CHECKLIST
After any change, confirm:

- Page loads in browser
- Input box is visible
- Button is clickable
- Typing a habit + clicking Add:
  → habit appears in list

---

## GITHUB WORKFLOW
After successful changes:

1. git add .
2. git commit -m "clear description of change"
3. git push

---

## PROJECT GOAL (IMPORTANT)
This project is NOT just about building a habit tracker.

It is used to:
- Learn Claude Code workflow
- Create consistent project structure
- Ensure Claude does NOT forget instructions between sessions

Claude should always follow this file as the source of truth.

---

## CURRENT STATUS
- Basic habit tracker implemented
- GitHub repo connected
- Testing and debugging in progress

---

## NEXT STEPS
- Ensure Add button works reliably
- Fix any JavaScript connection issues
- Optionally add local storage later
