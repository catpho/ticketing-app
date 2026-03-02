'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Parse from '../../../lib/parseClient';
import TicketForm from '../../../components/TicketForm';
import DeleteBlock from '../../../components/DeleteBlock';

export default function TicketDetail() {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        if (!id) return;
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
  }, [id]);

  const handleDelete = () => {
    window.location.href = '/';
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