import {CircleLoading} from "../../components/CircleLoading/CircleLoading.jsx";
import {useEffect, useState} from "react";
import './Loading.modules.css'

export const Loading = () => {
    const [loading, setLoading]= useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    })
    return (
        <div className={`loadingLayout ${!loading && 'exit'}`}>
            <CircleLoading />
        </div>
    )
}