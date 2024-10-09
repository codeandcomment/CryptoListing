const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border-4 border-blue-500 border-t-transparent rounded-full w-16 h-16 animate-spin"></div>
        </div>
    );
};

export default LoadingSpinner;