import { makeObservable, observable } from "mobx";

class TodoItem {
  /*
    id: number (고유값)
    task: string (할 일)
    createdAt: Date (생성 된 날짜)
    completed: boolean (완료 여부)
  */
  _id = "";
  _task = "";
  _createdAt = "";
  _completed = false;

  constructor(id, task, createdAt, completed = false) {
    makeObservable(this, {
      _task: observable,
      _completed: observable,
    });
    this._id = id;
    this._task = task;
    this._createdAt = createdAt;
    this._completed = completed;
  }

  updateTask = (task) => {
    this._task = task;
  }

  get id() {
    return this._id;
  }

  get task() {
    return this._task;
  }

  get completed() {
    return this._completed;
  }

  get createdAtGMTString() {
    const date = new Date(this._createdAt);
    date.setHours(date.getHours() + 9);
    return date.toISOString().replace("T", " ").substring(0, 19);
  }

  setComplete = () => {
    this._completed = true;
  }

  unsetComplete = () => {
    this._completed = false;
  }

  equalsDayOfCreatedAt = (target) => {
    const sourceDate = new Date(this._createdAt).setHours(0, 0, 0, 0);
    const targetDate = new Date(target).setHours(0, 0, 0, 0);
    return targetDate === sourceDate;
  }
}

export default TodoItem;
