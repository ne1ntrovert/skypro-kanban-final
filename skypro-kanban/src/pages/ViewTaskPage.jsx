import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader.jsx';
import PopBrowse from '../components/popups/PopBrowse.jsx';
import { useTasks } from '../context/TaskContext.jsx';

export default function ViewTaskPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getTaskById, removeTask, loading } = useTasks();
  const task = getTaskById(id);

  if (!task && loading) return <Loader label="Загружаем задачу…" fullscreen />;

  async function handleDelete() {
    await removeTask(id);
    toast.success('Задача удалена');
    navigate('/');
  }

  return (
    <PopBrowse
      key={task?.id}
      task={task}
      mode="view"
      onClose={() => navigate('/')}
      onEdit={() => navigate(`/card/${id}/edit`)}
      onDelete={handleDelete}
    />
  );
}
