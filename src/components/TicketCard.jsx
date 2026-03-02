import Link from 'next/link';
import ProgressDisplay from './ProgressDisplay';

export default function TicketCard({ ticket }) {
    return (
        <div className="border p-4">
            <h2>{ticket.title}</h2>
            <p>{ticket.description}</p>
            <ProgressDisplay progress={ticket.progress} />
            <Link href={`/tickets/${ticket.objectId}`}>
                Edit
            </Link>
            
            </div>
            );
            }