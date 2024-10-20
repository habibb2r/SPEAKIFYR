

const CardIns = ({item}) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure><img className="h-[250px]" src={item.image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title font-mono">{item.name}</h2>
            <p className="font-semibold font-mono">Course: <span className="text-violet-800">{item.course}</span></p>
            <div className="card-actions justify-left">
            <div className="badge-lg rounded-3xl badge-secondary font-mono">{item.email}</div>
            </div>
        </div>
        </div>
    );
};

export default CardIns;