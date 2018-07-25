export const list: PeriodicElement[] = [
  {
    id: '1',
    challengeName: 'Find The Leader',
    link: 'findTheLeader',
    difficulty: 'EASY'
  },
  {
    id: '2',
    challengeName: 'Find the Queen',
    link: 'findTheQueen',
    difficulty: 'EASY'
  },
];

export interface PeriodicElement {
  id: string;
  challengeName: string;
  link: string;
  difficulty: string;
}
