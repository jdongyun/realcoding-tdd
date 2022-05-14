import TodoItem from "../../../vo/TodoItem";

describe("할 일을 만들 수 있다.", () => {
  test("todo Item 생성하기", () => {
    const todoItem = new TodoItem(1, '오늘은 술 먹는 날');
    expect(todoItem.task).toEqual('오늘은 술 먹는 날');
  });
});

describe("할 일을 업데이트 할 수 있다.", () => {
  test("todo Item 업데이트 하기", () => {
    const todoItem = new TodoItem(1, '오늘은 술 먹는 날');
    todoItem.updateTask('오늘은 그냥 안 마실래');
    expect(todoItem.task).toEqual('오늘은 그냥 안 마실래');
  });
});

describe("할 일을 완료/미완료로 바꿀 수 있다.", () => {
  test("todo Item 완료로 바꾸기", () => {
    const todoItem = new TodoItem(1, '오늘은 술 먹는 날');
    todoItem.setComplete();
    expect(todoItem.completed).toBeTruthy();
  });
  test("todo Item 미완료로 바꾸기", () => {
    const todoItem = new TodoItem(1, '오늘은 술 먹는 날');
    todoItem.unsetComplete();
    expect(todoItem.completed).toBeFalsy();
  });
});

describe("할 일을 완료로 생성할 수 있다.", () => {
  test("todo Item 완료로 만들기", () => {
    const todoItem = new TodoItem(1, '오늘은 술 먹는 날', new Date(), true);
    // todoItem.setComplete();
    expect(todoItem.completed).toBeTruthy();
  });
});

describe("할 일에 날짜가 들어간다.", () => {
  test("todo Item이 오늘 만든거라면, isToday가 true 이다.", () => {
    const sourceDate = new Date();
    const targetDate = new Date();
    const todoItem = new TodoItem(1, '오늘은 술 먹는 날', sourceDate);
    expect(todoItem.equalsDayOfCreatedAt(targetDate)).toBeTruthy();
  });
  test("todo Item을 어제 만든거라면, isToday가 false 이다.", () => {
    const sourceDate = new Date('2022-05-08T10:00:00');
    const targetDate = new Date('2022-05-09T10:00:00');
    const todoItem = new TodoItem(1, '오늘은 술 먹는 날', sourceDate);
    expect(todoItem.equalsDayOfCreatedAt(targetDate)).toBeFalsy();  
  })
});
