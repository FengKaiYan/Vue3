import { createStore } from "vuex";

interface State {
  username: string;
  taskList: task[];
}

interface task {
  label: string;
  isfinished: boolean;
}

export default createStore({
  state: {
    username: "王大合",
    taskList: [],
  },
  mutations: {
    createTask(state: State, newTask: task) {
      state.taskList.push(newTask);
    },
    updateStatus(state: State, payload: { index: number; status: boolean }) {
      const { index, status } = payload;
      state.taskList[index].isfinished = status;
    },
    deleteTask(state: State, index: number) {
      state.taskList.splice(index, 1);
    },
  },
});
