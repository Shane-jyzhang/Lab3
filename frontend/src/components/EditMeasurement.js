/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
 
const EditMeasurement = () => {
    const [temperature, setTitle] = useState('');
    const [unix_timestamp, setPrice] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
 
    const updateMeasurement = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:3001/measurement/${id}`,{
            temperature: temperature,
            unix_timestamp: unix_timestamp
        });
        navigate("/");
    }
 
    useEffect(() => {
        getMeasurementById();
    }, []);
 
    const getMeasurementById = async () => {
        const response = await axios.get(`http://localhost:3001/measurement/${id}`);
        setTitle(response.data.temperature);
        setPrice(response.data.unix_timestamp);
    }
 
    return (
        <div>
            <form onSubmit={ updateMeasurement }>
                <div className="field">
                    <label className="label">Temperature</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Temperature"
                        value={ temperature }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Unix_timestamp</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Unix_timestamp"
                        value={ unix_timestamp }
                        onChange={ (e) => setPrice(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditMeasurement