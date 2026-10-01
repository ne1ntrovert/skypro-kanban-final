import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { createTask, deleteTask, getTasks, updateTask } from '../api/tasks.js';

export const TaskContext = createContext(null);

export function useTaskState(token, isAuth, logout) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('');

  const handleAuthError = useCallback(
    (e) => {
      if (e.status === 401) logout();
    },
    [logout],
  );

  const refresh = useCallback(async () => {
    if (!isAuth) return;
    setLoading(true);
    setError('');
    try {
      setTasks(await getTasks(token));
    } catch (e) {
      setError(e.message);
      handleAuthError(e);
    } finally {
      setLoading(false);
      setLoaded(true);
    }
  }, [isAuth, token, handleAuthError]);

  useEffect(() => {
    if (isAuth) {
      refresh();
    } else {
      setTasks([]);
      setError('');
      setLoaded(false);
    }
    // перезагружаем список только при смене статуса авторизации
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  async function syncTasks(list) {
    if (list) {
      setTasks(list);
      return;
    }
    try {
      setTasks(await getTasks(token));
    } catch {
      // изменение уже сохранено, список обновится при следующей загрузке
    }
  }

  async function addTask(taskData) {
    try {
      await syncTasks(await createTask(taskData, token));
    } catch (e) {
      handleAuthError(e);
      throw e;
    }
  }

  async function editTask(id, taskData) {
    try {
      await syncTasks(await updateTask(id, taskData, token));
    } catch (e) {
      handleAuthError(e);
      throw e;
    }
  }

  async function removeTask(id) {
    try {
      await syncTasks(await deleteTask(id, token));
    } catch (e) {
      handleAuthError(e);
      throw e;
    }
  }

  function getTaskById(id) {
    return tasks.find((t) => String(t.id) === String(id)) || null;
  }

  return {
    tasks,
    loading: loading || (isAuth && !loaded),
    error,
    refresh,
    addTask,
    editTask,
    removeTask,
    getTaskById,
  };
}

export function useTasks() {
  return useContext(TaskContext);
}
