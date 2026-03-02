import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Parse from '../../../lib/parseClient';
import TicketForm from '../../../components/TicketForm';
import DeleteBlock from '../../../components/DeleteBlock';

export default function TicketDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchTicket = async () => {
      const query = new Parse.Query('Ticket');
      const result = await query.get(id);
      setTicket(result);
    };
    fetchTicket();
  }, [id]);

  const handleDelete = () => {
    router.push('/');
  };

  if (!ticket) return <div>Loading...</div>;

  return (
    <div>
      <TicketForm ticket={ticket} />
      <DeleteBlock ticketId={ticket.id} onDelete={handleDelete} />
    </div>
  );
}