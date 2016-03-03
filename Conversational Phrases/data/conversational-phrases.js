const data = [
  {
    "start": "4.73",
    "end": "5.87",
    "mix": "Ándéé bàʼandó?",
    "spa": "Están Uds. bien? (formal)",
    "eng": "Are you doing well? (pl. formal)"
  },
  {
    "start": "11.055",
    "end": "11.885",
    "mix": "Ándééndó?",
    "spa": "Cómo están Uds.?",
    "eng": "How are you? (pl. formal)"
  },
  {
    "start": "16.101",
    "end": "17.161",
    "mix": "Ayóo bàʼún?",
    "spa": "Está Ud. bien? (formal)",
    "eng": "Are you doing well? (sg. formal)"
  },
  {
    "start": "20.518",
    "end": "21.388",
    "mix": "Ayôún?",
    "spa": "Cómo está Ud.?",
    "eng": "How are you? (sg. formal)"
  },
  {
    "start": "25.395",
    "end": "26.095",
    "mix": "bàʼa",
    "spa": "bueno",
    "eng": "good"
  },
  {
    "start": "27.678",
    "end": "28.468",
    "mix": "bàʼá",
    "spa": "malo",
    "eng": "bad"
  },
  {
    "start": "33.004",
    "end": "33.874",
    "mix": "bàʼa ba",
    "spa": "bien, bueno",
    "eng": "well, good"
  },
  {
    "start": "38.592",
    "end": "40.012",
    "mix": "Chaʼbi bàʼa tontoún.",
    "spa": "Muchisimas gracias.",
    "eng": "Thank you (sg.) very much."
  },
  {
    "start": "48.056",
    "end": "49.166",
    "mix": "Chaʼbi bàʼún.",
    "spa": "Gracias. (sg.)",
    "eng": "Thank you. (sg.)"
  },
  {
    "start": "52.018",
    "end": "52.848",
    "mix": "Chaʼbi ún.",
    "spa": "Gracias. (sg.)",
    "eng": "Thank you. (sg.)"
  },
  {
    "start": "57.887",
    "end": "58.947",
    "mix": "Chaʼbi miún.",
    "spa": "Gracias a tí.",
    "eng": "Thank *you*. (sg.)"
  },
  {
    "start": "67.14",
    "end": "68.14",
    "mix": "Iʼní ndiaʼí.",
    "spa": "Soy enojana.",
    "eng": "I'm an angry person."
  },
  {
    "start": "72.062",
    "end": "73.742",
    "mix": "Kasa káʼnu innú xàʼí.",
    "spa": "Lo siento.",
    "eng": "I'm sorry."
  },
  {
    "start": "77.909",
    "end": "78.589",
    "mix": "kaʼà",
    "spa": "hablar",
    "eng": "to speak"
  },
  {
    "start": "83.403",
    "end": "84.183",
    "mix": "Káʼandó.",
    "spa": "Digama. (teléfono)",
    "eng": "Talk to me. (phone)"
  },
  {
    "start": "87.384",
    "end": "88.124",
    "mix": "kìbi",
    "spa": "nombre",
    "eng": "name"
  },
  {
    "start": "91.419",
    "end": "92.459",
    "mix": "Kìbi kúú ...",
    "spa": "Mi nombre es ...",
    "eng": "My name is ..."
  },
  {
    "start": "96.259",
    "end": "97.119",
    "mix": "Kwaʼan beí.",
    "spa": "Adios.",
    "eng": "Goodbye."
  },
  {
    "start": "101.18",
    "end": "101.97",
    "mix": "Kwaʼìn.",
    "spa": "Me voy.",
    "eng": "I'm leaving."
  },
  {
    "start": "106.296",
    "end": "107.296",
    "mix": "Ḿmḿ.",
    "spa": "Sí.",
    "eng": "Uh huh."
  },
  {
    "start": "111.287",
    "end": "112.867",
    "mix": "Ña kusana kúá.",
    "spa": "Fue accidental.",
    "eng": "It was an accident."
  },
  {
    "start": "117.565",
    "end": "118.385",
    "mix": "nana",
    "spa": "madre",
    "eng": "madam"
  },
  {
    "start": "124.324",
    "end": "125.504",
    "mix": "Ndàcha naníún?",
    "spa": "Cual es tu nombre?",
    "eng": "What's your name?"
  },
  {
    "start": "130.842",
    "end": "132.1",
    "mix": "Ndàcha yóo miún?",
    "spa": "Y cómo estás tú? (informal)",
    "eng": "And how are you? (sg. informal)"
  },
  {
    "start": "140.487",
    "end": "142.237",
    "mix": "Ndakúá kúbi chindééndí ndóʼo?",
    "spa": "En qué podemos ayudar Uds.?",
    "eng": "How can we help you? (pl.)"
  },
  {
    "start": "146.329",
    "end": "147.359",
    "mix": "Ndéé bàʼa bandí.",
    "spa": "Estámos bien.",
    "eng": "We're good."
  },
  {
    "start": "150.443",
    "end": "151.403",
    "mix": "Ndéé bàʼandó?",
    "spa": "Están Uds. bien? (informal)",
    "eng": "Are you doing good? (pl. informal)"
  },
  {
    "start": "155.687",
    "end": "156.617",
    "mix": "Ndééndóʼo.",
    "spa": "Cómo están Uds.? (informal)",
    "eng": "How are you? (pl. informal)"
  },
  {
    "start": "158.35",
    "end": "159.16",
    "mix": "tata",
    "spa": "padre",
    "eng": "sir"
  },
  {
    "start": "161.999",
    "end": "162.749",
    "mix": "tuʼun",
    "spa": "lengua",
    "eng": "language"
  },
  {
    "start": "167.071",
    "end": "168.051",
    "mix": "Tuʼun Ndáʼbi",
    "spa": "Mixteco",
    "eng": "Mixtec"
  },
  {
    "start": "172.171",
    "end": "173.161",
    "mix": "Tuʼun Sàbí",
    "spa": "Mixteco (formal)",
    "eng": "Mixtec (formal)"
  },
  {
    "start": "175.631",
    "end": "176.611",
    "mix": "Xitaànga.",
    "spa": "Hasta mañana.",
    "eng": "Until later."
  },
  {
    "start": "188.37",
    "end": "189.99",
    "mix": "Yôí kìbi biti.",
    "spa": "???",
    "eng": "???"
  },
  {
    "start": "195.901",
    "end": "196.901",
    "mix": "Yóo bàʼa beí.",
    "spa": "Estoy bien.",
    "eng": "I'm doing good."
  },
  {
    "start": "202.932",
    "end": "203.792",
    "mix": "Yóo bàʼún?",
    "spa": "Estás bien? (informal)",
    "eng": "Are you doing good? (sg. informal)"
  },
  {
    "start": "206.311",
    "end": "207.141",
    "mix": "Yóo beí.",
    "spa": "Estoy bien.",
    "eng": "I'm good."
  },
  {
    "start": "215.889",
    "end": "216.749",
    "mix": "Yôún?",
    "spa": "Cómo estás? (informal)",
    "eng": "How are you? (sg. informal)"
  }
];
