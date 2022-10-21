import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import * as events from "events";
 
const MeasurementList = () => {
    const [measurement, setMeasurement] = useState([]);
    const [setLoading] = useState(true);
    const eventEmitter = new events.EventEmitter();
 
    useEffect(() => {
        const getmeasurement = async () => {
            const response = await axios.get('http://localhost:3001/measurement');
            setMeasurement(response.data);
            setLoading(false);
        }

        eventEmitter.on('measurement', async () => {
            getmeasurement();
        })

        const interval = setInterval(() => {
            getmeasurement();
        },1000)
        eventEmitter.emit('measurement', measurement);
    
        return () => clearInterval(interval);
}, );
    const getmeasurement = async () => {
            const response = await axios.get('http://localhost:3001/measurement');
            setMeasurement(response.data);
    }
    const deleteMeasurement = async (id) => {
        await axios.delete(`http://localhost:3001/measurement/${id}`);
        getmeasurement();
    }
 
    return (
        <div>
            
           {/*  <div>REACT TABLE------MEASUREMENT</div>  */}
           <button><Link to="/add" className="button is-primary mt-2">Add New</Link></button>
            <table id="test" className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Unit_Id</th>
                        <th>Temperature</th>
                        <th>Unix_Timestamp</th>
                        <th>CreatedAt</th>
                        <th>UpdatedAt</th>
                        {/* <th>Average Value of Temperature</th> */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { measurement.map((measurement, index) => (
                        <tr key={ measurement.id }>
                            <td>{ index +1 }</td>
                            <td>{ measurement.id }</td>
                            <td>{ measurement.temperature }</td>
                            <td>{ measurement.unix_timestamp }</td>
                            <td>{ measurement.createdAt }</td>
                            <td>{ measurement.updatedAt }</td>
                            {/* <td>{measurement.average}</td> */}
                            <td>
                                <button><Link to={`/edit/${measurement.id}`} className="button is-small is-info">Edit</Link></button>
                                <button onClick={ () => deleteMeasurement(measurement.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
                    }
 
export default MeasurementList