/**
 * This file contains dummy data for use in the app, you shouldn't need to edit
 * this file but you are free to if you like, however bear in ind that the data
 * is designed to provide you with data variations for use in UI states
 */

import { IAlert, ILight, IMusicData, IRoom } from "./hooks/useDummyData";

interface IDummyMusicData {
  playStates: IMusicData["playState"][];
  tracks: IMusicData["currentTrack"][];
}

export const dummyMusicData: IDummyMusicData = {
  playStates: ["playing", "paused"],
  tracks: [
    {
      title: "The Less I Know The Better",
      artist: "Tame Impala",
      album: "Currents",
      albumArt:
        "https://i.scdn.co/image/ab67616d00001e029e1cfc756886ac782e363d79",
    },
    {
      title: "Messy",
      artist: "Lola Young",
      album: "This wasn't meant for you anyway",
      albumArt:
        "https://i.scdn.co/image/ab67616d00001e026aa2a180c7b009ca8454ef89",
    },
    {
      title: "Cerca De Ti",
      artist: "Hermanos Gutiérrez",
      album: "Hoy Como Ayer",
      albumArt:
        "https://i.scdn.co/image/ab67616d00001e02194816f8a9e58f3166743897",
    },
  ],
};

function getRandomLightState(): ILight["state"] {
  return {
    reachable: Math.random() < 0.5,
    on: Math.random() < 0.5,
    brightness: Math.floor(Math.random() * 100),
  };
}

export function generateDummyAlertData(): IAlert | null {
  const alerts: (IAlert | null)[] = [
    {
      variant: "info",
      title: "New service available",
      description: "A new service is now available, check it out!",
      link: "https://example.com",
    },
    {
      variant: "warning",
      title: "Connection is unstable",
      description:
        "Your internet connection is unstable, services may struggle to connect.",
    },
    {
      variant: "error",
      title: "Failed to connect to music service",
      description: "lorem ipsum dolor sit amet consectetur",
      link: "https://example.com",
    },
    null,
    null,
    null,
  ];

  return alerts[Math.floor(Math.random() * alerts.length)];
}

export function generateDummyRoomData(): IRoom[] {
  return [
    {
      name: "Living Room",
      lights: [
        {
          name: "Ceiling light",
          state: getRandomLightState(),
        },
        {
          name: "Floor lamp",
          state: getRandomLightState(),
        },
      ],
    },
    {
      name: "Bedroom",
      lights: [
        {
          name: "Bedside lamp",
          state: getRandomLightState(),
        },
        {
          name: "Ceiling light",
          state: getRandomLightState(),
        },
      ],
    },
    {
      name: "Kitchen",
      lights: [
        {
          name: "Ceiling light",
          state: getRandomLightState(),
        },
      ],
    },
    {
      name: "Bathroom",
      lights: [
        {
          name: "Mirror light",
          state: getRandomLightState(),
        },
        {
          name: "Ceiling light",
          state: getRandomLightState(),
        },
      ],
    },
    {
      name: "Office",
      lights: [
        {
          name: "Desk lamp",
          state: getRandomLightState(),
        },
        {
          name: "Ceiling light",
          state: getRandomLightState(),
        },
        {
          name: "Wall light",
          state: getRandomLightState(),
        },
        {
          name: "Table lamp",
          state: getRandomLightState(),
        },
      ],
    },
    {
      name: "Garage",
      lights: [
        {
          name: "Ceiling light",
          state: getRandomLightState(),
        },
      ],
    },
  ];
}
