// src/data/projects.js
const projects = [
  {
    slug: 'arraygame',
    title: 'ArrayGame',
    repo: 'https://github.com/nicurrego/ArrayGame',
    demo: 'https://nicurrego.github.io/ArrayGame/',
    image: 'projects_img/array_game.png',
    summary: 'Interactive JS game teaching array manipulation with instant feedback.',
    date: '2025-07-01',
    content: `
      <p><strong>ArrayGame</strong> is an educational JavaScript game that makes arrays tangible by letting players manipulate them in real time, with immediate visual feedback. Built with vanilla JS (or whatever stack you used), it’s designed to teach core data structure intuition through play.</p>
    `,
  },
  {
    slug: 'galaxy-arena',
    title: 'Galaxy_arena',
    repo: 'https://github.com/nicurrego/Galaxy_arena',
    image: '',
    summary: 'Two-player spaceship arena—RL meets PvP in Python & Gym.',
    date: '2025-06-20',
    content: `
      <p><strong>Galaxy_arena</strong> blends reinforcement learning with PvP mechanics. Built in Python using OpenAI Gym-style environments, players can pit learned agents against each other in a dynamic spaceship combat arena.</p>
    `,
  },
  {
    slug: 'neural-networks-from-scratch',
    title: 'Neural-Networks-from-Scratch',
    repo: 'https://github.com/nicurrego/Neural-Networks-from-Scratch',
    image: '',
    summary: 'Build classic neural network architectures in pure Python.',
    date: '2025-06-10',
    content: `
      <p>This repository walks through constructing neural networks from first principles in Python—no high-level frameworks. Includes forward/backprop implementations, activation functions, and training loops.</p>
    `,
  },
  {
    slug: 'portfolio-site',
    title: 'portfolio-site',
    repo: 'https://github.com/nicurrego/portfolio-site',
    demo: 'https://nicurrego.github.io/portfolio-site',
    image: 'projects_img/portfolio_site.png',
    summary: 'My personal website: React, Tailwind & Vercel deployment.',
    date: '2025-05-01',
    content: `
      <p>This site is built with React, styled with a custom system (inspired by Tailwind), and deployed on GitHub Pages. It showcases my projects, writing, and background.</p>
    `,
  },
  {
    slug: 'my-mind',
    title: 'my_mind',
    repo: 'https://github.com/nicurrego/my_mind',
    demo: 'https://nicurrego.github.io/my_mind/',
    image: 'projects_img/my_mind.png',
    summary: 'Thoughts on technology, growth, AI, philosophy, and daily life.',
    date: '2025-01-15',
    content: `
      <p><em>My Mind</em> is my personal reflection space: short essays, aphorisms, and philosophical snippets about technology, self-improvement, and the human condition.</p>
    `,
  },
  {
    slug: 'neat-pong',
    title: 'NEAT_PONG',
    repo: 'https://github.com/nicurrego/NEAT_PONG',
    image: 'projects_img/ping_pong.png',
    summary: 'Training an AI to play Pong using NeuroEvolution of Augmenting Topologies.',
    date: '2025-04-20',
    content: `
      <p><strong>NEAT_PONG</strong> applies NEAT to evolve agents that learn to play Pong. It demonstrates topology evolution alongside weights to adapt strategy over generations.</p>
    `,
  },
];

export default projects;
