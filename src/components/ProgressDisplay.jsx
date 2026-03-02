export default function ProgressDisplay({ progress }) {
    return (
        <div className="w-full bg-gray-200 rounded">
            <div className="bg-blue-500 text-white text-center py-1 rounded" style={{ width: `${progress}%` }}>
                {progress}%
            </div>
        </div>  
    );
}