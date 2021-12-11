import {Level} from "../models/level";


export class AddLanguage {
  static readonly type = '[Language] Add';

  constructor(public language: Level) {
  }
}

export class GetLanguages {
  static readonly type = '[Language] Get';
}

export class DeleteLanguage {
  static readonly type = '[Language] Remove';

  constructor(public id: string) {
  }
}

export class UpdateLanguage {
  static readonly type = '[Language] Add';

  constructor(public language: Level, id: string) {
  }
}

export class SetSelectedLanguage {
  static readonly type = '[Language] Set';

  constructor(public payload: Level) {
  }
}
