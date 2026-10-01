import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader.jsx';
import PopBrowse from '../components/popups/PopBrowse.jsx';
import { useTasks } from '../context/TaskContext.jsx';

export default function EditTaskPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getTaskById, editTask, removeTask, loading } = useTasks();
  const task = getTaskById(id);

  if (!task && loading) return <Loader label="Загружаем задачу…" fullscreen />;

  const backToView = () => navigate(`/card/${id}`);

  async function handleSave(data) {
    await editTask(id, data);
    toast.success('Изменения сохранены');
    backToView();
  }

  async function handleDelete() {
    await removeTask(id);
    toast.success('Задача удалена');
    navigate('/');
  }

  return (
    <PopBrowse
      key={task?.id}
      task={task}
      mode="edit"
      onClose={() => navigate('/')}
      onCancel={backToView}
      onSave={handleSave}
      onDelete={handleDelete}
    />
  );
}
