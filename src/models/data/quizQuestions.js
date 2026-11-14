/**
 * Educational quiz questions about the six featured space relics.
 * Strictly based on verified mission history.
 */
export const QUIZ_QUESTIONS = [
  {
    id: 1,
    relicId: 'apollo-11-laser-retroreflector',
    question: 'The Apollo 11 Laser Retroreflector was deployed as part of which scientific package?',
    options: [
      'ALSEP (Apollo Lunar Surface Experiments Package)',
      'EASEP (Early Apollo Surface Experiments Package)',
      'SNAP-27 Radioisotope Thermoelectric Generator',
      'Lunar Roving Vehicle Payload'
    ],
    correctIndex: 1,
    explanation: 'The Apollo 11 retroreflector was deployed under EASEP (Early Apollo Surface Experiments Package), a simplified precursor package designed specifically for the first lunar landing.'
  },
  {
    id: 2,
    relicId: 'surveyor-3',
    question: 'Why did Apollo 12 astronauts Pete Conrad and Alan Bean visit Surveyor 3 in November 1969?',
    options: [
      'To refuel its vernier descent engines',
      'To retrieve its television camera and examine long-term space exposure effects',
      'To reprogram its lunar soil analysis computer',
      'To activate its radio beacon for future missions'
    ],
    correctIndex: 1,
    explanation: 'Conrad and Bean pinpoint-landed 160 meters away and cut off Surveyor 3’s camera and sampling scoop to return them to Earth for study of material degradation in space.'
  },
  {
    id: 3,
    relicId: 'opportunity-rover',
    question: 'Which of the following historic records is held by the Opportunity rover (MER-B)?',
    options: [
      'First robotic vehicle ever deployed on Mars',
      'First spacecraft to soft-land on a comet',
      'All-time off-world driving record for any wheeled vehicle (45.16 km)',
      'Fastest robotic descent through the Martian atmosphere'
    ],
    correctIndex: 2,
    explanation: 'Opportunity operated for over 14 Earth years and drove 45.16 kilometers (completing the first extraterrestrial marathon), setting the record for off-world driving distance.'
  },
  {
    id: 4,
    relicId: 'spirit-rover',
    question: 'How did the Spirit rover unexpectedly discover deposits of 90% pure silica on Mars?',
    options: [
      'Its drilling arm penetrated an underground cavern',
      'A jammed front wheel was dragged in reverse and scraped away topsoil at Home Plate',
      'A dust devil blew away volcanic rocks',
      'A meteorite impacted nearby during communication blackout'
    ],
    correctIndex: 1,
    explanation: 'After its right-front wheel seized in 2006, driving in reverse dragged the locked wheel, scraping open bright subsurface soils rich in hydrothermal silica—evidence of past hot springs.'
  },
  {
    id: 5,
    relicId: 'apollo-lrv',
    question: 'What materials were used to construct the tires of the Apollo Lunar Roving Vehicle?',
    options: [
      'Inflatable vulcanized rubber with carbon tread',
      'Zinc-coated woven steel piano wire with titanium chevrons',
      'Solid aluminum alloy casting with magnetic pins',
      'Reinforced kevlar with silicon pads'
    ],
    correctIndex: 1,
    explanation: 'Inflatable rubber would burst or stiffen in lunar vacuum and temperature swings (-150°C to +120°C), so Boeing engineered tires from woven zinc-coated steel wire mesh.'
  },
  {
    id: 6,
    relicId: 'sojourner-rover',
    question: 'What innovative suspension system was pioneered by Sojourner and used on all later NASA Mars rovers?',
    options: [
      'Pneumatic hydraulic shock absorbers',
      'Rocker-bogie mechanical linkage suspension',
      'Independent magnetic levitation struts',
      'Telescoping carbon-fiber leaf springs'
    ],
    correctIndex: 1,
    explanation: 'Sojourner validated the rocker-bogie mechanism, which allows all six wheels to remain in contact with rough uneven Martian terrain without tipping over.'
  }
];
