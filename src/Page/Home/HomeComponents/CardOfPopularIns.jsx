

const CardOfPopularIns = ({item}) => {
    return (
        <div className="card w-[500px] h-[600px] bg-base-100 shadow-xl mr-5 my-10">
        <figure><img className="h-[200px] rounded-full" src={item.image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title font-mono">{item.name}</h2>
            <p className="font-semibold font-mono">Course: <span className="text-violet-800">{item.course}</span></p>
            <div className="card-actions justify-left">
            <div className="badge-lg rounded-3xl badge-secondary font-mono">{item.email}</div>
            </div>
            <p>{item.details}</p>
        </div>
        </div>
    );
};

export default CardOfPopularIns;