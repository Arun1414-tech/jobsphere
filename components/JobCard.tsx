import Link from "next/link";
import {
    MapPin,
    IndianRupee,
    BriefcaseBusiness,
    ArrowRight
} from "lucide-react";

interface JobProps {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string;
}

export default function JobCard({
    id,
    title,
    company,
    location,
    salary,
    type
}: JobProps){

return(

<div className="bg-gray-900 rounded-2xl border border-gray-800 p-6 hover:border-blue-500 hover:shadow-2xl transition duration-300">
<div className="flex justify-between items-center mb-4">
  <span className="bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
    ⭐ Featured
  </span>
</div>
<h2 className="text-2xl font-bold mb-4">
{title}
</h2>

<div className="space-y-3 text-gray-400">
<div className="flex items-center gap-3 mt-4">
  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
    {company.charAt(0)}
  </div>

  <div>
    <h3 className="font-semibold">{company}</h3>
    <p className="text-sm text-gray-400">{location}</p>
  </div>
</div>

<p className="flex items-center gap-2">
<MapPin size={18}/>
{location}
</p>

<p className="flex items-center gap-2">
<IndianRupee size={18}/>
{salary}
</p>

<span
  className={`inline-block px-4 py-1 rounded-full text-sm text-white ${
    type === "Remote"
      ? "bg-green-600"
      : type === "Hybrid"
      ? "bg-orange-500"
      : "bg-blue-600"
  }`}
>
  {type}
</span>

</div>

<Link href={`/jobs/${id}`}>

<button className="mt-6 flex items-center gap-2 bg-blue-600 px-5 py-3 rounded-xl hover:bg-blue-700 transition">

View Details

<ArrowRight size={18}/>

</button>

</Link>

</div>

)

}