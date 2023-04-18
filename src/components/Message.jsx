import { useEffect, useState } from "react"

export default function Login() {
    const [message, setMessage] = useState('initial Message')
    useEffect(() => {
        setMessage('component did Mount')
    }, [])
    return <h2>{message}</h2>
}
