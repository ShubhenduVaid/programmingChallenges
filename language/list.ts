export const list: PeriodicElement[] = [
  {
    id: '1',
    challengeName: 'Find The Leader',
    link: 'findTheLeader',
    difficulty: 'EASY'
  },
  {
    id: '2',
    challengeName: 'no 2',
    link: '2',
    difficulty: 'EASY'
  },
];

export interface PeriodicElement {
  id: string;
  challengeName: string;
  link: string;
  difficulty: string;
}
