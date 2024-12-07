import { Space } from '../types/space';

export const spaces: Space[] = [
  {
    id: 'start',
    type: 'location',
    name: 'Start',
    description: 'Begin your musical journey around the world!',
    color: '#FF6B6B',
    position: 0
  },
  {
    id: 'west_africa',
    type: 'location',
    name: 'West Africa',
    description: 'West African music is full of energy and rhythm. It is often made for dancing and tells stories about life and nature. People play drums a lot in West Africa, especially during celebrations. Music is also used to bring communities together. The singing in West African music often has a "call and response" style, where one person sings, and others answer.',
    color: '#FFB347',
    instrument: 'Kora',
    position: 1,
    imageUrl: 'https://images.unsplash.com/photo-1516814537483-797cf05b8ce7',
    videoLink: 'https://www.youtube.com/watch?v=0fCWgqCGd8Y',
    audioClip: '/audio/west-africa.mp3',
    coordinates: { x: 45, y: 45 }
  },
  {
    id: 'india',
    type: 'location',
    name: 'India',
    description: 'Indian music has a very long history with two main classical styles: Hindustani and Carnatic. The sitar, a string instrument with a long neck, creates dreamy sounds and has become famous worldwide.',
    color: '#FF7F50',
    instrument: 'Sitar',
    position: 2,
    videoLink: 'https://www.youtube.com/watch?v=2KZlpA3t5hI'
  },
  {
    id: 'japan',
    type: 'location',
    name: 'Japan',
    description: 'Japanese music is both old and modern. Traditional music is calm and used in tea ceremonies, festivals, and plays. The koto, a 13-stringed wooden instrument, creates peaceful sounds using small finger picks.',
    color: '#FF69B4',
    instrument: 'Koto',
    position: 3,
    videoLink: 'https://www.youtube.com/watch?v=JDTp_YQizqE'
  },
  {
    id: 'brazil',
    type: 'location',
    name: 'Brazil',
    description: 'Brazilian music is famous for its lively rhythms and fun dances, especially samba during carnival festivals. The berimbau, a bow-shaped string instrument, is played in capoeira martial art dance.',
    color: '#4DB6AC',
    instrument: 'Berimbau',
    position: 4,
    videoLink: 'https://www.youtube.com/watch?v=6Nl48l1oCZU'
  },
  {
    id: 'ireland',
    type: 'location',
    name: 'Ireland',
    description: 'Ireland is known for its lively and cheerful music, often played in pubs and at festivals. Irish music includes songs about history, love, and nature. People often play fast tunes for traditional dances like jigs and reels. The melodies make you want to tap your feet or clap along. The fiddle and tin whistle are popular instruments.',
    color: '#66BB6A',
    instrument: 'Fiddle',
    position: 5,
    videoLink: 'https://www.youtube.com/watch?v=PS8AB3B-crE'
  },
  {
    id: 'spain',
    type: 'location',
    name: 'Spain',
    description: 'Spain has a rich music culture, and one of its most famous styles is flamenco. Flamenco combines singing, guitar playing, and dancing. The dancers wear colorful outfits and use their hands and feet to make rhythms. Flamenco music is full of passion and emotion.',
    color: '#EF5350',
    instrument: 'Castanets',
    position: 6,
    videoLink: 'https://www.youtube.com/watch?v=2s_YN_ipBhE'
  },
  {
    id: 'china',
    type: 'location',
    name: 'China',
    description: 'Chinese music has a history that goes back thousands of years. Traditional music is peaceful and is used for ceremonies, festivals, and storytelling. Instruments like flutes and zithers create gentle melodies. In modern times, China also has a growing pop music scene, loved by young people.',
    color: '#EC407A',
    instrument: 'Erhu',
    position: 7,
    videoLink: 'https://www.youtube.com/watch?v=3X9LvC9WkkQ'
  },
  {
    id: 'egypt',
    type: 'location',
    name: 'Egypt',
    description: 'Egyptian music is one of the oldest in the world and is deeply connected to its culture. Traditional music is used in celebrations, storytelling, and religious events. Modern Egyptian pop and belly dance music are also popular. The rhythms in Egyptian music are often lively and exciting.',
    color: '#FFA726',
    instrument: 'Qanun',
    position: 8,
    videoLink: 'https://www.youtube.com/watch?v=T6qLKSZ3_Cw'
  },
  {
    id: 'australia',
    type: 'location',
    name: 'Australia',
    description: 'Australian music celebrates both traditional Aboriginal culture and modern styles. Aboriginal music is ancient and often tells stories about the land and its people. Songs are used in ceremonies and to pass down history. Modern Australian music includes pop, rock, and country styles.',
    color: '#26A69A',
    instrument: 'Didgeridoo',
    position: 9,
    videoLink: 'https://www.youtube.com/watch?v=9g592I-p-dc'
  },
  {
    id: 'russia',
    type: 'location',
    name: 'Russia',
    description: 'Experience the beautiful balalaika music!',
    color: '#7E57C2',
    instrument: 'Balalaika',
    position: 10,
    videoLink: 'https://www.youtube.com/watch?v=4Nx8BTQzZB8'
  },
  {
    id: 'mexico',
    type: 'location',
    name: 'Mexico',
    description: 'Mexican music is full of life and emotion, often celebrating family, love, and heritage. Mariachi music is one of the most famous styles, with guitars, violins, and trumpets. People enjoy mariachi at parties, weddings, and festivals like Día de los Muertos (Day of the Dead). The songs are cheerful and fun.',
    color: '#8D6E63',
    instrument: 'Vihuela',
    position: 11,
    videoLink: 'https://www.youtube.com/watch?v=klVe7_2UEQ8'
  },
  {
    id: 'greece',
    type: 'location',
    name: 'Greece',
    description: 'Greek music is joyful and emotional, often played during celebrations and gatherings. Traditional Greek music uses special scales and rhythms, making it unique. People love to dance to Greek songs, especially during weddings and festivals like the Greek Carnival. Modern Greek music blends traditional sounds with pop and rock.',
    color: '#42A5F5',
    instrument: 'Bouzouki',
    position: 12,
    videoLink: 'https://www.youtube.com/watch?v=3X9LvC9WkkQ'
  },
  {
    id: 'morocco',
    type: 'location',
    name: 'Morocco',
    description: 'Moroccan music is rich and diverse, combining sounds from Africa, the Middle East, and Europe. Traditional Moroccan music is often played during weddings and religious events. Gnawa music is one famous style, using drums and chanting to create spiritual rhythms. Modern Moroccan music includes pop and hip-hop.',
    color: '#FF7043',
    instrument: 'Oud',
    position: 13,
    videoLink: 'https://www.youtube.com/watch?v=N6aCL1qZKvY'
  },
  {
    id: 'peru',
    type: 'location',
    name: 'Peru',
    description: 'Peruvian music is a mix of indigenous, Spanish, and African influences. Traditional Peruvian songs often tell stories of nature, mountains, and everyday life. People play music during celebrations like the colorful Inti Raymi, a festival to honor the sun. Andean music, with its soft melodies, is especially popular.',
    color: '#9CCC65',
    instrument: 'Zampona',
    position: 14,
    videoLink: 'https://www.youtube.com/watch?v=5GwOqgPUMLU'
  },
  {
    id: 'korea',
    type: 'location',
    name: 'Korea',
    description: 'Korean music has a mix of traditional and modern styles. Traditional Korean music, called gugak, includes soft melodies and slow rhythms. It is often performed during festivals and ceremonies. Today, K-pop is famous all around the world, with its energetic beats, catchy tunes, and colorful performances.',
    color: '#AB47BC',
    instrument: 'Gayageum',
    position: 15,
    videoLink: 'https://www.youtube.com/watch?v=9ZTxKqTw06g'
  },
  {
    id: 'argentina',
    type: 'location',
    name: 'Argentina',
    description: 'Argentina is famous for its passionate music and dance, especially tango. Tango music has a mix of sadness and romance, with dramatic melodies played on instruments like the violin, piano, and accordion. People dance tango in pairs, showing deep emotions with every step.',
    color: '#26C6DA',
    instrument: 'Bandoneón',
    position: 16,
    videoLink: 'https://www.youtube.com/watch?v=nqaQZgWdf94'
  },
  {
    id: 'turkey',
    type: 'location',
    name: 'Turkey',
    description: 'Turkish music is a mix of sounds from Asia, Europe, and the Middle East. Traditional music uses special rhythms and scales called makams. People often sing or play instruments during weddings, celebrations, and religious ceremonies. Modern Turkish pop music is also very popular today.',
    color: '#FF8A65',
    instrument: 'Saz',
    position: 17,
    videoLink: 'https://www.youtube.com/watch?v=HZv8UFp-LGc'
  },
  {
    id: 'scotland',
    type: 'location',
    name: 'Scotland',
    description: 'Scottish music is known for its strong melodies and rhythms. It is often played during festivals and big events like weddings. People love to dance to traditional music, especially during ceilidhs, which are big social dances. The songs often tell stories of Scotland\'s history and beautiful landscapes.',
    color: '#5C6BC0',
    instrument: 'Bagpipes',
    position: 18,
    videoLink: 'https://www.youtube.com/watch?v=3X9LvC9WkkQ'
  },
  {
    id: 'vietnam',
    type: 'location',
    name: 'Vietnam',
    description: 'Vietnamese music is peaceful and often inspired by nature. Traditional music is played during celebrations and ceremonies, with gentle singing and poetic lyrics. People use music to express their feelings and share stories from the past.',
    color: '#66BB6A',
    instrument: 'Đàn bầu',
    position: 19,
    videoLink: 'https://www.youtube.com/watch?v=8Vp7TmTfVZg'
  },
  {
    id: 'hungary',
    type: 'location',
    name: 'Hungary',
    description: 'Hungarian music is lively and often tells stories about the countryside and traditions. Folk music is very important, and it uses strong rhythms and fast melodies. Many dances, like the csárdás, are accompanied by this vibrant music. Hungary also has famous classical composers, like Franz Liszt.',
    color: '#FF4081',
    instrument: 'Cimbalom',
    position: 20,
    videoLink: 'https://www.youtube.com/watch?v=dq0_G4K5WU4'
  },
  {
    id: 'indonesia',
    type: 'location',
    name: 'Indonesia',
    description: 'Indonesia has rich musical traditions across its many islands. The angklung, made of bamboo tubes, creates beautiful sounds when shaken. Each plays one note, so people work together to make songs!',
    color: '#FFA000',
    instrument: 'Angklung',
    position: 21,
    videoLink: 'https://www.youtube.com/watch?v=4KQJZ9P_HDw'
  },
  {
    id: 'jamaica',
    type: 'location',
    name: 'Jamaica',
    description: 'Feel the rhythm of reggae and the steel drums!',
    color: '#43A047',
    instrument: 'Steel Drums',
    position: 22,
    videoLink: 'https://www.youtube.com/watch?v=g5RMcqBnvJI'
  }
];