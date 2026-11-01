export interface WeddingEvent {
  name: string;
  nameHindi: string;
  date: string;
  day: string;
  time: string;
  venue: string;
  address: string;
  description?: string;
}

export interface Couple {
  bride: {
    name: string;
    nameHindi: string;
    fatherName: string;
    fatherNameHindi: string;
    residence: string;
  };
  groom: {
    name: string;
    nameHindi: string;
    fatherName: string;
    fatherNameHindi: string;
    residence: string;
  };
}

export interface Wedding {
  id: string;
  couple: Couple;
  mainCeremonyDate: Date;
  events: WeddingEvent[];
  venues: {
    main: {
      name: string;
      address: string;
      mapLink: string;
    };
  };
}

// Wedding 2: Vi. Bijendra weds Aayu. Priyanka
export const wedding2: Wedding = {
  id: 'bijendra-priyanka',
  couple: {
    groom: {
      name: 'Bijendra',
      nameHindi: 'बिजेन्द्र',
      fatherName: 'Late Shri Subhash Yadav',
      fatherNameHindi: 'स्व. श्री सुभाष यादव',
      residence: 'Gunti, Behror (Raj.)',
    },
    bride: {
      name: 'Priyanka',
      nameHindi: 'प्रियंका',
      fatherName: 'Shri Vikram Ji Yadav',
      fatherNameHindi: 'श्री विक्रम जी यादव',
      residence: 'Khedki, Mahendergarh (Hariyana)',
    },
  },
  mainCeremonyDate: new Date('2026-12-04T17:15:00+05:30'), // December 4, 2026, 5:15 PM (Baraat Prathan)
  events: [
    {
      name: 'Lagn - Tika',
      nameHindi: 'लग्न - टीका',
      date: '2026-12-02',
      day: 'Tuesday',
      time: 'Evening 3:15 PM',
      venue: 'Gunti',
      address: 'Gunti,  Behror, Kotputli-Behror (Raj.)',
      description: 'Musical evening celebration with family',
    },
    {
      name: 'Bhaat',
      nameHindi: 'भात',
      date: '2026-12-02',
      day: 'Tuesday',
      time: 'Evening 4:15 PM',
      venue: 'Gunti',
      address: 'Gunti,  Behror, Kotputli-Behror (Raj.)',
      description: 'Traditional Bhaat ceremony',
    },
    {
      name: 'Preeti bhoj',
      nameHindi: 'प्रीतिभोज',
      date: '2026-12-02',
      day: 'Tuesday',
      time: 'Evening 4:15 PM onwards',
      venue: 'Gunti',
      address: 'Gunti,  Behror, Kotputli-Behror (Raj.)',
      description: 'Representative ceremony',
    },
    {
      name: 'chaak',
      nameHindi: 'चाक',
      date: '2026-12-03',
      day: 'Wednesday',
      time: 'Evening 4:15 PM',
      venue: 'Gunti',
      address: 'Gunti,  Behror, Kotputli-Behror (Raj.)',
      description: 'Traditional chaak ceremony',
    },
    {
      name: 'Nikasi',
      nameHindi: 'निकासी',
      date: '2026-12-04',
      day: 'Thursday',
      time: 'Evening 4:15 PM',
      venue: 'Gunti',
      address: 'Gunti,  Behror, Kotputli-Behror (Raj.)',
      description: 'Nikasi ceremony',
    },
    {
      name: 'Baraat Prasthan',
      nameHindi: 'बारात प्रस्थान',
      date: '2026-12-04',
      day: 'Thursday',
      time: 'Evening 5:15 PM',
      venue: 'Gunti',
      address: 'Gunti,  Behror, Kotputli-Behror (Raj.)',
      description: 'Groom\'s procession departure',
    },
  ],
  venues: {
    main: {
      name: 'Gunti',
      address: 'Gunti,  Behror, Kotputli-Behror (Rajasthan)',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Gunti+Behror+Karauli+Rajasthan',
    },
  },
};

