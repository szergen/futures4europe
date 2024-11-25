/** @type {import('next').NextConfig} */
const scheduleCronJobs = require('./cron');

const nextConfig = {
  env: {},
  webpack(config) {
    scheduleCronJobs();
    return config;
  },
  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    dirs: ['app'],
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'static.wixstatic.com',
      'picsum.photos',
      'placehold.co',
      'randomuser.me',
      'framerusercontent.com',
      'uefiscdi.gov.ro',
      '0bbe2e34-e503-441a-af9e-4fc70c17e6af.usrfiles.com',
      'img.youtube.com',
      'avatar.iran.liara.run',
      'graph.facebook.com',
      'lh3.googleusercontent.com',
    ],
    formats: ['image/webp'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/_api/:path*',
        destination: '/temp/:path*',
      },
      {
        source: '/about',
        destination: '/static-pages/about',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/ourfutures',
        destination: '/project/OurFutures',
        permanent: true,
      },
      {
        source: '/blogs/first-pilot-on-fashion-futuring-in-the-works',
        destination: '/post/first-pilot-on-fashion-futuring-in-the-works-m5hzh',
        permanent: true,
      },
      {
        source:
          '/blogs/eye-of-europe-mutual-learning-event-2policy-oriented-communication-of-foresight-results',
        destination:
          '/post/eye-of-europe-mutual-learning-event-policy-oriented-communication-of-foresight-results--60k6e',
        permanent: true,
      },
      {
        source: '/blogs/foresight-at-easst4s-2024-conference-in-amsterdam',
        destination:
          '/post/foresight-at-easst-4s-2024-conference-in-amsterdam--lacut',
        permanent: true,
      },
      {
        source:
          '/blogs/embedding-foresight-in-next-generation-transformative-innovation-policies',
        destination:
          '/post/embedding-foresight-in-next-generation-transformative-innovation-policies-gz66p',
        permanent: true,
      },
      {
        source:
          '/blogs/futures-of-natural-resources-the-24th-international-futures-conference-of-finland-futures-research-centre',
        destination:
          '/post/futures-of-natural-resources-the-24th-international-futures-conference-of-finland-futures-research-centre-jgnzn',
        permanent: true,
      },
      {
        source: '/blogs/eye-of-europe-topics-for-pilot-workshops-defined',
        destination:
          '/post/eye-of-europe-topics-for-pilot-workshops-defined-esdc3',
        permanent: true,
      },
      {
        source:
          '/blogs/eye-of-europe-project-launches-report-on-ri-actors-and-foresight-activities-in-europe',
        destination:
          '/post/eye-of-europe-project-launches-report-on-ri-actors-and-foresight-activities-in-europe-po7k7',
        permanent: true,
      },
      {
        source: '/blogs/join-the-nordic-foresight-network-initiative',
        destination: '/post/join-the-nordic-foresight-network-initiative-jn15r',
        permanent: true,
      },
      {
        source:
          '/blogs/eye-of-europe-mutual-learning-event-emerging-practices-in-foresight-for-research-innovation-policy',
        destination:
          '/post/eye-of-europe-mutual-learning-event-emerging-practices-in-foresight-for-research-innovation-policy-33y3g',
        permanent: true,
      },
      {
        source:
          '/blogs/espas-report-2024-the-trends-the-uncertainties-and-challenges-for-choosing-europes-future',
        destination:
          '/post/espas-global-trends-report-2024-the-trends-the-uncertainties-and-challenges-for-choosing-europes-future-cqp99',
        permanent: true,
      },
      {
        source: '/blogs/navigating-the-future-the-power-of-triscope-synthesis',
        destination:
          '/post/navigating-the-future-the-power-of-tri-scope-synthesis-p6iqh',
        permanent: true,
      },
      {
        source: '/blogs/shaping-futures-story-by-story',
        destination: '/post/shaping-futures-story-by-story-2ekmq',
        permanent: true,
      },
      {
        source:
          '/blogs/portugals-path-forward-key-insights-from-recent-foresight-publications',
        destination:
          '/post/portugals-path-forward-key-insights-from-recent-foresight-publications-f2loh',
        permanent: true,
      },
      {
        source: '/blogs/an-interview-with-eye-of-europes-project-coordinator',
        destination:
          '/post/an-interview-with-eye-of-europes-project-coordinator-ed0b5',
        permanent: true,
      },
      {
        source: '/blogs/orion-meet-your-copilot-in-horizon-scanning',
        destination: '/post/orion-meet-your-co-pilot-in-horizon-scanning-b10pd',
        permanent: true,
      },
      {
        source: '/blogs/futures-of-big-tech',
        destination: '/post/futures-of-big-tech-ckln9',
        permanent: true,
      },
      {
        source:
          '/blogs/futures-of-civic-resilience-in-europe-2040-scenarios-and-policy-implications',
        destination:
          '/post/futures-of-civic-resilience-in-europe-2040-scenarios-and-policy-implications-dk4bl',
        permanent: true,
      },
      {
        source:
          '/blogs/futures-of-green-skills-and-jobs-in-europe-2050-scenarios-and-policy-implications',
        destination:
          '/post/futures-of-green-skills-and-jobs-in-europe-2050-scenarios-and-policy-implications-tvak6',
        permanent: true,
      },
      {
        source:
          '/blogs/how-to-be-good-in-a-crisis-future-labs-that-turn-research-into-resilience',
        destination:
          '/post/how-to-be-good-in-a-crisis-future-labs-that-turn-research-into-resilience-r4sdh',
        permanent: true,
      },
      {
        source:
          '/blogs/horizon-futures-watch-workshop-7-futures-of-innovation-and-ip-regulation',
        destination:
          '/post/horizon-futures-watch-workshop-7-futures-of-innovation-and-ip-regulation--uhnq8',
        permanent: true,
      },
      {
        source:
          '/blogs/horizon-futures-watch-workshop-6-the-futures-of-big-tech-in-europe',
        destination:
          '/post/horizon-futures-watch-workshop-6-the-futures-of-big-tech-in-europe-usl2s',
        permanent: true,
      },
      {
        source:
          '/blogs/horizon-futures-watch-workshop-8-the-futures-of-civic-resilience',
        destination:
          '/post/horizon-futures-watch-workshop-8-the-futures-of-civic-resilience-40y73',
        permanent: true,
      },
      {
        source:
          '/blogs/foresight-in-the-field-initiatives-covering-the-future-of-ipr',
        destination:
          '/post/foresight-in-the-field-initiatives-covering-the-future-of-ipr-4xtwp',
        permanent: true,
      },
      {
        source:
          '/blogs/from-sewing-machines-to-fashion-nfts-time-traveling-through-ipr-in-creative-industries',
        destination:
          '/post/from-sewing-machines-to-fashion-nfts-time-traveling-through-ipr-in-creative-industries-i43gq',
        permanent: true,
      },
      {
        source: '/blogs/copyright-harmony-to-unite-in-diversity',
        destination: '/post/copyright-harmony-to-unite-in-diversity-d5530',
        permanent: true,
      },
      {
        source:
          '/blogs/prompting-the-future-of-ip-regulation-innovation-management',
        destination:
          '/post/prompting-the-future-of-ip-regulation-innovation-management-8v6t5',
        permanent: true,
      },
      {
        source:
          '/blogs/on-a-quest-for-a-better-informed-society-in-the-age-of-misinformation',
        destination:
          '/post/on-a-quest-for-a-better-informed-society-in-the-age-of-misinformation-l08qt',
        permanent: true,
      },
      {
        source:
          '/blogs/reclaiming-spatial-justice-in-the-quest-for-a-resilient-future',
        destination:
          '/post/reclaiming-spatial-justice-in-the-quest-for-a-resilient-future-amu2k',
        permanent: true,
      },
      {
        source:
          '/blogs/the-interpenetration-of-criminal-and-lawful-economic-activities-scenarios-policy-implications',
        destination:
          '/post/the-interpenetration-of-criminal-and-lawful-economic-activities-scenarios-policy-implications-nehez',
        permanent: true,
      },
      {
        source:
          '/blogs/horizon-futures-watch-workshop-5-the-future-of-green-skills-and-jobs',
        destination:
          '/post/horizon-futures-watch-workshop-5-the-future-of-green-skills-and-jobs--mu5z1',
        permanent: true,
      },
      {
        source:
          '/blogs/the-word-on-the-tweet-social-media-signals-on-the-future-of-democracy',
        destination:
          '/post/the-word-on-the-tweet-social-media-signals-on-the-future-of-democracy-0a1pa',
        permanent: true,
      },
      {
        source:
          '/blogs/horizon-futures-watch-workshop-4-future-of-interpenetration-of-criminal-and-lawful-economic-activities',
        destination:
          '/post/horizon-futures-watch-workshop-4-future-of-interpenetration-of-criminal-and-lawful-economic-activities-l0qkl',
        permanent: true,
      },
      {
        source: '/blogs/risks-and-merits-of-decolonising-futures',
        destination: '/post/risks-and-merits-of-decolonising-futures-ocjkw',
        permanent: true,
      },
      {
        source:
          '/blogs/addressing-underlying-assumptions-tips-and-tricks-on-horizon-scanning',
        destination:
          '/post/addressing-underlying-assumptions-tips-and-tricks-on-horizon-scanning-1rioa',
        permanent: true,
      },
      {
        source:
          '/blogs/now-hiring-lowcarbon-specialists-for-a-sustainable-europe',
        destination:
          '/post/now-hiring-low-carbon-specialists-for-a-sustainable-europe-bq5u9',
        permanent: true,
      },
      {
        source: '/blogs/with-big-tech-comes-big-ethical-responsibility',
        destination:
          '/post/with-big-tech-comes-big-ethical-responsibility-lm1b1',
        permanent: true,
      },
      {
        source:
          '/blogs/connected-factories-and-their-pathways-for-a-circular-economy',
        destination:
          '/post/connected-factories-and-their-pathways-for-a-circular-economy-jxd81',
        permanent: true,
      },
      {
        source:
          '/blogs/shaping-the-skills-needed-for-the-future-of-automated-mobility',
        destination:
          '/post/shaping-the-skills-needed-for-the-future-of-automated-mobility-fbtbh',
        permanent: true,
      },
      {
        source:
          '/blogs/connecting-futures-the-road-to-6g-and-the-right-to-connectivity',
        destination:
          '/post/connecting-futures-the-road-to-6g-and-the-right-to-connectivity-j32rs',
        permanent: true,
      },
      {
        source: '/blogs/curbing-the-elusive-force-of-modern-bigness',
        destination: '/post/curbing-the-elusive-force-of-modern-bigness-b0emk',
        permanent: true,
      },
      {
        source:
          '/blogs/futures-of-science-for-policy-in-europe-scenarios-and-policy-implications',
        destination:
          '/post/futures-of-science-for-policy-in-europe-scenarios-and-policy-implications--668ef',
        permanent: true,
      },
      {
        source:
          '/blogs/horizon-futures-watch-workshop-3-future-of-science-for-policy-in-europe',
        destination:
          '/post/horizon-futures-watch-workshop-3-future-of-science-for-policy-in-europe-k5c3t',
        permanent: true,
      },
      {
        source:
          '/blogs/horizon-futures-watch-workshop-1-future-of-social-confrontations',
        destination:
          '/post/horizon-futures-watch-workshop-1-future-of-social-confrontations-s9jmg',
        permanent: true,
      },
      {
        source:
          '/blogs/horizon-futures-watch-workshop-2-future-of-land-and-sea-use',
        destination:
          '/post/horizon-futures-watch-workshop-2-future-of-land-and-sea-use-7mklu',
        permanent: true,
      },
      {
        source:
          '/blogs/design-futures-artdriven-methodology-shaping-the-future-of-innovation',
        destination:
          '/post/design-futures-art-driven-methodology-shaping-the-future-of-innovation-8y4xm',
        permanent: true,
      },
      {
        source:
          '/blogs/futures-of-using-nature-in-rural-and-marine-europe-in-2050-policy-implications',
        destination:
          '/post/futures-of-using-nature-in-rural-and-marine-europe-in-2050-policy-implications-3wjqu',
        permanent: true,
      },
      {
        source:
          '/blogs/futures-of-using-nature-in-rural-and-marine-europe-in-2050-scenarios',
        destination:
          '/post/futures-of-using-nature-in-rural-and-marine-europe-in-2050-scenarios-ljond',
        permanent: true,
      },
      {
        source:
          '/blogs/the-future-of-social-confrontations-policy-implications',
        destination:
          '/post/the-future-of-social-confrontations-policy-implications-gg3qo',
        permanent: true,
      },
      {
        source: '/blogs/the-future-of-social-confrontations-the-scenarios',
        destination:
          '/post/the-future-of-social-confrontations-the-scenarios-sycdn',
        permanent: true,
      },
      {
        source: '/blogs/tackling-security-concerns',
        destination: '/post/tackling-security-concerns-g588r',
        permanent: true,
      },
      {
        source:
          '/blogs/shaping-the-future-of-ai-in-policing-aligners-pragmatic-approach',
        destination:
          '/post/shaping-the-future-of-ai-in-policing-aligners-pragmatic-approach-hfjwn',
        permanent: true,
      },
      {
        source:
          '/blogs/foresight-in-the-field-how-europol-uses-foresight-to-anticipate-the-criminals-of-the-future',
        destination:
          '/post/foresight-in-the-field-how-europol-uses-foresight-to-anticipate-the-criminals-of-the-future-vu8no',
        permanent: true,
      },
      {
        source: '/blogs/interview-putting-cities-at-the-centre',
        destination: '/post/interview-putting-cities-at-the-centre-z9asr',
        permanent: true,
      },
      {
        source:
          '/blogs/futureproofing-public-health-systems-by-teaching-foresight',
        destination:
          '/post/futureproofing-public-health-systems-by-teaching-foresight--zqpo0',
        permanent: true,
      },
      {
        source:
          '/blogs/natures-barcode-the-exciting-frontier-of-plant-tracking',
        destination:
          '/post/natures-barcode-the-exciting-frontier-of-plant-tracking-nvx5i',
        permanent: true,
      },
      {
        source:
          '/blogs/presentation-intermediaire-publique-de-la-vision-strategique-pour-leconomie-luxembourgeoise-en-2050',
        destination:
          '/post/prsentation-intermdiaire-publique-de-la-vision-stratgique-pour-lconomie-luxembourgeoise-en-2050-5q1vh',
        permanent: true,
      },
      {
        source: '/blogs/inspire-2023-art-and-futures',
        destination: '/post/inspire-2023-art-and-futures-iccw2',
        permanent: true,
      },
      {
        source: '/blogs/interview-the-changing-face-of-public-protest',
        destination:
          '/post/interview-the-changing-face-of-public-protest-tm3i1',
        permanent: true,
      },
      {
        source:
          '/blogs/how-combining-participatory-democracy-and-foresight-practices-can-foster-political-innovation',
        destination:
          '/post/how-combining-participatory-democracy-and-foresight-practices-can-foster-political-innovation-rcrer',
        permanent: true,
      },
      {
        source:
          '/blogs/foresight-on-land-and-sea-use-addressing-the-degradation-of-ecosystems-through-scenariomaking',
        destination:
          '/post/foresight-on-land-and-sea-use-addressing-the-degradation-of-ecosystems-through-scenario-making--73gat',
        permanent: true,
      },
      {
        source:
          '/blogs/harvesting-hope-futureproofing-plants-for-bountiful-2050-crop-yields',
        destination:
          '/post/harvesting-hope-future-proofing-plants-for-bountiful-2050-crop-yields-lws02',
        permanent: true,
      },
      {
        source:
          '/blogs/going-rural-managing-land-access-and-use-to-support-rural-futures',
        destination:
          '/post/going-rural-managing-land-access-and-use-to-support-rural-futures-ztba3',
        permanent: true,
      },
      {
        source:
          '/blogs/from-reactive-to-proactive-cultivating-a-culture-of-foresight-for-postpandemic-governance',
        destination:
          '/post/from-reactive-to-proactive-cultivating-a-culture-of-foresight-for-post-pandemic-governance-qafxt',
        permanent: true,
      },
      {
        source: '/blogs/foresight-in-the-field-the-mutual-learning-exercise',
        destination:
          '/post/foresight-in-the-field-the-mutual-learning-exercise-vkr7k',
        permanent: true,
      },
      {
        source: '/blogs/research4futures-delphi-survey-explore-the-results',
        destination:
          '/post/research4futures-delphi-survey-explore-the-results-rkqjf',
        permanent: true,
      },
      {
        source:
          '/blogs/artificial-general-intelligence-issues-and-opportunities',
        destination:
          '/post/artificial-general-intelligence-issues-and-opportunities-wsjcs',
        permanent: true,
      },
      {
        source: '/blogs/is-hydrogen-that-good-for-the-climate',
        destination: '/post/is-hydrogen-that-good-for-the-climate-cshzf',
        permanent: true,
      },
      {
        source:
          '/blogs/the-eu-in-a-volatile-new-world-challenge-of-global-leadership',
        destination:
          '/post/the-eu-in-a-volatile-new-world-challenge-of-global-leadership-lvssz',
        permanent: true,
      },
      {
        source: '/blogs/scale-matters-in-greenhydrogen',
        destination: '/post/scale-matters-in-green-hydrogen-50ggc',
        permanent: true,
      },
      {
        source:
          '/blogs/discussing-future-hydrogen-geographies-in-europe-a-conversation-that-is-overdue',
        destination:
          '/post/discussing-future-hydrogen-geographies-in-europe-a-conversation-that-is-overdue-iuh97',
        permanent: true,
      },
      {
        source:
          '/blogs/socioeconomic-and-sociopolitical-scenarios-shaping-the-european-hydrogen-economy-of-2040',
        destination:
          '/post/socioeconomic-and-socio-political-scenarios-shaping-the-european-hydrogen-economy-of-2040-e5c22',
        permanent: true,
      },
      {
        source:
          '/blogs/global-hydrogen-justice-how-can-green-hydrogen-contribute-to-a-just-energy-transition-for-all',
        destination:
          '/post/global-hydrogen-justice-how-can-green-hydrogen-contribute-to-a-just-energy-transition-for-all-v18uy',
        permanent: true,
      },
      {
        source: '/blogs/sti-for-2050-deepsea-mining-and-ecosystem-performance',
        destination:
          '/post/sti-for-2050-deep-sea-mining-and-ecosystem-performance-eqnug',
        permanent: true,
      },
      {
        source: '/blogs/sti-for-2050-perspectives-on-ecosystem-performance',
        destination:
          '/post/sti-for-2050-perspectives-on-ecosystem-performance-hh8yc',
        permanent: true,
      },
      {
        source: '/blogs/sti-for-2050-project-approach-and-methodology',
        destination:
          '/post/sti-for-2050-project-approach-and-methodology-zibhj',
        permanent: true,
      },
      {
        source:
          '/blogs/global-commons-definitions-concepts-and-perspectives-towards-a-taxonomy',
        destination:
          '/post/global-commons-definitions-concepts-and-perspectives-towards-a-taxonomy-pffok',
        permanent: true,
      },
      {
        source: '/blogs/alternative-climate-scenarios-2040-deepening-divisions',
        destination:
          '/post/alternative-climate-scenarios-2040-deepening-divisions-ftgqn',
        permanent: true,
      },
      {
        source: '/blogs/scenarios-of-a-hydrogen-economy-2040',
        destination: '/post/scenarios-of-a-hydrogen-economy-2040-6f490',
        permanent: true,
      },
      {
        source:
          '/blogs/alternative-climate-scenarios-2040-coalition-of-sustainable-communities',
        destination:
          '/post/alternative-climate-scenarios-2040-coalition-of-sustainable-communities-86hp5',
        permanent: true,
      },
      {
        source: '/blogs/alternative-climate-scenarios-2040-green-dream',
        destination:
          '/post/alternative-climate-scenarios-2040-green-dream-yc4iu',
        permanent: true,
      },
      {
        source: '/blogs/alternative-climate-scenarios-2040-technological-fix',
        destination:
          '/post/alternative-climate-scenarios-2040-technological-fix-6oi9j',
        permanent: true,
      },
      {
        source: '/blogs/hydrogen-economy-in-europe-2040',
        destination: '/post/hydrogen-economy-in-europe-2040-bbryk',
        permanent: true,
      },
      {
        source: '/blogs/emerging-challenges-for-global-commons',
        destination: '/post/emerging-challenges-for-global-commons-5irh0',
        permanent: true,
      },
      {
        source: '/blogs/global-race-on-hydrogen',
        destination: '/post/global-race-on-hydrogen-bdzq4',
        permanent: true,
      },
      {
        source:
          '/blogs/czech-priorities-megatrends-and-grand-societal-challenges-summary',
        destination:
          '/post/czech-priorities-megatrends-and-grand-societal-challenges-summary-zpfog',
        permanent: true,
      },
      {
        source:
          '/blogs/how-scenarios-could-support-the-orientation-of-ri-agendas',
        destination:
          '/post/how-scenarios-could-support-the-orientation-of-ri-agendas-t91g5',
        permanent: true,
      },
      {
        source: '/blogs/developing-context-scenarios-for-future-eu-ri-policies',
        destination:
          '/post/developing-context-scenarios-for-future-eu-ri-policies-9cfsg',
        permanent: true,
      },
      {
        source: '/blogs/the-elephant-in-the-room-is-getting-old',
        destination: '/post/the-elephant-in-the-room-is-getting-old-b9ghm',
        permanent: true,
      },
      {
        source: '/blogs/forum-guidelines',
        destination: '/post/forum-guidelines-sji1p',
        permanent: true,
      },
      {
        source: '/blogs/are-you-receiving-too-many-email-notifications',
        destination:
          '/post/are-you-receiving-too-many-email-notifications-6cl42',
        permanent: true,
      },
      {
        source:
          '/blogs/exploring-future-dimensions-and-elements-of-contextual-developments-relevant-for-eu-ri-policies',
        destination:
          '/post/exploring-future-dimensions-and-elements-of-contextual-developments-relevant-for-eu-ri-policies-0sqx7',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'redirectUrl',
          },
        ],
        destination: 'https://legacy.futures4europe.eu/:path*',
        permanent: false,
        statusCode: 302,
      },
    ];
  },
};

module.exports = nextConfig;
