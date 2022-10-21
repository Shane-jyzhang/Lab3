import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
 
const AddMeasurement = () => {
    const [temperature, setTitle] = useState('');
    const [unix_timestamp, setPrice] = useState('');
    const navigate = useNavigate();
 
    const saveMeasurement = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3001/measurement',{
            temperature: temperature,
            unix_timestamp: unix_timestamp
        });
        navigate("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveMeasurement }>
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
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddMeasurement