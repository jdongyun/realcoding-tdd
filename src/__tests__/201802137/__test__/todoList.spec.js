import TodoItem from "../../../vo/TodoItem";

describe("할 일을 만들 수 있다.", () => {
  test("todo item 생성하기", () => {
    const todoItem = new TodoItem(1, "오늘은 술 먹는날");
    expect(todoItem.task).toEqual("오늘은 술 먹는날");
  });
});

describe("할 일을 업데이트할 수 있다.", () => {
  test("todo item 업데이트하기", () => {
    const todoItem = new TodoItem(1, "오늘은 술 먹는날");
    todoItem.updateTask("오늘은 그냥 안마실래");
    expect(todoItem.task).toEqual("오늘은 그냥 안마실래");
  });
});

describe("할 일을 완료/미완료로 바꿀 수 있다.", () => {
  test("todo item 완료로 바꾸기", () => {
    const todoItem = new TodoItem(1, "오늘은 술 먹는날");
    todoItem.setComplete();
    expect(todoItem.completed).toBeTruthy();
  });
  test("todo item 미완료로 바꾸기", () => {
    const todoItem = new TodoItem(1, "오늘은 술 먹는날");
    todoItem.unsetComplete();
    expect(todoItem.completed).toBeFalsy();
  });
});

describe("할 일에 날짜가 들어간다.", () => {
  test("todo item을 오늘 만들었으면, isToday가 true이다.", () => {
    const sourceDate = new Date('2022-05-08T10:00:00');
    const targetDate = new Date('2022-05-08T10:00:00');

    const todoItem = new TodoItem(1, "오늘은 술 먹는날", sourceDate);
    expect(todoItem.equalsDayOfCreatedAt(targetDate)).toBeTruthy();
  });
  test("todo item을 어제 만들었으면, isToday가 false이다.", () => {
    const sourceDate = new Date('2022-05-08T10:00:00');
    const targetDate = new Date('2022-05-09T10:00:00');

    const todoItem = new TodoItem(1, "오늘은 술 먹는날", sourceDate);
    expect(todoItem.equalsDayOfCreatedAt(targetDate)).toBeFalsy();
  });
});

describe("할 일을 완료로 생성할 수 있다.", () => {
  test("todo item 완료로 만들기", () => {
    const todoItem = new TodoItem(1, "오늘은 술 먹는날", new Date(), true);
    expect(todoItem.completed).toBeTruthy();
  });
});