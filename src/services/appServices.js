import { BASE_URL } from "../constants"
import { useHttp } from "../hooks/http.hook"

export const useAppServices = () => {


    const { request, error, loading, succes } = useHttp()

    const getAllJobs = () => {

        return request(`${BASE_URL}/jobs`)


    }

    return { error, loading, succes, getAllJobs }
}