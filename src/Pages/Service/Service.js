import './Service.css'

const Service = (props) => {
    const { _id, name } = props.service;

    return (
        <div>
            <h1>Single Service Section</h1>
            <h2>{_id}</h2>
            <h2>{name}</h2>

        </div>
    );
};

export default Service;