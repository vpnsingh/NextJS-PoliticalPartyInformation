const axios = require('axios').default;
import {useRouter} from 'next/router'

const PoliticalParty = ({parties}) => {
    const router = useRouter()
    const partyId = router.query.id

    const deleteParty = async() => {
        try {
            const deleteParty = await axios(`http://localhost:3000/api/party/${partyId}`, {
                method: "DELETE"
            });
            router.push('/')
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div className='container mt-3'>
            <h3>Details of {parties.name}</h3>
            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">{parties.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{parties.short_name}</h6>
                    <p className='card-text'>
                        <span>Election Symbol : </span><span>{parties.election_symbol}</span>
                    </p>
                    <p className='card-text'>
                        <span>President Name : </span><span>{parties.president}</span>
                    </p>
                    <p className='card-text'>
                        <span>No. of Members : </span><span>{parties.members}</span>
                    </p>
                    <p className='card-text'>
                        <span>Creation Date : </span><span>{parties.creation_date}</span>
                    </p>
                    <button onClick={deleteParty} className='btn btn-danger'>Delete Party</button>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps({params}) {
    const id = params.id
    const res = await axios(`http://localhost:3000/api/party/${id}`)
    const {party} = res.data
    return {
      props:{parties: party}
    }
  }

export default PoliticalParty
