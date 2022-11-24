const axios = require('axios').default;
import Router from 'next/router'
import { useState } from 'react';

const AddParty = () => {

    const [partyform, setPartyForm] = useState({
        name: '',
        short_name: '',
        election_symbol: '',
        members: '',
        president: '',
        creation_date: ''
    })

    const { name, short_name, election_symbol, members, president, creation_date} = partyform

    const handleInputChange = (e) => {
        setPartyForm({
            ...partyform,
            [e.target.name]: e.target.value
        })
    }
    const handleFormSubmit = async(e) => {
        e.preventDefault()
        try {
            const res = await axios(`http://localhost:3000/api/party`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(partyform)
            })
            Router.push('/')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container mt-3'>
            <h3 className>Add a new Political Party</h3>
            <form onSubmit={handleFormSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Party Name"
                        name="name" onChange={handleInputChange} value={name} />
                    <label for="name">Party Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Short Name"
                        name="short_name" onChange={handleInputChange} value={short_name} />
                    <label for="short_name">Short Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Election Symbol"
                        name="election_symbol" onChange={handleInputChange} value={election_symbol} />
                    <label for="election_symbol">Election Symbol</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="No. of members"
                        name="members" onChange={handleInputChange} value={members} />
                    <label for="members">No. of members</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="President Name"
                        name="president" onChange={handleInputChange} value={president} />
                    <label for="president">President Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="DD-MM-YYYY Format"
                        name="creation_date" onChange={handleInputChange} value={creation_date} />
                    <label for="creation_date">Creation Date</label>
                </div>
                <button type="submit" className='btn btn-success'>Add Party</button>
            </form>
        </div>
    )
}

export default AddParty
