/** 경기 데이터 타입 */
export type TGameInfo = {
  displayDate: string;
  game: string;
  gameDate: number;
  gday: number;
  gmkey: string;
  gmonth: number;
  gtime: string;
  gyear: string;
  home: string;
  homeDecision?: string;
  homeDecisionPitcher?: string;
  homeFullname: string;
  homeKey: string;
  homeLogo: string;
  homeScore?: number;
  homeStarter?: string;
  matchTeamCode: string;
  matchTeamName: string;
  outcome?: string;
  stadium: string;
  stadiumKey: string;
  status: string;
  visit: string;
  visitDecision?: string;
  visitDecisionPitcher?: string;
  visitFullname: string;
  visitKey: string;
  visitLogo: string;
  visitScore?: number;
  visitStarter?: string;
};
export type TMainHighlightVideo = {
  artcTitle: string;
  imgFilePath: string;
  videoLink: string;
  viewCnt: number;
};
//KT Wiz란? 페이지의 구단 연혁 카드를 보여주는 컴포넌트의 타입
export type THistoryDataType = {
  id: number;
  title: string;
  text: string;
};
// 메인페이지의 하이라이트 비디오리스트 컴포넌트의 타입들
export type TMainHighlightsVideoListType = {
  imgFilePath: string;
  contentsDate: string;
  artcTitle: string;
};
// 정규리그 순위기록 / 팀순위 컴포넌트의 타입들
export type TGameSeasonTeamRank = {
  date: string;
  rank: number;
}[];
// 정규리그 순위기록 / 팀기록 컴포넌트 타입들
export type TGameSeasonTeamRecord = {
  ab: number;
  bra: string;
  continue1: string;
  drawn: number;
  er: number;
  era: string;
  game: number;
  gameFlag: number;
  gb: string;
  gyear: string;
  hr: number;
  hra: string;
  lastrank: number;
  lose: number;
  lra: string;
  r: number;
  rank: number;
  run: number;
  sb: number;
  teamCode: string;
  teamName: string;
  teamNameEng: string;
  win: number;
  wra: string;
}[];
// 정규리그 순위기록 / 투수순위 컴포넌트 타입
export type TGameSeasonTeamPitcherRank = {
  ab: number;
  bb: number;
  bb9: number;
  bbhp: number;
  bk: number;
  bs: number;
  cg: number;
  cs: number;
  er: number;
  era: string;
  err: number;
  gd: number;
  gyear: string;
  h2: number;
  h3: number;
  hit: number;
  hit9: number;
  hold: number;
  hp: number;
  hr: number;
  ib: number;
  inn: number;
  iso: string;
  kk: number;
}[];
// 정규리그 순위기록 / 타자순위 컴포넌트 타입
export type TGameSeasonTeamBatterRank = {
  ab: number;
  bb: number;
  bbhp: number;
  bbkk: string;
  bra: string;
  cs: number;
  der: string;
  err: number;
  gd: number;
  gyear: string;
  h2: number;
  h3: number;
  hit: number;
  hp: number;
  hr: number;
  hra: string;
  hrab: number;
  ib: number;
  iso: string;
  kk: number;
  kkab: number;
  ops: string;
  pa: number;
  rbi: number;
  run: number;
  sb: number;
  sbTryCn: number;
  sba: string;
  sf: number;
  sh: number;
  slab: number;
  slg: string;
  teamCode: string;
  teamName: string;
}[];
// 정규리그 순위기록 / 팀상대 컴포넌트 타입
export type TGameSeasonTeamvsRecord = {
  drawn: number;
  lose: number;
  teamCode: string;
  teamName: string;
  vsTeamCode: string;
  win: number;
}[];
// 정규리그 순위기록 / 투수 순위
export type TGamePitcherRank = {
  ab: number;
  bb: number;
  bb9: number;
  bf: number;
  bk: number;
  bs: number;
  cba: string;
  cg: number;
  cs: number;
  dpp: string;
  er: number;
  era: string;
  err: number;
  fo: number;
  gamenum: number;
  go: number;
  gofo: string;
  gyear: string;
  h1: number;
  h2: number;
  h3: number;
  hit: number;
  hit9: number;
  hold: number;
  hp: number;
  hr: number;
  ib: number;
  inBa: string;
  inFlag: string;
  inn: number;
  inn2: number;
  iso: string;
  kk: number;
  kk9: number;
  kkbb: string;
  l: number;
  lCg: number;
  lba: string;
  oavg: string;
  obp: string;
  oops: string;
  oslg: string;
  outBa: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  po: number;
  qs: number;
  qsPlus: number;
  quit: number;
  quitInn2: number;
  r: number;
  rba: string;
  sb: number;
  sbTryCn: number;
  sf: number;
  sh: number;
  sho: number;
  start: number;
  startInn2: number;
  sv: number;
  svo: number;
  teamName: string;
  tugucount: number;
  tugucountinn: number;
  w: number;
  wCg: number;
  whip: string;
  wp: number;
  wra: string;
}[];
// 정규리그 순위기록 / 타자순위
export type TGameBatterRank = {
  ab: number;
  babip: string;
  bb: number;
  bbhp: number;
  bbkk: string;
  bra: string;
  cba: string;
  cgopo: string;
  cs: number;
  fl: number;
  gamenum: number;
  gd: number;
  gofo: string;
  gr: number;
  gyear: string;
  h1: number;
  h2: number;
  h3: number;
  hit: number;
  hp: number;
  hr: number;
  hra: string;
  hrab: number;
  ib: number;
  iso: string;
  kk: number;
  kkab: number;
  lba: string;
  lgopo: string;
  nppa: number;
  ops: string;
  opsPlus: string;
  pa: number;
  paFlag: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  po: number;
  rba: string;
  rbi: number;
  rgopo: string;
  run: number;
  sb: number;
  sbTryCn: number;
  sba: string;
  sf: number;
  sh: number;
  slab: number;
  slg: string;
  spHra: string;
  startCn: number;
  subCn: number;
  teamName: string;
  wrHit: string;
}[];
// 정규리그 순위기록 / 타자순위
export type TGameCrowdStatus = {
  crowd: number;
  game: number;
  teamCode: string;
  teamName: string;
}[];
