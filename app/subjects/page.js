import subjectData from '../data.data.json';
import { useNavigation } from 'next/navigation';

export default function SubjectPage() {
    const navigation = useNavigation();
    const { id } = navigation.route.params;
    const subject = subjectData.subjects.find((s) => s.id === parseInt(id));
    return (
        <div>
            {/* {subject && (
                <div>
                <h1 className="text-2xl font-bold">{subject.name}</h1>
            </div>
            )} */}
            Yes
        </div>
    )
}