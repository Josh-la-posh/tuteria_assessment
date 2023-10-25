import subjectData from "../../data/data.json";
import { useRouter } from "next/router";

const SubjectPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const subject = subjectData.subjects.find((s) => s.id === parseInt(id));

  return (
    <div>
      <h1 className="text-2xl font-bold">{subject.name}</h1>
      <ul>
        {subject.classes.map((course) => (
          <li key={course.id}>
            <strong>{course.title}</strong>
            <p>Dates: {course.dates}</p>
            <p>Location: {course.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default SubjectPage;