import { BASE_URL } from "../constants"
import { useHttp } from "../hooks/http.hook"

export const useAppServices = () => {


    const { request, error, loading, succes } = useHttp()

    const getAllJobs = () => {
        return request(`${BASE_URL}/jobs`)
    }
    const getQuestions = () => {
        return request(`${BASE_URL}/test-question`)
    }
    const uploadAvatar = (body) => {
        return request(`${BASE_URL}/uploads`,"POST",body)
    }
    const postProfileData = (body) => {
        return request(`${BASE_URL}/profile-info`,"POST",body)

    }

    return { error, loading, succes, getAllJobs, getQuestions,uploadAvatar,postProfileData }
}