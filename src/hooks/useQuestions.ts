import { useQuery} from '@tanstack/react-query'
import { getQuestions } from '../services/questionServices';
export const useGetQuestions = () => {
    return useQuery({
        queryKey:['questions'],
        queryFn:getQuestions
    })
};
