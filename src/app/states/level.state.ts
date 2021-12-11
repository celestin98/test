
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {LevelServiceService} from "../services/level-service.service";
import {
  AddLevel,
  DeleteLevel,
  GetLevels,
  SetSelectedLevel,
  UpdateLevel
} from "../action/level.action";
import {tap} from "rxjs";
import {Level} from "../models/level";

export class LevelModelState {
  levels: Level[] = [];
  selectlevel: Level = {id: '', level:'',speak:'',understand:'',Write:''};
}

@State<LevelModelState>({
  name: 'levels',
  defaults: {
    levels: [],
    selectlevel: {id: '', level:'',speak:'',understand:'',Write:''}
  }
})
export class LevelState {

  constructor(private levelService: LevelServiceService) {
  }

  @Selector()
  static getLevelList(state: LevelModelState) {
    return state.levels;
  }

  @Selector()
  static getSelectedLevel(state: LevelModelState) {
    return state.selectlevel;
  }

  @Action(GetLevels)
  getLevels({getState, setState}: StateContext<LevelModelState>) {
    return this.levelService.getAllLevel().pipe(tap((result) => {
      const state = getState();
      setState({
        ...state,
        levels: result,
      });
    }));
  }

  @Action(AddLevel)
  addLevel({getState, patchState}: StateContext<LevelModelState>, {level}: AddLevel) {
    return this.levelService.addLevelByUser(level).pipe(tap((result) => {
      const state = getState();
      patchState({
        todos: [...state.todos, result]
      });
    }));
  }

  @Action(UpdateLevel)
  updateLevel({getState, setState}: StateContext<LevelModelState>, {payload, id}: UpdateLevel) {
    return this.todoService.updateLevel(payload, id).pipe(tap((result) => {
      const state = getState();
      const todoList = [...state.todos];
      const todoIndex = todoList.findIndex(item => item.id === id);
      todoList[todoIndex] = result;
      setState({
        ...state,
        todos: todoList,
      });
    }));
  }


  @Action(DeleteLevel)
  deleteLevel({getState, setState}: StateContext<LevelModelState>, {id}: DeleteLevel) {
    return this.todoService.deleteLevel(id).pipe(tap(() => {
      const state = getState();
      const filteredArray = state.todos.filter(item => item.id !== id);
      setState({
        ...state,
        todos: filteredArray,
      });
    }));
  }

  @Action(SetSelectedLevel)
  setSelectedLevelId({getState, setState}: StateContext<LevelModelState>, {payload}: SetSelectedLevel) {
    const state = getState();
    setState({
      ...state,
      selectedLevel: payload
    });
  }
}
