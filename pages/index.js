import subjectData from "../data/data.json";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Subjects</h1>
      <ul>
        {subjectData.subjects.map((subject) => (
          <li key={subject.id}>
            <Link href={`/subjects/${subject.id}`}>
              <span>{subject.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Home;
