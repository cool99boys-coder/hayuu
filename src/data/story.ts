/**
 * ─────────────────────────────────────────────────────────────
 *  HAYUU'S SURPRISE — CONTENT FILE
 *  This is the ONLY file you need to edit to personalize everything.
 *  Swap the placeholder image/video URLs, captions, jokes and messages
 *  with the real ones once you send them over.
 * ─────────────────────────────────────────────────────────────
 */

export const FRIEND_NAME = "Hayuu";

export const OPENING = {
  teaser: "A special surprise is waiting for you…",
  hint: "Made with love, just for you.",
  button: "Begin the Journey",
};

export const INTRO = {
  greeting: "This one is for",
  message:
    "Some people walk into your life and quietly light it up. You are one of those people — the friend who turns ordinary days into stories worth telling.",
  hints: [
    {
      emoji: "📏",
      title: "Small in height",
      text: "but somehow the biggest personality in every single room.",
    },
    {
      emoji: "⚡",
      title: "Human energy drink",
      text: "you walk in and suddenly the whole vibe levels up.",
    },
    {
      emoji: "😂",
      title: "Certified comedian",
      text: "you have made me laugh at things that were genuinely not that funny.",
    },
  ],
};

export type MemoryGroup = {
  id: string;
  label: string;
  caption: string;
  photos: { src: string; caption: string }[];
};

export const MEMORY_GROUPS: MemoryGroup[] = [
  {
    id: "funny",
    label: "The Funny Moments",
    caption: "The laughs that still hurt to remember.",
    photos: [
      {
        src: "/IMG_20260722_121307_226.jpg",
        caption: "Cheers to the chaos 🥂",
      },
      {
        src: "/IMG_20260722_103358_496.jpg",
        caption: "Looking fabulous as always ✨",
      },
    ],
  },
  {
    id: "crazy",
    label: "The Crazy Moments",
    caption: "The days we probably should not talk about.",
    photos: [
      {
        src: "/IMG_20260722_121351_358.jpg",
        caption: "A whole mood in one picture",
      },
      {
        src: "/IMG_20260722_103351_270.jpg",
        caption: "Main character energy 💅",
      },
    ],
  },
  {
    id: "unforgettable",
    label: "The Unforgettable Moments",
    caption: "The ones I will keep forever.",
    photos: [
      {
        src: "/IMG_20260722_103238_410.jpg",
        caption: "Always got you 🤝",
      },
      {
        src: "/IMG_20260722_103234_840.jpg",
        caption: "Through thick and thin moments  🤝",
      },
    ],
  },
];

export const ROASTS = [
  {
    front: "Small height",
    back: "Unlimited attitude. Warning issued to all who underestimate you.",
  },
  { front: "Pocket size", back: "But full power. Fun sized, chaos maxed." },
  {
    front: "Can’t reach the top shelf",
    back: "But somehow reaches everyone’s heart. Balanced.",
  },
  {
    front: "Tiny but loud",
    back: "Noise-cancelling headphones were invented because of you.",
  },
  {
    front: "Legally a snack",
    back: "Fun size, obviously. Nutritional value: pure joy.",
  },
  {
    front: "Short king/queen energy",
    back: "Rules the room without ever needing a step stool.",
  },
];

export type VideoItem = {
  title: string;
  poster: string;
  src?: string; // add a real .mp4 URL to make it playable
};

export const VIDEOS: VideoItem[] = [
  {
    title: "Scene One — The Vibe",
    poster: "/bb6f0e79-b585-4a2a-a102-0f48240ece56.jpg",
    src: "https://res.cloudinary.com/dki39vdb6/video/upload/v1784717591/VID_20260722_121247_550_nkbdok.mp4",
  },
  {
    title: "Scene Two — The Star",
    poster: "/bb6f0e79-b585-4a2a-a102-0f48240ece56.jpg",
    src: "https://res.cloudinary.com/dki39vdb6/video/upload/v1784717744/VID_20260722_103639_164_ooeddd.mp4",
  },
  {
    title: "Scene Three — Unstoppable",
    poster: "/bb6f0e79-b585-4a2a-a102-0f48240ece56.jpg",
    src: "https://res.cloudinary.com/dki39vdb6/video/upload/v1784717839/VID_20260722_121404_325_ncp6z6.mp4",
  },
  {
    title: "Scene Four — Pure Icon",
    poster: "/bb6f0e79-b585-4a2a-a102-0f48240ece56.jpg",
    src: "https://res.cloudinary.com/dki39vdb6/video/upload/v1784717914/VID_20260722_121427_844_fjqt18.mp4",
  },
];

export const APPRECIATION = {
  heading: "Why you are irreplaceable",
  lines: [
    "You show up — every single time.",
    "You make the good days louder and the hard days lighter.",
    "You listen without judging and laugh without limits.",
    "You are proof that the best things really do come in small packages.",
    "And I am unbelievably lucky to call you my best friend.",
  ],
};

export const FINALE = {
  message: `Thank you for being my best friend, ${FRIEND_NAME}`,
  closing: "Here’s to more laughs, more chaos, and a lifetime of memories.",
  signoff: "Always yours Best Friend,",
  signature: "Abduse",
};
