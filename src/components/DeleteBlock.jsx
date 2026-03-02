import Parse from '../lib/parseClient';

export default function DeleteBlock({ticketId, onDelete}) {
    const handleDelete = async () => {
        const query = new Parse.Query('Ticket');
        const ticket = await query.get(ticketId);

        try{
            await ticket.destroy();
            alert('Ticket deleted successfully!');
            onDelete();
        } catch (error) {
            console.error('Error deleting ticket:', error);
            alert('Failed to delete ticket. Please try again.');

        }
    };

    return(
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete Ticket</button>   
    );
}