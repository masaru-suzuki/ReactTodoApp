export const initialTodoList = [
  {
    id: 0,
    title: '風呂掃除',
    deadline: '2020-01-20',
    importance: '高',
    completedAt: '',
    isDone: false,
  },
  {
    id: 1,
    title: '床掃除',
    deadline: '2020-01-25',
    importance: '中',
    completedAt: '',
    isDone: false,
  },
  {
    id: 2,
    title: 'トイレ掃除',
    deadline: '2020-01-10',
    importance: '低',
    completedAt: '',
    isDone: false,
  },
]

export const getDefaultTodoItem = () => ({
  id: '',
  title: '',
  deadline: '',
  importance: '',
  completedAt: '',
  isDone: false,
})
