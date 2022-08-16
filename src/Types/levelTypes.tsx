export interface LevelType {
  _id:string;
  code:number;
  map:number[][];
  player:PlayerType;
  enemies: EnimiesType[];
  step_cap:StepCapType[];
  diffculty:number
}
export interface PlayerType{
  start_position:[number,number];
  startDirection:string
}
export interface EnimiesType{
  code:number;
  start_position:[number,number];
  startDirection:string
}
export interface StepCapType{
  code:number;
  step:number
}
export interface LevelContextType{
  allLevels: LevelType[] | null;
  currentLevel:LevelType | null;
}
