import { useEffect, useState } from "react"

const useReviews = () => {
  const [loading, setLoading] = useState(false)
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    setLoading(true)
    fetch('reviews.json')
    .then(res => res.json())
    .then(data => {
      setReview(data)
      setLoading(false)
    })
  }, [])
  return [reviews, setReview, loading, setLoading]
}


export default useReviews