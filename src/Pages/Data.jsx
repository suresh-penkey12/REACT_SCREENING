const Data = [
  {
    id: 1,
    rate: 4.8,
    title: "Inception",
    image: "https://m.media-amazon.com/images/M/MV5BZjhkNjM0ZTMtNGM5MC00ZTQ3LTk3YmYtZTkzYzdiNWE0ZTA2XkEyXkFqcGc@._V1_.jpg",
    description:
      "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    cor: false,
  },
  {
    id: 2,
    rate: 4.7,
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into anarchy.",
    cor: false,
  },
  {
    id: 3,
    rate: 4.6,
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    cor: false,
  },
  {
    id: 4,
    rate: 4.5,
    title: "The Matrix",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    description:
      "A hacker learns the true nature of reality and his role in the war against its controllers.",
    cor: false,
  },
  {
    id: 5,
    rate: 4.3,
    title: "Fight Club",
    image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    description:
      "An insomniac office worker and a soapmaker form an underground fight club that evolves into something much more.",
    cor: false,
  },
  {
    id: 6,
    rate: 4.4,
    title: "Pulp Fiction",
    image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in a crime saga.",
    cor: false,
  },
  {
    id: 7,
    rate: 4.2,
    title: "Forrest Gump",
    image: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    description:
      "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man.",
    cor: false,
  },
  {
    id: 8,
    rate: 4.1,
    title: "Gladiator",
    image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
    cor: false,
  },
  {
    id: 9,
    rate: 4.6,
    title: "The Shawshank Redemption",
    image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    description:
      "Two imprisoned men bond over years, finding solace and eventual redemption through acts of common decency.",
    cor: false,
  },
  {
    id: 10,
    rate: 4.0,
    title: "Jurassic Park",
    image: "data:image/jpeg;base64,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",
    description:
      "A theme park suffers a major power breakdown allowing cloned dinosaurs to run free.",
    cor: false,
  },
  {
    id: 11,
    rate: 4.2,
    title: "The Avengers",
    image: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    description:
      "Earth's mightiest heroes must come together to stop a mischievous god from enslaving humanity.",
    cor: false,
  },
  {
    id: 12,
    rate: 4.3,
    title: "Titanic",
    image: "https://image.tmdb.org/t/p/w500/6VmFqApQRyZZzmiGOQq2C92jyvH.jpg",
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the ill-fated RMS Titanic.",
    cor: false,
  },
  {
    id: 13,
    rate: 4.4,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    image: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    description:
      "A meek Hobbit and eight companions set out on a journey to destroy a powerful ring and save Middle-earth.",
    cor: false,
  },
  {
    id: 14,
    rate: 4.0,
    title: "Star Wars: Episode IV - A New Hope",
    image: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    description:
      "Luke Skywalker joins forces with a Jedi Knight and others to save the galaxy from the Empire’s world-destroying battle station.",
    cor: false,
  },
  {
    id: 15,
    rate: 3.9,
    title: "Avatar",
    image: "https://cdn.mos.cms.futurecdn.net/FvLi2evhiuCYNdZ7HALQu3.jpeg",
    description:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following orders and protecting an alien civilization.",
    cor: false,
  },
  {
    id: 16,
    rate: 4.1,
    title: "The Lion King",
    image: "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
    description:
      "Lion prince Simba flees his kingdom after the murder of his father, only to learn the true meaning of responsibility and bravery.",
    cor: false,
  },
  {
    id: 17,
    rate: 3.8,
    title: "Iron Man",
    image: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    description:
      "After being held captive, Tony Stark builds a high-tech suit of armor to escape and becomes the superhero Iron Man.",
    cor: false,
  },
  {
    id: 18,
    rate: 4.2,
    title: "Deadpool",
    image: "https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png",
    description:
      "A former Special Forces operative turned mercenary gains accelerated healing powers and adopts an alter ego to seek revenge.",
    cor: false,
  },
  {
    id: 19,
    rate: 3.9,
    title: "The Hobbit: An Unexpected Journey",
    image: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    description:
      "Bilbo Baggins sets out on a quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug.",
    cor: false,
  },
  {
    id: 20,
    rate: 4.3,
    title: "Guardians of the Galaxy",
    image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    description:
      "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    cor: false,
  },
];

export default Data;
