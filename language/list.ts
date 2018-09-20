export const list: PeriodicElement[] = [
  {
    id: '1',
    challengeName: 'Find The Leader (Codelity)',
    link: 'findTheLeader',
    difficulty: 'EASY',
    language: 'JavaScript'
  },
  {
    id: '2',
    challengeName: 'Find Binary Gap (Codelity)',
    link: 'findBinaryGap',
    difficulty: 'EASY',
    language: 'JavaScript'
  },
  {
    id: '3',
    challengeName: 'Find Top Brands (Zalando Germany Codelity)',
    link: 'findTopBrands',
    difficulty: 'MEDIUM',
    language: 'JavaScript'
  },
  {
    id: '4',
    challengeName: 'Array Rotation (Codelity)',
    link: 'arrayRotation',
    difficulty: 'EASY',
    language: 'JavaScript'
  },
  {
    id: '5',
    challengeName: 'Array Odd Occurances (Codelity)',
    link: 'oddOccurances',
    difficulty: 'EASY',
    language: 'JavaScript'
  },
  {
    id: '6',
    challengeName: 'Frog Jump (Codelity)',
    link: 'frogJump',
    difficulty: 'EASY',
    language: 'JavaScript'
  },
  {
    id: '7',
    challengeName: 'Find Missing Element (Codelity)',
    link: 'findMissingElement',
    difficulty: 'EASY',
    language: 'JavaScript'
  },
  {
    id: '8',
    challengeName: 'Find Tape Equilibrium (Codelity)',
    link: 'findTapeEquilibrium',
    difficulty: 'MEDIUM',
    language: 'JavaScript'
  },
  {
    id: '9',
    challengeName: 'Find the most frequent word in array (Amazon Gurgoan)',
    link: 'findFrequentWord',
    difficulty: 'EASY',
    language: 'JavaScript'
  },
  {
    id: '10',
    challengeName: 'Check for valid braces in an expression (Geeks for geeks)',
    link: 'bracesCheck',
    difficulty: 'EASY',
    language: 'JavaScript'
  },
];

export interface PeriodicElement {
  id: string;
  challengeName: string;
  link: string;
  difficulty: string;
  language: string;
}
