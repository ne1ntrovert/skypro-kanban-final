import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import PopNewCard from '../components/popups/PopNewCard.jsx';
import { useTasks } from '../context/TaskContext.jsx';

export default function NewTaskPage() {
  const navigate = useNavigate();
  const { addTask } = useTasks();

  async function handleCreate(taskData) {
    await addTask(taskData);
    toast.success('Задача создана');
    navigate('/');
  }

  return <PopNewCard onClose={() => navigate('/')} onCreate={handleCreate} />;
}
