# Immersive Labs Design System Engineer technical test

This repo provides you with a working but unstyled app for you to style with an open source design system of your choice - there is no right or wrong choice when choosing one but be prepared to explain why you chose it in the interview.

We're not looking for a great looking app (but showing off your design skills would be a plus), we're more interested in seeing a component-based architecture that enables developers to work at pace within the confines of a design system, integrating accessibility will be a core part of your job at Immersive so this should be factored in where possible although we are aware that you don't have much time so feel free to use a light touch and go deeper during to the face to face interview.

You do not need to write tests but may be quizzed on how you would approach testing a design system later

## About the app

[Wireframes](https://wireframe.cc/wfuUUw)

The app is a dummy smart office automation app, where staff see what song is currently playing in the office, control the lights and open the front gates - see the wireframes for a suggested layout to work towards.

<img width="552" alt="Screenshot 2024-11-19 at 17 06 15" src="https://github.com/user-attachments/assets/cb34e965-a471-4f77-a01d-62bb6c7c90c9">


## Getting started

This is a React 18 app running on Vite (it was boostrapped with [the `npm create vite` command](https://vite.dev/guide/#scaffolding-your-first-vite-project)) and written in Typescript as that is the language we use, if you prefer to use Javascript then that's fine but you may need to strip the types from the code

To run it, run:

```bash
npm install
npm run dev
```

All the app's code is in `App.tsx`, the html used is just a placeholder and you are free to refactor as you please, the only requirement is that the Ui reflects the changes in data returned by the `useDummyData()` hook - this hook will update the data every 5 seconds unless you pass in `false` as a first argument or a time in milliseconds as a second argument.

```tsx
// Default behaviour, data updates every 5 seconds
const { music, rooms, alert } = useDummyData();

// Data does not update, reload the page to get new data
const { music, rooms, alert } = useDummyData(false);

// Data updates every 10 seconds
const { music, rooms, alert } = useDummyData(true, 10000);
```
