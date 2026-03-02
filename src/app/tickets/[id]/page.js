'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Parse from '../../../lib/parseClient';
import TicketForm from '../../../components/TicketForm';
import DeleteBlock from '../../../components/DeleteBlock';

export default function TicketDetail({ params }) {
  const router = useRouter();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const { id } = await params;
        const query = new Parse.Query('Ticket');
        const result = await query.get(id);
        setTicket(result);
      } catch (error) {
        console.error('Error fetching ticket:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTicket();
  }, [params]);

  const handleDelete = () => {
    router.push('/');
  };

  if (loading) return <div>Loading...</div>;
  if (!ticket) return <div>Ticket not found</div>;

  return (
    <div>
      <TicketForm ticket={ticket} />
      <DeleteBlock ticketId={ticket.id} onDelete={handleDelete} />
    </div>
  );
}