// Wedding 1: Aayu. Ekta weds Vi. Vikas
export const wedding1: Wedding = {
  id: 'ekta-vikas',
  couple: {
    bride: {
      name: 'Ekta',
      nameHindi: 'एकता',
      fatherName: 'Late Shri Subhash Yadav',
      fatherNameHindi: 'स्व. श्री सुभाष यादव',
      residence: 'Gunti, Behror (Raj.)',
    },
    groom: {
      name: 'Vikas',
      nameHindi: 'विकास',
      fatherName: 'Shri Ashok Ji Yadav',
      fatherNameHindi: 'श्री अशोक जी यादव',
      residence: 'Kankhi, Narsail, Mahendergarh (Hariyana)',
    },
  },
  mainCeremonyDate: new Date('2026-12-02T18:15:00+05:30'), // December 2, 2026, 6:15 PM (Baraat Swagat)
  events: [
    {
      name: 'Mahila Sangeet',
      nameHindi: 'महिला संगीत',
      date: '2026-12-01',
      day: 'Tuesday',
      time: 'Evening 2:15 PM',
      venue: 'Gunti',
      address: 'Gunti, Teh. Bahror, Kotputli-Behror (Raj.)',
      description: 'Evening music celebration with family and friends',
    },
    {
      name: 'Chaak',
      nameHindi: 'चाक',
      date: '2026-12-01',
      day: 'Tuesday',
      time: 'Evening 4:15 PM',
      venue: 'Gunti',
      address: 'Gunti,  Behror, Kotputli-Behror (Raj.)',
      description: 'Traditional Chaak ceremony',
    },
     {
      name: 'Bhaat',
      nameHindi: 'भात',
      date: '2026-12-02',
      day: 'Wednesday',
      time: 'Evening 4:15 PM',
      venue: 'Gunti',
      address: 'Gunti,  Behror, Kotputli-Behror (Raj.)',
      description: 'Traditional Bhaat ceremony',
    },
    {
      name: 'Baraat Swagat',
      nameHindi: 'बारात स्वागत',
      date: '2026-12-02',
      day: 'Wednesday',
      time: 'Evening 6:15 PM',
      venue: 'Gunti',
      address: 'Gunti,  Behror, Kotputli-Behror (Raj.)',
      description: 'Groom\'s procession welcome',
    },
    {
      name: 'Maanglik Sanskar',
      nameHindi: 'मांगलिक संस्कार',
      date: '2026-12-02',
      day: 'Wednesday',
      time: 'As per rituals',
      venue: 'Gunti',
      address: 'Gunti,  Behror, Kotputli-Behror (Raj.)',
      description: 'Sacred wedding ceremony and auspicious rituals',
    },
    {
      name: 'Vidai',
      nameHindi: 'विदाई',
      date: '2026-12-02',
      day: 'Wednesday',
      time: 'In the shade of the stars',
      venue: 'Gunti',
      address: 'Gunti,  Behror, Kotputli-Behror (Raj.)',
      description: 'Farewell ceremony for the bride',
    },
  ],
  venues: {
    main: {
      name: 'Gunti',
      address: 'Gunti,  Behror, Kotputli-Behror (Rajasthan)',
      mapLink:  'https://www.google.com/maps/search/?api=1&query=Dr+HP+Jaivik%2C+Gunti%2C+Lalwala%2C+Behror%2C+Rajasthan+301701',
    },
  },
};

export const hostFamily = {
  hosts: [
    'Sultan Singh Yadav',
    'Guganram Yadav',
    'Er. Mahipal Yadav',
  ],
  hostsHindi: [
    'सुलतान सिंह यादव',
    'गुगनराम यादव',
    'महीपाल यादव',
  ],
  contact: ['7742657900', '9928518944'],
  residence: 'Gunti, Behror, Behror-Kotputli, Rajasthan',
  invitation: {
    organizer: 'Lalwala Family',
    organizerHindi: 'लालवाला परिवार',
  },
};

export const blessings = {
  sanskrit: '|| श्री गणेशाय नमः ||',
  verse1: 'वक्रतुण्ड महाकाय, सूर्य कोटि समप्रभः।',
  verse2: 'निर्विघ्नं कुरु मे देव, सर्व कार्येषु सर्वदा।।',
  message: 'परम पिता परमात्मा की असीम अनुकृपा से',
};

export const allWeddings = [wedding1, wedding2];
