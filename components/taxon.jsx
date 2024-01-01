import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PropTypes from 'prop-types';


const Body = ({ body }) => {
  const type = body?.type || "Unknown";
  const materia = body?.materia || "Unknown";
  const powers = body?.powers || "Unknown";
  const description = body?.description || "Unknown";
  const segments = body?.bodySegments || []
  console.log(body)

  return (
    <Table striped bordered hover>
      <caption>Body of this metamorphosis.</caption>
      <tbody>
        <tr><td>Type</td><td>{type}</td></tr>
        <tr><td>Materia</td><td>{materia}</td></tr>
        <tr><td>Powers</td><td>{powers}</td></tr>
        <tr><td>Description</td><td>{description}</td></tr>
        <tr><td>Segments amount</td><td>{segments.length}</td></tr>  
      </tbody>
    </Table> 
  );  
}

const Metamorphosis = ({ metamorphosis }) => {
  console.log(metamorphosis)  
  const interval = metamorphosis?.interval || "Unknown";
  const period = metamorphosis?.period || "Unknown";
  //const bodies = metamorphosis?.bodies || []
  //const bodiesData = bodies.map((body) => <Body body={body} key={body.identifier}/>)
  //console.log(bodiesData)
  return (
    <>
    <Table bordered hover size="sm">
      <caption>Different metamorphoses of this form.</caption>
      <tbody>
        <tr><td>Interval</td><td>{interval}</td></tr>
        <tr><td>Period</td><td>{period}</td></tr>
      </tbody>
    </Table>

    </>
  );
}

const Existence = ({ existence }) => {
  const identifier = existence?.identifier || "Unknown";
  const metamorphoses = existence?.metamorphoses || []

  return (
    <>
      { metamorphoses.map((metamorphosis) => <Metamorphosis metamorphosis={metamorphosis} key={identifier}/>) }    
    </>
  );
}

const Taxon = ({ rank, handleClearSelectRankClick }) => {
  const identifier = rank?.identifier || "Unknown";
  const taxonRank = rank?.taxonRank || "Unknown";
  const taxonParent = rank?.taxonParent || "Unknown";
  const description = rank?.description || "Unknown";
  const existences = rank?.ages || []; 

  return (
    <>
      <div>
        <a onClick={handleClearSelectRankClick}>Back</a>
      </div>
      <Table bordered hover size="sm">
        <tbody>
          <tr><td>Identifier</td><td>{identifier}</td></tr>
          <tr><td>Taxon rank</td><td>{taxonRank}</td></tr>
          <tr><td>Taxon parent</td><td>{taxonParent}</td></tr>
          <tr><td>Description</td><td>{description}</td></tr>
        </tbody>
      </Table>

      <Tabs>
        { 
          existences.map((existence) => {
            if (!existence.identifier) return "<></>"
            if (!existence.type) return "<></>"
            return <Tab eventKey={existence.identifier} title={existence.type} key={existence.identifier}><Existence existence={existence} key={existence.identifier}/></Tab>
          }) 
        }
      </Tabs>


{/* { rank.ages.map((existence) => <Existence existence={existence} key={existence.identifier}/>) } */ }


      
    </>  
  );
};

Body.propTypes = {
  body: PropTypes.shape({
    type: PropTypes.string,
    materia: PropTypes.string,
    powers: PropTypes.array,
    description: PropTypes.string,
    bodySegments: PropTypes.array,
  })
}

Metamorphosis.propTypes = {
  metamorphosis: PropTypes.shape({
    identifier: PropTypes.string.isRequired,
    interval: PropTypes.number.isRequired,
    period: PropTypes.number.isRequired,
    bodies: PropTypes.array.isRequired,
  })
}

Existence.propTypes = {
  existence: PropTypes.shape({
    type: PropTypes.string,
    identifier: PropTypes.string.isRequired,
    metamorphoses: PropTypes.array.isRequired,
  })
}

Rank.propTypes = {
  rank: PropTypes.shape({
    identifier: PropTypes.string.isRequired,
    taxonRank: PropTypes.string.isRequired,
    taxonParent: PropTypes.string,
    description: PropTypes.string,
    ages: PropTypes.array.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};




export default Taxon;

