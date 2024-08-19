This is a [Next.js](https://nextjs.org/) project bootstrapped with [`npx create-next-app@latest`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# Implemented Features
## File Upload Feature
* Implement drag-and-drop functionality for PDF files and other files as well.
* Provided a manual file upload option as well.
* Display file size limit (e.g., "Limit 25 MB per file") and put check for this in code as well if, file size exceeds 25 MB it will show toast message.
* I have stored uploaded files using browser local storage.

## Local Storage Implementation
* Saved uploaded files and their metadata locally in local storage & in my store as well using zustand(state management library).
* I have persist data across page reloads.
* Implemented efficient retrieval of stored files and data.

## Coursework Details Form
* Created dropdowns for "Coursework Type" dropdowns (IA Example, EE Example, IO Example, TOK Example) so that I can categorised on basis of that and display and "Subject" (physics, chemistry, science, Mathematics, others) in file upload form component.
* Added a text input for essay title
* Store form data locally with the associated file in localstorage and my store.

## Evaluation Display
* I have uses dummy data for everything in evaluation display (for pdf & everything).
* I have Shown overall score with a circular progress bar indicator.
* Displayed breakdown of scores by criteria (A, B, C)
* Include evaluation date this I have implementes as current date (created getcurrent() function to get this format "12 jul 2024") 
* Stored and retrieved evaluation results locally.

## Coursework List
* I have displayed previously uploaded coursework from local storage
* Show title, subject, word count (are dynamically) and other relevant details for each item (is dummy or static)

## Explore Coursework Section
* Implemented a tabbed interface for different coursework categories i.e (IA Example, EE Example, IO Example, TOK Example)
* Implemented a grid layout for coursework examples

# Asummption while creating application
* Basically every render coursework in coursworkList on clicking anyone of the course work list it should get to nevigate ```/evaluate``` route ant there I have shown everything as dummy data.
* Have shown toast messages on various events like on file uploaded, all fields are required, on some errors as well like error while storing file in localStorage.
* Now, like if we goes on ```/evaluate``` route so for comebase oh home route I have added ```/``` route on top-left ZuAi logo on click we come to home route.
* And below medium break point in tailwind I have created hambuger icon and put there option on clicking hamburger and zuAi logo ony "Home" link will work to redirect us on homepage.

# Challanges faced
* I have faces some challanges while making responsive on mibile view.
* faced challange to show PDF file and its zoom features on evaluation display which I have done using react-pdf viewer.
* faced challanges while ipad view collapse while on mobile view I need to hide detailed evaluation by clicking on "check detaild evaluation button" then we can see detailed evaluation after that on each 3 of detaild evaluation car I have to toogle that as well to display and hide.

# Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
Here is my application deployed on [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) and my here [hosted link](https://zu-ai-assignment.vercel.app/).
