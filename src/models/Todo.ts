export class Todo {
  constructor(
    public id: number,
    public task: string,
    public createdAt: Date,
    public done: boolean
  ) {}
}
