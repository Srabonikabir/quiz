import { Link } from "react-router-dom";

const Tropics = ({tropics}) => {
const { id, name, logo, total }=tropics;
    return (
        <div>
           <div className="card card-compact w-96 bg-base-100 shadow-xl p-6">
  <figure><img className="bg-slate-800 " src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl font-bold">{name}</h2>
    <p>total : {total}</p>
    <div className="card-actions justify-end">
      <Link to ={`../quiz/${id}`}><button className="btn bg-slate-800 text-white">Start Quiz</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Tropics;