import { useEffect, useState } from 'react';
import Parse from '../lib/parseClient';
import TicketCard from '../components/TicketCard';

export default function Home() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const query = new Parse.Query('Ticket');
      const results = await query.find();
      setTickets(results);
    };
    fetchTickets();
  }, []);

  return (
    <div>
      <h1>Tickets</h1>
      {tickets.map(ticket => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}