import {useState} from "react";

export const useFetch = (callback) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const fetch = async (...args) => {
        try {
            setLoading(true)
            await callback(...args);
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }
    return [fetch, loading, error]
}