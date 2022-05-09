import { makeObservable, observable } from "mobx";

class TodoList {
  /*
    items: TodoItem[] (할 일 리스트)
    date: Date (오늘 날짜)
  */
  _items = [];
  _date = "";

  constructor(items, date) {
    makeObservable(this, {
      _items: observable,
    });
    this._items = items;
    this._date = date;
  }

  get items() {
    return this._items;
  }

  get equalDayItems() {
    return this._items.filter(item => item.equalsDayOfCreatedAt(this._date));
  }

  get notEqualDayItems() {
    return this._items.filter(item => !item.equalsDayOfCreatedAt(this._date));
  }

  pushTodoItem = (item) => {
    this._items.push(item);
  }

  removeTodoItem = (id) => {
    this._items = this._items.filter(item => item.id !== id);
  }

  get equalsDayAndCompletedItems() {
    return this.equalDayItems.filter(item => item.completed);
  }

  get equalsDayAndNotCompletedItems() {
    return this.equalDayItems.filter(item => !item.completed);
  }
}

export default TodoList;
