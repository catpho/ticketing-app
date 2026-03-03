import Parse from '../lib/parseClient';

export default function DeleteBlock({ ticketId, onDelete }) {
  const handleDelete = async () => {
    const query = new Parse.Query('Ticket');
    const ticket = await query.get(ticketId);

    try {
      await ticket.destroy();
      alert('Ticket deleted successfully');
      onDelete();
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete Ticket</button>
  );
}