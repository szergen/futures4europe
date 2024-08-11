const mockPost = (pageTitle: string) => {
  return {
    title: pageTitle,
    pageType: 'Event',
    postType: ['Editorial', 'Event'],
    eventDate: {
      start: '2021-10-10',
      end: '2021-10-12',
    },
    registrationLink:
      'https://futures-garden-human-perception-identity.eventbrite.de',
    postDate: '2021-10-09',
    subtitle:
      'Deep-Learning and HPC to Boost Biomedical Applications for Health',
    content: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
    <a href="https://google.com">https://google.com</a></p>
    <p>https://google.com</p>
    <p>https://google.com</p>
    `,
    countryTag: {
      tagText: 'Italy',
      tagCounter: 253,
    },
    recommendations: {
      number: 3,
      images: [
        'https://picsum.photos/id/192/30/30',
        'https://picsum.photos/id/190/30/30',
        'https://picsum.photos/id/193/30/30',
      ],
    },
    views: 320,
    authors: [
      {
        name: 'Eva Pericolini',
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/person/Eva_Pericolini',
      },
    ],
    projectAuthors: [
      {
        tagText: 'Eva Pericolini',
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/person/Eva_Pericolini',
      },
      {
        tagText: 'Dan Lardsen',
        thumbnail: 'https://picsum.photos/id/165/147/147',
        href: '/person/Eva_Pericolini',
      },
      {
        tagText: 'Ava Pericolini',
        thumbnail: 'https://picsum.photos/id/175/147/147',
        href: '/person/Eva_Pericolini',
      },
    ],
    project: {
      tagText: 'Project H2020',
      tagCounter: 253,
      thumbnail: 'https://picsum.photos/id/155/147/147',
      href: '/project/H2020',
    },
    organisation: {
      tagText: 'ISINOVA',
      tagCounter: 253,
      thumbnail: 'https://picsum.photos/id/155/147/147',
      href: '/organisation/ISINOVA',
    },
    eventSpeakers: [
      {
        tagText: 'Eva Pericolini',
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/person/Eva_Pericolini',
      },
      {
        tagText: 'Eva Pericolini',
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/person/Eva_Pericolini',
      },
      {
        tagText: 'Eva Pericolini',
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/person/Eva_Pericolini',
      },
    ],
    foreSightMethods: [
      {
        tagText: 'Horizon Scanning',
        tagCounter: 253,
      },
      {
        tagText: 'Delphi Method',
        tagCounter: 153,
        href: 'https://google.com',
        thumbnail: 'https://picsum.photos/id/185/300/300',
      },
    ],
    domains: [
      {
        tagText: 'Biology',
        tagCounter: 253,
      },
      {
        tagText: 'Infectious Diseases',
        tagCounter: 153,
      },
      {
        tagText: 'Imune Response',
        tagCounter: 73,
      },
      {
        tagText: 'Innate Immunity',
        tagCounter: 55,
      },
      {
        tagText: 'Cell Culture',
        tagCounter: 45,
      },
      {
        tagText: 'T Cells',
        tagCounter: 23,
      },
    ],
    files: [
      {
        href: '/files/1.pdf',
        title: 'Styleguide',
        fileSize: '2.3 MB',
        format: 'PDF',
      },
      {
        href: '/files/2.pdf',
        title: 'Description',
        fileSize: '2.1 MB',
        format: 'PDF',
      },
    ],
    projectResultFile: {
      href: 'https://framerusercontent.com/images/F46jYRatmGwgDHnyDPIaUs1us.png?scale-down-to=1024',
      title: 'Project Result Guide',
      fileSize: '2.5 MB',
      format: 'PDF',
    },
    links: [
      {
        href: 'https://google.com',
        description:
          'Anticipation and monitoring of emerging technologies and disruptive innovation',
      },
      {
        href: 'https://google.com',
        description:
          'An Interview of transforming Innovation Ecosystems Towards Sustainability',
      },
      {
        href: 'https://google.com',
        description: ' NEXT conference overview',
      },
    ],
    speakers: [
      {
        name: 'Eva Pericolini',
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/person/Eva_Pericolini',
      },
      {
        name: 'Eva Pericolini',
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/person/Eva_Pericolini',
      },
      {
        name: 'Eva Pericolini',
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/person/Eva_Pericolini',
      },
    ],
    eventHostOrganisations: [
      {
        tagText: 'European Commission',
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/organisation/European_Commission',
      },
      {
        tagText: 'French National Centre for Scientific Research',
        thumbnail: 'https://picsum.photos/id/154/147/147',
        href: '/organisation/European_Commission',
      },
      {
        tagText: 'ISINOVA',
        thumbnail: 'https://picsum.photos/id/153/147/147',
        href: '/organisation/European_Commission',
      },
    ],
    people: [
      {
        tagText: 'Eva Pericolini',
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/person/Eva_Pericolini',
      },
      {
        tagText: 'Dan Lardsen',
        thumbnail: 'https://picsum.photos/id/165/147/147',
        href: '/person/Eva_Pericolini',
      },
      {
        tagText: 'Ava Pericolini',
        thumbnail: 'https://picsum.photos/id/175/147/147',
        href: '/person/Eva_Pericolini',
      },
    ],
    participants: [
      {
        tagText: 'Eva Pericolini',
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/person/Eva_Pericolini',
      },
      {
        tagText: 'Dan Lardsen',
        thumbnail: 'https://picsum.photos/id/165/147/147',
        href: '/person/Eva_Pericolini',
      },
      {
        tagText: 'Ava Pericolini',
        thumbnail: 'https://picsum.photos/id/175/147/147',
        href: '/person/Eva_Pericolini',
      },
    ],
  };
};

const mockPerson = (pageTitle: string) => {
  return {
    title: pageTitle,
    tagLine:
      'Sail away from the safe harbor - Catch the trade winds in your sails',
    image: 'https://picsum.photos/id/155/147/147',
    personPopularity: 253,
    linkedinLink: 'https://facebook.com',
    researchGateLink: 'https://linkedin.com',
    orcidIDLink: 'https://orcid.com',
    pageType: 'Person Info',
    postType: 'Person',
    publishedDate: '2021-10-09',
    description:
      'Eva Pericolini graduated in Pharmacy in 2003 at the University of Perugia and obtained a Ph.D. in “Molecular pathogenesis, immunology and control of transmitting agents causing the principle diseases associated with poverty: malaria, AIDS and tuberculosis” in 2010 at the University of Perugia, Department of Experimental Medicine.',
    countryTag: {
      tagText: 'Italy',
      tagCounter: 253,
    },
    personRoles: [
      {
        tagText: 'Biology',
        tagCounter: 253,
      },
      {
        tagText: 'Infectious Diseases',
        tagCounter: 153,
      },
      {
        tagText: 'Imune Response',
        tagCounter: 153,
      },
    ],
    recommendations: {
      number: 3,
      images: [
        'https://picsum.photos/id/192/30/30',
        'https://picsum.photos/id/190/30/30',
        'https://picsum.photos/id/193/30/30',
      ],
    },
    views: 320,
    projectsCoordindation: [
      {
        tagText: 'Project H2020',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/project/H2020',
        arole: 'Coordinator',
      },
      {
        tagText: 'Project H2020',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/project/H2020',
        arole: '',
      },
      {
        tagText: 'Project H2020',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/project/H2020',
        arole: '',
      },
    ],
    projectsParticipation: [
      {
        tagText: 'Project H2020',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/project/H2020',
        arole: 'Coordinator',
      },
      {
        tagText: 'Project H2020',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/project/H2020',
        arole: '',
      },
      {
        tagText: 'Project H2020',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/project/H2020',
        arole: '',
      },
    ],
    currentAfiliations: [
      {
        tagText: 'ISINOVA',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/organisation/ISINOVA',
        arole: 'Professor of Foresight, Strategy and Innovation',
      },
      {
        tagText: 'UEFISCDI',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/145/147/147',
        href: '/organisation/ISINOVA',
        arole: 'Professor of Quantum Computing',
      },
    ],
    formerAfiliations: [
      {
        tagText: 'ISINOVA',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/organisation/ISINOVA',
        arole: 'Professor of Foresight, Strategy and Innovation',
      },
      {
        tagText: 'UEFISCDI',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/145/147/147',
        href: '/organisation/ISINOVA',
        arole: 'Professor of Quantum Computing',
      },
    ],
    foreSightMethods: [
      {
        tagText: 'Horizon Scanning',
        tagCounter: 253,
      },
      {
        tagText: 'Delphi Method',
        tagCounter: 153,
        href: 'https://google.com',
        thumbnail: 'https://picsum.photos/id/185/300/300',
      },
    ],
    domains: [
      {
        tagText: 'Biology',
        tagCounter: 253,
      },
      {
        tagText: 'Infectious Diseases',
        tagCounter: 153,
      },
      {
        tagText: 'Imune Response',
        tagCounter: 73,
      },
      {
        tagText: 'Innate Immunity',
        tagCounter: 55,
      },
      {
        tagText: 'Cell Culture',
        tagCounter: 45,
      },
      {
        tagText: 'T Cells',
        tagCounter: 23,
      },
    ],
    files: [
      {
        href: '/files/1.pdf',
        title: 'Styleguide',
        fileSize: '2.3 MB',
        format: 'PDF',
      },
      {
        href: '/files/2.pdf',
        title: 'Description',
        fileSize: '2.1 MB',
        format: 'PDF',
      },
    ],
    links: [
      {
        href: 'https://google.com',
        description:
          'Anticipation and monitoring of emerging technologies and disruptive innovation',
      },
      {
        href: 'https://google.com',
        description:
          'An Interview of transforming Innovation Ecosystems Towards Sustainability',
      },
      {
        href: 'https://google.com',
        description: ' NEXT conference overview',
      },
    ],
  };
};

const mockOrganisation = (pageTitle: string) => {
  return {
    title: pageTitle,
    tagLine:
      'Driven by intellectual creativity and critical thinking since 1479',
    image: 'https://picsum.photos/id/136/147/147',
    organisationPopularity: 253,
    linkedinLink: 'https://facebook.com',
    organisationLink: 'https://linkedin.com',
    pageType: 'Organisation Info',
    postType: 'Organisation',
    publishedDate: '2021-10-09',
    establishedDate: '1999-10-09',
    description:
      'Driven by intellectual creativity and critical thinking since 1479, researchers and students at the University of Copenhagen have expanded horizons and contributed to moving the world forward. With its 5,000 researchers and 37,500 students, the University boasts an international research and study environment and is highly ranked among the worlds best universities.',
    countryTag: {
      tagText: 'Italy',
      tagCounter: 253,
    },
    recommendations: {
      number: 3,
      images: [
        'https://picsum.photos/id/192/30/30',
        'https://picsum.photos/id/190/30/30',
        'https://picsum.photos/id/193/30/30',
      ],
    },
    views: 320,
    projects: [
      {
        tagText: 'Project H2020',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/project/H2020',
        arole: 'Coordinator',
      },
      {
        tagText: 'Project H2020',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/project/H2020',
        arole: '',
      },
      {
        tagText: 'Project H2020',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/project/H2020',
        arole: '',
      },
    ],
    people: [
      {
        tagText: 'Eva Pericolini',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/organisation/ISINOVA',
        arole: 'Professor of Foresight, Strategy and Innovation',
      },
      {
        tagText: 'Dan Lardsen',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/145/147/147',
        href: '/organisation/ISINOVA',
        arole: 'Professor of Quantum Computing',
      },
    ],
    memberOrganisations: [
      {
        tagText: 'ISINOVA',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/organisation/ISINOVA',
        arole: 'Professor of Foresight, Strategy and Innovation',
      },
      {
        tagText: 'UEFISCDI',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/145/147/147',
        href: '/organisation/ISINOVA',
        arole: 'Professor of Quantum Computing',
      },
    ],
    memberOfOrganisations: [
      {
        tagText: 'Horizon Scanning',
        tagCounter: 253,
      },
      {
        tagText: 'Delphi Method',
        tagCounter: 153,
        href: 'https://google.com',
        thumbnail: 'https://picsum.photos/id/185/300/300',
      },
    ],
    domains: [
      {
        tagText: 'Biology',
        tagCounter: 253,
      },
      {
        tagText: 'Infectious Diseases',
        tagCounter: 153,
      },
      {
        tagText: 'Imune Response',
        tagCounter: 73,
      },
      {
        tagText: 'Innate Immunity',
        tagCounter: 55,
      },
      {
        tagText: 'Cell Culture',
        tagCounter: 45,
      },
      {
        tagText: 'T Cells',
        tagCounter: 23,
      },
    ],
    foreSightMethods: [
      {
        tagText: 'Horizon Scanning',
        tagCounter: 253,
      },
      {
        tagText: 'Delphi Method',
        tagCounter: 153,
        href: 'https://google.com',
        thumbnail: 'https://picsum.photos/id/185/300/300',
      },
    ],
    files: [
      {
        href: '/files/1.pdf',
        title: 'Styleguide',
        fileSize: '2.3 MB',
        format: 'PDF',
      },
      {
        href: '/files/2.pdf',
        title: 'Description',
        fileSize: '2.1 MB',
        format: 'PDF',
      },
    ],
    links: [
      {
        href: 'https://google.com',
        description:
          'Anticipation and monitoring of emerging technologies and disruptive innovation',
      },
      {
        href: 'https://google.com',
        description:
          'An Interview of transforming Innovation Ecosystems Towards Sustainability',
      },
      {
        href: 'https://google.com',
        description: ' NEXT conference overview',
      },
    ],
  };
};

const mockProject = (pageTitle: string) => {
  return {
    title: pageTitle,
    tagLine:
      'Deep-Learning and HPC to Boost Biomedical Applications for Health',
    image: 'https://picsum.photos/id/136/147/147',
    popularity: 253,
    euFunded: true,
    projectPeriod: {
      start: '2021-10-09',
      end: '2023-10-09',
    },
    linkedinLink: 'https://facebook.com',
    pageLink: 'https://linkedin.com',
    pageType: 'Project',
    publishedDate: '2021-10-09',
    establishedDate: '1999-10-09',
    description: `The so-called fourth paradigm of science is based on the unified
            environments of high-performance computing (HPC) and Big Data analytics.
            It is expected to considerably advance health scientific research and
            innovation. The EU-funded DeepHealth project will deliver HPC power at
            the service of biomedical applications and apply deep learning (DL)
            techniques on vast and compound biomedical data sets, aiming to underpin
            new and more effective methods of diagnosis, monitoring and treatment of
            diseases. The project will develop a resilient and scalable structure
            for the HPC + Big Data environment that will rely on two new libraries:
            the European Distributed Deep Learning Library (EDDLL) and the European
            Computer Vision Library (ECVL). The structure, after it is validated,
            will allow training of models and provide training data from different
            medical fields.`,
    countryTag: {
      tagText: 'Italy',
      tagCounter: 253,
    },
    recommendations: {
      number: 3,
      images: [
        'https://picsum.photos/id/192/30/30',
        'https://picsum.photos/id/190/30/30',
        'https://picsum.photos/id/193/30/30',
      ],
    },
    views: 320,
    coordinators: [
      {
        tagText: 'Project H2020',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/project/H2020',
        arole: 'Coordinator',
      },
      {
        tagText: 'Project H2020',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/project/H2020',
        arole: '',
      },
      {
        tagText: 'Project H2020',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/project/H2020',
        arole: '',
      },
    ],
    participants: [
      {
        tagText: 'Eva Pericolini',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/organisation/ISINOVA',
        arole: 'Professor of Foresight, Strategy and Innovation',
      },
      {
        tagText: 'Dan Lardsen',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/145/147/147',
        href: '/organisation/ISINOVA',
        arole: 'Professor of Quantum Computing',
      },
    ],
    organisations: [
      {
        tagText: 'ISINOVA',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/organisation/ISINOVA',
        arole: 'Coordintor',
      },
      {
        tagText: 'UEFISCDI',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/145/147/147',
        href: '/organisation/ISINOVA',
        arole: 'Partner',
      },
    ],
    domains: [
      {
        tagText: 'Biology',
        tagCounter: 253,
      },
      {
        tagText: 'Infectious Diseases',
        tagCounter: 153,
      },
      {
        tagText: 'Imune Response',
        tagCounter: 73,
      },
      {
        tagText: 'Innate Immunity',
        tagCounter: 55,
      },
      {
        tagText: 'Cell Culture',
        tagCounter: 45,
      },
      {
        tagText: 'T Cells',
        tagCounter: 23,
      },
    ],
    foreSightMethods: [
      {
        tagText: 'Horizon Scanning',
        tagCounter: 253,
      },
      {
        tagText: 'Delphi Method',
        tagCounter: 153,
        href: 'https://google.com',
        thumbnail: 'https://picsum.photos/id/185/300/300',
      },
    ],
    files: [
      {
        href: '/files/1.pdf',
        title: 'Styleguide',
        fileSize: '2.3 MB',
        format: 'PDF',
      },
      {
        href: '/files/2.pdf',
        title: 'Description',
        fileSize: '2.1 MB',
        format: 'PDF',
      },
    ],
    links: [
      {
        href: 'https://google.com',
        description:
          'Anticipation and monitoring of emerging technologies and disruptive innovation',
      },
      {
        href: 'https://google.com',
        description:
          'An Interview of transforming Innovation Ecosystems Towards Sustainability',
      },
      {
        href: 'https://google.com',
        description: ' NEXT conference overview',
      },
    ],
  };
};

const posts = [
  {
    title: 'ORION: Meet Your Co-Pilot in Horizon Scanning',
    date: '12.02.2022',
    image: 'https://picsum.photos/id/193/180/180',
    text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation at the Faculty of Economics and Management at the University of Lisbon.',
    tags: [
      { tagText: 'Emerging technologies', tagCounter: 253 },
      { tagText: 'EU&RI policy', tagCounter: 153 },
    ],
    recommendations: {
      number: 3,
      images: [
        'https://picsum.photos/id/192/30/30',
        'https://picsum.photos/id/190/30/30',
        'https://picsum.photos/id/193/30/30',
      ],
    },
  },
  {
    title: 'With Big Tech comes Big (Ethical) Responsibility',
    date: '12.02.2022',
    image: 'https://picsum.photos/id/191/180/180',
    text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation ',
    tags: [
      { tagText: 'Emerging technologies', tagCounter: 253 },
      { tagText: 'EU&RI policy', tagCounter: 153 },
    ],
    recommendations: {
      number: 5,
      images: [
        'https://picsum.photos/id/192/30/30',
        'https://picsum.photos/id/190/30/30',
        'https://picsum.photos/id/191/30/30',
        'https://picsum.photos/id/195/30/30',
        'https://picsum.photos/id/196/30/30',
      ],
    },
  },
  {
    title:
      'Prevention and treatment of autoimmune diseases with plant virus nanoparticles',
    date: '12.02.2022',
    image: 'https://picsum.photos/id/194/180/180',
    text: 'Paulo Carvalho has been working in the field of futures',
    tags: [
      { tagText: 'Emerging technologies', tagCounter: 253 },
      { tagText: 'EU&RI policy', tagCounter: 153 },
      { tagText: 'Emerging technologies', tagCounter: 253 },
      { tagText: 'EU&RI policy', tagCounter: 153 },
      { tagText: 'Emerging technologies', tagCounter: 253 },
    ],
    recommendations: {
      number: 3,
      images: [
        'https://picsum.photos/id/192/30/30',
        'https://picsum.photos/id/190/30/30',
        'https://picsum.photos/id/191/30/30',
      ],
    },
  },
  {
    title: 'ORION: Meet Your Co-Pilot in Horizon Scanning',
    date: '12.02.2022',
    image: 'https://picsum.photos/id/199/180/180',
    text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation at the Faculty of Economics and Management at the University of Lisbon.',
    tags: [
      { tagText: 'Emerging technologies', tagCounter: 253 },
      { tagText: 'EU&RI policy', tagCounter: 153 },
    ],
    recommendations: {
      number: 3,
      images: [
        'https://picsum.photos/id/192/30/30',
        'https://picsum.photos/id/190/30/30',
        'https://picsum.photos/id/191/30/30',
      ],
    },
  },
];

const projectResults = [
  {
    title: 'ORION: Meet Your Co-Pilot in Horizon Scanning',
    date: '12.02.2022',
    image: 'https://picsum.photos/id/193/180/180',
    project: {
      tagText: 'ORION',
      tagCounter: 253,
      thumbnail: 'https://picsum.photos/id/125/500/500',
    },
    text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation at the Faculty of Economics and Management at the University of Lisbon.',
    tags: [
      { tagText: 'Emerging technologies', tagCounter: 253 },
      { tagText: 'EU&RI policy', tagCounter: 153 },
    ],
    recommendations: {
      number: 3,
      images: [
        'https://picsum.photos/id/192/30/30',
        'https://picsum.photos/id/190/30/30',
        'https://picsum.photos/id/191/30/30',
      ],
    },
  },
  {
    title: 'Project Title',
    date: '12.02.2022',
    image: 'https://picsum.photos/id/201/180/180',
    project: {
      tagText: 'Project Tag',
      tagCounter: 253,
      thumbnail: 'https://picsum.photos/id/127/500/500',
    },
    text: 'Project description goes here',
    tags: [
      { tagText: 'Tag 1', tagCounter: 253 },
      { tagText: 'Tag 2', tagCounter: 153 },
    ],
    recommendations: {
      number: 3,
      images: [
        'https://picsum.photos/id/192/30/30',
        'https://picsum.photos/id/190/30/30',
        'https://picsum.photos/id/191/30/30',
      ],
    },
  },
  {
    title: 'ORION: Meet Your Co-Pilot in Horizon Scanning',
    date: '12.02.2022',
    image: 'https://picsum.photos/id/193/180/180',
    project: {
      tagText: 'ORION',
      tagCounter: 253,
      thumbnail: 'https://picsum.photos/id/125/500/500',
    },
    text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation at the Faculty of Economics and Management at the University of Lisbon.',
    tags: [
      { tagText: 'Emerging technologies', tagCounter: 253 },
      { tagText: 'EU&RI policy', tagCounter: 153 },
    ],
    recommendations: {
      number: 3,
      images: [
        'https://picsum.photos/id/192/30/30',
        'https://picsum.photos/id/190/30/30',
        'https://picsum.photos/id/191/30/30',
      ],
    },
  },
  {
    title: 'ORION: Meet Your Co-Pilot in Horizon Scanning',
    date: '12.02.2022',
    image: 'https://picsum.photos/id/193/180/180',
    project: {
      tagText: 'ORION',
      tagCounter: 253,
      thumbnail: 'https://picsum.photos/id/125/500/500',
    },
    text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation at the Faculty of Economics and Management at the University of Lisbon.',
    tags: [
      { tagText: 'Emerging technologies', tagCounter: 253 },
      { tagText: 'EU&RI policy', tagCounter: 153 },
    ],
    recommendations: {
      number: 3,
      images: [
        'https://picsum.photos/id/192/30/30',
        'https://picsum.photos/id/190/30/30',
        'https://picsum.photos/id/191/30/30',
      ],
    },
  },
];
const events = [
  {
    role: 'Speaker',
    title: 'ORION: Meet Your Co-Pilot in Horizon Scanning',
    date: '12.02.2022',
    image: 'https://picsum.photos/id/193/180/180',
    project: {
      tagText: 'ORION',
      tagCounter: 253,
      thumbnail: 'https://picsum.photos/id/125/500/500',
    },
    text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation at the Faculty of Economics and Management at the University of Lisbon.',
    tags: [
      { tagText: 'Emerging technologies', tagCounter: 253 },
      { tagText: 'EU&RI policy', tagCounter: 153 },
    ],
    recommendations: {
      number: 3,
      images: [
        'https://picsum.photos/id/192/30/30',
        'https://picsum.photos/id/190/30/30',
        'https://picsum.photos/id/191/30/30',
      ],
    },
  },
  {
    role: 'Participant',
    title: 'ORION: Meet Your Co-Pilot in Horizon Scanning',
    date: '12.02.2022',
    image: 'https://picsum.photos/id/193/180/180',
    project: {
      tagText: 'ORION',
      tagCounter: 253,
      thumbnail: 'https://picsum.photos/id/125/500/500',
    },
    text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation at the Faculty of Economics and Management at the University of Lisbon.',
    tags: [
      { tagText: 'Emerging technologies', tagCounter: 253 },
      { tagText: 'EU&RI policy', tagCounter: 153 },
    ],
    recommendations: {
      number: 3,
      images: [
        'https://picsum.photos/id/192/30/30',
        'https://picsum.photos/id/190/30/30',
        'https://picsum.photos/id/191/30/30',
      ],
    },
  },
  {
    role: 'Speaker',
    title: 'ORION: Meet Your Co-Pilot in Horizon Scanning',
    date: '12.02.2022',
    image: 'https://picsum.photos/id/193/180/180',
    project: {
      tagText: 'ORION',
      tagCounter: 253,
      thumbnail: 'https://picsum.photos/id/125/500/500',
    },
    text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation at the Faculty of Economics and Management at the University of Lisbon.',
    tags: [
      { tagText: 'Emerging technologies', tagCounter: 253 },
      { tagText: 'EU&RI policy', tagCounter: 153 },
    ],
    recommendations: {
      number: 3,
      images: [
        'https://picsum.photos/id/192/30/30',
        'https://picsum.photos/id/190/30/30',
        'https://picsum.photos/id/191/30/30',
      ],
    },
  },
  {
    role: 'Speaker',
    title: 'ORION: Meet Your Co-Pilot in Horizon Scanning',
    date: '12.02.2022',
    image: 'https://picsum.photos/id/193/180/180',
    project: {
      tagText: 'ORION',
      tagCounter: 253,
      thumbnail: 'https://picsum.photos/id/125/500/500',
    },
    text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation at the Faculty of Economics and Management at the University of Lisbon.',
    tags: [
      { tagText: 'Emerging technologies', tagCounter: 253 },
      { tagText: 'EU&RI policy', tagCounter: 153 },
    ],
    recommendations: {
      number: 3,
      images: [
        'https://picsum.photos/id/192/30/30',
        'https://picsum.photos/id/190/30/30',
        'https://picsum.photos/id/191/30/30',
      ],
    },
  },
  {
    role: 'Speaker',
    title: 'ORION: Meet Your Co-Pilot in Horizon Scanning',
    date: '12.02.2022',
    image: 'https://picsum.photos/id/193/180/180',
    project: {
      tagText: 'ORION',
      tagCounter: 253,
      thumbnail: 'https://picsum.photos/id/125/500/500',
    },
    text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation at the Faculty of Economics and Management at the University of Lisbon.',
    tags: [
      { tagText: 'Emerging technologies', tagCounter: 253 },
      { tagText: 'EU&RI policy', tagCounter: 153 },
    ],
    recommendations: {
      number: 3,
      images: [
        'https://picsum.photos/id/192/30/30',
        'https://picsum.photos/id/190/30/30',
        'https://picsum.photos/id/191/30/30',
      ],
    },
  },
];

export {
  posts,
  projectResults,
  events,
  mockPost,
  mockPerson,
  mockOrganisation,
  mockProject,
};
