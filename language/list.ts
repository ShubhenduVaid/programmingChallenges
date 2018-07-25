export const list: PeriodicElement[] = [
  {
    id: '1',
    challengeName: 'Find The Leader',
    link: 'findTheLeader',
    difficulty: 'EASY',
    language: 'JavaScript'
  },
  {
    id: '2',
    challengeName: 'Find Binary Gap',
    link: 'findBinaryGap',
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
