const Hello = (props) => {
    return (
        <div className="py-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <h2>Hello {props.param}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hello;
